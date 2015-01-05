// Generated by CoffeeScript 1.4.0

Ext.Loader.setConfig({
  enabled: true
});

Ext.application({
  autoCreateViewport: false,
  name: "Realtor",
});

Ext.require(["app.view.Viewport", "app.store.CompanyStore"]);

Ext.onReady(function() {
  Deft.Injector.configure({
    companyStore: "app.store.CompanyStore"
  });
  return Ext.create("app.view.Viewport");
});