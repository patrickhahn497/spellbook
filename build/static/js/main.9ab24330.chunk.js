(this.webpackJsonpspellbook=this.webpackJsonpspellbook||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(2),c=n.n(r),s=(n(13),n(3)),o=n(4),i=n(6),h=n(5),u=n(7),m=(n(14),n(15),n(16),n(17),function(e){e.searchfield;var t=e.searchChange,n=e.searchClick,a=e.onEnter;return l.a.createElement("div",{className:"pa2"},l.a.createElement("form",null,l.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search spells",id:"input1",onChange:t,onKeyPress:a}),l.a.createElement("button",{type:"button",className:"searchbutton",onClick:n},"Search")))}),p=(n(18),function(e){var t=e.name,n=e.desc,a=e.range,r=e.level,c=e.higher_level,s=e.duration,o=e.concentration,i=e.casting_time;return l.a.createElement("div",{className:"bg-yellow dib br1 pa3 ma2 grow bw2 shadow5"},l.a.createElement("h2",null," ",l.a.createElement("b",null,"Name:")," ",t," "),l.a.createElement("p",null," ",l.a.createElement("b",null,"Description: "),n," "),l.a.createElement("p",null," ",l.a.createElement("b",null,"Higher Level: ")," ",c," "),l.a.createElement("p",null," ",l.a.createElement("b",null,"Level: ")," ",r," "),l.a.createElement("p",null," ",l.a.createElement("b",null,"Duration: ")," ",s," "),l.a.createElement("p",null," ",l.a.createElement("b",null,"Concentration: ")," ",o," "),l.a.createElement("p",null," ",l.a.createElement("b",null,"Casting Time: ")," ",i," "),l.a.createElement("p",null," ",l.a.createElement("b",null,"Range: ")," ",a,"  "))}),f=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(h.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value}),console.log("searchfield: "+e.state.searchfield)},e.search=function(){e.urlifySpell(e.state.searchfield),e.state.searchUrl&&fetch(e.state.searchUrl).then((function(e){return e.json()})).then((function(t){return e.setState({result:t})})),console.log(e.urlifySpell(e.state.searchfield))},e.onSearchClick=function(t){e.search()},e.onEnter=function(t){13!=t.which&&13!=t.keyCode||(t.preventDefault(),e.search())},e.state={searchfield:"",result:{name:"",desc:"",range:"",level:null},searchUrl:""},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"urlifySpell",value:function(e){var t=this,n="http://www.dnd5eapi.co/api/spells/?name="+e.split(" ").join("+");fetch(n).then((function(e){return e.json()})).then((function(e){e.count>=1?t.setState({searchUrl:e.results[0].url}):window.alert("No result found")})),console.log("spellurl "),console.log("searchurl "+this.state.searchurl)}},{key:"render",value:function(){var e=this.state.result,t=e.name,n=e.desc,a=e.range,r=e.level,c=e.higher_level,s=e.duration,o=e.concentration,i=e.casting_time;return l.a.createElement("div",{className:"tc"},l.a.createElement("h1",{className:"tc title"},"Spellbook"),l.a.createElement("p",null," Click twice if search results don't come in the first time. The oracle needs time to browse the spell library "),l.a.createElement("p",null," If the spell isn't here, it's because it's a Xanathar spell. The oracle does not have access to those"),l.a.createElement(m,{searchClick:this.onSearchClick,searchfield:this.state.searchfield,searchChange:this.onSearchChange,onEnter:this.onEnter}),l.a.createElement(p,{name:t,desc:n,range:a,level:r,higher_level:c,duration:s,concentration:o,casting_time:i}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.9ab24330.chunk.js.map