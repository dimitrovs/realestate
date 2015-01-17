/**
* DeftJS Application class for the Phoenix application.
*/

Ext.define("Realtor.Application", {
  extend: "Deft.mvc.Application",
  requires: ["Realtor.config.AppConfig", "Realtor.view.Viewport", "Realtor.store.ListingStore", "Realtor.context.ListingContext", "Realtor.service.ListingService"],
  /**
  	* init() runs when Ext.onReady() is called.
  */

  init: function() {
    this.beforeInit();
    Deft.Injector.configure(this.buildInjectorConfiguration());
    Deft.promise.Deferred.enableLogging = false;
    return this.afterInit();
  },
  /**
  	* @protected
  	* Returns the configuration object to pass to Deft.Injector.configure(). Override in subclasses to alter the Injector configuration before returning the config object.
  	* @return {Object} The Injector configuration object.
  */

  buildInjectorConfiguration: function() {
    var config;
    config = {
      appConfig: {
        className: "Realtor.config.AppConfig",
        parameters: [
          {
            environment: Realtor.config.AppConfig.PRODUCTION_ENV
          }
        ]
      },
      listingStore: "Realtor.store.ListingStore",
		listingContext: "Realtor.context.ListingContext",
		listingService: "Realtor.service.ListingService"
    };
    return config;
  },
  /**
  	* @protected
  	* Runs at the start of the init() method. Override in subclasses if needed.
  */

  beforeInit: function() {},
  /**
  	* @protected
  	* Runs at the end of the init() method. Useful to create initial Viewport, start Jasmine tests, etc.
  */

  afterInit: function() {
    Ext.tip.QuickTipManager.init();
    return Ext.create("Realtor.view.Viewport");
  }
});
