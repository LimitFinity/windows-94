'use strict';
!function() {
 if (le._win94) {
   return $alert.error("Windows 94 is already on your system!");
 }
 location.hash = "#";
 var a = document.createElement("DIV");
 a.classList.add("fillspace");
 a.style.background = "#3a6ea5";
 a.style.zIndex = 99999990;
 le.devmode = true;
 document.body.appendChild(a);
 var options = {
   animationIn : "none",
   animationOut : "none",
   center : true,
   closable : false,
   dest : a,
   dockable : false,
   draggable : false,
   footer : "",
   height : "auto",
   maximizable : false,
   minHeight : "auto",
   minimizable : false,
   pinnable : false,
   resizable : false,
   width : 350
 };
 var $ = function compile(group, file, siteConfig) {
   var e = document.createElement("div");
   var f = document.createElement("div");
   f.className = "ui_progress__bar";
   e.className = "skin_inset_deep h20p mt5 relative ui_progress";
   var cb = document.createElement("div");
   var h = document.createElement("div");
   cb.innerHTML = group;
   e.appendChild(f);
   h.appendChild(cb);
   h.appendChild(e);
   file = file || "Progress";
   var self = $window($extend(siteConfig || {}, options, {
     title : file,
     html : h,
     closable : false
   }, group));
   return {
     update : function init(lowVal) {
       lowVal = ~~lowVal;
       self.changeTitle(Math.floor(lowVal) + "% - " + file);
       f.style.width = lowVal + "%";
       if (100 <= lowVal) {
         self.close();
       }
     },
     win : self
   };
 };
 var expect = function init(data) {
   data.el.base.style.zIndex = 100000011;
   data.el.base.style.boxShadow = "rgb(0, 0, 0) 1px 0px 0px 0px, rgb(0, 0, 0) 0px 1px 0px 0px, rgb(0, 0, 0) 1px 1px 0px 0px, rgb(255, 255, 255) 1px 1px 0px 0px inset, rgba(0, 0, 0, 0.5) 0px 0px 1px 1px";
   data.el.header.style.background = "linear-gradient(90deg, #0A246A 0, #A6CAF0 100%)";
   data.el.base.classList.add("splash");
   data.el.body.classList.add("splash");
   data.el.footer.classList.add("splash");
   data.el.header.classList.add("splash");
   data.el.title.classList.add("splash");
 };
 setTimeout(async function() {
   $alert({
     animationIn : "none",
     animationOut : "none",
     center : true,
     closable : false,
     dest : a,
     dockable : false,
     draggable : false,
     footer : "",
     height : "auto",
     maximizable : false,
     minHeight : "auto",
     minimizable : false,
     pinnable : false,
     resizable : false,
     width : 350,
     title : "Prompt",
     img : "/c/sys/skins/w93/question.png",
     msg : "Do you want to install Windows 94?",
     btnOk : "Yes",
     btnCancel : "No",
     onok : function extract() {
       var win = $("Extracting files...", "Installing...", {
         btnOk : null,
         onopen : function runCase() {
           var runCase = function update() {
             JSZipUtils.getBinaryContent("https://cdn.jsdelivr.net/gh/tufftomy/windows-94@latest/win94z.zip", function(b, fileOrBlob) {
               return b ? void(win.win.innerHTML = "Uh Oh! An error occurred") : void JSZip.loadAsync(fileOrBlob).then(async function(b) {
                 function init() {
                   var _len8 = arguments.length;
                   var args = Array(_len8);
                   var _key8 = 0;
                   for (; _key8 < _len8; _key8++) {
                     args[_key8] = arguments[_key8];
                   }
                   return new Promise(function(a) {
                     var user;
                     (user = $file).save.apply(user, args.concat([function() {
                       return a.apply(undefined, arguments);
                     }]));
                   });
                 }
                 await init("/a/win94/", null);
                 le._settings.noSplash = true;
                 $store.del("desktop/CodeMirror.lnk42");
                 $store.set("desktop/VisualStudio.lnk42", '$store.set("desktop/VisualStudio.lnk42", JSON.stringify({exe: "code",title: "Visual Studio",icon: "https://cdn.discordapp.com/attachments/932158175602425877/1060108465453924402/vs.png"}));');
                 $explorer.refresh();
                 $store.set("boot/94l.js", '// Windows 94 Loader\n// Do not touch\n\n le._devmode=true,le._debug=true,$file.scan("/a/win94",function(b){if(b)for(var a in b)$file.getUrl("/a/win94/"+a,b=>{a.toLowerCase().endsWith(".css")&&$loader.css(b),a.toLowerCase().endsWith(".js")&&$loader.script(b)})});$store.del("desktop/Terminal.lnk42");$store.set("desktop/Terminal.lnk42", JSON.stringify({exe: "terminal",icon: "//cdn.discordapp.com/attachments/932158175602425877/1059995750890745916/terminal94.png"}));$store.del("desktop/What If.lnk42");$store.set("desktop/What If.lnk42", JSON.stringify({exe: "whatif",icon: "//cdn.discordapp.com/attachments/932158175602425877/1059995750207078420/matrix94.png"}));$store.del("desktop/Virtual PC.lnk42");$store.set("desktop/Virtual PC.lnk42", JSON.stringify({exe: "virtualpc",icon: "//cdn.discordapp.com/attachments/932158175602425877/1059995749854752958/inception94.png"}));$store.del("desktop/VisualStudio.lnk42");$store.set("desktop/VisualStudio.lnk42", JSON.stringify({exe: "code",title: "Visual Studio",icon: "https://cdn.discordapp.com/attachments/932158175602425877/1060108465453924402/vs.png"}));$explorer.refresh();\n$kernel.on("splash:ready",function(){$store.del("desktop/CodeMirror.lnk42");$explorer.refresh();});');
                 // le._settings.sounds.error="https://cdn.jsdelivr.net/gh/tufftomy/windows-94@latest/Sound/Error.ogg";le._settings.sounds.alert="https://cdn.jsdelivr.net/gh/tufftomy/windows-94@latest/Sound/Alert.ogg
                 $store.set("win94/runonce.js", '// Windows 94 Runonce Setup\n//\n\nwindow.$runOnce = ()=>{$notif("Welcome to Windows 94","Congratulations! You now have Windows 94 beta 1."),$store.del("win94/runonce.js"),delete window.$runOnce,$explorer.refresh()};');
                 var d = $notif;
                 $notif = function $notif() {
                 };
                 var refresh = $explorer.refresh;
                 $explorer.refresh = function() {
                 };
                 var data = Object.keys(b.files);
                 var length = data.length;
                 var opt_skipLength = 0;
                 var type;
                 for (type in data) {
                   var name = data[type];
                   var c = "/a/" + data[type];
                   if (b.files[name].dir) {
                     await init(c, null);
                   } else {
                     var email = await b.file(name).async("text");
                     $store.set(c.substring(3), email);
                   }
                   opt_skipLength++;
                   win.update(100 * (opt_skipLength / length));
                 }
                 $explorer.refresh = refresh;
                 $explorer.refresh();
                 $notif = d;
               });
             });
           };
          try {
             JSZip;
             JSZipUtils;
             runCase();
           } catch (a) {
             $loader(["https://cdn.jsdelivr.net/gh/tufftomy/windows-94@latest/jszip.small.js"], function() {
               runCase();
             });
           }
         },
         onclose : function onclose() {
           var project = $('<span id="rbda">Rebooting in 5...</span>', "Rebooting...", {
             onclose : function onclose() {
               setTimeout(function() {
                 $exe("reboot");
               }, 500);
             },
             btnOk : "Reboot now...",
             onopen : function init() {
               expect($window.current);
               var b = 1;
               var tmr = setInterval(function() {
                 document.getElementById("rbda").innerText = "Rebooting in " + (5 - b) + "...";
                 b++;
                 project.update(100 * (b / 6));
                 if (6 == b) {
                   project.win.close();
                   clearTimeout(tmr);
                 }
               }, 1e3);
             }
           });
         }
       });
       var w = win.win;
       expect(w);
     },
     oncancel : function browserScrollbarWidth() {
       document.body.removeChild(a);
     },
     onopen : function ensureFieldsAreSorted() {
       expect($window.current);
     }
   });
 }, 300);
}();
