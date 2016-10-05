(function() {
  var Class = ng.core.Class;
  var Component = ng.core.Component;
  var NgModule = ng.core.NgModule;
  var BrowserModule = ng.platformBrowser.BrowserModule;
  var platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic;

  var ClockService = Class({
    constructor: function ClockService() {
    },
    updateDateTime: function(callback){
      callback(new Date());
      setInterval(function(){
        callback(new Date());
      },1000);
    }

  });

  var AppComponent = Component({
    selector: 'my-app',
    template:'<h1>System Date</h1>'+
             '{{dateTime}}'
  })
  .Class({
    constructor: [ClockService, function AppComponent(clockService) { 
      var self = this;
      clockService.updateDateTime(function(dateTime){
        self.dateTime = dateTime;
      });
    }]
  });

  var AppModule = NgModule({
    imports: [BrowserModule],
    providers: [ClockService],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
  })
  .Class({
    constructor: function AppModule() { }
  });

  platformBrowserDynamic().bootstrapModule(AppModule);

})();
