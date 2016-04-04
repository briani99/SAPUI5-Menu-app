sap.ui.jsview("lunchMenu.lunchMenu", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf lunchmenuapp.lunchMenu
	*/ 
	getControllerName : function() {
		return "lunchMenu.lunchMenu";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf lunchmenuapp.lunchMenu
	*/ 
	createContent : function(oController) {
		
		var configHeader = new sap.m.Bar({
			
			contentLeft: [new sap.m.Button({icon: "img/sap-logo.png",
											tap: oController.showDetails
											})],
			contentMiddle: [new sap.m.Label("headLabel", {text: "Dublin Menu"})],
	    	contentRight: [
	    	               new sap.m.Button({
	    	 							icon: "img/config.png",
				    	 				tap: oController.navigateToConfig	
				    	 				})
	    	               ]  
	    });
 		var page = new sap.m.Page("lunchMenu",{
 			customHeader: configHeader,
			title: "Menu"
		});
 		return page;
	}

});