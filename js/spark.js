!function(){function t(){d=window.innerWidth,s=window.innerHeight,w={x:d/2,y:s/2},v=document.getElementById("large-header"),v.style.height=s+"px",f=document.getElementById("sb-canvas"),f.width=d,f.height=s,u=f.getContext("2d"),g=[];for(var t=0;d>t;t+=d/20)for(var e=0;s>e;e+=s/20){var i=t+Math.random()*d/20,n=e+Math.random()*s/20,a={x:i,originX:i,y:n,originY:n};g.push(a)}for(var o=0;o<g.length;o++){for(var r=[],c=g[o],m=0;m<g.length;m++){var y=g[m];if(c!=y){for(var M=!1,x=0;5>x;x++)M||void 0==r[x]&&(r[x]=y,M=!0);for(var x=0;5>x;x++)M||h(c,y)<h(c,r[x])&&(r[x]=y,M=!0)}}c.closest=r}for(var o in g){var b=new l(g[o],2+2*Math.random(),"rgba(255,255,255,0.3)");g[o].circle=b}}function e(){window.addEventListener("scroll",i),window.addEventListener("resize",n)}function i(){m=document.body.scrollTop>s?!1:!0}function n(){d=window.innerWidth,s=window.innerHeight,v.style.height=s+"px",f.width=d,f.height=s}function a(){o();for(var t in g)r(g[t])}function o(){if(m){u.clearRect(0,0,d,s);for(var t in g)Math.abs(h(w,g[t]))<4e3?(g[t].active=.3,g[t].circle.active=.6):Math.abs(h(w,g[t]))<2e4?(g[t].active=.1,g[t].circle.active=.3):Math.abs(h(w,g[t]))<4e4?(g[t].active=.02,g[t].circle.active=.1):(g[t].active=0,g[t].circle.active=0),c(g[t]),g[t].circle.draw()}requestAnimationFrame(o)}function r(t){TweenLite.to(t,1+1*Math.random(),{x:t.originX-50+100*Math.random(),y:t.originY-50+100*Math.random(),ease:Circ.easeInOut,onComplete:function(){r(t)}})}function c(t){if(t.active)for(var e in t.closest)u.beginPath(),u.moveTo(t.x,t.y),u.lineTo(t.closest[e].x,t.closest[e].y),u.strokeStyle="rgba(230,230,230,"+t.active+")",u.stroke()}function l(t,e,i){var n=this;!function(){n.pos=t||null,n.radius=e||null,n.color=i||null}(),this.draw=function(){n.active&&(u.beginPath(),u.arc(n.pos.x,n.pos.y,n.radius,0,2*Math.PI,!1),u.fillStyle="rgba(230,230,230,"+n.active+")",u.fill())}}function h(t,e){return Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)}var d,s,v,f,u,g,w,m=!0;t(),a(),e()}();