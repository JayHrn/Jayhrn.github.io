function _0x1821(t,n){const e=_0x5e60();return(_0x1821=function(t,n){return e[t-=476]})(t,n)}async function fetchJsonData(){const t=_0x1821;try{const n=await fetch(t(485)),e=await n.json();return jay[t(499)].set(t(501),JSON[t(479)](e),1),e}catch(n){return console[t(478)]("Failed to fetch website.json:",n),null}}async function getWebsiteData(t){const n=_0x1821;let e=jay[n(499)][n(476)](n(501));if(null==e)try{const n=await fetchJsonData();if(n)return e=n,e[t]}catch(t){console[n(478)](n(477),t)}return e=JSON.parse(e),e[t]}async function goRandomPost(){const t=_0x1821;try{const n=await getWebsiteData(t(504));if(n&&n[t(484)]>0){const e="/"+n[Math[t(506)](Math[t(488)]()*n.length)][t(494)];window[t(500)]?pjax.loadUrl(e):window.location[t(503)]=e}}catch(n){console[t(478)](t(495),n)}}async function getFriendLinks(t){const n=_0x1821;try{const e=await getWebsiteData("link");if(e){return e[n(481)]((()=>Math.random()-.5)).slice(0,t)}}catch(t){console.error(n(502),t)}}function _0x5e60(){const t=["pjax","websiteData","Failed to get friend links:","href","posts","143qwJYPt","floor","2teDDrO","3275327YDuKcx","50620YhEcJi","1151014PJxVrW","get","Failed to get website data:","error","stringify","1754956CucJbR","sort","7338bUmDYK","4AjqFKl","length","/website.json","link","2464899UXfUTD","random","4227464mYIHFB","9KXszyl","36OvnFVM","_blank","4145DhugXE","path","Failed to get random post:","21dtrHNB","Failed to get random friend link:","open","saveToLocal"];return(_0x5e60=function(){return t})()}async function randomFriendLink(){const t=_0x1821;try{const n=await getWebsiteData(t(486));if(n&&n[t(484)]>0){const e=n[Math[t(506)](Math[t(488)]()*n[t(484)])][t(486)];window[t(498)](e,t(492))}}catch(n){console[t(478)](t(497),n)}}!function(){const t=_0x1821,n=_0x5e60();for(;;)try{if(876012===parseInt(t(510))/1*(-parseInt(t(507))/2)+-parseInt(t(487))/3*(parseInt(t(483))/4)+-parseInt(t(493))/5*(parseInt(t(482))/6)+-parseInt(t(496))/7*(-parseInt(t(489))/8)+-parseInt(t(490))/9*(-parseInt(t(509))/10)+parseInt(t(508))/11*(parseInt(t(491))/12)+-parseInt(t(505))/13*(-parseInt(t(480))/14))break;n.push(n.shift())}catch(t){n.push(n.shift())}}();