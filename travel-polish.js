// Latest trip choices. Keep bookings attached only to their point of use.
const oct4=getDay('10/4');
oct4.items.splice(-1,1,
 stop('20:15–21:00','The Greek Theatre → Koreatown','Koreatown, Los Angeles, CA','開車','約25–45分鐘／10–14 km','取車後前往韓國城；先查選定店家當晚最後點餐時間。'),
 refs(stop('21:00–22:00','Koreatown｜韓式晚餐','BCD Tofu House, 3575 Wilshire Blvd, Los Angeles, CA 90010','用餐','預留60分鐘','候選：BCD Tofu House Wilshire店，吃嫩豆腐鍋／韓式套餐。店家營業時間與停車收費本次未核實；出發前確認，若排隊太久改附近仍營業的韓式餐廳。不預設免費停車。'),[['餐廳官網','https://www.bcdtofu.com/']]),
 stop('22:00–22:30','Koreatown → Airbnb',la,'開車','約15–30分鐘／6–9 km','回住宿休息；若晚餐提早結束就提早回房。','stay')
);
const oct5=getDay('10/5'),old5=oct5.items;
oct5.items=[old5[0],
 stop('08:45–09:30','Airbnb → Grand Central Market停車場','308 S Hill St, Los Angeles, CA 90013','開車','約25–45分鐘／12–16 km＋停車','從Hill St車庫入口進入。','gcm'),
 old5[4],old5[5],old5[6],
 stop('11:45–12:30','Top of the Park Official Team Store → Airbnb',la,'開車','約30–45分鐘／14–18 km','購物後先回住宿，球衣與戰利品不帶去海邊。','stay'),
 stop('12:30–13:00','Airbnb｜放購物袋・拿泳具',la,'住宿內','預留30分鐘','把購物袋放入房內，帶泳衣、乾衣、毛巾、防曬、水與薄外套；餓了先簡單吃點東西。'),
 stop('13:00–14:15','Airbnb → Santa Monica海灘停車場','Santa Monica Parking Structure 6, 1431 2nd St, Santa Monica','開車','約35–65分鐘／18–23 km＋停車','下午專心玩水看夕陽。','santa'),...old5.slice(8)];
oct5.items[2][0]='09:30–10:30';oct5.items[3][0]='10:30–11:00';oct5.items[4][0]='11:00–11:45';oct5.items[8][0]='14:15–15:00';
// The screenshot identifies this lot; the social-post price is not a verified tariff.
parking.gcm[1]='City Center Parking, 434 S Broadway, Los Angeles, CA 90013';
parking.gcm[5]=queryLink(parking.gcm[1]);
parking.gcm[2]+=' 備用改為你截圖中的434 S Broadway，至市場約步行5–10分鐘／350–500 m。貼文的現金US$10不能確定是此場當日費率；進場先確認總價與取車時間。';

const storageURL='https://bounce.com/luggage-storage/los-angeles';
const storageCandidate='https://bounce.com/s/location/4944eb4c-0d81-4ab3-9840-1ff03d0be6c8?query=Los+Angeles,+CA';
const storageNote='尚未預訂。優先問Airbnb房東能否寄至16:00並取得明確回覆；不行則在Bounce選住宿／所選景點附近的寄放點，訂10/7 10:30–16:00，確認大箱尺寸、件數、總價與當日營業時間。官方列表可查到JMSI Melrose候選，但不是The Grove館內服務，10/7可用性與確切地址以完成預訂頁為準。未確認寄放就先解決行李，不把整車行李留停車場。';
const oct7old=getDay('10/7').items;
const universalDocs=normalDocuments.filter(d=>d.label.startsWith('環球影城｜入園票')).map(d=>d.url);
const universalOption=stop('12:00–14:30','Universal Studios Hollywood｜第二日短遊','100 Universal City Plaza, Universal City, CA 91608','遊園','約2.5小時','僅在原票允許第二日入園、寄放已落實且當日開放時選擇；不再安排整天。14:30準時離園，預留回程領行李。');
universalOption[4].docs=universalDocs;
const oct7Choices=[
 ['A｜Original Farmers Market＋The Grove・最悠閒',[
 stop('11:00–11:30','寄放點 → Original Farmers Market','6333 W 3rd St, Los Angeles, CA 90036','步行／開車','住宿出發步行約10分鐘／700 m；其他寄放点待訂位後核算','若寄放點在別區，先用目的地導航確認實際交通。'),
 stop('11:30–15:00','Original Farmers Market＋The Grove｜午餐・最後購物','The Grove, 189 The Grove Dr, Los Angeles, CA 90036','逛街／用餐','約3.5小時','市場吃早午餐，逛The Grove；15:00結束購物，保留領行李時間。')]],
 ['B｜Grand Central Market再訪',[
 stop('11:00–12:00','寄放點 → Grand Central Market','308 S Hill St, Los Angeles, CA 90013','開車','從住宿一帶估25–45分鐘／12–16 km＋停車','確切寄放點選好後再核算；若已在Downtown寄放可縮短。','gcm'),
 stop('12:00–14:30','Grand Central Market｜午餐・補吃喜歡的攤位','317 S Broadway, Los Angeles, CA 90013','逛市場／用餐','約2.5小時','不再加遠處景點；14:30離開，回寄放點。')]],
 ['C｜Citadel Outlets・最後採買',[
 refs(stop('11:00–12:15','寄放點 → Citadel Outlets','100 Citadel Dr, Los Angeles, CA 90040','開車','從住宿一帶估45–75分鐘／25–35 km','先確認當日營業與停車，寄放地址確定後重算路程。不要假設Outlet會替你寄放大行李。'),[['商場官網','https://www.citadeloutlets.com/']]),
 stop('12:15–14:15','Citadel Outlets｜午餐・購物','Citadel Outlets, 100 Citadel Dr, Los Angeles, CA 90040','逛街／用餐','約2小時','14:15離開，預留45–90分鐘回寄放點；若塞車預估更久就提前走。')]],
 ['D｜Universal第二日・有票且物流順才選',[
 stop('11:00–12:00','寄放點 → Universal Studios Hollywood','100 Universal City Plaza, Universal City, CA 91608','開車','住宿一帶估25–45分鐘／12–18 km，另留停車進場時間','如果12:00還沒入園就縮短遊園；行李先寄好，園內置物櫃不視為大箱寄放方案。','universal'),universalOption]]
];
day('10/7',[
 stop('08:30–10:15','Airbnb｜早餐・最後打包',la,'住宿內','早餐與整理','吃剩下的麵包、水果；核對護照、駕照、機票、充電器，隨身與託運物品分開。'),
 refs(stop('10:15–11:00','退房・完成行李寄放',la,'退房／寄放','11:00前退房；寄放點交通待選定',''+storageNote),[['查找與預訂寄放點',storageURL],['JMSI Melrose候選',storageCandidate]]),
 optionStop('11:00–15:00','最後一天A／B／C／D方案｜先寄好行李再出發',oct7Choices),
 stop('14:30–16:00','結束活動 → 寄放點領行李','依行李寄放訂單地址','步行／開車','各方案提早離開；車程與距離以已訂寄放點計算','A方案15:00離開；B／D 14:30；C 14:15。最晚16:00領妥全部行李，逐件核對。若寄放點提早關門，取件時間一起提前。'),
 stop('16:00–18:00','領行李 → LAX附近加油 → SIXT','SIXT, 5251 W 98th St, Los Angeles, CA 90045','開車','市區出發約60–90分鐘／20–35 km＋加油15–20分鐘','車程依寄放點而異；保留交通緩衝。導航沿途加油站，依租約補足油量並保留收據。'),
 stop('18:00–19:00','SIXT｜還車・車況與帳單確認','5251 W 98th St, Los Angeles, CA 90045','還車','預留60分鐘','19:00前完成；拍油量、里程與車身，檢查座椅下與行李廂。'),
 oct7old[6],oct7old[7]
]);
bindDocs('10/7',/接駁至 Terminal B/,['機票｜']);

const packingGroups=[
 ['證件・租車',[['micron','Micron 員工識別證（租車使用，放隨身包）'],['passport','兩人護照、ESTA核准資料'],['license','台灣駕照＋國際駕照（兩位駕駛）'],['card','主駕駛本人信用卡、租車預約與企業優惠資料'],['parkpass','美國國家公園年卡＋持卡人照片證件'],['docs','機票、住宿、門票、保險與Permit離線備份']]],
 ['隨身・電子用品',[['phone','手機、充電線、充電器、美規轉接頭'],['camera','Insta360 GO Ultra、充電配件、記憶卡'],['power','行動電源（放隨身行李）'],['net','美國eSIM／漫遊、離線地圖'],['cash','美元現金、小鈔、信用卡'],['medicine','個人常用藥、處方資料、備用眼鏡'],['contacts','隱形眼鏡、保存盒與保養液'],['pillow','頸枕'],['smallbag','小包包／隨身斜背包']]],
 ['衣物・登山・海邊',[['clothes','換洗衣物、內衣襪、睡衣'],['layers','保暖外套、薄雨衣、帽子、太陽眼鏡'],['shoes','好走的鞋、登山襪、拖鞋'],['swim','泳衣、快乾毛巾、乾衣'],['drybag','防水袋（測試密封、防水手機袋）'],['sun','防曬、護唇膏、個人盥洗用品'],['skincare','保養品（隨身液體按航空規定分裝）'],['hike','水壺、登山日用背包'],['headlamp','頭燈或手電筒＋充足電量／備用電池'],['narrows','Narrows租借確認、內層衣物、替換襪']]],
 ['行李・出發前',[['bags','行李秤、行李牌、鎖、購物備用袋'],['cookware','輕便鍋具'],['stove','登山爐（僅爐具；先向航空公司確認可攜條件，燃料另在當地處理）'],['food','自帶辛拉麵、餐具、保冷袋；食品依入境規定申報'],['storage','確認10/7寄放點、箱子件數尺寸與16:00取件'],['parking','桃園美國行／日本行停車憑證'],['home','居家電器、垃圾、門窗與出門交通'],['weight','依各航段票規確認託運重量與隨身限制']]]
];
const packing=document.createElement('section');packing.className='packing-card';packing.innerHTML='<div class="packing-head"><div><p class="packing-kicker">READY TO GO</p><h3>行李準備清單</h3></div><span id="packingCount" aria-live="polite"></span></div><p class="small">勾選會保留在這台裝置的瀏覽器，不會同步到另一支手機。</p><progress id="packingProgress" value="0" max="23" aria-label="行李準備進度"></progress><div class="packing-grid">'+packingGroups.map(([title,items])=>'<div><h4>'+title+'</h4>'+items.map(([id,label])=>'<label class="pack-check"><input type="checkbox" data-pack="'+id+'"><span>'+label+'</span></label>').join('')+'</div>').join('')+'</div>';
document.querySelector('#important .section-head').after(packing);
let packState={};try{packState=JSON.parse(localStorage.getItem('southwest-packing-v1')||'{}')||{};}catch{}
function refreshPacking(){const boxes=[...packing.querySelectorAll('input')];const count=boxes.filter(c=>c.checked).length;document.getElementById('packingCount').textContent=count+' / '+boxes.length;document.getElementById('packingProgress').max=boxes.length;document.getElementById('packingProgress').value=count;for(const cb of boxes)cb.closest('label').classList.toggle('done',cb.checked);}
for(const cb of packing.querySelectorAll('input')){cb.checked=!!packState[cb.dataset.pack];cb.addEventListener('change',()=>{packState[cb.dataset.pack]=cb.checked;try{localStorage.setItem('southwest-packing-v1',JSON.stringify(packState));}catch{}refreshPacking();});}refreshPacking();
// Keep the fixed day bar below the actual tab height, including larger accessibility text.
function updateNavigationHeight(){const nav=document.querySelector('.sticky');document.documentElement.style.setProperty('--nav-height',nav.offsetHeight+'px');}
if(typeof ResizeObserver!=='undefined')new ResizeObserver(updateNavigationHeight).observe(document.querySelector('.sticky'));updateNavigationHeight();
renderDay();
