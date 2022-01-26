 ////////////////////////////////////////////////////////////////////////////
//                                                                        //
//             This file was generated with "slingr-helpgen"              //
//                                                                        //
//               For more info, check the following links:                //
//             https://www.npmjs.com/package/slingr-helpgen               //
//           https://github.com/slingr-stack/slingr-helpgen               //
//                                                                        //
////////////////////////////////////////////////////////////////////////////


var parse = function parse(str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1], i = 0;
            return str.replace(/(:(?:\w|-)+)/g, () => {
                if (typeof (args[i]) != 'string') throw new Error('Invalid type of argument: [' + args[i] + '] for url [' + str + '].');
                return args[i++];
            });
        } else {
            if (str) {
                return str;
            }
            throw new Error('No arguments nor url were received when calling the helper. Please check it\'s definition.');
        }
    } catch (err) {
        sys.logs.error('Some unexpected error happened during the parse of the url for this helper.')
        throw err;
    }
};

endpoint.authenticate = function(httpOptions) {
	var url = parse('/authenticate');
	sys.logs.debug('[zoominfo] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.search = {};

endpoint.search.contact = function(httpOptions) {
	var url = parse('/search/contact');
	sys.logs.debug('[zoominfo] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.lookup = {};

endpoint.lookup.inputfields = {};

endpoint.lookup.inputfields.contact = {};

endpoint.lookup.inputfields.contact.search = function(httpOptions) {
	var url = parse('/lookup/inputfields/contact/search');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.outputfields = {};

endpoint.lookup.outputfields.contact = {};

endpoint.lookup.outputfields.contact.search = function(httpOptions) {
	var url = parse('/lookup/outputfields/contact/search');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.search.company = function(httpOptions) {
	var url = parse('/search/company');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.inputfields.company = {};

endpoint.lookup.inputfields.company.search = function(httpOptions) {
	var url = parse('/lookup/inputfields/company/search');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.outputfields.company = {};

endpoint.lookup.outputfields.company.search = function(httpOptions) {
	var url = parse('/lookup/outputfields/company/search');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.search.scoop = function(httpOptions) {
	var url = parse('/search/scoop');
	sys.logs.debug('[zoominfo] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.lookup.inputfields.scoop = {};

endpoint.lookup.inputfields.scoop.search = function(httpOptions) {
	var url = parse('/lookup/inputfields/scoop/search');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.outputfields.scoop = {};

endpoint.lookup.outputfields.scoop.search = function(httpOptions) {
	var url = parse('/lookup/outputfields/scoop/search');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.search.news = function(httpOptions) {
	var url = parse('/search/news');
	sys.logs.debug('[zoominfo] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.lookup.inputfields.news = {};

endpoint.lookup.inputfields.news.search = function(httpOptions) {
	var url = parse('/lookup/inputfields/news/search');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.outputfields.news = {};

endpoint.lookup.outputfields.news.search = function(httpOptions) {
	var url = parse('/lookup/outputfields/news/search');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.search.intent = function(httpOptions) {
	var url = parse('/search/intent');
	sys.logs.debug('[zoominfo] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.lookup.inputfields.intent = {};

endpoint.lookup.inputfields.intent.search = function(httpOptions) {
	var url = parse('/lookup/inputfields/intent/search');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.outputfields.intent = {};

endpoint.lookup.outputfields.intent.search = function(httpOptions) {
	var url = parse('/lookup/outputfields/intent/search');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.enrich = {};

endpoint.enrich.contact = function(httpOptions) {
	var url = parse('/enrich/contact');
	sys.logs.debug('[zoominfo] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.lookup.inputfields.contact.enrich = function(httpOptions) {
	var url = parse('/lookup/inputfields/contact/enrich');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.outputfields.contact.enrich = function(httpOptions) {
	var url = parse('/lookup/outputfields/contact/enrich');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.enrich.company = function(httpOptions) {
	var url = parse('/enrich/company');
	sys.logs.debug('[zoominfo] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.lookup.inputfields.company.enrich = function(httpOptions) {
	var url = parse('/lookup/inputfields/company/enrich');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.outputfields.company.enrich = function(httpOptions) {
	var url = parse('/lookup/outputfields/company/enrich');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.enrich.companyMaster = function(httpOptions) {
	var url = parse('/enrich/company-master');
	sys.logs.debug('[zoominfo] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.lookup.inputfields.companyMaster = {};

endpoint.lookup.inputfields.companyMaster.enrich = function(httpOptions) {
	var url = parse('/lookup/inputfields/company-master/enrich');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.outputfields.companyMaster = {};

endpoint.lookup.outputfields.companyMaster.enrich = function(httpOptions) {
	var url = parse('/lookup/outputfields/company-master/enrich');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.enrich.orgchart = function(httpOptions) {
	var url = parse('/enrich/orgchart');
	sys.logs.debug('[zoominfo] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.lookup.inputfields.orgchart = {};

endpoint.lookup.inputfields.orgchart.enrich = function(httpOptions) {
	var url = parse('/lookup/inputfields/orgchart/enrich');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.outputfields.orgchart = {};

endpoint.lookup.outputfields.orgchart.enrich = function(httpOptions) {
	var url = parse('/lookup/outputfields/orgchart/enrich');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.enrich.corporatehierarchy = function(httpOptions) {
	var url = parse('/enrich/corporatehierarchy');
	sys.logs.debug('[zoominfo] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.lookup.inputfields.corporatehierarchy = {};

endpoint.lookup.inputfields.corporatehierarchy.enrich = function(httpOptions) {
	var url = parse('/lookup/inputfields/corporatehierarchy/enrich');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.outputfields.corporatehierarchy = {};

endpoint.lookup.outputfields.corporatehierarchy.enrich = function(httpOptions) {
	var url = parse('/lookup/outputfields/corporatehierarchy/enrich');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.enrich.tech = function(httpOptions) {
	var url = parse('/enrich/tech');
	sys.logs.debug('[zoominfo] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.lookup.inputfields.tech = {};

endpoint.lookup.inputfields.tech.enrich = function(httpOptions) {
	var url = parse('/lookup/inputfields/tech/enrich');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.outputfields.tech = {};

endpoint.lookup.outputfields.tech.enrich = function(httpOptions) {
	var url = parse('/lookup/outputfields/tech/enrich');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.enrich.hashtag = function(httpOptions) {
	var url = parse('/enrich/hashtag');
	sys.logs.debug('[zoominfo] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.lookup.inputfields.hashtag = {};

endpoint.lookup.inputfields.hashtag.enrich = function(httpOptions) {
	var url = parse('/lookup/inputfields/hashtag/enrich');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.enrich.intent = function(httpOptions) {
	var url = parse('/enrich/intent');
	sys.logs.debug('[zoominfo] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.lookup.inputfields.intent.enrich = function(httpOptions) {
	var url = parse('/lookup/inputfields/intent/enrich');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.outputfields.intent.enrich = function(httpOptions) {
	var url = parse('/lookup/outputfields/intent/enrich');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.enrich.news = function(httpOptions) {
	var url = parse('/enrich/news');
	sys.logs.debug('[zoominfo] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.lookup.inputfields.news.enrich = function(httpOptions) {
	var url = parse('/lookup/inputfields/news/enrich');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.outputfields.news.enrich = function(httpOptions) {
	var url = parse('/lookup/outputfields/news/enrich');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.enrich.scoop = function(httpOptions) {
	var url = parse('/enrich/scoop');
	sys.logs.debug('[zoominfo] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.lookup.inputfields.scoop.enrich = function(httpOptions) {
	var url = parse('/lookup/inputfields/scoop/enrich');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.outputfields.scoop.enrich = function(httpOptions) {
	var url = parse('/lookup/outputfields/scoop/enrich');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.webhooks = {};

endpoint.webhooks.create = function(httpOptions) {
	var url = parse('/webhooks');
	sys.logs.debug('[zoominfo] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.webhooks.put = function(reportId, httpOptions) {
	if (!reportId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [reportId].');
		return;
	}
	var url = parse('/webhooks/:reportId', [reportId]);
	sys.logs.debug('[zoominfo] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};

endpoint.webhooks.get = function(httpOptions) {
	var url = parse('/webhooks');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.webhooks.validate = function(httpOptions) {
	var url = parse('/webhooks/validate');
	sys.logs.debug('[zoominfo] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.webhooks.validate = function(httpOptions) {
	var url = parse('/webhooks/validate');
	sys.logs.debug('[zoominfo] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.webhooks.token = function(webhookId, httpOptions) {
	if (!webhookId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [webhookId].');
		return;
	}
	var url = parse('/webhooks/:webhookId/token', [webhookId]);
	sys.logs.debug('[zoominfo] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.webhooks.subscriptiontypes = function(httpOptions) {
	var url = parse('/webhooks/subscriptiontypes');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.companyranking = function(httpOptions) {
	var url = parse('/lookup/companyranking');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.continent = function(httpOptions) {
	var url = parse('/lookup/continent');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.country = function(httpOptions) {
	var url = parse('/lookup/country');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.state = function(httpOptions) {
	var url = parse('/lookup/state');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.department = function(httpOptions) {
	var url = parse('/lookup/department');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.employeecount = function(httpOptions) {
	var url = parse('/lookup/employeecount');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.siccode = function(httpOptions) {
	var url = parse('/lookup/siccode');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.naicscode = function(httpOptions) {
	var url = parse('/lookup/naicscode');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.industry = function(httpOptions) {
	var url = parse('/lookup/industry');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.jobtitlehierarchy = function(httpOptions) {
	var url = parse('/lookup/jobtitlehierarchy');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.jobfunction = function(httpOptions) {
	var url = parse('/lookup/jobfunction');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.metroarea = function(httpOptions) {
	var url = parse('/lookup/metroarea');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.revenuerange = function(httpOptions) {
	var url = parse('/lookup/revenuerange');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.scooptopic = function(httpOptions) {
	var url = parse('/lookup/scooptopic');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.scoopdepartment = function(httpOptions) {
	var url = parse('/lookup/scoopdepartment');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.companytype = function(httpOptions) {
	var url = parse('/lookup/companytype');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.boardmember = function(httpOptions) {
	var url = parse('/lookup/boardmember');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.managementlevel = function(httpOptions) {
	var url = parse('/lookup/managementlevel');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.subunittypes = function(httpOptions) {
	var url = parse('/lookup/subunittypes');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.tech = {};

endpoint.lookup.tech.category = function(httpOptions) {
	var url = parse('/lookup/tech/category');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.tech.vendor = function(httpOptions) {
	var url = parse('/lookup/tech/vendor');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.intent = {};

endpoint.lookup.intent.topics = function(httpOptions) {
	var url = parse('/lookup/intent/topics');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.news = {};

endpoint.lookup.news.categories = function(httpOptions) {
	var url = parse('/lookup/news/categories');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.employeeCategoryBand = function(httpOptions) {
	var url = parse('/lookup/employee-category-band');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.revenueCategoryBand = function(httpOptions) {
	var url = parse('/lookup/revenue-category-band');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.hierarchyCode = function(httpOptions) {
	var url = parse('/lookup/hierarchy-code');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.usage = function(httpOptions) {
	var url = parse('/lookup/usage');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.enrich.ip = function(httpOptions) {
	var url = parse('/enrich/ip');
	sys.logs.debug('[zoominfo] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.lookup.inputfields.ip = {};

endpoint.lookup.inputfields.ip.enrich = function(httpOptions) {
	var url = parse('/lookup/inputfields/ip/enrich');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.outputfields.ip = {};

endpoint.lookup.outputfields.ip.enrich = function(httpOptions) {
	var url = parse('/lookup/outputfields/ip/enrich');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.compliance = function(httpOptions) {
	var url = parse('/compliance');
	sys.logs.debug('[zoominfo] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.lookup.inputfields.compliance = {};

endpoint.lookup.inputfields.compliance.enrich = function(httpOptions) {
	var url = parse('/lookup/inputfields/compliance/enrich');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.lookup.outputfields.compliance = {};

endpoint.lookup.outputfields.compliance.enrich = function(httpOptions) {
	var url = parse('/lookup/outputfields/compliance/enrich');
	sys.logs.debug('[zoominfo] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

