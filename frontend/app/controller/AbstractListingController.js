/**
* Abstract ViewController for the Realtor application.
*/

Ext.define("Realtor.controller.AbstractListingController", {
  extend: "Deft.mvc.ViewController",
	inject: ["listingContext", "listingService"],
  config: {
    listingContext: null,
	  listingService: null
  },
  init: function() {
    return this.callParent(arguments);
  }
});
