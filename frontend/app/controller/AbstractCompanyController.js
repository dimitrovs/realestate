/**
* Abstract ViewController for the Realtor application.
*/

Ext.define("Realtor.controller.AbstractCompanyController", {
  extend: "Deft.mvc.ViewController",
	inject: ["companyContext", "companyService"],
  config: {
    companyContext: null,
	  companyService: null
  },
  init: function() {
    return this.callParent(arguments);
  }
});
