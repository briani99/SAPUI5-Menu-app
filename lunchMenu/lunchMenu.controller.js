sap.ui.controller("lunchMenu.lunchMenu", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf lunchmenuapp.lunchMenu
*/
//	onInit: function() {
//
//	},

	navigateToConfig: function(oEvent){
		var screen  = app.getPage("configScreen");
		app.to(screen);
	},

	showDetails: function(oEvent){
		navigator.notification.alert(
	            'Dublin Menu developed by Brian Keenan!',  // message
	            alertDismissed,         // callback
	            'Game Over',            // title
	            'Done'                  // buttonName
	        );
	},
	
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf lunchmenuapp.lunchMenu
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf lunchmenuapp.lunchMenu
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf lunchmenuapp.lunchMenu
*/
//	onExit: function() {
//
//	}

});