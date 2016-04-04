sap.ui.jsview("lunchMenu.error", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf error
	*/ 
	getControllerName : function() {
		return "lunchMenu.error";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf error
	*/ 
	createContent : function(oController) {
		var errorHeader = new sap.m.Bar({
			
			contentLeft: [new sap.m.Button({icon: "img/sap-logo.png"})],
			contentMiddle: [new sap.m.Label({text: "Error"})],
	    });

		var ePage = new sap.m.Page("error",{
			customHeader: errorHeader,
            title: "Connection Unavailable",  
            showNavButton: false,
            enableScrolling:false,
            icon: "img/sap-logo.png",
            backgroundDesign: sap.m.PageBackgroundDesign.List, 
            content:[
                     new sap.m.VBox({
                    	 fitContainer: true,              
                    	 alignItems: sap.m.FlexAlignItems.Stretch,
                    	 justifyContent :  sap.m.FlexJustifyContent.SpaceAround,
                    	 items:[
            
							new sap.m.Label({
								text:"Connection Failed",
								design: sap.m.LabelDesign.Bold,
								width: "100%",
								textAlign: sap.ui.core.TextAlign.Center
								}),
							new sap.m.Text({
								text:"Please make sure you are connected to the internet via Wifi/3G and not to the internet SAP-Corporate Network.",
								width: "100%",
								textAlign: sap.ui.core.TextAlign.Center
								}),
							new sap.m.Button("bRetry",{
								text:"Retry",   
								width: "100%",
								type: sap.m.ButtonType.Accept, 
								textAlign: sap.ui.core.TextAlign.Center,
								tap: dataLoad
							}),
		//					//For Android Only
		//					new sap.m.Button("bQuit",{
		//						text:"Quit",   
		//						width: "100%",
		//						type: sap.m.ButtonType.Reject,
		//						textAlign: sap.ui.core.TextAlign.Center,
		//						//add this in Phonegap
		//						tap: navigator.device.exitApp
		//					})

							]})
                     ]});   
		return ePage;   
	}

});
