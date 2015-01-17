/**
* Controls the company grid.
*/

Ext.define("Realtor.controller.ListingController", {
  extend: "Realtor.controller.AbstractListingController",
  observe: {
    listingContext: {
      initialDataLoaded: "loadListing"
    }
  },
  control: {
    listingGridPanel: {
      selectionchange: "onListingSelected"
    },
  },
  config: {
    currentListing: null
  },
  init: function() {
    return this.callParent(arguments);
  },
  /**
  	* Loads the set of {Realtor.model.Listing} models
  */

  loadListing: function() {
    var _this = this;
    return this.getListingService().loadListing().then({
      failure: function(errorMessage) {
		  console.log(errorMessage);
        //return _this.getNotificationService().error("Error", errorMessage);
      }
    });
  },
  /**
  	* Deletes the passed {Phoenix.model.Scenario}.
  	* @param {Phoenix.model.Scenario} Scenario to delete.
  */

  /**
  	* Handles a click on the add button and opens a new Listing view.
  */

  onListingSelected: function(selectionModel, model, index) {
    Ext.log({
      dump: arguments,
      stack: false
    }, "onListingSelected");
    return this.setCurrentListing(model[0]);
  }

});
