/**
* Controls the company grid.
*/

Ext.define("Realtor.controller.TestPanel1Controller", {
  extend: "Realtor.controller.AbstractListingController",
  observe: {},
  control: {},
  config: {
    currentListing: null
  },
  init: function() {
    return this.callParent(arguments);
  },
});
