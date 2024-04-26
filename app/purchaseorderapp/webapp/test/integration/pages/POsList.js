sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'puru.db.purchaseorderapp',
            componentId: 'POsList',
            contextPath: '/POs'
        },
        CustomPageDefinitions
    );
});