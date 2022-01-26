package io.slingr.endpoints.zoominfo;

import io.slingr.endpoints.HttpEndpoint;
import io.slingr.endpoints.exceptions.EndpointException;
import io.slingr.endpoints.framework.annotations.*;
import io.slingr.endpoints.services.AppLogs;
import io.slingr.endpoints.services.HttpService;
import io.slingr.endpoints.services.datastores.DataStore;
import io.slingr.endpoints.services.rest.RestMethod;
import io.slingr.endpoints.utils.Json;
import io.slingr.endpoints.ws.exchange.FunctionRequest;
import io.slingr.endpoints.ws.exchange.WebServiceRequest;
import io.slingr.endpoints.ws.exchange.WebServiceResponse;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

/**
 * ZoomInfo endpoint
 * <p/>
 * Created by jguardiola on 19/01/22.
 */
@SlingrEndpoint(name = "zoominfo", functionPrefix = "_")
public class ZoomInfoEndpoint extends HttpEndpoint {
    private static final Logger logger = LoggerFactory.getLogger(ZoomInfoEndpoint.class);

    private static final String ZOOMINFO_URL = "https://api.zoominfo.com";
    private static final String INVALID_TOKEN_ERROR = "Unauthorized";

    private static final long TOKEN_REFRESH_POLLING_TIME = TimeUnit.MINUTES.toMillis(50);

    @EndpointDataStore(name = TokenManager.DATA_STORE)
    private DataStore tokensDataStore;

    @EndpointProperty
    private String connectionMethod;

    @EndpointProperty
    private String clientId;

    @EndpointProperty
    private String privateKey;

    @EndpointProperty
    private String userName;

    @EndpointProperty
    private String password;

    @ApplicationLogger
    private AppLogs appLogger;

    private ScheduledExecutorService cleanerExecutor;

    private TokenManager tokenManager;

    @Override
    public String getApiUri() {
        return ZOOMINFO_URL;
    }

    @Override
    public void endpointStarted() {

        this.tokenManager = new TokenManager(httpService(), tokensDataStore, connectionMethod, clientId, privateKey, userName, password);

        Executors.newSingleThreadScheduledExecutor().scheduleWithFixedDelay(tokenManager::refreshZoomInfoToken, TOKEN_REFRESH_POLLING_TIME, TOKEN_REFRESH_POLLING_TIME, TimeUnit.MILLISECONDS);
    }

    @EndpointWebService
    public WebServiceResponse webhooks(WebServiceRequest request) {
        // send the webhook event
        final Json json = HttpService.defaultWebhookConverter(request);
        events().send(HttpService.WEBHOOK_EVENT, json);
        return HttpService.defaultWebhookResponse();
    }

    @EndpointFunction(name = "_post")
    public Json post(FunctionRequest request) {
        try {
            // continue with the default processor
            return defaultPostRequest(request);
        } catch (EndpointException restException) {
            if (checkInvalidTokenError(restException)) {
                //needs to refresh token
                tokenManager.refreshZoomInfoToken();
                return defaultPostRequest(request);
            }
            throw restException;
        }
    }

    @EndpointFunction(name = "_get")
    public Json get(FunctionRequest request) {
        try {
            // continue with the default processor
            return defaultGetRequest(request);
        } catch (EndpointException restException) {
            if (checkInvalidTokenError(restException)) {
                //needs to refresh token
                tokenManager.refreshZoomInfoToken();
                return defaultGetRequest(request);
            }
            throw restException;
        }
    }

    @EndpointFunction(name = "_put")
    public Json put(FunctionRequest request) {
        try {
            // continue with the default processor
            return defaultPutRequest(request);
        } catch (EndpointException restException) {
            if (checkInvalidTokenError(restException)) {
                //needs to refresh token
                tokenManager.refreshZoomInfoToken();
                return defaultPutRequest(request);
            }
            throw restException;
        }
    }

    private boolean checkInvalidTokenError(Exception e) {
        if (e instanceof EndpointException) {
            EndpointException restException = (EndpointException) e;

            return restException.getAdditionalInfo() != null && StringUtils.isNotBlank(restException.getAdditionalInfo().string("status")) &&
                    restException.getAdditionalInfo().integer("status") == 401 &&
                    StringUtils.isNotBlank(restException.getAdditionalInfo().string("body")) &&
                    restException.getAdditionalInfo().string("body").equals(INVALID_TOKEN_ERROR);
        }
        return false;
    }
}