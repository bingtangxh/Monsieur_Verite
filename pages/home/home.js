(function () {
    "use strict";
    var app = WinJS.Application;
    app.onsettings = function (e) {
        e.detail.applicationcommands = { "about": { title: "关于 About", href: "/pages/about.html" } };
        WinJS.UI.SettingsFlyout.populateSettings(e);
    }
    WinJS.UI.Pages.define("/pages/home/home.html", {
        // 每当用户导航至此页面时都要调用此功能。它
        // 使用应用程序的数据填充页面元素。
        
        ready: function (element, options) {
            // TODO: 在此处初始化页面。
            
        }
    });  
  
})();
