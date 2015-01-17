/**
* Controls the company grid.
*/

Ext.define("Realtor.controller.TestPanel1Controller", {
  extend: "Realtor.controller.AbstractCompanyController",
  observe: {},
  control: {},
  config: {
    currentCompany: null
  },
  init: function() {
    return this.callParent(arguments);
  },
});
