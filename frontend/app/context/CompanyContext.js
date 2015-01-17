/**
* Fire events related to the scenario UI, which other objects can respond to.
*/

Ext.define("Realtor.context.CompanyContext", {
  extend: "Realtor.context.AbstractContext",
  /**
  	* Constructor.
  */

  constructor: function(config) {
    if (config == null) {
      config = {};
    }
    this.callParent(arguments);
    return this.addEvents("initialDataLoaded", "companySelected");
  },
  /**
  	* Notifies interested objects that initial data has been loaded.
  */

  initialDataLoaded: function() {
    /**
    		* @event initialDataLoaded Initial data loaded.
    */
    return this.fireEvent("initialDataLoaded");
  },
  /**
  	* Notified interested objects that a scenario is being opened.
  	* @param {Phoenix.model.Scenario} Scenario The Scenario being opened.
  */

  companySelected: function(company) {
    /**
    	* @event scenarioOpened Scenario opened.
    	* @param {Phoenix.model.Scenario} Scenario The Scenario being opened.
    */
    return this.fireEvent("companySelected", company);
  }
});
