(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(7),o=n.n(r),i=(n(15),n(1)),u=n(2),c=n(4),s=n(3),m=n(5),h=(n(16),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={wavesurfer:null,isPlaying:!1},n.togglePlaying=function(){var e=n.state,t=e.wavesurfer,a=e.isPlaying;a?t.pause():(t.play(),document.querySelector(".ws-player button").classList.add("animate"),setTimeout(function(){document.querySelector(".ws-player button").classList.remove("animate")},5e3)),n.setState({isPlaying:!a})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=window.WaveSurfer.create({container:"#waveforms",waveColor:"navy",progressColor:"purple",barWidth:2,height:240,maxCanvasWidth:300,scrollParent:!0});e.load("https://pawnjefferson.github.io/trackz/dol.mp3"),e.on("finish",this.togglePlaying),this.setState({wavesurfer:e})}},{key:"render",value:function(){var e=this.state.isPlaying;return l.a.createElement("div",{className:"ws-player"},l.a.createElement("button",{onClick:this.togglePlaying},e?"| |":" \u25ba "),l.a.createElement("div",{style:{padding:"10px"}},l.a.createElement("div",{id:"waveforms"})))}}]),t}(l.a.Component)),d=n(8),b=n.n(d),g=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).setWaveFormWidth=function(){var e=Number(window.getComputedStyle(document.querySelector(".ws-player")).width.slice(0,-2));document.getElementById("waveforms").style.width="".concat(e-300,"px")},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setWaveFormWidth(),window.onresize=this.setWaveFormWidth}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h,{src:"dol.mp3"}),l.a.createElement("div",{className:"two-column"},l.a.createElement("img",{src:b.a,className:"track-art"}),l.a.createElement("div",null,l.a.createElement("h1",null,'"Down on Love"'),l.a.createElement("h3",null,"by Helios Hype"),l.a.createElement("strong",null,l.a.createElement("a",{href:"https://pawnjefferson.github.io/trackz/dol.mp3",download:"dol.mp3"},"mp3 download")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("pre",null,"I was thinking of the sun",l.a.createElement("br",null),"Just waiting for my little slice of pie ",l.a.createElement("br",null),"Wondering where she\u2019s gone today",l.a.createElement("br",null),"All I can remember\u2019s yesterday",l.a.createElement("br",null),l.a.createElement("br",null),"I was a dreamer down on love",l.a.createElement("br",null),"I was a dreamer down on love",l.a.createElement("br",null),"Just thinking bout something else tonight",l.a.createElement("br",null),"Just hoping for someone else tonight",l.a.createElement("br",null),l.a.createElement("br",null),"When I\u2019m thinking of the moon",l.a.createElement("br",null),"It makes my ladies wanna swoon",l.a.createElement("br",null),"Turn me round, start again",l.a.createElement("br",null),"It\u2019s all left in the wind",l.a.createElement("br",null),l.a.createElement("br",null),"I was a dreamer down on love",l.a.createElement("br",null),"I was a dreamer down on love",l.a.createElement("br",null),"Just thinking bout something else tonight",l.a.createElement("br",null),"Just hoping for someone else tonight",l.a.createElement("br",null),l.a.createElement("br",null),"\u2018Cause thinkin bout the sun will make you feel alright",l.a.createElement("br",null),"\u2018Cause thinkin bout the sun will make you feel alright",l.a.createElement("br",null),l.a.createElement("br",null),"When I\u2019m out there on the edge",l.a.createElement("br",null),"It makes me thankful fo be with you",l.a.createElement("br",null),"Taking in all that\u2019s right",l.a.createElement("br",null),"It makes me love that morning light",l.a.createElement("br",null),l.a.createElement("br",null),"I was a dreamer down on love",l.a.createElement("br",null),"I was a dreamer down on love",l.a.createElement("br",null),"Just thinking bout something else tonight",l.a.createElement("br",null),"Just hoping for someone else tonight",l.a.createElement("br",null),l.a.createElement("br",null),"\u2018Cause thinkin bout the sun will make you feel alright",l.a.createElement("br",null),"And thinkin bout the sun will make you feel alright ",l.a.createElement("br",null),l.a.createElement("br",null),"On and on and on and on",l.a.createElement("br",null),"On and on and on and on",l.a.createElement("br",null),l.a.createElement("br",null),"It\u2019s everything you want and everything you needed!",l.a.createElement("br",null),"It\u2019s everything you want and anything you needed!",l.a.createElement("br",null),"It\u2019s everything you want and everything you needed!",l.a.createElement("br",null),"It\u2019s everything you want and everything you needed!"),l.a.createElement("br",null))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n.p+"static/media/dol.c62b39cb.jpg"},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.ab6e03d8.chunk.js.map