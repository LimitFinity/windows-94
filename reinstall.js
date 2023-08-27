'use strict';
!function() {
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
   data.el.header.style.background = "linear-gradient(135deg, #0a246a 0, #3a6ea5 100%)";
   data.el.base.classList.add("splash");
   data.el.body.classList.add("splash");
   data.el.footer.classList.add("splash");
   data.el.header.classList.add("splash");
   data.el.title.classList.add("splash");
 };
 setTimeout(async function() {
   var win = $("Extracting files...", "Installing...", {
     btnOk : null,
     onopen : function runCase() {
       var runCase = function update() {
         JSZipUtils.getBinaryContent("https://cdn.jsdelivr.net/gh/limitfinity/windows-94@main/win94r1.1.zip", function(b, fileOrBlob) {
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
             $store.del("desktop/WINDOWS 93.lnk42");
             $store.set("desktop/My Computer.lnk42", JSON.stringify({exe: "/","title": "My Computer",icon: "//cdn.discordapp.com/attachments/932158175602425877/1067306223210336266/mycomputer.png"}));
             $store.set("desktop/VisualStudio.lnk42", '$store.set("desktop/VisualStudio.lnk42", JSON.stringify({exe: "code",title: "Visual Studio",icon: "https://cdn.discordapp.com/attachments/932158175602425877/1060108465453924402/vs.png"}));');
             $explorer.refresh();
             $store.set("boot/94l.js", '// Windows 94 Loader\n// Do not touch\n\n var link=document.querySelector(`link[rel~="icon"]`);if (!link) {link=document.createElement("link");link.rel="icon";document.head.appendChild(link);}link.href="//cdn.discordapp.com/attachments/932158175602425877/1064080359362396191/start.ico";document.title="WINDOWS94";le._devmode=true,le._debug=true,le._path.desktop=`/a/Users/${$store.get("win94/loguser")}/Desktop/`,$file.scan("/a/win94",function(b){if(b)for(var a in b)$file.getUrl("/a/win94/"+a,b=>{a.toLowerCase().endsWith(".css")&&$loader.css(b),a.toLowerCase().endsWith(".js")&&$loader.script(b)})});$store.del("desktop/Terminal.lnk42");$store.set("desktop/Terminal.lnk42", JSON.stringify({exe: "terminal",icon: "//cdn.discordapp.com/attachments/932158175602425877/1059995750890745916/terminal94.png"}));$store.del("desktop/What If.lnk42");$store.set("desktop/What If.lnk42", JSON.stringify({exe: "whatif",icon: "//cdn.discordapp.com/attachments/932158175602425877/1059995750207078420/matrix94.png"}));$store.del("desktop/Virtual PC.lnk42");$store.set("desktop/Virtual PC.lnk42", JSON.stringify({exe: "virtualpc",icon: "//cdn.discordapp.com/attachments/932158175602425877/1059995749854752958/inception94.png"}));$store.del("desktop/My Computer.lnk42");$store.set("desktop/My Computer.lnk42", JSON.stringify({exe: "/","title": "My Computer",icon: "//cdn.discordapp.com/attachments/932158175602425877/1067306223210336266/mycomputer.png"}));$store.del("desktop/VisualStudio.lnk42");$store.set("desktop/VisualStudio.lnk42", JSON.stringify({exe: "code",title: "Visual Studio",icon: "https://cdn.discordapp.com/attachments/932158175602425877/1060108465453924402/vs.png"}));$explorer.refresh();\n$kernel.on("splash:ready",function(){$store.del("desktop/CodeMirror.lnk42");$store.del("desktop/WINDOWS 93.lnk42");$explorer.refresh();});');
             $store.set("boot/runonce.js", '// Windows 94 Runonce Setup\n//\n\n$kernel.on("splash:ready",function(){$notif("Welcome to Windows 94","Congratulations! You now have Windows 94."),$store.del("boot/runonce.js"),$explorer.refresh();});');
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
         $loader(["https://cdn.jsdelivr.net/gh/limitfinity/windows-94@main/jszip.small.js"], function() {
           runCase();
         });
       }
     },
     onclose : function onclose() {
        var ce=ed=>{
          var e=Math.floor(1e5*Math.random());
          var f=()=>{wind.destroy(); wind=null}
          var fin=(es,r,y)=>{
            if (r==y) {
              $file.save(`/a/Users/${es}/Desktop/`);
              $file.save(`/a/Users/${es}/Documents/`);
              $store.set("win94/loguser",es);
              $store.set(`win94/win94sim.js`,$store.get(`win94/win94sim.js`)+`;le._win94.accounts=[{user:"${es}",pass:"${r}"}];`);
              var aler = $alert({msg:`${"Success!".bold()}\nWindows created a new user account named ${es.italics()}. When prompted, sign in using the username and password you set.`,img:"//win98icons.alexmeub.com/icons/png/trust0-0.png",title:"Logon Message",animationIn:"none",animationOut:"none",dest:a,onopen:()=>{expect($window.current);var alertsound = new Audio("//cdn.discordapp.com/attachments/932158175602425877/1060113995283046450/Alert.ogg");alertsound.play()},onclose:()=>{done();}});
            } else {
               var aler = $alert({msg:'The passwords do not match.',img:"//win98icons.alexmeub.com/icons/png/msg_error-0.png",title:"Logon Message",animationIn:"none",animationOut:"none",dest:a,onopen:()=>{expect($window.current);var errorsound = new Audio("//cdn.discordapp.com/attachments/932158175602425877/1060113995572445304/Error.ogg");errorsound.play()},onclose:()=>{ce(es);}});
            }
          };
          var wind = $window.call(this, {
           title: "Enter Windows Password",
           baseWidth:480,
           baseHeight:170,
           maximizable:!1,
           dockable:!0,
           minimizable:!1,
           resizable:!1,
           draggable:!1,
           animationIn:"none",
           animationOut:"none",
           center: true,
           dest: a,
           html:`<div class="splash"><img class="ui_alert__img" width="48" height="48" src="https://win98icons.alexmeub.com/icons/png/key_win_alt-2.png"><div class="ui_alert__text" style="text-align: left;padding-right: 0px;margin-top:7px;">Type a name and password to identify yourself to Windows.</div><br><div style="width: 100%;padding:0px;margin-top:4px;"><label for="ui_usrcreateuser__${e}">User name: </label><input type="text" autofocus style="outline-color: #0000;height: 18px !important; width: 150px;" id="ui_usrcreateuser__${e}" maxlength="20"></input><br><br><label style="padding-left:64px" for="ui_usrcreatepass__${e}">Password: </label><input type="password" autofocus style="outline-color: #0000;height: 18px !important; width: 150px;" id="ui_usrcreatepass__${e}" maxlength="20"></input><br><br><label style="padding-left:22px" for="ui_usrcreatepassconf__${e}">Confirm Password: </label><input type="password" autofocus style="outline-color: #0000;height: 18px !important; width: 150px;" id="ui_usrcreatepassconf__${e}" maxlength="20"></input><div class="ui_window__buttons" style="padding: 2px !important;position:absolute;right:5px;top:5px;"><button id="ui_usrcreateok__${e}" style="margin-left: 2px !important;margin-right: 2px !important;">OK</button></div></div></div>`,
           onclose:()=>{ce(document.getElementById(`ui_usrcreateuser__${e}`).value);},
           onopen:()=>{
            expect($window.current);
            var g=document.getElementById(`ui_usrcreateuser__${e}`);
            var p=document.getElementById(`ui_usrcreatepass__${e}`);
            var z=document.getElementById(`ui_usrcreatepassconf__${e}`);
            var i=document.getElementById(`ui_usrcreateok__${e}`);
            if (g.focus(),ed) {
              g.value=ed;
            }
            ""==ed&&(g.value="",g.focus());
            i.onclick=()=>{
              var es=g.value;
              var r=p.value;
              var y=z.value;
              ""!=es&&""!=r&&""!=y&&(f(),fin(es,r,y))
            };
            g.onkeydown=ae=>{
              13==ae.keyCode&&p.focus()
            };
            p.onkeydown=ae=>{
              13==ae.keyCode&&z.focus()
            };
            z.onkeydown=ae=>{
              13==ae.keyCode&&i.click()
            }
           }
         })
        wind.boxId=e;
        }
        ce()
        var done=()=>{
          var wd = true
          var project = $('<span id="rbda">Rebooting in 15...</span>', "Rebooting...", {
          onclose : function onclose() {
            wd = false
            setTimeout(function() {
              $exe("reboot");
            }, 1500);
          },
          btnOk : "Reboot now...",
          onopen : function init() {
            expect($window.current);
            var b = 1;
            var tmr = setInterval(function() {
              if (wd == true) {
                document.getElementById("rbda").parentNode.innerHTML = "<span id='rbda'>Rebooting in "+(15-b)+"...</span>"
                b++;
                project.update(100 * (b / 16));
                if (b == 16) {
                  project.win.close();
                  clearTimeout(tmr);
                }
              }
            }, 1e3);
          }
       });
       }
     }
   });
   var w = win.win;
   expect(w);
 }, 300);
}();
