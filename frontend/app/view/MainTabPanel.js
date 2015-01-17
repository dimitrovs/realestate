// Generated by CoffeeScript 1.3.3

Ext.define("Realtor.view.MainTabPanel", {
  extend: "Ext.tab.Panel",
  alias: "widget.jasmineExample-view-mainTabPanel",
  requires: ["Realtor.view.TestPanel1"],
  controller: "Realtor.controller.MainController",
  cls: "titletabs",
  padding: "0, 0, 0, 0",
  activeTab: 0,
  autoScroll: false,
  layout: "anchor",
  initComponent: function() {
    Ext.applyIf(this, {
      items: [
        {
          xtype: "jasmineExample-view-testpanel1",
          itemId: "testPanel",
          title: "Companies",
          anchor: "100% 100%"
        }, {
          xtype: "panel",
          itemId: "panel2",
          title: localized['testVar1'],
          anchor: "100% 100%"
        }
      ]
    });
    return this.callParent(arguments);
  }
});
