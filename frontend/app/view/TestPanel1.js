// Generated by CoffeeScript 1.3.3

Ext.define("Realtor.view.TestPanel1", {
  extend: "Ext.panel.Panel",
  alias: "widget.jasmineExample-view-testpanel1",
  controller: "Realtor.controller.TestPanel1Controller",
  inject: ["companyStore"],
  layout: "anchor",
  config: {
    companyStore: null,
  },
  title: "Panel Title",
  initComponent: function() {
    Ext.applyIf(this, {
      items: [
        {
          xtype: "container",
          itemId: "gridContainer",
          layout: "anchor",
          anchor: "100% 100%",
          items: [
            {
              xtype: "gridpanel",
              itemId: "companyGridPanel",
      		  store: this.getCompanyStore(),
              columnLines: true,
              anchor: "100% 100%",
              columns: [
                {
                  xtype: "gridcolumn",
                  dataIndex: "company",
                  text: "Company",
                  flex: 1
                }, {
                  xtype: "numbercolumn",
                  dataIndex: "price",
                  text: "Price",
                  renderer: Ext.util.Format.usMoney
                }, {
                  xtype: "numbercolumn",
                  dataIndex: "change",
                  text: "Change",
                  format: "0.00"
                }, {
                  xtype: "numbercolumn",
                  dataIndex: "pctChange",
                  text: "% Change",
                  format: "0.00"
                }, {
                  xtype: "datecolumn",
                  dataIndex: "lastChange",
                  text: "Last Change"
                }, {
                  xtype: "gridcolumn",
                  dataIndex: "industry",
                  text: "Industry"
                }
              ]
            }
          ]
        }
      ]
    });
    return this.callParent(arguments);
  }
});
