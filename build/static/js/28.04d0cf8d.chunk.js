(window["webpackJsonpreact-antd"]=window["webpackJsonpreact-antd"]||[]).push([[28],{1252:function(e,t,a){},1260:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(55),c=a(933),i=a.n(c),s=a(1269),d=a(109),u=a(210),l=a(7);a(1252);t.default=function(e){var t=e.userId,a=e.postsById,n=e.likePostHome,c=e.dislikePostHome,p=Object(r.c)((function(e){return e.postReducer.hasMoreItemsById})),m=Object(r.c)((function(e){return e.postReducer.nextPageById})),E=Object(r.b)();return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{pageStart:m,loadMore:function(){E(l.a.postActions.fetchPostById(t,m,10))},hasMore:p,initialLoad:!1,loader:o.a.createElement(s.a,{key:"loading",avatar:!0,paragraph:{rows:4},active:!0})},0!==a.length||p?a.map((function(e){return o.a.createElement(u.i,{key:e._id,post:e,likePostHome:n,dislikePostHome:c,idUser:t})})):o.a.createElement(d.a,{image:d.a.PRESENTED_IMAGE_SIMPLE})))}}}]);