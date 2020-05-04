(this["webpackJsonpmusic-app"]=this["webpackJsonpmusic-app"]||[]).push([[0],{64:function(e,t,a){e.exports=a(74)},69:function(e,t,a){},70:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(10),l=a.n(i),r=(a(69),a(35)),c=a(36),s=a(42),u=a(43),m=(a(70),a(108)),d=a(112);var p=function(){return o.a.createElement(m.a,{position:"static"},o.a.createElement(d.a,null,"Music App"))},h=a(114),g=a(113);var E=function(e){return o.a.createElement("div",{style:{width:"35%",paddingTop:"55px"}},o.a.createElement("form",{onSubmit:function(t){return e.onLogin(t)}},o.a.createElement(g.a,{fullWidth:!0,placeholder:"Username *"}),o.a.createElement("br",null),o.a.createElement(g.a,{type:"password",fullWidth:!0,placeholder:"Password *"}),o.a.createElement("br",null),o.a.createElement(h.a,{type:"submit",fullWidth:!0,style:{marginTop:"15px"},color:"primary",variant:"contained"},"Submit")))},f=a(44),v=a(115),y=a(118),b=a(117),w=a(32),x=a(116),S=a(119),C=a(123);var O=function(e){return o.a.createElement(v.a,{style:{padding:"10px 0px 3px 0px"}},o.a.createElement(x.a,{title:"Online Mode",style:{paddingBottom:"0"}}),o.a.createElement(b.a,null,o.a.createElement(w.a,{variant:"body1",style:{marginBottom:"25px"}},"Is this application connected to the internet?")),o.a.createElement(y.a,null,o.a.createElement(S.a,{style:{paddingLeft:"5px"},control:o.a.createElement(C.a,{onChange:e.toggleSwitch})})))},j=a(124);var k=function(e){return o.a.createElement(v.a,{style:{padding:"10px 0px 13px 0px "}},o.a.createElement(x.a,{title:"Master Volume",style:{paddingBottom:"0"}}),o.a.createElement(b.a,null,o.a.createElement(w.a,{variant:"body1",style:{marginBottom:"25px"}},"Overrides all other sound settings in this application")),o.a.createElement(y.a,null,o.a.createElement(j.a,{onChange:function(t,a){return e.volumeChange(a)},defaultValue:30,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:10,marks:!0,min:0,max:100})))},L=a(125),W=a(120),B=a(122);var I=function(e){return o.a.createElement(v.a,{style:{padding:"10px 0px"}},o.a.createElement(x.a,{title:"Sound Quality",style:{paddingBottom:"0"}}),o.a.createElement(b.a,null,o.a.createElement(w.a,{variant:"body1"},"Manually control the music quality in the event of poor connection")),o.a.createElement(y.a,null,o.a.createElement(W.a,{fullWidth:!0},o.a.createElement(B.a,{onChange:function(t){return e.dropdownChange(t.target.value)},value:e.soundQuality},o.a.createElement(L.a,{value:1},"Low"),o.a.createElement(L.a,{value:2},"Normal"),o.a.createElement(L.a,{value:3},"High")))))};var M=function(e){return o.a.createElement("div",{className:"scrollContainer"},o.a.createElement("div",{className:"notificationContainer"},e.notifications.map((function(e,t){return o.a.createElement("div",{key:t},o.a.createElement("h5",null,e))}))))},Q=a(121),A=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={online:!0,volume:30,soundQuality:2,notifications:[]},e.toggleSwitch=function(){var t=!e.state.online;t&&e.setState({notifications:[].concat(Object(f.a)(e.state.notifications),["Your application is offline. You won't be able to share or stream music to other devices."])}),e.setState({online:t})},e.volumeChange=function(t){t>=80&&e.setState({notifications:[].concat(Object(f.a)(e.state.notifications),["Listening to music at a high volume could cause long-term hearing loss."])}),e.setState({volume:t})},e.dropdownChange=function(t){1===t&&e.setState({notifications:[].concat(Object(f.a)(e.state.notifications),["Music quality is degraded. Increase quality if your connection allows it."])}),e.setState({soundQuality:t})},e}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{style:{maxWidth:"850px",margin:"25px"}},o.a.createElement("h2",{style:{color:"gray"}},"Welcome, User!"),o.a.createElement(Q.a,{container:!0,direction:"row",spacing:6,justify:"center",style:{padding:"10px"}},o.a.createElement(Q.a,{item:!0,xs:8,sm:4},o.a.createElement(O,{toggleSwitch:this.toggleSwitch})),o.a.createElement(Q.a,{item:!0,xs:8,sm:4},o.a.createElement(k,{volumeChange:this.volumeChange})),o.a.createElement(Q.a,{item:!0,xs:8,sm:4},o.a.createElement(I,{dropdownChange:this.dropdownChange,soundQuality:this.state.soundQuality}))),o.a.createElement("h3",null,"System notifications:"),o.a.createElement(M,{notifications:this.state.notifications}))}}]),a}(o.a.Component),N=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={loggedIn:!1},e.onLogin=function(t){t.preventDefault(),e.setState({loggedIn:!0})},e}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(p,null),this.state.loggedIn?o.a.createElement(A,null):o.a.createElement(E,{onLogin:this.onLogin}))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[64,1,2]]]);
//# sourceMappingURL=main.81d3e220.chunk.js.map