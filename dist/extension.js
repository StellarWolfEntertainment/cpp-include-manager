(()=>{"use strict";var e={112:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.deactivate=t.activate=void 0;const a=o(r(496)),s=o(r(147)),c=o(r(17));function l(e){let t=a.workspace.workspaceFolders,r="";if(null!=t){let e=t[0];null!=e&&(r=e.uri.fsPath)}return c.join(r,e)}const u=l("/.vscode/incMan.json"),d=l("/.vscode/settings.json");function f(){let e=a.workspace.getConfiguration("cpp-include-manager").get("libraryPath")??"C:/Libraries/${lib}/include";s.readFile(u,"utf8",((t,r)=>{t&&a.window.showInformationMessage("Error reading IncMan.json");const n=JSON.parse(r),i=[...n["standardized-libraries"].map((t=>e.replace("${lib}",t))),...n["explicit-libraries"]];s.readFile(d,"utf8",((e,t)=>{if(e)return void a.window.showInformationMessage("Error reading settings.json");let r=JSON.parse(t);r["C_Cpp.default.includePath"]=i;const n=JSON.stringify(r,null,2);s.writeFile(d,n,(e=>{e&&console.error("Error writing settings.json")}))}))}))}t.activate=function(e){a.workspace.createFileSystemWatcher(u).onDidChange((()=>{a.window.showInformationMessage("File change detected"),f()})),a.window.showInformationMessage("Activated Include Manager"),f()},t.deactivate=function(){}},496:e=>{e.exports=require("vscode")},147:e=>{e.exports=require("fs")},17:e=>{e.exports=require("path")}},t={},r=function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}(112);module.exports=r})();