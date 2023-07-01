"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[805],{7654:function(e,n,t){t(2791);n.Z=t.p+"static/media/chat.70046fe1a2ac3456d42dfc650b4ffa12.svg"},2152:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(2791),s=function(){(0,r.useLayoutEffect)((function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))}),[])}},4805:function(e,n,t){t.r(n),t.d(n,{default:function(){return z}});var r=t(9439),s=t(2791),a=t(7689),c=t(184),o=(0,s.memo)((function(e){var n=e.children;return(0,c.jsx)("div",{className:"flex justify-center sm:p-10 bg-neutral-200",style:{height:"calc(var(--vh, 1vh) * 100)"},children:n})})),i=(0,s.memo)((function(e){var n=e.children;return(0,c.jsx)("div",{className:"flex-1 flex flex-col bg-white overflow-hidden sm:rounded-xl shadow-2xl",children:n})})),l=(0,s.memo)((function(e){var n=e.children;return(0,c.jsx)("div",{className:"flex flex-col w-full max-w-5xl",children:n})})),u=(0,s.memo)((function(){return(0,c.jsxs)("footer",{className:"w-full pt-5 text-xs text-right text-gray-400",children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("i",{children:"\xa9 2023 "}),(0,c.jsx)("i",{children:"developed by inhan"})]}),(0,c.jsx)("a",{href:"https://iconscout.com/icons/chat",target:"_blank",rel:"noreferrer",children:"Free Chat Icon"}),"by",(0,c.jsx)("a",{href:"https://iconscout.com/contributors/delesign",children:"Delesign Graphics"}),"on ",(0,c.jsx)("a",{href:"https://iconscout.com",children:"IconScout"})]})})),m=t(7692),f=t(9126),d=t(7654),h=(0,s.memo)((function(e){var n=e.children;return(0,c.jsx)("div",{className:"flex justify-center absolute items-center top-0 right-0 p-1 min-w-[1.25rem] h-5 text-xs text-white bg-red-500 rounded-full translate-x-1 -translate-y-1",children:n})})),p=(0,s.memo)((function(e){var n=e.title,t=e.memberCount,r=e.isOpenMembers,a=e.toggleOpenMembers,o=e.onLeave,i=(0,s.useMemo)((function(){return r?"bg-sky-400 hover:bg-sky-500 active:bg-sky-600":"bg-slate-200 hover:bg-slate-300 active:bg-slate-400"}),[r]),l=(0,s.useCallback)((function(){window.confirm("\ucc44\ud305\ubc29\uc744 \ub098\uac00\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&o()}),[o]);return(0,c.jsxs)("header",{className:"relative flex justify-between p-5 bg-neutral-50 shadow-sm",children:[(0,c.jsxs)("div",{className:"flex items-center gap-4",children:[(0,c.jsx)("img",{src:d.Z,alt:"chat",className:"w-9 h-9"}),(0,c.jsx)("h1",{className:"font-bold text-lg sm:text-xl break-all",children:n})]}),(0,c.jsxs)("div",{className:"flex gap-3 items-center",children:[(0,c.jsxs)("button",{title:"\ucc38\uac00\uc790",className:"relative p-2.5 rounded-full opacity-80  transition-all ".concat(i),onClick:a,children:[(0,c.jsx)(f.fFq,{className:"text-xl text-slate-600"}),(0,c.jsx)(h,{children:t})]}),(0,c.jsx)("button",{title:"\ub098\uac00\uae30",className:"p-2.5 rounded-full bg-slate-200 opacity-80 hover:bg-slate-300 active:bg-slate-400 transition-all",onClick:l,children:(0,c.jsx)(m.qXE,{className:"text-xl text-slate-600"})})]})]})})),x=function(){var e=(0,s.useState)({width:window.innerWidth,height:window.innerHeight}),n=(0,r.Z)(e,2),t=n[0],a=n[1];return(0,s.useLayoutEffect)((function(){var e=function(){a({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),{width:t.width,height:t.height,isSmall:t.width<640}},v=t(763),g=t.n(v),b=t(8928),y=t(3524),w=(0,s.memo)((function(e){var n=e.disabled,t=e.onSend,a=(0,s.useState)(""),o=(0,r.Z)(a,2),i=o[0],l=o[1],u=x().isSmall,m=function(){var e=(0,s.useMemo)((function(){return/iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(navigator.userAgent)}),[]),n=(0,s.useMemo)((function(){return!e}),[e]);return{isMobile:e,isDesktop:n}}(),f=m.isDesktop,d=(0,s.useRef)(null),h=(0,s.useMemo)((function(){return i?"text-rose-400":"text-gray-400"}),[i]),p=(0,s.useMemo)((function(){return g().throttle((function(e){e&&(t(e),l(""))}),500)}),[t]),v=(0,s.useCallback)((function(e){l(e.target.value)}),[]),w=(0,s.useCallback)((function(e){"Enter"===e.key&&!e.shiftKey&&f&&(e.preventDefault(),p(i))}),[i,f,p]),k=(0,s.useCallback)((function(){var e;p(i),null===(e=d.current)||void 0===e||e.focus()}),[i,p]);return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:"relative",children:[(0,c.jsx)(b.Z,{ref:d,className:"w-full resize-none outline-none p-3 sm:p-5 transition-all",minRows:u?1:2,maxRows:8,autoFocus:!0,placeholder:"\ub300\ud654\ub97c \uc785\ub825\ud558\uc138\uc694",disabled:n,value:i,onChange:v,onKeyDown:w}),(0,c.jsx)("div",{className:"absolute bottom-0 right-0 p-5",children:(0,c.jsx)(y.G$$,{className:"text-2xl transition-all cursor-pointer ".concat(h),onClick:k})})]})})})),k=(0,s.memo)((function(e){var n=e.children,t=e.className;return(0,c.jsx)("main",{className:"flex flex-col ".concat(t),children:n})})),j=t(3433),M=t(8683),N=t(4244),C=t.n(N),E={myNickname:"",messages:[],members:[]},S=function(e,n){switch(n.type){case"CHAT_INIT_MESSAGES":return(0,M.Z)((0,M.Z)({},e),{},{messages:n.payload});case"CHAT_ADD_MESSAGE":return(0,M.Z)((0,M.Z)({},e),{},{messages:[].concat((0,j.Z)(e.messages),[n.payload])});case"CHAT_SET_MEMBERS":return(0,M.Z)((0,M.Z)({},e),{},{members:n.payload});case"CHAT_ADD_MEMBER":return(0,M.Z)((0,M.Z)({},e),{},{members:[].concat((0,j.Z)(e.members),[n.payload])});case"CHAT_SET_MY_NICKNAME":return(0,M.Z)((0,M.Z)({},e),{},{myNickname:n.payload});case"CHAT_JOIN_MEMBER":return(0,M.Z)((0,M.Z)({},e),{},{messages:[].concat((0,j.Z)(e.messages),[(0,M.Z)((0,M.Z)({type:"join",id:C().generate()},n.payload),{},{timestamp:Date.now()})])});case"CHAT_LEAVE_MEMBER":return(0,M.Z)((0,M.Z)({},e),{},{messages:[].concat((0,j.Z)(e.messages),[(0,M.Z)((0,M.Z)({type:"leave",id:C().generate()},n.payload),{},{timestamp:Date.now()})])});default:return e}},Z=function(e){return(0,M.Z)((0,M.Z)({type:"message",id:C().generate()},e),{},{timestamp:Date.now()})},A=t(6575),_=t(7892),T=t.n(_),I=(0,s.memo)((0,s.forwardRef)((function(e,n){var t=e.messages,r=e.myNickname,a=(0,s.useRef)(null),o=(0,s.useMemo)((function(){return g().sortBy(t,"timestamp")}),[t]);(0,s.useImperativeHandle)(n,(function(){return{scrollToBottom:function(){var e;null===(e=a.current)||void 0===e||e.scrollTo({top:a.current.scrollHeight,behavior:"smooth"})}}}));var i="",l=null;return(0,c.jsx)("ul",{ref:a,className:"flex flex-col-reverse h-full gap-2 p-5 overflow-auto",children:o.reduce((function(e,n){var t=n.nickname===r,s=T()(n.timestamp).format("YYYY.MM.DD (ddd)");return i!==s&&(i=s,e.push((0,c.jsx)(R,{date:s},s))),"join"===n.type||"leave"===n.type?(e.push((0,c.jsx)(H,{message:n},n.id)),e):l&&l.nickname===n.nickname&&Math.abs(T()(l.timestamp).diff(n.timestamp))<6e4?(e.push((0,c.jsx)(D,{message:n,isMine:t,contentOnly:!0},n.id)),e):(l=n,e.push((0,c.jsx)(D,{message:n,isMine:t},n.id)),e)}),[]).reverse()})}))),R=(0,s.memo)((function(e){var n=e.date;return(0,c.jsxs)("div",{className:"flex justify-center items-center text-gray-400 px-1 pt-2",children:[(0,c.jsx)(f.fC0,{className:"inline-block text-lg mr-1 text-green-500"}),(0,c.jsx)("span",{className:"text-sm",children:n})]})})),D=(0,s.memo)((function(e){var n=e.message,t=e.isMine,r=e.contentOnly,a=(0,s.useMemo)((function(){return t?"self-end items-end":"self-start items-start"}),[t]),o=(0,s.useMemo)((function(){return t?"bg-blue-500 text-white":"bg-white"}),[t]),i=(0,s.useMemo)((function(){return r?"":"pt-1"}),[r]);return(0,c.jsxs)("li",{className:"flex flex-col gap-1 px-1 ".concat(i," ").concat(a),children:[!r&&(0,c.jsxs)("div",{className:"flex gap-2 px-2 pt-1 items-center",children:[(0,c.jsx)("div",{className:"font-bold text-sm",children:n.nickname}),(0,c.jsx)("div",{className:"text-sm text-gray-400",children:T()(n.timestamp).format("hh:mm A")})]}),(0,c.jsx)("div",{className:"rounded-xl inline-block py-2 px-3 w-fit max-w-lg whitespace-pre-line ".concat(o),children:n.content})]},n.id)})),H=(0,s.memo)((function(e){var n=e.message,t=(0,s.useMemo)((function(){return"join"===n.type?"\uc785\uc7a5":"\ud1f4\uc7a5"}),[n.type]);return(0,c.jsxs)("li",{className:"text-center text-sm text-gray-500 my-2",children:[(0,c.jsx)("span",{className:"text-base",children:"\u2601\ufe0f"})," ",n.nickname," \ub2d8\uc774"," ",t,"\ud558\uc168\uc2b5\ub2c8\ub2e4."]})})),B=t(9180),O=t.n(B),L=(0,s.memo)((function(e){var n=e.members,t=e.myNickname,r=(0,s.useMemo)((function(){return[].concat((0,j.Z)(n.filter((function(e){return e.nickname===t}))),(0,j.Z)(n.filter((function(e){return e.nickname!==t}))))}),[n,t]);return(0,c.jsx)("ul",{className:"flex flex-col gap-3 py-6 px-3",children:r.map((function(e){return(0,c.jsx)(P,{member:e,isMe:e.nickname===t},e.nickname)}))})})),P=(0,s.memo)((function(e){var n=e.member,t=e.isMe,r=(0,s.useMemo)((function(){return t?"bg-slate-400 rounded-lg":""}),[t]);return(0,c.jsxs)("li",{className:"flex p-3 gap-3 text-white ".concat(r),children:[(0,c.jsx)(O(),{email:n.nickname,size:40,default:"mp",className:"rounded-lg"}),(0,c.jsx)("div",{title:n.nickname,className:"flex items-center whitespace-nowrap overflow-hidden text-ellipsis",children:n.nickname})]})})),G=function(e,n,t){var r;t.onopen=function(){console.log("Connected to the chat server")},t.onclose=function(){console.log("Disconnected from the chat server")};return{chatRoomId:e,nickname:n,ws:t,close:function(){r=setTimeout((function(){t.close()}),100)},cancel:function(){clearTimeout(r)},isSame:function(t){return e===t.chatRoomId&&n===t.nickname},isClosed:function(){return t.readyState===WebSocket.CLOSED||t.readyState===WebSocket.CLOSING}}},W=function(e,n){switch(e.type){case"clients":!function(e,n){n({type:"CHAT_SET_MEMBERS",payload:e.clients})}(e,n);break;case"join":!function(e,n){n({type:"CHAT_JOIN_MEMBER",payload:{nickname:e.nickname}}),n({type:"CHAT_SET_MEMBERS",payload:e.clients})}(e,n);break;case"leave":!function(e,n){n({type:"CHAT_LEAVE_MEMBER",payload:{nickname:e.nickname}}),n({type:"CHAT_SET_MEMBERS",payload:e.clients})}(e,n);break;case"message":!function(e,n){n({type:"CHAT_ADD_MESSAGE",payload:Z({nickname:e.nickname,content:e.message})})}(e,n)}},Y=t(2152),F=(0,s.memo)((function(){(0,Y.Z)();var e=(0,a.UO)().roomId,n=x().isSmall,t=(0,a.s0)(),m=(0,s.useRef)(null),f=(0,s.useRef)(null),d=(0,s.useState)(!n),h=(0,r.Z)(d,2),v=h[0],g=h[1],b=function(e){var n=(0,s.useReducer)(S,E),t=(0,r.Z)(n,2),a=t[0],c=a.messages,o=a.members,i=a.myNickname,l=t[1],u=(0,s.useCallback)((function(n){e&&"CHAT_ADD_MESSAGE"===n.type&&A.U.saveMessages(e,[].concat((0,j.Z)(c),[n.payload])),l(n)}),[e,c]);return(0,s.useLayoutEffect)((function(){e&&A.U.getMessagesByRoomId(e).then((function(e){l({type:"CHAT_INIT_MESSAGES",payload:e})}))}),[e]),{messages:c,members:o,myNickname:i,dispatch:u}}(e),y=b.messages,M=b.members,N=b.myNickname,C=b.dispatch,_=function(e,n){var t=(0,s.useRef)(null),r=(0,s.useRef)();(0,s.useLayoutEffect)((function(){var s,a;if(e&&n){if(null===(s=t.current)||void 0===s||!s.isSame({chatRoomId:e,nickname:n})||null!==(a=t.current)&&void 0!==a&&a.isClosed()){var c=window.location.host,o="https:"===window.location.protocol?"wss:":"ws:",i="".concat(o,"//").concat(c,"/chat/").concat(e,"?nickname=").concat(n),l=new WebSocket(i);return t.current=G(e,n,l),r.current&&(t.current.ws.onmessage=function(e){var n,t=JSON.parse(e.data);null===(n=r.current)||void 0===n||n.call(r,t)}),function(){var e;null===(e=t.current)||void 0===e||e.close()}}var u;null===(u=t.current)||void 0===u||u.cancel()}}),[e,n]);var a=(0,s.useCallback)((function(e){r.current=e}),[]),c=(0,s.useCallback)((function(e){var n;null===(n=t.current)||void 0===n||n.ws.send(e)}),[]),o=(0,s.useCallback)((function(){var e;null===(e=t.current)||void 0===e||e.close()}),[]);return{connection:t.current,sendMessage:c,leave:o,registMessageHandler:a}}(e,N),T=_.sendMessage,R=_.leave;(0,_.registMessageHandler)((function(e){W(e,C)}));var D=(0,s.useMemo)((function(){return"flex-1"}),[v]),H=(0,s.useMemo)((function(){return v?"w-full sm:w-72":"w-0"}),[v]),B=(0,s.useCallback)((function(){g((function(e){return!e}))}),[]),O=(0,s.useCallback)((function(e){if(N){T(e);var n=Z({content:e,nickname:N});C({type:"CHAT_ADD_MESSAGE",payload:n})}}),[T,C,N]),P=(0,s.useCallback)((function(){R(),t("/")}),[R,t]);return(0,s.useEffect)((function(){if(!N&&e){var n=prompt("\ub2c9\ub124\uc784\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694");if(!n)return alert("\ub2c9\ub124\uc784\uc740 \ud544\uc218 \uc785\ub825\uc785\ub2c8\ub2e4"),void t("/");(function(e,n){return fetch("/api/chat-rooms/".concat(e,"/check-nickname?nickname=").concat(n)).then((function(e){return e.json()})).then((function(e){return e.available})).catch((function(e){return console.error("Failed to check nickname availability:",e),!1}))})(e,n).then((function(e){e?C({type:"CHAT_SET_MY_NICKNAME",payload:n}):(alert("\uc774\ubbf8 \uc0ac\uc6a9\uc911\uc778 \ub2c9\ub124\uc784\uc785\ub2c8\ub2e4"),t("/"))}))}}),[]),(0,s.useEffect)((function(){var e,n;null===(e=m.current)||void 0===e||e.scrollToBottom(),null===(n=f.current)||void 0===n||n.scrollIntoView({block:"end"})}),[y]),(0,c.jsx)(o,{children:(0,c.jsxs)(l,{children:[(0,c.jsxs)(i,{children:[(0,c.jsx)(p,{title:null!==e&&void 0!==e?e:"",memberCount:M.length,isOpenMembers:v,toggleOpenMembers:B,onLeave:P}),(0,c.jsxs)("div",{ref:f,className:"relative flex-1 flex bg-slate-100 h-1",children:[(0,c.jsxs)(k,{className:D,children:[(0,c.jsx)("section",{className:"flex-1 h-1",children:(0,c.jsx)(I,{ref:m,messages:y,myNickname:N})}),(0,c.jsx)("section",{className:"bg-white",children:(0,c.jsx)(w,{disabled:!N,onSend:O})})]}),(0,c.jsx)("aside",{className:"".concat(H," absolute right-0 sm:relative h-full bg-slate-500 transition-all overflow-auto"),children:(0,c.jsx)(L,{members:M,myNickname:N})})]})]}),!n&&(0,c.jsx)(u,{})]})})})),z=F},6575:function(e,n,t){t.d(n,{U:function(){return f}});var r=t(4165),s=t(5861),a=t(763),c=t.n(a),o=function(){return new Promise((function(e,n){var t=window.indexedDB.open("ChatDB",1);t.onerror=function(e){console.error("IndexedDB\uc5d0 \uc811\uadfc\ud558\ub294 \ub3d9\uc548 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."),n("\uc624\ub958")},t.onsuccess=function(n){var t=n.target.result;e(t)},t.onupgradeneeded=function(e){e.target.result.createObjectStore("Chats",{keyPath:"roomId"}).createIndex("roomId","roomId",{unique:!0})}}))},i=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n,t){var s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o();case 2:return s=e.sent,e.abrupt("return",new Promise((function(e,r){var a=s.transaction("Chats","readwrite").objectStore("Chats"),c=a.get(n);c.onsuccess=function(s){var c=s.target.result;(c=c||{roomId:n,messages:[]}).messages=t;var o=a.put(c);o.onerror=function(e){console.error("\uba54\uc2dc\uc9c0\ub97c \uc800\uc7a5\ud558\ub294 \ub3d9\uc548 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."),r("\uc624\ub958")},o.onsuccess=function(n){e()}},c.onerror=function(e){console.error("\ucc44\ud305\ubc29 \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294 \ub3d9\uc548 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."),r("\uc624\ub958")}})));case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),l=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o();case 2:return n=e.sent,e.abrupt("return",new Promise((function(e,t){var r=n.transaction("Chats","readonly").objectStore("Chats").getAll();r.onsuccess=function(n){var t=n.target.result.map((function(e){var n=c().sortBy(e.messages,"timestamp").pop();return{roomId:e.roomId,latestMessage:n}})).filter((function(e){return e.latestMessage}));e(t)},r.onerror=function(e){console.error("\uc804\uccb4 \ucc44\ud305\ubc29 \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294 \ub3d9\uc548 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."),t("\uc624\ub958")}})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o();case 2:return t=e.sent,e.abrupt("return",new Promise((function(e,r){var s=t.transaction("Chats","readonly").objectStore("Chats").get(n);s.onsuccess=function(n){var t=n.target.result,r=t?t.messages:[];e(r)},s.onerror=function(e){console.error("\ucc44\ud305\ubc29 \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294 \ub3d9\uc548 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."),r("\uc624\ub958")}})));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),m=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o();case 2:return t=e.sent,e.abrupt("return",new Promise((function(e,r){var s=t.transaction("Chats","readwrite").objectStore("Chats").delete(n);s.onsuccess=function(n){e()},s.onerror=function(e){console.error("\ucc44\ud305\ubc29\uc744 \uc0ad\uc81c\ud558\ub294 \ub3d9\uc548 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."),r("\uc624\ub958")}})));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f={saveMessages:i,getAllChatRooms:l,getMessagesByRoomId:u,deleteChatRoom:m}}}]);
//# sourceMappingURL=805.83907caa.chunk.js.map