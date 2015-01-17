/**
* Service methods related to Companies.
*/

Ext.define("Realtor.service.ListingService", {
  inject: ["listingStore"],
  config: {
    listingStore: null
  },
  constructor: function(config) {
    if (config == null) {
      config = {};
    }
    this.initConfig(config);
    return this.callParent(arguments);
  },
  /**
  	* Loads initial reference data: probabilities, revenue impacts, and affected item lists.
  	* @return {Deft.promise.Promise}
  */

  loadInitialData: function() {
    return Deft.Chain.parallel([this.loadListing], this);
  },

  loadListing: function() {
    var deferred;
    deferred = Ext.create("Deft.promise.Deferred");
    this.getListingStore().load({
      callback: function(records, operation, success) {
        if (success) {
          return deferred.resolve();
        } else {
          return deferred.reject("Error loading Listing");
        }
      },
      scope: this
    });
    return deferred.promise;
  },

});
