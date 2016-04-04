sap.ui.controller("lunchMenu.config", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf roomgui.Config
*/
//	onInit: function() {
//
//	},

	changeLocation: function(oEvent){
		if(oEvent.getSource().getId()==="dublin"){
			settinglocation = 'dublin';
			lawnchair.save({key:'settings', location: settinglocation});
			dataLoad(false);
		    sap.ui.getCore().getElementById("headLabel").setText("Dublin Menu");
		}else{
			settinglocation = 'galway';
			lawnchair.save({key:'settings', location: settinglocation});
			dataLoad(false);
		    sap.ui.getCore().getElementById("headLabel").setText("Galway Menu");
		}
	},
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf roomgui.Config
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf roomgui.Config
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf roomgui.Config
*/
//	onExit: function() {
//
//	}

});