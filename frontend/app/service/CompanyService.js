/**
* Service methods related to Companies.
*/

Ext.define("Realtor.service.CompanyService", {
  inject: ["companyStore"],
  config: {
    companyStore: null
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
    return Deft.Chain.parallel([this.loadCompany], this);
  },

  loadCompany: function() {
    var deferred;
    deferred = Ext.create("Deft.promise.Deferred");
    this.getCompanyStore().load({
      callback: function(records, operation, success) {
        if (success) {
          return deferred.resolve();
        } else {
          return deferred.reject("Error loading Company");
        }
      },
      scope: this
    });
    return deferred.promise;
  },

});
