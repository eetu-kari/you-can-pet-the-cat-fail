(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{278:function(e,t,n){},284:function(e,t){},285:function(e,t){},293:function(e,t){},296:function(e,t){},297:function(e,t){},298:function(e,t,n){},300:function(e,t,n){"use strict";n.r(t);var o=n(90),r=n(92),i=n.n(r),c=n(230),l=n.n(c),s=(n(278),n(4)),a=n.n(s),u=n(12),d=(n(299),n(250)),g=n(251),f=n.n(g),h=(n(298),{thumb:[0,1,2,3,4],indexFinger:[0,5,6,7,8],middleFinger:[0,9,10,11,12],ringFinger:[0,13,14,15,16],pinky:[0,17,18,19,20]}),p={0:{color:"yellow",size:15},1:{color:"gold",size:6},2:{color:"green",size:10},3:{color:"gold",size:6},4:{color:"gold",size:6},5:{color:"purple",size:10},6:{color:"gold",size:6},7:{color:"gold",size:6},8:{color:"gold",size:6},9:{color:"blue",size:10},10:{color:"gold",size:6},11:{color:"gold",size:6},12:{color:"gold",size:6},13:{color:"red",size:10},14:{color:"gold",size:6},15:{color:"gold",size:6},16:{color:"gold",size:6},17:{color:"orange",size:10},18:{color:"gold",size:6},19:{color:"gold",size:6},20:{color:"gold",size:6}},v=function(e,t){e.length>0&&e.forEach((function(e){for(var n=e.landmarks,o=0;o<Object.keys(h).length;o++)for(var r=Object.keys(h)[o],i=0;i<h[r].length-1;i++){var c=h[r][i],l=h[r][i+1];t.beginPath(),t.moveTo(n[c][0],n[c][1]),t.lineTo(n[l][0],n[l][1]),t.strokeStyle="plum",t.lineWidth=10,t.stroke()}for(var s=0;s<n.length;s++){var a=n[s][0],u=n[s][1];t.beginPath(),t.arc(a,u,p[s].size,0,3*Math.PI),t.fillStyle=p[s].color,t.fill()}}))};var z=function(){var e=Object(r.useRef)(null),t=Object(r.useRef)(null),n=function(){var e=Object(u.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a();case 2:t=e.sent,console.log("Handpose model loaded."),setInterval((function(){i(t)}),100);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var n=Object(u.a)(a.a.mark((function n(o){var r,i,c,l,s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("undefined"===typeof e.current||null===e.current||4!==e.current.video.readyState){n.next=14;break}return r=e.current.video,i=e.current.video.videoWidth,c=e.current.video.videoHeight,e.current.video.width=i,e.current.video.height=c,t.current.width=i,t.current.height=c,n.next=10,o.estimateHands(r);case 10:l=n.sent,console.log(l),s=t.current.getContext("2d"),v(l,s);case 14:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return n(),Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsx)(f.a,{ref:e,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zindex:9,width:640,height:480}}),Object(o.jsx)("canvas",{ref:t,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zindex:9,width:640,height:480}})]})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,301)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),o(e),r(e),i(e),c(e)}))};l.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(z,{})}),document.getElementById("root")),b()}},[[300,1,2]]]);
//# sourceMappingURL=main.018450ad.chunk.js.map