sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'puru/db/purchaseorderapp/test/integration/FirstJourney',
		'puru/db/purchaseorderapp/test/integration/pages/POsList',
		'puru/db/purchaseorderapp/test/integration/pages/POsObjectPage',
		'puru/db/purchaseorderapp/test/integration/pages/POitemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, POitemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('puru/db/purchaseorderapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePOitemsObjectPage: POitemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);