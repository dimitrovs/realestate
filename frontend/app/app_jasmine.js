Ext.application({
  autoCreateViewport: false,
  name: "Realtor",
  launch: function() {
    return window.Application = this;
  }
});

Ext.onReady(function() {
  Deft.Injector.configure({
    companyStore: "app.store.CompanyStore"
  });
  return execJasmine();
});
