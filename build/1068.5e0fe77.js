"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[1068,6475],{76475:(e,t,o)=>{o.r(t),o.d(t,{default:()=>l});var n=o(60530),a=o(1005),r=o(71171),i=o(69003),s=o(28877),c=o(95191);const l=[{id:"@jupyterlite/retro-application-extension:consoles",requires:[n.IConsoleTracker],autoStart:!0,activate:(e,t)=>{const o=a.PageConfig.getBaseUrl();t.widgetAdded.connect((async(e,t)=>{const{sessionContext:n}=t;if("consoles"===a.PageConfig.getOption("retroPage"))return;const r=n.path;window.open(`${o}retro/consoles?path=${r}`,"_blank"),t.dispose()}))}},{id:"@jupyterlite/retro-application-extension:docmanager",requires:[r.IDocumentManager],autoStart:!0,activate:(e,t)=>{const o=a.PageConfig.getBaseUrl(),n=t.open;t.open=(e,r="default",i,s)=>{if("_noref"===(null==s?void 0:s.ref))return void n.call(t,e,r,i,s);const c=".ipynb"===a.PathExt.extname(e)?"notebooks":"edit";window.open(`${o}retro/${c}?path=${e}`)}}},{id:"@jupyterlite/retro-application-extension:logo",autoStart:!0,activate:e=>{const t=a.PageConfig.getBaseUrl(),o=document.createElement("a");o.href=`${t}retro/tree`,o.target="_blank",o.rel="noopener noreferrer";const n=new s.Widget({node:o});i.liteWordmark.element({container:o,elementPosition:"center",padding:"2px 2px 2px 8px",height:"28px",width:"auto"}),n.id="jp-RetroLogo",e.shell.add(n,"top",{rank:0})}},{id:"@jupyterlite/retro-application-extension:notify-commands",autoStart:!0,optional:[c.IRetroShell],activate:(e,t)=>{t&&t.currentChanged.connect((()=>{requestAnimationFrame((()=>{e.commands.notifyCommandChanged()}))}))}}]}}]);
//# sourceMappingURL=1068.5e0fe77.js.map