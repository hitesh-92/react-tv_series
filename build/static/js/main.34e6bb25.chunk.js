(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n.p+"static/media/loader.17d6ec19.gif"},20:function(e,t,n){e.exports=n(43)},29:function(e,t,n){},32:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(17),i=n.n(s),c=(n(29),n(5)),o=n(6),l=n(8),m=n(7),u=n(9),h=n(47),f=n(46),p=(n(31),n(32),n(44)),d=function(e){var t=e.series;return r.a.createElement("li",null,r.a.createElement(p.a,{className:"series-link",to:"/series/".concat(t.show.id)},t.show.name))},g=function(e){return r.a.createElement("div",null,r.a.createElement("ul",{className:"series-list"},e.list.map(function(e){return r.a.createElement(d,{series:e,key:e.show.id})})))},E=n(18),v=n.n(E),w=function(e){return r.a.createElement("div",null,r.a.createElement("img",{style:{width:75},alt:"loader icon",src:v.a}))},N=function(e){return r.a.createElement("p",{className:"App-intro"},e.message)},b=(n(36),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={series:[],seriesName:"",isFetching:!1},n.onSeriesInputChange=function(e){n.setState({seriesName:e.target.value,isFetching:!0}),fetch("http://api.tvmaze.com/search/shows?q=".concat(e.target.value)).then(function(e){return e.json()}).then(function(e){n.setState({series:e,isFetching:!1})}).catch(function(e){console.log(e)}),console.log(e),console.log(e.target.value)},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.series,n=e.seriesName,a=e.isFetching;return r.a.createElement("div",{className:"home-body"},r.a.createElement(N,{message:"Here you can find info about every series"}),r.a.createElement("div",{className:"search-bar"},r.a.createElement("input",{value:n,type:"text",onChange:this.onSeriesInputChange,placeholder:"Enter show name",autoFocus:!0})),!a&&0===t.length&&""===n.trim()&&r.a.createElement("p",{className:"search-message"},"Please enter series name into input"),!a&&0===t.length&&""!==n.trim()&&r.a.createElement("p",{className:"search-message red"},"NOT FOUND!"),a&&r.a.createElement(w,null),!a&&r.a.createElement(g,{list:this.state.series}))}}]),t}(a.Component)),y=(n(38),function(e){return r.a.createElement("p",null," ",e.summary.replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g,"")," ")}),k=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={show:null},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;fetch("http://api.tvmaze.com/shows/".concat(t,"?embed=episodes")).then(function(e){return e.json()}).then(function(t){e.setState({show:t})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this.state.show;return console.log(e),r.a.createElement("div",{className:"single-show"},null==e&&r.a.createElement(w,null),null!==e&&r.a.createElement("template",{className:"seriesInfo"},r.a.createElement("div",{className:"show-name"},r.a.createElement("h2",null,e.name)),r.a.createElement("div",{className:"show-img"},null!==e.image&&e.image.medium&&r.a.createElement("img",{alt:"show",src:e.image.medium}),null==e.image&&r.a.createElement("i",null,"NO IMAGE")),r.a.createElement("div",{className:"show-details"},r.a.createElement("p",null," ",r.a.createElement("span",{className:"info"}," Rating: ")," ",e.rating.average||"N/A"),r.a.createElement("p",null," ",r.a.createElement("span",{className:"info"}," Premeiered: ")," ",e.premiered),r.a.createElement("p",null," ",r.a.createElement("span",{className:"info"}," Status:")," ",e.status," "),r.a.createElement("p",null," ",r.a.createElement("span",{className:"info"}," Episodes: "),"  ",e._embedded.episodes.length),r.a.createElement("p",null,r.a.createElement("span",{className:"info"}," Episode runtime ",r.a.createElement("span",null,r.a.createElement("small",null,"(mins)"))," ")," : ",e.runtime||"N/A"),e.generes&&r.a.createElement("p",null,e.generes+" "),e.externals.imdb&&r.a.createElement("a",{href:"http://www.imdb.com/title/".concat(e.externals.imdb),target:"_blank",className:"series-imdb",rel:"noopener noreferrer",id:"imdb_link"},"View IMDb"),e.officialSite&&r.a.createElement("a",{className:"series-offLink",href:e.officialSite},"View Official Site")),r.a.createElement("div",{className:"show-summary"},e.summary&&r.a.createElement(y,{summary:e.summary}),!e.summary&&r.a.createElement("p",null,"No reference to show description available")),r.a.createElement("div",{className:"link"},r.a.createElement(p.a,{to:"/"}," Go Back "))))}}]),t}(a.Component),O=function(e){return r.a.createElement(h.a,null,r.a.createElement(f.a,{exact:!0,path:"/",component:b}),r.a.createElement(f.a,{path:"/series/:id",component:k}))},j=(n(41),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{className:"App-title"},"TV Series Listings")),r.a.createElement(O,null),r.a.createElement("footer",{className:"App-footer"},r.a.createElement("small",null,"All information about all tv series viewed is from http://www.tvmaze.com/")))}}]),t}(a.Component)),A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var C=n(45);i.a.render(r.a.createElement(C.a,null,r.a.createElement(j,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");A?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):S(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):S(e)})}}()}},[[20,2,1]]]);
//# sourceMappingURL=main.34e6bb25.chunk.js.map