/**
* Controls the company grid.
*/

Ext.define("Realtor.controller.TestPanel1Controller", {
  extend: "Realtor.controller.AbstractCompanyController",
  observe: {
    companyContext: {
      initialDataLoaded: "loadCompany"
    }
  },
  control: {
    companyGridPanel: {
      selectionchange: "onCompanySelected"
    },
  },
  config: {
    currentCompany: null
  },
  init: function() {
    return this.callParent(arguments);
  },
  /**
  	* Loads the set of {Phoenix.model.Scenario} models
  */

  loadCompany: function() {
    var _this = this;
    this.getView().setLoading(true);
    return this.getCompanyService().loadCompany().then({
      failure: function(errorMessage) {
		  console.log(errorMessage);
        //return _this.getNotificationService().error("Error", errorMessage);
      }
    }).always(function() {
      return _this.getView().setLoading(false);
    });
  },
  /**
  	* Deletes the passed {Phoenix.model.Scenario}.
  	* @param {Phoenix.model.Scenario} Scenario to delete.
  */

  /**
  	* Handles a click on the add button and opens a new Scenario view.
  */

  onCompanySelected: function(selectionModel, model, index) {
    Ext.log({
      dump: arguments,
      stack: false
    }, "onCompanySelected");
    return this.setCurrentCompany(model[0]);
  }

});
