(window["webpackJsonpreact-antd"]=window["webpackJsonpreact-antd"]||[]).push([[20],{1097:function(e,t,a){},1098:function(e,t,a){},1121:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),c=a(65),i=a(51),o=a(0),s=a.n(o),l=a(74),u=a(894),m=a(711),d=a(82),f=a(843),E=a.n(f),p=a(1107),v=a(1106),b=a(1105),g=a(100),k=a.n(g),y=a(121),w=a(10),j=a(14);a(1097);function I(e){var t=e.data,a=e.mentions;return s.a.createElement("div",{className:"listContent"},s.a.createElement("div",{className:"description"},t),s.a.createElement("div",{className:"extra"},a.map((function(e){return s.a.createElement(y.a,{key:e._id,user:e.idUser})}))))}a(1098),t.default=function(e){var t=e.userInfo,a=Object(o.useState)(!1),n=Object(i.a)(a,2),f=n[0],g=n[1],O=Object(o.useState)(""),h=Object(i.a)(O,2),x=h[0],N=h[1],B=Object(d.c)((function(e){return e.postReducer.postsById})),M=Object(d.c)((function(e){return e.postReducer.hasMoreItemsById})),P=Object(d.c)((function(e){return e.postReducer.nextPageById})),R=Object(d.b)(),S=Object(l.g)(),U=j.a.tokenConfigs.getIdUser(),C=function(e){var t=e.icon,a=e.text;return s.a.createElement("span",null,t," ",a)},A=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N(t.url),g(!0);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(e){console.log(e)};return s.a.createElement(s.a.Fragment,null,s.a.createElement(E.a,{pageStart:P,loadMore:function(){if(0!==Object.keys(t).length){R(w.a.postActions.fetchPostById(U,P,10,S))}},hasMore:M},s.a.createElement(u.a,{size:"large",className:"articleList",rowKey:"id",itemLayout:"vertical",dataSource:B,renderItem:function(e){return s.a.createElement(u.a.Item,{key:e.id,actions:[s.a.createElement(C,{key:"like",icon:s.a.createElement(p.a,null),text:e.like}),s.a.createElement(C,{key:"dislike",icon:s.a.createElement(v.a,null),text:e.star}),s.a.createElement(C,{key:"message",icon:s.a.createElement(b.a,null),text:e.message})],extra:[s.a.createElement(y.b,{key:"more"})]},s.a.createElement(u.a.Item.Meta,{title:t.nickname,avatar:s.a.createElement(m.a,{src:t.avatar}),description:k()(e.createdAt).fromNow()}),s.a.createElement(I,{data:e.content,mentions:e.mentions}),s.a.createElement(y.i,{images:e.images,idUser:e.idUser,onPreview:A,onRemove:J}))}},M&&s.a.createElement("div",{className:"listPost-loading-content"},s.a.createElement(y.c,null)))),s.a.createElement(y.h,{handleCancel:function(){return g(!1)},previewImage:x,previewVisible:f}))}}}]);