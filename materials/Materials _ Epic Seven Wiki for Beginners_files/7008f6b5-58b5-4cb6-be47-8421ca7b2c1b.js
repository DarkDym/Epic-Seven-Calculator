window.__pubxLoaded__=function(a=50){return Math.floor(Math.random()*(a=100/a)+1)===parseInt(a)}(90),window.__PBXCNFG__={pubxId:"7008f6b5-58b5-4cb6-be47-8421ca7b2c1b",sr:10,cur:"USD",prb:[{pbx_a0d_n:[0,.03]},{pbx_a1d_n:[.03,.06]},{pbx_a2d_n:[.06,.09]},{pbx_a3d_n:[.09,.12]},{pbx_a4d_n:[.12,.15]},{pbx_b0d_n:[.15,.2]},{pbx_b1d_n:[.2,.25]},{pbx_b2d_n:[.25,.3]},{pbx_b3d_n:[.3,.35]},{pbx_b4d_n:[.35,.4]},{pbx_b5d_n:[.4,.45]},{pbx_b6d_n:[.45,.5]},{pbx_b7d_n:[.5,.55]},{pbx_b8d_n:[.55,.6]},{pbx_b9d_n:[.6,.65]},{pbx_b10d_n:[.65,.7]},{pbx_b11d_n:[.7,.75]},{pbx_b12d_n:[.75,.8]},{pbx_b13d_n:[.8,.85]},{pbx_b14d_n:[.85,.9]},{pbx_b15d_n:[.9,.95]},{pbx_b16d_n:[.95,1]},{pbx_c0d_n:[1,1.1]},{pbx_c1d_n:[1.1,1.2]},{pbx_c2d_n:[1.2,1.3]},{pbx_c3d_n:[1.3,1.4]},{pbx_c4d_n:[1.4,1.5]},{pbx_c5d_n:[1.5,1.6]},{pbx_c6d_n:[1.6,1.7]},{pbx_c7d_n:[1.7,1.8]},{pbx_c8d_n:[1.8,1.9]},{pbx_c9d_n:[1.9,2]},{pbx_d0d_n:[2,2.25]},{pbx_d1d_n:[2.25,2.5]},{pbx_d2d_n:[2.5,2.75]},{pbx_d3d_n:[2.75,3]},{pbx_d4d_n:[3,3.25]},{pbx_d5d_n:[3.25,3.5]},{pbx_d6d_n:[3.5,3.75]},{pbx_d7d_n:[3.75,4]},{pbx_d8d_n:[4,4.25]},{pbx_d9d_n:[4.25,4.5]},{pbx_d10d_n:[4.5,4.75]},{pbx_d11d_n:[4.75,5]},{pbx_d12d_n:[5,111111]}],gfldmul:1,gwbdmul:1,gnbdmul:1,adunitFlr:{},blockedAu:[],errk:"pbx_e0",dfltBck:{pbx_t0:-1,pbx_t1:-2,pbx_t2:-3,pbx_t3:-4,pbx_t4:-5,pbx_t5:-6},dfltval:{banner:.01}},window.pbjs=window.pbjs||{},window.pbjs.que=window.pbjs.que||[],window.pbjs.que.push(function(){window.pbjs.enableAnalytics({provider:"pubxai",options:{samplingRate:window.__PBXCNFG__.sr,pubxId:window.__PBXCNFG__.pubxId}}),window.__pubxLoaded__&&window.pbjs.setConfig({floors:{enforcement:{floorDeals:!0},auctionDelay:100,endpoint:{url:`https://floor.pbxai.com/?pubxId=${window.__PBXCNFG__.pubxId}&page=${window.top.location.href}&maxBid=${window.sessionStorage.getItem("pbx:mxbid")}&bidDep=${window.sessionStorage.getItem("pbx:dpbid")}&aucId=${window.sessionStorage.getItem("pbx:aucid")}`},data:{floorProvider:"PubxFloorProvider",modelVersion:"FloorModel-Delta-v1.3",currency:window.__PBXCNFG__.cur,schema:{fields:["mediaType"]},values:window.__PBXCNFG__.dfltval}}}),window.pbjs.onEvent("auctionInit",function(a){window.__PBXCNFG__['adunitFlr']={};try{a.adUnits.forEach(c=>{if(!window.__PBXCNFG__.blockedAu.includes(c.code)){googletag.cmd.push(()=>{let[a=null]=googletag.pubads().getSlots().filter(a=>a.getAdUnitPath()==c.code||a.getSlotElementId()==c.code);a&&(window.__pubxLoaded__&&window.pbjs.getConfig("floors")&&window.pbjs.getConfig("floors").endpoint.url.includes("floor.pbxai")?a.setTargeting("pubx-a","on"):a.setTargeting("pubx-a","off"))});let b=window.__PBXCNFG__.dfltBck.pbx_t0,d=null;try{if(c.bids.some(a=>a&&(!a.floorData||a.floorData&&"PubxFloorProvider"===a.floorData.floorProvider&&a.floorData.skipped&&"success"===a.floorData.fetchStatus)))b=Number.NEGATIVE_INFINITY;else{let a=c.bids.find(a=>a&&a.floorData&&"PubxFloorProvider"===a.floorData.floorProvider&&!a.floorData.skipped&&"success"===a.floorData.fetchStatus);if(a){2==a.floorData.modelVersion.split("_dt_").length&&(window.__PBXCNFG__.gfldmul=parseFloat(a.floorData.modelVersion.split("_dt_")[1].split("_")[0])),2==a.floorData.modelVersion.split("_dwt_").length&&(window.__PBXCNFG__.gwbdmul=parseFloat(a.floorData.modelVersion.split("_dwt_")[1].split("_")[0])),2==a.floorData.modelVersion.split("_dnt_").length&&(window.__PBXCNFG__.gnbdmul=parseFloat(a.floorData.modelVersion.split("_dnt_")[1].split("_")[0]));let e=c.sizes.map(b=>{let c=a.getFloor({size:b});return c.floor||window.__PBXCNFG__.dfltBck.pbx_t1});b=e.length>0?e.reduce((a,b)=>a+b)/e.length:window.__PBXCNFG__.dfltBck.pbx_t2}else a=c.bids.find(a=>a&&a.floorData&&"PubxFloorProvider"===a.floorData.floorProvider),b="timeout"===a.floorData.fetchStatus?window.__PBXCNFG__.dfltBck.pbx_t3:"error"===a.floorData.fetchStatus?window.__PBXCNFG__.dfltBck.pbx_t4:window.__PBXCNFG__.dfltBck.pbx_t5}}catch(f){b=Number.NEGATIVE_INFINITY}if(Number.isFinite(b)){b*=window.__PBXCNFG__.gnbdmul;try{window.__PBXCNFG__.adunitFlr[c.code]=b,b>0?(d=window.__PBXCNFG__.prb.filter(function(a){var c=a[Object.keys(a)];return b>c[0]&&b<=c[1]})[0],d=Object.keys(d)[0]):d=Object.assign({},...Object.entries(window.__PBXCNFG__.dfltBck).map(([a,b])=>({[b]:a})))[b]||window.__PBXCNFG__.errk}catch(g){d=window.__PBXCNFG__.errk}googletag.cmd.push(()=>{let[a=null]=googletag.pubads().getSlots().filter(a=>a.getAdUnitPath()==c.code||a.getSlotElementId()==c.code);a&&a.setTargeting("pubx-floor",d)})}}})}catch(b){console.log("pubx: error",b)}}),window.pbjs.onEvent("auctionEnd",function(a){if(window.__pubxLoaded__)try{let b={},h={},d=null,c=a.bidsReceived;if(c.length>0){let e=c.filter(a=>a.adserverTargeting.hb_pb);if(e.length>0)b=e.reduce((b,a)=>(b[a.adUnitCode]=(b[a.adUnitCode]||0)>= +a.originalCpm*window.__PBXCNFG__.gwbdmul?b[a.adUnitCode]:+a.originalCpm*window.__PBXCNFG__.gwbdmul,b),{}),d="_w";else{let f=c.filter(a=>!a.adserverTargeting.hb_pb&& +a.originalCpm>0);f.length>0?(b=f.reduce((b,a)=>(b[a.adUnitCode]=(b[a.adUnitCode]||0)>= +a.originalCpm*window.__PBXCNFG__.gfldmul?b[a.adUnitCode]:+a.originalCpm*window.__PBXCNFG__.gfldmul,b),{}),d="_f"):Object.keys(window.__PBXCNFG__.adunitFlr).forEach(a=>{window.__PBXCNFG__.adunitFlr[a]>0&&(b[a]=window.__PBXCNFG__.adunitFlr[a]*window.__PBXCNFG__.gnbdmul)})}}else Object.keys(window.__PBXCNFG__.adunitFlr).forEach(a=>{window.__PBXCNFG__.adunitFlr[a]>0&&(b[a]=window.__PBXCNFG__.adunitFlr[a]*window.__PBXCNFG__.gnbdmul)});Object.keys(b).forEach(a=>{h[a]=Object.keys(window.__PBXCNFG__.prb.find(c=>Object.values(c)[0][0]<=b[a]&&Object.values(c)[0][1]>=b[a]))?.[0],d&&(h[a]=h[a].split("_n")[0]+d);let[c=null]=googletag.pubads().getSlots().filter(b=>b.getAdUnitPath()==a||b.getSlotElementId()==a);c&&c.setTargeting("pubx-floor",h[a])})}catch(g){console.log("pubx-auctionEnd error: ",g)}try{a.bidsReceived.length>0?(window.sessionStorage.setItem("pbx:mxbid",Math.max.apply(Math,a.bidsReceived.map(function(a){return a.cpm}))),window.sessionStorage.setItem("pbx:dpbid",a.bidsReceived.length),window.sessionStorage.setItem("pbx:aucid",a.bidsReceived[0].auctionId)):(window.sessionStorage.removeItem("pbx:mxbid"),window.sessionStorage.removeItem("pbx:dpbid"),window.sessionStorage.removeItem("pbx:aucid"))}catch(i){}})})