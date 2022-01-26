package io.slingr.endpoints.zoominfo;

import com.zoominfo.api.auth.AuthClient;
import io.slingr.endpoints.services.HttpService;
import io.slingr.endpoints.services.datastores.DataStore;
import io.slingr.endpoints.services.datastores.DataStoreResponse;
import io.slingr.endpoints.services.rest.RestClient;
import io.slingr.endpoints.utils.Json;


import javax.ws.rs.core.Form;

public class TokenManager {

    private static final String ZOOMINFO_REFRESH_TOKEN_URL = "https://api.zoominfo.com/authenticate";

    public static final String DATA_STORE = "tokens";
    private static final String JWT_ACCESS_TOKEN = "JWT_ACCESS_TOKEN";
    private static final String LAST_TOKEN = "_LAST_TOKEN";
    private static final String ID = "_id";
    private static final String TIMESTAMP = "timestamp";

    private DataStore ds;
    private String connectionMethod;
    private String clientId;
    private String privateKey;
    private String userName;
    private String password;
    private String accessToken;
    private HttpService httpService;

    TokenManager(HttpService httpService, DataStore ds, String connectionMethod ,
                 String clientId, String privateKey, String userName, String password) {

        this.httpService = httpService;
        this.ds = ds;
        this.connectionMethod = connectionMethod;
        this.clientId = clientId;
        this.privateKey = privateKey;
        this.userName = userName;
        this.password = password;

        this.setLastToken();
        this.setupToken();
    }

    public void setLastToken() {

        Json filter = Json.map();
        filter.set(JWT_ACCESS_TOKEN, this.accessToken);

        Json lastToken = this.getLastToken();
        DataStoreResponse dsResp = ds.find(filter);

        if (dsResp != null && dsResp.getItems().size() == 0 || lastToken == null) { // new token was added
            Json newToken = Json.map();
            newToken.set(JWT_ACCESS_TOKEN, this.accessToken);
            newToken.set(TIMESTAMP, System.currentTimeMillis());

            this.ds.save(newToken);

            newToken.set(ID, LAST_TOKEN);
            this.ds.save(newToken);
        } else {
            this.accessToken = lastToken.string(JWT_ACCESS_TOKEN);
        }
    }

    public String getToken() {
        return this.accessToken;
    }

    public void refreshZoomInfoToken() {
        Form formBody = new Form();
        if (this.connectionMethod.equals("userNamePassword")) {
            AuthClient authClient = new AuthClient(this.userName, this.password);
            accessToken = authClient.getAccessToken();
        } else {
            AuthClient authClient = new AuthClient(this.userName, this.clientId, this.privateKey);
            accessToken = authClient.getAccessToken();
        }

        Json lastToken = this.getLastToken();

        lastToken.set(JWT_ACCESS_TOKEN, accessToken);
        lastToken.set(TIMESTAMP, System.currentTimeMillis());
        ds.save(lastToken);

        this.setupToken();

    }

    public void setupToken() {
        httpService.setupBearerAuthenticationHeader(getToken());
        httpService.setupDefaultHeader("Accept", "application/json");
    }

    private Json getLastToken() {
        try {
            return this.ds.findById(LAST_TOKEN);
        } catch (Exception ex) {
            return null;
        }
    }

}
