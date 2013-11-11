var app=(function(module) {
  module.init=init;
  module.myUI={};

  function init(){
    //init cms sdk
    cms.init({
      alias: 'feedhenryapp_1384164071305',
      onNav:function(contentId){
        setTimeout(function(){
            app.view.changePage(contentId,{"changeHash":true,"addBackBtn":true});    
        },10);
        
      }
    });  
    $.mobile.showPageLoadingMsg("a","Fetching content");
    cms.ui.initUi(function(){
        var ul=cms.ui.getHtml(cms.app.alias);
        $("#homePage [data-role='content']").html(ul).trigger('create').trigger('pageinit');
        // ul.listview();
        $.mobile.hidePageLoadingMsg();
    });
    $.mobile.page.prototype.options.addBackBtn=true;
    cms.service.startPoll(8); //sync every 30 seconds.
  }

  return module;
  
})(app || {});

