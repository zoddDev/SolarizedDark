(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"B/zW":function(e,t,a){e.exports={button:"ff6a86a966a265b5a51cf8e30c6c52f4-scss",isFollowing:"_888a8dffe06d27b161f0258c2769069e-scss",disabled:"_6aefcff7cb52c3f836834566fbfae845-scss"}},BOhw:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a("8VmE"),s=a.n(n),c=a("mXGw"),l=a.n(c),o=a("yVym"),i=a("2Uh0");const r=e=>e,b=e=>l.a.createElement(o.b,s()({collect:r},e,{id:i.e,holdToDisplay:-1}))},BeiC:function(e,t,a){"use strict";a.d(t,"a",(function(){return k})),a.d(t,"b",(function(){return v}));var n=a("mXGw"),s=a.n(n),c=a("8Jek"),l=a.n(c),o=a("wJTk"),i=a.n(o),r=a("hGjs"),b=a("vdHo"),d=a("lf9x"),f=a("BOhw"),u=a("zO1y"),m=a("D1ra"),p=a("Rwoo"),y=a("B1ye"),E=a("rK0B"),O=a("k8st"),g=a.n(O),j=a("5F6m"),w=a("F1/t");let k;!function(e){e[e.xs=16]="xs",e[e.sm=24]="sm",e[e.md=32]="md"}(k||(k={}));const v=s.a.memo(({uri:e,onClick:t=(()=>{}),size:a=k.md,className:n,contextUri:c,index:o})=>{const{onLogInteraction:O}=Object(w.a)(),v=!Object(j.a)();let h;if(i.a.isAlbum(e))h=b.a;else if(i.a.isArtist(e))h=d.a;else if(i.a.isPlaylistV1OrV2(e))h=u.a;else if(i.a.isShow(e))h=m.a;else if(i.a.isTrack(e))h=p.a;else if(i.a.isEpisode(e))h=y.a;else if(i.a.isConcert(e))h=E.a;else if(i.a.isProfile(e)||i.a.isLocalTrack(e))h=E.a;else{if(!i.a.isApplication(e)||-1===e.indexOf("local-files"))return null;h=f.a}return s.a.createElement(h,{uri:e,holdToDisplay:0,onLogInteraction:O,isOffline:v,context:c,position:o},s.a.createElement("button",{type:"button",className:l()(g.a.button,n),title:r.b.get("more"),onClick:t},s.a.createElement("div",{className:"spoticon-ellipsis-"+a})))})},NY3G:function(e,t,a){"use strict";a.r(t),a.d(t,"UserPage",(function(){return F})),a.d(t,"UserPageContainer",(function(){return L}));var n=a("mXGw"),s=a.n(n),c=a("8Jek"),l=a.n(c),o=a("/m4v"),i=a("oNR1"),r=a("7oZZ"),b=a("Uj61"),d=a("m2ap"),f=a.n(d),u=a("OaJ5"),m=a("tX91"),p=a("oCOB"),y=a("9ttr"),E=a("odWe"),O=a("kpsr"),g=a("UUu7"),j=a("hGjs"),w=a("AlYL"),k=a("CNRc"),v=a("qeYJ"),h=a("sdUj"),C=a("BeiC"),B=a("F1/t"),_=a("5F6m"),A=a("IX2p"),U=a("Uyyi"),x=a("USNj"),N=a("Y34/");const G=Object(r.a)(x.d,(e,t)=>t,(e,t)=>e[t]),J=Object(r.a)(x.e,(e,t)=>t,(e,t)=>void 0===e[t]?null:e[t]),P=Object(r.a)(G,x.d,(e,t)=>(null==e?void 0:e.playlists)?{userPlaylists:e.playlists.items.map(e=>t[e]),totalPlaylists:e.playlists.total}:{userPlaylists:[],totalPlaylists:0}),F=e=>{var t;const{uri:a}=e,c=Object(i.g)(),r=Object(o.c)(),{onLogInteraction:d}=Object(B.a)(),x=Object(o.d)(N.a).color,F=!Object(_.a)(),L=Object(o.d)(U.a),X=Object(o.d)(e=>G(e,a)),Y=Object(o.d)(e=>J(e,a)),{userPlaylists:I,totalPlaylists:R}=Object(o.d)(e=>P(e,a)),T=Object(n.useCallback)(()=>{d({targetUri:a,intent:Y?"unfollow":"follow",type:"click"}),Y||r(Object(g.y)([a])),!0===Y&&r(Object(g.pb)([a]))},[r,d,a,Y]);Object(n.useEffect)(()=>{if(!X)return void r(Object(O.Ub)(a));const{display_name:e,id:t,images:n}=X;if(X.playlists||r(Object(O.Wb)(a)),Array.isArray(n)&&n.length>0){const[e]=n;r(Object(E.G)(e))}r(Object(E.I)(e||t))},[r,X,a,c.action]),Object(n.useEffect)(()=>{L.isAnonymous||null!==Y||r(Object(O.fb)([a]))});const W=Object(n.useCallback)(()=>{I.length===R||r(Object(O.Yb)(a))},[r,a,I,R]);if(!X)return s.a.createElement(w.a,{errorMessage:j.b.get("error.not_found.title.page")});const z=(null===(t=L.user)||void 0===t?void 0:t.uri)===a,S=F||null===Y&&!L.isAnonymous;return s.a.createElement(y.a,{onReachBottom:W},s.a.createElement("section",{className:l()("content",f.a.user)},s.a.createElement(u.b,{backgroundColor:x},s.a.createElement(m.a,null,s.a.createElement(p.a,{text:X.display_name||X.id})),s.a.createElement(u.e,{entity:X,shape:u.i.CIRCLE}),s.a.createElement(u.d,null,s.a.createElement(u.g,{small:!0,uppercase:!0},j.b.get("card.tag.profile")),s.a.createElement(u.h,null,X.display_name||X.id),s.a.createElement(u.f,{followers:X.followers,playlists:R}))),s.a.createElement(h.a,{backgroundColor:x},s.a.createElement(h.b,null,!z&&s.a.createElement(A.a,{id:A.b.entityHeaderAdd},s.a.createElement(v.a,{isFollowing:Boolean(Y),onClick:T,disabled:S})),s.a.createElement(C.b,{uri:X.uri}))),s.a.createElement("div",{className:"contentSpacing"},s.a.createElement(k.a,{as:"h2",variant:k.b.canon,color:"white",className:f.a.playlistsTitle},j.b.get("public_playlists")),s.a.createElement(b.a,{entities:I}))))},L=s.a.memo(()=>{const{userId:e}=Object(i.i)(),t="spotify:user:"+e;return s.a.createElement(F,{uri:t})});t.default=L},Uj61:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("mXGw"),s=a.n(n),c=a("/0yG"),l=a("qOe9"),o=a("pAAZ");const i=({entities:e=[]})=>0===e.length?null:s.a.createElement(c.b,{value:"EntitiesGrid"},s.a.createElement(o.a,{render:()=>e.map((e,t)=>{const a=Object(l.a)(e.uri);return s.a.createElement(c.b,{key:e.uri,value:"card",index:t},s.a.createElement(a,{entity:e}))})}))},k8st:function(e,t,a){e.exports={button:"_605821ce181f6de6632eabd6a46377fb-scss"}},m2ap:function(e,t,a){e.exports={navBarWidth:"232px",container:"ec9effb0ab2b27960f6db5d1169b56ab-scss",background:"bc900be9611f25e6fe66d077f454316e-scss",overlay:"df30ed1895ad10a8f34682a7759f9e76-scss",loggedOut:"_2eb691d82493c2d971ec5aa96692d1cc-scss",historyButtons:"_05eac744f34f6ea78e156797e2bd2d55-scss",icon:"_9e92dfa85d0a4b385e85c45a7a33c76a-scss",button:"_4185a6b106bbdb11364b65e2805a2ca1-scss",forward:"_5e8abacaae5aef2e3f75f79e97330bc7-scss",topbarContentWrapper:"b847cc2f9d0e2279fd35bab725b385e6-scss",topbarContent:"_5e500f46cb2c8af9309fe2b9b2510a92-scss",UpgradeButton:"_1defc7d70c0cb2dad1086f60f9012aff-scss",indicators:"_783725ad6ddfb9335323e60b644f1096-scss",contentArea:"d391e9ae569c5de43098b1a88376765a-scss",back:"e965171fd63547b8caf5bae0521a05e6-scss",user:"_77720f78c0f1bab2e74ae7241e9032bc-scss",playlistsTitle:"ebfe2367d7e59d27973db425a3c55e12-scss"}},oLY2:function(e,t,a){e.exports={ActionBar:"f39dd6caa689537bffdfc875c3f33d08-scss",ActionBarRow:"_95e9f2bdf9c64702a6123c2d6de8076b-scss"}},qeYJ:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a("mXGw"),s=a.n(n),c=a("hGjs"),l=a("8Jek"),o=a.n(l),i=a("B/zW"),r=a.n(i);const b=s.a.memo(({isFollowing:e,onClick:t,disabled:a=!1})=>{const n=e?c.b.get("following"):c.b.get("follow");return s.a.createElement("button",{type:"button",className:o()(r.a.button,{[r.a.isFollowing]:e,[r.a.disabled]:a}),onClick:t},n)})},sdUj:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a("mXGw"),s=a.n(n),c=a("8Jek"),l=a.n(c),o=a("oLY2"),i=a.n(o),r=a("zKkN");const b=({backgroundColor:e,children:t})=>s.a.createElement(s.a.Fragment,null,s.a.createElement(r.a,{backgroundColor:e}),s.a.createElement("div",{className:l()(i.a.ActionBar,"contentSpacing")},t)),d=({children:e})=>s.a.createElement("div",{className:i.a.ActionBarRow,"data-testid":"action-bar-row"},e)}}]);