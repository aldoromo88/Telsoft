webpackJsonp([1],{146:function(e,t,n){var i=n(19)(n(150),n(153),null,null,null);e.exports=i.exports},148:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var i=n(34),l=n.n(i),r=n(21),s={ClientAdded:"ClientAdded",ClientEdited:"ClientEdited",ClientsFeeded:"FeedClients",ClientLoaded:"ClientLoaded"},d={Search:"Search"},u={Clients:null,CurrentClient:null,ClientAddedResult:null},c={Clients:function(e){return e.Clients},CurrentClient:function(e){return e.CurrentClient},ClientAddedResult:function(e){return e.ClientAddedResult}},a=l()({},d.Search,function(e,t){var n=e.commit;axios.post("api/clients/search",t).then(function(e){n(s.ClientsFeeded,e.data)})}),o=l()({},s.ClientsFeeded,function(e,t){e.Clients=t});r.a.registerModule("clients",{state:u,getters:c,actions:a,mutations:o})},150:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(148);t.default={name:"client-browse",data:function(){return{msg:"Clientes"}},mounted:function(){this.$store.clients.dispatch(i.a.Seach,new{Page:1,Size:10})}}},153:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v("\n  "+e._s(e.msg)+"\n")])},staticRenderFns:[]}}});
//# sourceMappingURL=1.bbf38b3058fe584a6e5b.js.map