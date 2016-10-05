(function() {
  var Component = ng.core.Component;
  var NgModule = ng.core.NgModule;
  var BrowserModule = ng.platformBrowser.BrowserModule;
  var platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic;

  var AppComponent = Component({
    selector: 'my-app',
    template:'<h1>System Date</h1>'+
             '{{dateTime}}'
  })
  .Class({
    constructor: function AppComponent() { 
        var self = this;
        self.dateTime = new Date();
        setInterval(function(){
            self.dateTime = new Date();
        },1000);
    }
  });

  var AppModule = NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
  })
  .Class({
    constructor: function AppModule() { }
  });

  platformBrowserDynamic().bootstrapModule(AppModule);

})();
