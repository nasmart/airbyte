"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[7799],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(r),u=n,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||l;return r?a.createElement(k,i(i({ref:t},d),{},{components:r})):a.createElement(k,i({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},84859:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={},i="Freshdesk",o={unversionedId:"integrations/sources/freshdesk",id:"integrations/sources/freshdesk",title:"Freshdesk",description:"This page guides you through the process of setting up the Freshdesk source connector.",source:"@site/../docs/integrations/sources/freshdesk.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/freshdesk",permalink:"/integrations/sources/freshdesk",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/freshdesk.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Freshcaller",permalink:"/integrations/sources/freshcaller"},next:{title:"Freshsales",permalink:"/integrations/sources/freshsales"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Set up Freshdesk",id:"step-1-set-up-freshdesk",level:2},{value:"Get Domain URL",id:"get-domain-url",level:3},{value:"Get Freshdesk API Key",id:"get-freshdesk-api-key",level:3},{value:"Step 2: Set up the Freshdesk connector in Airbyte",id:"step-2-set-up-the-freshdesk-connector-in-airbyte",level:2},{value:"Supported sync modes &amp; Features",id:"supported-sync-modes--features",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Changelog",id:"changelog",level:2}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"freshdesk"},"Freshdesk"),(0,n.kt)("p",null,"This page guides you through the process of setting up the Freshdesk source connector."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Freshdesk Account"),(0,n.kt)("li",{parentName:"ul"},"Domain URL"),(0,n.kt)("li",{parentName:"ul"},"Freshdesk API Key")),(0,n.kt)("h2",{id:"step-1-set-up-freshdesk"},"Step 1: Set up Freshdesk"),(0,n.kt)("h3",{id:"get-domain-url"},"Get Domain URL"),(0,n.kt)("p",null,"You can find your domain URL by loggin into your account and check the URL in your browser, the domain url should look like: ",(0,n.kt)("inlineCode",{parentName:"p"},"https://myaccount.freshdesk.com/..."),", where ",(0,n.kt)("inlineCode",{parentName:"p"},"myaccount.freshdesk.com")," - is your domain URL."),(0,n.kt)("h3",{id:"get-freshdesk-api-key"},"Get Freshdesk API Key"),(0,n.kt)("p",null,"Follow the link to read more about ",(0,n.kt)("a",{parentName:"p",href:"https://support.freshdesk.com/support/solutions/articles/215517"},"how to find your API key"),". You need the admin permissions to access the account settings."),(0,n.kt)("h2",{id:"step-2-set-up-the-freshdesk-connector-in-airbyte"},"Step 2: Set up the Freshdesk connector in Airbyte"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Cloud")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.airbyte.io/workspaces"},"Log into your Airbyte Cloud")," account. "),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,n.kt)("strong",{parentName:"li"},"+ new source"),". "),(0,n.kt)("li",{parentName:"ol"},"On the source setup page, select ",(0,n.kt)("strong",{parentName:"li"},"Freshdesk")," from the Source type dropdown and enter a name for this connector. "),(0,n.kt)("li",{parentName:"ol"},"Enter your ",(0,n.kt)("inlineCode",{parentName:"li"},"Domain URL"),"."),(0,n.kt)("li",{parentName:"ol"},"Enter your ",(0,n.kt)("inlineCode",{parentName:"li"},"Freshdesk API Key"),"."),(0,n.kt)("li",{parentName:"ol"},"Choose the ",(0,n.kt)("inlineCode",{parentName:"li"},"Start Date")," as the starting point for your data replication."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Set up source"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte OSS:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to local Airbyte page."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,n.kt)("strong",{parentName:"li"},"+ new source"),". "),(0,n.kt)("li",{parentName:"ol"},"On the source setup page, select ",(0,n.kt)("strong",{parentName:"li"},"Freshdesk")," from the Source type dropdown and enter a name for this connector. "),(0,n.kt)("li",{parentName:"ol"},"Enter your ",(0,n.kt)("inlineCode",{parentName:"li"},"Domain URL"),"."),(0,n.kt)("li",{parentName:"ol"},"Enter your ",(0,n.kt)("inlineCode",{parentName:"li"},"Freshdesk API Key"),"."),(0,n.kt)("li",{parentName:"ol"},"Choose the ",(0,n.kt)("inlineCode",{parentName:"li"},"Start Date")," as the starting point for your data replication."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Set up source"),".")),(0,n.kt)("h2",{id:"supported-sync-modes--features"},"Supported sync modes & Features"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,n.kt)("p",null,"The Freshdesk supports full refresh and incremental sync. You can choose if this connector will copy only the new or updated data, or all rows in the tables and columns you set up for replication, every time a sync is run. There are two types of incremental sync:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"server level ","(","native",")"," - when API supports filter on specific columns that Airbyte use to track changes ","(",(0,n.kt)("inlineCode",{parentName:"li"},"updated_at"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"created_at"),", etc",")"),(0,n.kt)("li",{parentName:"ul"},"client level - when API doesn't support filter and Airbyte performs filtration on its side.")),(0,n.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,n.kt)("p",null,"Several output streams are available from this source:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#agents"},"Agents")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#companies"},"Companies")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#contacts"},"Contacts")," ","(","Native Incremental Sync",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#conversations"},"Conversations")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#groups"},"Groups")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#roles"},"Roles")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#satisfaction-ratings"},"Satisfaction Ratings")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#skills"},"Skills")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#surveys"},"Surveys")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#tickets"},"Tickets")," ","(","Native Incremental Sync",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#time-entries"},"Time Entries"))),(0,n.kt)("p",null,"If there are more endpoints you'd like Airbyte to support, please ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/new/choose"},"create an issue.")),(0,n.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"The Freshdesk connector should not run into Freshdesk API limitations under normal usage. Please ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues"},"create an issue")," if you see any rate limit issues that are not automatically retried successfully."),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-06"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15378"},"15378")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Allow backward campatibility for input configuration")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-23"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14049"},"14049")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update parsing of start_date")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-03"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13332"},"13332")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add new streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.3.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12334"},"12334")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Implement with latest CDK")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.11"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8682"},"8682")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Migrate to the CDK")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-06"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8524"},"8524")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-16"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8017"},"8017")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bugfix an issue that caused the connector not to sync more than 50000 contacts")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-28"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7486"},"7486")),(0,n.kt)("td",{parentName:"tr",align:"left"},'Include "requester" and "stats" fields in "tickets" stream')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-13"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6442"},"6442")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add start_date parameter to specification from which to start pulling data.")))))}m.isMDXComponent=!0}}]);