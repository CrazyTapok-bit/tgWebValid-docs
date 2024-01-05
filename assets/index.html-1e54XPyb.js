import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as d,c as h,a as e,d as t,b as n,w as r,e as l}from"./app-Vtb4Stqz.js";const c={},u=l('<h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2><h3 id="queryid" tabindex="-1"><a class="header-anchor" href="#queryid" aria-hidden="true">#</a> <code>queryId</code></h3><ul><li><strong>Type:</strong> <code>string</code></li><li><strong>Default:</strong> <code>null</code></li></ul><p>_<em>Optional.</em> A unique identifier for the Web App session</p><h3 id="user" tabindex="-1"><a class="header-anchor" href="#user" aria-hidden="true">#</a> <code>user</code></h3>',5),p=e("strong",null,"Type:",-1),_=e("code",null,"TgWebValid\\Entities\\InitData\\User",-1),f=e("li",null,[e("strong",null,"Default:"),t(),e("code",null,"null")],-1),g=e("p",null,[t("_"),e("em",null,"Optional."),t(" An object containing data about the current user.")],-1),m=e("h3",{id:"receiver",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#receiver","aria-hidden":"true"},"#"),t(),e("code",null,"receiver")],-1),b=e("strong",null,"Type:",-1),y=e("code",null,"TgWebValid\\Entities\\InitData\\Receiver",-1),w=e("li",null,[e("strong",null,"Default:"),t(),e("code",null,"null")],-1),v=e("em",null,"Optional.",-1),x={href:"https://core.telegram.org/bots/webapps#adding-bots-to-the-attachment-menu",target:"_blank",rel:"noopener noreferrer"},T=e("h3",{id:"chat",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#chat","aria-hidden":"true"},"#"),t(),e("code",null,"chat")],-1),k=e("strong",null,"Type:",-1),A=e("code",null,"TgWebValid\\Entities\\InitData\\Chat",-1),D=e("li",null,[e("strong",null,"Default:"),t(),e("code",null,"null")],-1),W=e("em",null,"Optional.",-1),I={href:"https://core.telegram.org/bots/webapps#adding-bots-to-the-attachment-menu",target:"_blank",rel:"noopener noreferrer"},O=l('<h3 id="chattype" tabindex="-1"><a class="header-anchor" href="#chattype" aria-hidden="true">#</a> <code>chatType</code></h3><ul><li><strong>Type:</strong> <code>string</code></li><li><strong>Default:</strong> <code>null</code></li></ul><p>_<em>Optional.</em> Type of the chat from which the Web App was opened. Can be either <code>sender</code> for a private chat with the user opening the link, <code>private</code>, <code>group</code>, <code>supergroup</code>, or <code>channel</code>. Returned only for Web Apps launched from direct links.</p><h3 id="chatinstance" tabindex="-1"><a class="header-anchor" href="#chatinstance" aria-hidden="true">#</a> <code>chatInstance</code></h3><ul><li><strong>Type:</strong> <code>string</code></li><li><strong>Default:</strong> <code>null</code></li></ul><p>_<em>Optional.</em> Global identifier, uniquely corresponding to the chat from which the Web App was opened. Returned only for Web Apps launched from a direct link.</p><h3 id="startparam" tabindex="-1"><a class="header-anchor" href="#startparam" aria-hidden="true">#</a> <code>startParam</code></h3><ul><li><strong>Type:</strong> <code>string</code></li><li><strong>Default:</strong> <code>null</code></li></ul>',8),R={href:"https://core.telegram.org/bots/webapps#adding-bots-to-the-attachment-menu",target:"_blank",rel:"noopener noreferrer"},V=e("code",null,"startattach",-1),q={href:"https://core.telegram.org/bots/webapps#adding-bots-to-the-attachment-menu",target:"_blank",rel:"noopener noreferrer"},C=e("h3",{id:"cansendafter",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cansendafter","aria-hidden":"true"},"#"),t(),e("code",null,"canSendAfter")],-1),E=e("ul",null,[e("li",null,[e("strong",null,"Type:"),t(),e("code",null,"int")]),e("li",null,[e("strong",null,"Default:"),t(),e("code",null,"null")])],-1),j=e("em",null,"Optional.",-1),L={href:"https://core.telegram.org/bots/api#answerwebappquery",target:"_blank",rel:"noopener noreferrer"},N=e("h3",{id:"authdate",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#authdate","aria-hidden":"true"},"#"),t(),e("code",null,"authDate")],-1),B=e("strong",null,"Type:",-1),P={href:"https://carbon.nesbot.com/docs/",target:"_blank",rel:"noopener noreferrer"},S=e("code",null,"CarbonInterface",-1),U=l('<p>A date interface for obtaining the time of opening a form in <code>Unix</code> format, and not only that.</p><h3 id="hash" tabindex="-1"><a class="header-anchor" href="#hash" aria-hidden="true">#</a> <code>hash</code></h3><ul><li><strong>Type:</strong> <code>string</code></li></ul><p>A hash of all passed parameters, with which the validator can check their validity.</p><h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2><h3 id="toarray" tabindex="-1"><a class="header-anchor" href="#toarray" aria-hidden="true">#</a> <code>toArray</code></h3><p>Returns the entity, including children (if any), as an array.</p>',7),G={href:"https://core.telegram.org/bots/webapps#webappinitdata",target:"_blank",rel:"noopener noreferrer"};function M(Q,z){const o=i("RouterLink"),a=i("ExternalLinkIcon");return d(),h("div",null,[e("p",null,[t("This object contains the data that is passed to the applet when it is opened. This entity can only be accessed after successful user authentication using the validator "),n(o,{to:"/en/docs/validator/web-app.html"},{default:r(()=>[t("mini-app")]),_:1}),t(".")]),u,e("ul",null,[e("li",null,[p,t(),n(o,{to:"/en/docs/entity/init-data/user.html"},{default:r(()=>[_]),_:1})]),f]),g,m,e("ul",null,[e("li",null,[b,t(),n(o,{to:"/en/docs/entity/init-data/receiver.html"},{default:r(()=>[y]),_:1})]),w]),e("p",null,[t("_"),v,t(" An object containing data about the chat partner of the current user in the chat where the bot was launched via the attachment menu. Returned only for private chats and only for Web Apps launched via the "),e("a",x,[t("attachment menu"),n(a)]),t(".")]),T,e("ul",null,[e("li",null,[k,t(),n(o,{to:"/en/docs/entity/init-data/chat.html"},{default:r(()=>[A]),_:1})]),D]),e("p",null,[t("_"),W,t(" An object containing data about the chat where the bot was launched via the attachment menu. Returned for supergroups, channels and group chats – only for Web Apps launched via the "),e("a",I,[t("attachment menu"),n(a)]),t(".")]),O,e("p",null,[t("The value of the "),e("a",R,[V,n(a)]),t(" parameter, passed via link. Only returned for Web Apps when launched from the "),e("a",q,[t("attachment menu"),n(a)]),t(" via link.")]),C,E,e("p",null,[t("_"),j,t(" Time in seconds, after which a message can be sent via the "),e("a",L,[t("answerWebAppQuery"),n(a)]),t(" method.")]),N,e("ul",null,[e("li",null,[B,t(),e("a",P,[S,n(a)])])]),U,e("p",null,[e("a",G,[t("Created on the basis of official documentation"),n(a)])])])}const J=s(c,[["render",M],["__file","index.html.vue"]]);export{J as default};
