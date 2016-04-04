
function Initialize(){
	
	sap.ui.localResources("lunchMenu");
	
	app = new sap.m.App("lunchApp" 
				,{initialPage:"menuScreen"});
	
	var menuPage = sap.ui.view({id:"menuScreen", viewName:"lunchMenu.lunchMenu", type:sap.ui.core.mvc.ViewType.JS});
    var configPage = sap.ui.view({id:"configScreen", viewName:"lunchMenu.config", type:sap.ui.core.mvc.ViewType.JS});
    var errorPage = sap.ui.view({id:"errorScreen", viewName:"lunchMenu.error", type:sap.ui.core.mvc.ViewType.JS});
    
    app.addPage(menuPage).addPage(configPage).addPage(errorPage);
    app.placeAt("content");
    
    lawnchair = new Lawnchair({table:'settings', adaptor:'webkit'}, function(){});

 // Getting some data out of the database
    lawnchair.get('settings', function(obj) {
        	if (obj !== undefined) {
            	settinglocation = obj.location;
        	}else{
        		settinglocation = 'dublin';
    }
    });
    
    dataLoad(true);
}

function dataLoad(initial){
	//Data is fetched From Parse
	var Menu;
	if(settinglocation === 'dublin'){
		Menu = Parse.Object.extend("dMenu");
	}else{
		Menu = Parse.Object.extend("gMenu");
	}
	var query = new Parse.Query(Menu);
	query.descending("createdAt");
	
	query.first({success: function(result){
			  //Get the JSON objects
			  var jsonmenu = result.get('JSONMenu');
			  
			  oModel = new sap.ui.model.json.JSONModel(jsonmenu);
		      sap.ui.getCore().setModel(oModel);	     
		    	  //Goto the menu screen
			      app.to("menuScreen");
			      //Create and set the menu only if its not set already
			      if(initial === false){
			    	  sap.ui.getCore().getElementById("mCarousel").destroy(true);
			      }
			      sap.ui.getCore().getElementById("lunchMenu").addContent(createCarousel());
			      
	},
			  error: function(){
			    var err  = app.getPage("errorScreen");
				app.to(err);
			  }
	});
}

function getDayCarousel(){
	
	var date = new Date();
	var dayOfWeek = date.getDay();
	var dayNumber = dayOfWeek - 1;
	
	if(dayNumber < 0){
		dayNumber = 0;
	}
	var todayMenu = "vBox" + dayNumber;
	
	return todayMenu;
}

function createCarousel(){
	
	menuCarousel = new sap.m.Carousel("mCarousel", {
		height : '100%',
		loop : false,
		visible : true,
		width : '100%',
		showPageIndicator : true,
		pageIndicatorPlacement : sap.m.PlacementType.Bottom,
		showBusyIndicator : true
	});
	//Now add all the components, a full set for each day of the week
	for (var i = 0; i <= 4; i++) {  
			boxId = "vBox"+ i;
			var oFlexBox = new sap.m.VBox(boxId, {
				fitContainer: true,   
		        alignItems: sap.m.FlexAlignItems.Stretch,
		        justifyContent :  sap.m.FlexJustifyContent.SpaceBetween,
		        items:[
						new sap.m.Label({
							text: (oModel.getProperty('/menu')[i].day + " " + oModel.getProperty('/menu')[i].date),    
							width: "100%",
							textAlign: sap.ui.core.TextAlign.Center
						}),
						new sap.m.Label({
							design: sap.m.LabelDesign.Bold,
							text:"Starters",   
							width: "100%",
							textAlign: sap.ui.core.TextAlign.Center
						}),
						new sap.m.Text({
							text:oModel.getProperty('/menu')[i].starter1,  
							width: "100%",
							textAlign: sap.ui.core.TextAlign.Center
						}),
						new sap.m.Text({
							text:oModel.getProperty('/menu')[i].starter2,   
							width: "100%",
							textAlign: sap.ui.core.TextAlign.Center
						}),
						new sap.m.Label({
							design: sap.m.LabelDesign.Bold,
							text:"Main",   
							width: "100%",
							textAlign: sap.ui.core.TextAlign.Center
						}),
						new sap.m.Text({
							text:oModel.getProperty('/menu')[i].main1,   
							width: "100%",
							textAlign: sap.ui.core.TextAlign.Center
						}),
						new sap.m.Text({
							text:oModel.getProperty('/menu')[i].main2,   
							width: "100%",
							textAlign: sap.ui.core.TextAlign.Center
						}),
						new sap.m.Text({
							text:oModel.getProperty('/menu')[i].mainveg,   
							width: "100%",
							textAlign: sap.ui.core.TextAlign.Center
						}),
						new sap.m.Label({
							design: sap.m.LabelDesign.Bold,
							text:"Dessert",   
							width: "100%",
							textAlign: sap.ui.core.TextAlign.Center
						}),
						new sap.m.Text({	
							text:oModel.getProperty('/menu')[i].dessert,   
							width: "100%",
							textAlign: sap.ui.core.TextAlign.Center
						})
				]
		        });
			menuCarousel.addPage(oFlexBox);
	}
	menuCarousel.setActivePage(getDayCarousel());
	return menuCarousel;
}