// Generated by CoffeeScript 1.3.3

Ext.define("Realtor.controller.MainController", {
  extend: "Realtor.controller.AbstractListingController",
  control: {
	 view: {
      boxready: "loadInitialData"
    },
    panel2: {}
  },
  init: function() {
    return this.callParent(arguments);
  },
  /**
  	* Loads the initial reference dta.
  */

  loadInitialData: function() {
    var _this = this;
    this.getView().setLoading(true);
    return this.getListingService().loadInitialData().then({
      success: function() {
        return _this.getListingContext().initialDataLoaded();
      },
      failure: function(errorMessage) {
		  console.log(errorMessage);
        //return _this.getNotificationService().error("Error", errorMessage);
      }
    }).always(function() {
      return _this.getView().setLoading(false);
    });
  },
  /**
  * Update the title for one of the tab panels
  * @param title The new title for the panel.
  */

  updatePanelTitle: function(title) {
    return this.getPanel2().title = title;
  },
});
