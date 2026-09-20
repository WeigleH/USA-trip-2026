// Audited sources are attached where they are useful; no general audit banner.
const groceryStop=getDay('9/24').items.find(i=>i[1]==='Costco｜Road Trip主要採買');
groceryStop[3]=groceryStop[3].replace('依你提供的資料，9/24週四營業至20:30','官方Mission Valley門市：2345 Fenton Pkwy，週四一般會員10:00–20:30');
refs(groceryStop,[['Costco門市與時間','https://www.costco.com/w/-/ca/san-diego/488']]);
const guruPickup=getDay('9/28').items.find(i=>i[1].includes('提前領取'));
if(guruPickup){guruPickup[3]+=' 官網目前列前一天14:00–19:30可免費提前領取，仍視裝備供應；先聯絡確認9/28領取。';}
parking.greek[2]='Greek Theatre周邊只有在無演出／特殊活動且現場開放時才可免費停車。天文台官方規定：演出日下午13:00後不可使用Greek周邊停車。10/4演出狀態本次未能確認，出發前須看劇院活動表；若管制則改天文台付費停車，按入口牌價。';
const greekStop=getDay('10/4').items.find(i=>i[1].includes('Lake Hollywood Park → The Greek'));
if(greekStop)greekStop[3]='先查10/4 Greek Theatre是否有演出；沒有演出、現場開放才停免費公共車格。有演出則改天文台付費停車，不把Greek免費停車視為保證。';
const rentalStop=getDay('9/24').items.find(i=>i[1].includes('取車')&&i[1].includes('SIXT'));
if(rentalStop){rentalStop[3]+=' 攜带Micron員工識別證。官方取車櫃台位於一樓；還車區在二樓，兩者不同。';refs(rentalStop,[['SIXT取還車動線',busInfo.sixt.url]]);}

const appHelp=document.createElement('details');appHelp.className='transport-detail app-install';
appHelp.innerHTML='<summary>在 iPhone 加入主畫面</summary><p>用 Safari 開啟行程 → 分享 → 加入主畫面；若有「以網頁 App 開啟」，請開啟後再加入。之後從桌面圖示進入，即可用獨立視窗查看。</p><p class="small">這是主畫面網頁 App，不是 App Store 安裝檔。首次需連網載入；行程可在快取成功後離線使用，PDF 請另存到「檔案」。導航、即時資訊與外部訂票仍需要網路。換網址或瀏覽器，清單勾選不會自動同步。</p><p><a href="https://support.apple.com/guide/iphone/bookmark-a-website-iph42ab2f3a7/ios" target="_blank" rel="noopener">Apple 加入主畫面說明 ↗</a></p><p id="offlineStatus" role="status">正在確認離線行程是否準備完成…</p>';
document.getElementById('important').appendChild(appHelp);
if('serviceWorker' in navigator){
 navigator.serviceWorker.register('./sw.js',{scope:'./'}).then(()=>navigator.serviceWorker.ready).then(()=>{document.getElementById('offlineStatus').textContent='離線行程已準備完成；PDF 請另存，外部連結仍需連網。';}).catch(()=>{document.getElementById('offlineStatus').textContent='離線行程尚未準備完成，請保持網路連線後重新開啟。';});
}else{document.getElementById('offlineStatus').textContent='此瀏覽器無法準備離線行程，請連網使用。';}
renderDay();
