// Each flexible time slot owns its alternatives, so lunch/dinner never share a branch accidentally.
function optionStop(time,title,options){const i=stop(time,title,'依所選方案','依方案','車程、距離與用餐時間見各選項','選一個符合當天進度的方案。');i[4].options=options;return i;}
const lateSources={ride:'https://www.cowboytrailrides.com/RideDetails?rid=01tfn000000LkvtAAC',ranch:'https://www.visitlasvegas.com/listing/cowboy-trail-rides/34854/',outlet:'https://www.premiumoutlets.com/outlet/las-vegas-north/about',outletMap:'https://www.premiumoutlets.com/outlet/las-vegas-north/stores/print',bouchon:'https://www.venetianlasvegas.com/dining/restaurants/bouchon.html',brunch:'https://www.venetianlasvegas.com/resort/pools/pool-garden.html',marcel:'https://farmersmarketla.com/merchants/72',dupars:'https://farmersmarketla.com/merchants/du-pars-restaurant',park:'https://www2.laparks.org/parks',griff:'https://griffithobservatory.lacity.gov/visit/getting-here/',statue:'https://www.nba.com/news/second-statue-kobe-bryant-los-angeles-lakers',market:'https://grandcentralmarket.com/visit-the-market/',dodgers:'https://www.mlb.com/dodgers/ballpark/information/guide',beach:'https://beaches.lacounty.gov/beach-safety/',water:'http://publichealth.lacounty.gov/phcommon/public/eh/water_quality/beach_grades.cfm',lalive:'https://www.lalive.com/parking',loves:'https://www.loves.com/locations/ca/barstow/loves-travel-stop-barstow-374'};
parking.lvout=['Parking Garage A, Las Vegas North Premium Outlets, 875 S Grand Central Pkwy, Las Vegas, NV 89106','Parking Garage B - LV North Premium Outlets, 875 S Grand Central Pkwy, Las Vegas, NV 89106','兩者為同商場不同車庫。官方列一般停車全日US$5；按入口牌價。備用導航已改成具名Garage B，不再搜尋「另一座停車場」。',[lateSources.outlet,lateSources.outletMap]];
parking.ranch=['Cowboy Trail Rides guest parking, 4053 Fossil Ridge Rd, Las Vegas','無已核實獨立備用停車場；由牧場人員指定合法空位','停車費未於所查頁面列出，訂位時確認。滿位聯絡牧場，不停公路路肩。',lateSources.ranch];
parking.lakehollywood=['Lake Hollywood Park legal street parking, Canyon Lake Dr, Los Angeles','無已核實鄰近公共備用停車場','依路邊告示，禁止停車時段與住戶車道不可停；找位10–15分鐘仍無位就縮短／略過拍照，不繞私人道路。',lateSources.park];
parking.greek=['The Greek Theatre周邊免費公共停車區, 2700 N Vermont Ave, Los Angeles, CA 90027','Griffith Observatory付費停車場, 2800 E Observatory Rd, Los Angeles, CA 90027','主方案：Greek Theatre沒有演出／特殊活動時，依現場開放區與標誌免費停車。官方規定演出日下午13:00後不可使用Greek周邊停車；截至2026/9/15官方活動表未列10/4演出，但不代表之後不會新增，請於出發前48小時及當天再查。若受管制，改開往天文台付費車位並依收費機牌價。',[lateSources.griff,'https://www.lagreektheatre.com/']];
parking.crypto=['L.A. LIVE West Garage (Lot W, Gate B), 1005 Chick Hearn Ct, Los Angeles, CA 90015','L.A. LIVE East Garage (Lot E), 888 W Olympic Blvd, Los Angeles, CA 90015','West Garage活動日採入場牌價，官方列約US$10–50另加稅；East Garage一般計時費率首2小時US$10，之後每30分鐘US$15、最高US$40另加稅。10/5以入口牌價為準。前往11th Street Entrance附近父女雕像。',lateSources.lalive];
parking.gcm=['Grand Central Market Parking, 308 S Hill St, Los Angeles, CA 90013','Broadway Spring Center Parking, 333 S Spring St, Los Angeles','主場市中心協會列首90分US$4、後每15分US$2、日上限US$25；備案另價，當日以入口為準。',[lateSources.market,'https://downtownla.com/go/grand-central-market-parking']];
parking.dodgerstore=['Dodger Stadium Top of the Park Store parking, 1000 Vin Scully Ave, Los Angeles','無可保證的球場外商店專用備用場','10/5可能受季後賽／活動管制；出發前向球隊確認當天入口及停車費。未確認可進場就取消本點，不繞球場找入口。',lateSources.dodgers];
// Day 5: rental pickup → check in → grocery trip → dinner.
const d5=getDay('9/28');d5.items=d5.items.slice(0,8);
d5.items.push(stop('17:15–17:50 UT','Zion Guru → Virgin Airbnb',virgin,'開車','約30–40分鐘／28–32 km','先放行李，再去超市。','stay'),refs(stop('17:50–18:15 UT','Adventure Tiny House｜入住・放行李',virgin,'入住','約25分鐘；住處內0 m','把大行李放進房內，清點冰箱及調味料、確認瓦斯烤爐。'+kitchenText,'stay'),[['住宿設備',revisedSources.airbnb]]));
branches['9/28']=[['A｜Hurricane Walmart＋鎮上吃／回家煮',[
 stop('18:15–18:45','Airbnb → Hurricane Walmart',walmartAddress,'開車','約25–30分鐘／25–30 km','只带購物用品，不再載整車行李。','shopping'),
 refs(stop('18:45–19:30','Walmart｜早餐・登山餐・晚餐食材',walmartAddress,'步行','賣場內約500–1,000 m／45分鐘','每日06:00–23:00。'+groceryText),[['官方營業時間',revisedSources.walmart]]),
 optionStop('19:30–21:00','晚餐方案｜當天擇一',[
 ['回Airbnb煮', [stop('19:30–20:00','Walmart → Airbnb',virgin,'開車','約25–30分鐘／25–30 km','生鮮立即冷藏。'),stop('20:00–21:00','Airbnb｜烤雞腿排／熟食沙拉晚餐',virgin,'住宿內','0 m','烤雞腿排＋蔬菜＋餅皮；晚到就改熟食，留時間準備早餐與登山午餐。')]],
 ['La Verkin鎮上吃', [refs(stop('19:30–20:30','River Rock Roasting Company｜晚餐','394 S State St, La Verkin, UT','開車＋用餐','約15–20分鐘／15–20 km＋用餐40分鐘','主店週一至六06:30–21:00；披薩／三明治，最後接單當日確認。生鮮需保冷袋＋冰袋；沒保冷設備就選回家煮。','shopping'),[['店址與時間','https://riverrockroasters.com/pages/locations']]),stop('20:30–20:50','La Verkin → Airbnb',virgin,'開車','約15–20分鐘／12–16 km','回房冷藏、備隔夜燕麥。')]]])]],
 ['B｜Costco St. George＋熟食／回家煮',[
 stop('18:15–19:00','Airbnb → Costco St. George',costcoAddress,'開車','約35–45分鐘／40–45 km','比Walmart遠，先看抵達時間。','shopping'),
 refs(stop('19:00–19:45','Costco｜採買・視需要加油',costcoAddress,'步行／場內開車','約45分鐘','週一一般會員10:00–20:30；加油06:00–22:00。兩人挑小份生鮮、麵包、水果；可在離開前吃賣場餐飲，實際餐飲供應時間現場確認。'),[['官方時間',revisedSources.costco]]),
 stop('19:45–20:30','Costco → Airbnb',virgin,'開車','約35–45分鐘／40–45 km','生鮮保冷，直接回房。'),
 stop('20:30–21:15','Airbnb｜晚餐／明日備餐',virgin,'住宿內','0 m','若已在Costco吃，只備明日餐；否則吃熟雞肉沙拉／簡單烤肉配餅皮。')]]];
d5.items.push(optionStop('18:15–21:15 UT','採買與晚餐A／B方案',branches['9/28']));
bindDocs('9/28',/入住・放行李/,['Zion／Virgin｜']);

// Keep a substantial bus buffer, and never present walking to the visitor center as the plan.
const n6=getDay('9/29');
n6.items.find(i=>i[1].includes('Floating Rock附近'))[3]+=' 設11:30評估、12:00強制回頭鬧鐘；若進度落後，折返點提早，不追加地標。';
n6.items.find(i=>i[1].includes('原路下行'))[3]+=' 目標15:00到Stop9，最晚計畫15:30開始排回程車；相對官方19:15末班仍有3小時45分，不用末班當目標。';
n6.items.find(i=>i[1].includes('搭接駁回Visitor'))[3]='15:00–15:30在Stop9排隊，預留至少30分鐘候車；若數班滿載繼續排，不再增加活動。乘接駁回Visitor Center，不安排走公路回去。';
const n7=getDay('9/30');
n7.items[2][0]='10:45–11:45';n7.items[3][0]='11:45–12:00';n7.items[3][3]='在The Grotto快速吃自備捲餅／三明治、上洗手間；依after12 permit，12:00後才從此開始健行。';
n7.items[4][0]='12:00–13:45（估）';n7.items[4][3]='上坡約1小時45分–2小時30分，依體力而異。14:00還沒到Scout Lookout就跳過鐵鏈段並下山；不為了攻頂加速。';
n7.items[5][0]='13:45–14:45（有餘裕才走）';n7.items[5][3]='鐵鏈段排隊與往返可能超過1小時；只在有足夠餘裕、狀況合適時進入。14:45開始原路撤回下山，未到頂也折返。許可持有人與證件照原訂資料。';
n7.items[6][0]='14:45–17:00下山；17:00–18:00接駁';n7.items[6][3]='目標16:30、最晚計畫17:00回The Grotto站排下行接駁，留30分鐘以上候車。官方19:15是Stop9發車，不是The Grotto的保證班次；不以末班計算、不安排走回Visitor Center。若前半段進度落後，提前折返。';
refs(n7.items[6],[['官方季節班次',sources.zion]]);

// October 2: own car to the ranch; meals depend on the actual confirmed ride time.
const fontAddress='2777 S Las Vegas Blvd, Las Vegas, NV 89109',outletAddress='875 S Grand Central Pkwy, Las Vegas, NV 89106';
branches['10/1'].push(['D｜Bouchon at The Venetian・法式晚餐',[
 refs(stop('17:30–18:15','Fontainebleau → The Venetian・Bouchon','3355 S Las Vegas Blvd, Las Vegas, NV 89109','Uber＋步行','約15–25分鐘／3–5 km＋館內步行','Bouchon位於Venezia Tower。建議預訂18:00左右；未訂位就依現場等候時間改選其他方案。','venetian'),[['Bouchon官方頁',lateSources.bouchon]]),
 stop('18:15–19:40','Bouchon｜法式晚餐','Bouchon, The Venetian, Las Vegas','用餐','約75–85分鐘','可考慮steak frites、escargot或生蠔，依當日菜單與食量決定。'),
 stop('19:40–20:30','The Venetian逛逛 → Fontainebleau','Fontainebleau Las Vegas','步行＋Uber','館內散步後，回程約15–25分鐘／3–5 km','看運河商店街後回飯店休息。')
]]);
day('10/1',[
 getDay('10/1').items[0],
 getDay('10/1').items[1],
 stop('11:00–12:30','Virgin → Fontainebleau Las Vegas',fontAddress,'開車','約2–2.5小時實際駕駛／約255–270 km；跨時區後當地約12:30抵達','Utah進Nevada，手機時間往回1小時；先到飯店處理行李，不帶行李逛街。','font'),
 stop('12:30–13:15','Fontainebleau｜辦理入住・寄放行李',fontAddress,'入住','約45分鐘','官方入住時間15:00；房間若尚未完成，先辦預登記並交Bell Desk寄放行李。入住憑證放在這一站。','font'),
 stop('13:15–15:00','Fontainebleau／Resorts World｜午餐・逛逛','Fontainebleau Las Vegas / Resorts World Las Vegas','步行','約1小時45分鐘','先在飯店或Resorts World吃簡單午餐，再輕逛；不去Outlet，10/2才集中購物。'),
 stop('15:00–16:30','Fontainebleau｜正式入房・休息',fontAddress,'住宿內','0 m','領房、放好全部行李、充電與換裝。'),
 stop('16:30–17:30','Fontainebleau／附近｜悠閒逛逛',fontAddress,'步行','約1小時','可逛飯店、Resorts World或直接休息；17:30再依晚餐方案出發。'),
 optionStop('17:30–20:30','晚餐A／B／C／D方案｜Las Vegas',branches['10/1'])
]);
bindDocs('10/1',/辦理入住・寄放行李/,['Las Vegas｜']);
const dinnerChoices=branches['10/1'].map(([title,items])=>[title,items.slice(0,2).map(i=>JSON.parse(JSON.stringify(i)))]);
for(const [,items] of dinnerChoices){items[0][0]='16:15–17:00';items[1][0]='17:00–18:20';items[1][4].duration='約75–80分鐘；須準時入座';items[1][3]+=' 選10/1未吃過的一家。最晚18:20結帳離開，若沒有17:00左右的訂位就改漢堡／快餐；不要壓縮Sphere安檢。';}
const lunchChoices=[['A｜Bouchon早午餐（早離開Outlet才選）',[
 refs(stop('12:15–13:00','Outlet → The Venetian・Bouchon','3355 S Las Vegas Blvd, Las Vegas, NV 89109','開車＋步行','約15–25分鐘／6–8 km＋停車／館內步行15–20分鐘','目標13:00訂位，最晚12:15離開Outlet。Bouchon在Venezia Tower，不是Bouchon Bakery；週五Brunch08:00–14:00，須確認可訂時段。','venetian'),[['餐廳官方頁',lateSources.bouchon],['早午餐時間',lateSources.brunch]]),
 stop('13:00–14:15','Bouchon｜法式早午餐','Bouchon, The Venetian, Las Vegas','用餐','約60–75分鐘','想吃的菜以早午餐菜單為準；騎馬若09:00才出發，就縮短Outlet或改方案B。未訂位。'),
 stop('14:15–15:00','Venetian → Fontainebleau',fontAddress,'開車','車程約10–20分鐘／3–4 km＋取車','回飯店洗澡换裝。','font')]],['B｜多逛Outlet，現場吃或回飯店吃',[
 stop('12:15–14:00','North Outlets｜午餐・繼續購物',outletAddress,'步行','商場內，約500–1,000 m','可選官方列出的Shake Shack／Chipotle；想回飯店吃就只逛到13:30。'),
 stop('14:00–15:00','回Fontainebleau｜休息／午餐',fontAddress,'開車','約15–25分鐘／6–8 km','若Outlet沒吃，到飯店餐飲區吃三明治／飯類。','font')]]];
const afterShow=[['A｜步行回飯店',[
 stop('21:30–22:15','Sphere → Fontainebleau',fontAddress,'步行','依你查到的路線約35–45分鐘／2.5 km','體力足夠就步行；散場後重新開導航，依當時開放的人行道走，不穿越車道或施工封鎖。不想走可隨時改Uber。')]],['B｜Gordon Ramsay Burger宵夜，再搭車回飯店',[
 refs(stop('21:30–22:15','Sphere → Gordon Ramsay Burger・Flamingo','3555 Las Vegas Blvd S, Las Vegas, NV 89109','步行／Uber','步行約25–40分鐘／1,800–2,500 m；搭車約10–20分鐘','此選Flamingo店較近，官方列週五10:00–00:00；出發前確認最後接單。若想Planet Hollywood原店，改3667 S Las Vegas Blvd，步行更遠。'),[['Flamingo店官方時間','https://www.gordonramsayrestaurants.com/en/us/gordon-ramsay-burger/locations/flamingo-las-vegas']]),
 stop('22:15–23:00','Gordon Ramsay Burger｜宵夜','Gordon Ramsay Burger, Flamingo Las Vegas','用餐','約45分鐘','若晚餐已吃Burger，直接選回飯店；兩人可分享一份。'),
 stop('23:00–23:30','Uber回Fontainebleau',fontAddress,'Uber','約15–25分鐘／4–5 km','走指定叫車區。')]],['C｜直接搭車回飯店',[
 stop('21:30–22:15','Sphere → Fontainebleau',fontAddress,'Uber','車程約10–20分鐘／3–5 km＋散場候車','按Sphere當日叫車點指示。')]]];
parking.venetian=['The Venetian Self Parking, 3355 S Las Vegas Blvd, Las Vegas','The Palazzo Self Parking, 3325 S Las Vegas Blvd, Las Vegas','停車為另計費，活動日可能加價；10/2實際費率未核實，進場前看牌，不假設用餐免費。','https://www.venetianlasvegas.com/resort/parking.html'];
day('10/2',[
 stop('06:00–06:30','Fontainebleau｜早餐・騎馬準備',fontAddress,'住宿內','0 m','早餐吐司／優格、水果；穿長褲、包鞋，帶水、防曬。以下先按截圖08:00騎馬規劃，尚未確認訂位。'),
 refs(stop('06:30–07:20','自駕至Cowboy Trail Rides牧場','4053 Fossil Ridge Rd, Las Vegas, NV','開車','約40–50分鐘／35–45 km','使用業者確認信集合點；不要導航到Red Rock Scenic Drive遊客中心。自駕不用等飯店交通車。','ranch'),[['牧場位置',lateSources.ranch]]),
 refs(stop('07:20–08:00','Canyon Rim Ride｜報到・裝備說明','Cowboy Trail Rides, 4053 Fossil Ridge Rd, Las Vegas','步行','約50–200 m；預留40分鐘','你的截圖08:00、2人US$298，還不是付款憑證；說明列涼季可能09:00。付款前確認10/2確切集合／出發時間、自駕停車與騎乘限制。'),[['官方騎乘詳情',lateSources.ride]]),
 stop('08:00–10:00（待確認）','Canyon Rim Ride｜騎馬','Cowboy Trail Rides, Red Rock Canyon','騎馬','約2小時；騎乘距離業者未列','若確認09:00出發，結束改11:00，後續順延1小時；優先取消Bouchon支線，不動Sphere20:00。'),
 stop('10:00–11:00','牧場 → Las Vegas North Premium Outlets',outletAddress,'開車','約40–50分鐘／35–45 km＋停車','整理衣物、洗手間後出發。若騎馬09:00才開始，此段與Outlet整體順延約1小時。','lvout'),
 refs(stop('11:00–15:15','Las Vegas North Premium Outlets｜購物・午餐',outletAddress,'步行','購物與用餐約4小時15分鐘','集中逛到15:15；午餐直接在Outlet吃Shake Shack、Chipotle或其他當日營業餐飲。若騎馬09:00才開始，約12:00抵達，仍可逛到15:15；Bouchon放在10/1晚餐選項。'),[['官方地址／停車',lateSources.outlet],['商場與車庫圖',lateSources.outletMap]]),
 stop('15:15–16:15','North Outlets → Fontainebleau｜洗澡・換裝',fontAddress,'開車＋住宿內','約15–25分鐘／6–8 km＋整理約35分鐘','回飯店放戰利品、快速洗澡換裝，手機充電並開好Ticketmaster。','font'),
 optionStop('16:15–18:20','晚餐A／B／C／D方案｜挑10/1沒吃到的',dinnerChoices),
 stop('18:20–19:15','前往Sphere｜安檢・入場','Sphere, 255 Sands Ave, Las Vegas','Uber＋步行','依餐廳約10–25分鐘／2–5 km＋下車步行','18:20離餐廳、19:00左右到，留45–60分鐘安檢與入座。秀前用餐延誤就縮短餐，不挪20:00開演。'),
 refs(stop('20:00–約21:15','The Wizard of Oz at Sphere','Sphere, 255 Sands Ave, Las Vegas','座位活動','約75分鐘；另留15–30分鐘散場','Sec406 Row5 Seats21–22。官方列約75分鐘，不再把影片本身寫成2小時。'),[['官方節目','https://www.thesphere.com/']]),
 optionStop('21:30後','散場A／B／C方案｜走回／宵夜／搭車',afterShow)
]);bindDocs('10/2',/前往Sphere/,['Sphere｜']);

// October 3: use the full morning, then switch drivers after a combined break.
const laDinner=[['A｜Monsieur Marcel Bistro・法式晚餐',[
 refs(stop('19:00–19:15','步行至Monsieur Marcel Bistro','6333 W 3rd St, Los Angeles, CA 90036','步行','依你提供路線約10分鐘／700 m','Original Farmers Market內；抵達LA晚於19:30就先確認廚房，太晚改方案B。'),[['餐廳官方資料',lateSources.marcel]]),
 stop('19:15–20:15','Monsieur Marcel Bistro｜晚餐','Monsieur Marcel Bistro, Original Farmers Market','用餐','約60分鐘','可選法式鹹派／燉雞，依當日菜單；未訂位。'),stop('20:15–20:30','步行回Airbnb',la,'步行','約10分鐘／700 m','休息。')]],['B｜買蛋、肉，回住宿煮辛拉麵',[
 stop('19:00–19:45','Whole Foods Market Fairfax｜買蛋・肉','6350 W 3rd St, Los Angeles, CA 90036','步行','單程約10–15分鐘／800–1,000 m＋購物','買2–4顆蛋、小份肉片與青菜；營業時間當日確認。先確認LA住宿有可用爐具、鍋子，沒有就改熟食，不在房內使用未允許的加熱設備。'),
 stop('19:45–20:30','Airbnb｜辛拉麵＋蛋＋肉',la,'步行＋自煮','回程約10–15分鐘／800–1,000 m；煮食20分鐘','用自己帶的辛拉麵。買完立即回房，生肉煮熟。')]]];
day('10/3',[
 stop('08:30–10:15','Fontainebleau｜早餐・慢慢打包',fontAddress,'住宿內','0 m','早餐在飯店吃；不提早退房。'),stop('10:15–11:00','Fontainebleau｜退房・裝車',fontAddress,'退房','約45分鐘','11:00前辦妥，確認帳單與停車折抵。'),
 refs(stop('11:00–13:30','Las Vegas → Barstow｜芹芹開','Love’s Travel Stop, 2974 Lenwood Rd, Barstow, CA 92311','開車','約2小時30分–3小時／250–260 km；駕駛：Pei Chin（芹芹）','沿I-15南下。若還沒到Barstow就累，先在Baker合法加油站短休；休息時間優先。','fuel'),[['Love’s官方地址',lateSources.loves]]),
 refs(stop('13:30–14:30','Barstow｜加油・午餐・換駕駛','Love’s Travel Stop, 2974 Lenwood Rd, Barstow, CA 92311','步行／休息','約60分鐘；場內步行100–300 m','Love’s #374商店24小時。補滿油、洗手間，買站內供應的三明治／速食或自備餐；用餐完由Kuan Wei接手。'),[['Love’s官方資訊',lateSources.loves]]),
 stop('14:30–17:30','Barstow → Los Angeles｜Kuan Wei開',la,'開車','約2小時30分–3小時30分／190–210 km；駕駛：Kuan Wei','進LA塞車可能更晚，晚餐採可調整方案。','stay'),
 stop('17:30–18:30','Melrose Airbnb｜入住・放行李',la,'入住','約60分鐘，含停車與搬行李','全數行李先入屋；16:00後可入住。','stay'),
 stop('18:30–19:00','Airbnb｜休息・確認晚餐',la,'住宿內','0 m','晚到則以超市方案為主。'),optionStop('19:00–20:30','晚餐A／B方案｜Bistro或辛拉麵',laDinner)
]);bindDocs('10/3',/入住・放行李/,['Los Angeles｜']);

// October 4: walk locally in the morning; car only for the hills.
day('10/4',[
 stop('08:30–09:00','Airbnb｜出門準備',la,'住宿內','0 m','車留住宿，早餐直接走去市場。'),
 refs(stop('09:00–09:15','步行至Original Farmers Market・Du-par’s','6333 W 3rd St, Los Angeles, CA 90036','步行','依你提供路線約10分鐘／700 m','Du-par’s週日06:00–21:00；其他攤商開店時間不同。'),[['Du-par’s營業時間',lateSources.dupars]]),
 stop('09:15–10:15','Du-par’s｜早餐','Du-par’s Restaurant, Original Farmers Market','用餐','約60分鐘','鬆餅＋蛋類，兩人按食量分享。'),
 stop('10:15–12:30','Original Farmers Market／The Grove｜逛街','The Grove, Los Angeles','步行','兩區間約200–400 m／5–10分鐘；逛街約2小時','不安排固定午餐；餓了在市場買三明治／小點即可。'),
 stop('12:30–13:00','步行回Airbnb牽車・放戰利品',la,'步行','約10分鐘／700 m','帶水、點心、薄外套；下午才開車。'),
 refs(stop('13:00–14:00','開車至Lake Hollywood Park','3160 Canyon Lake Dr, Los Angeles, CA 90068','開車','約30–50分鐘／12–16 km＋找位','不是爬到Hollywood Sign後方，今天以公園拍照為主。','lakehollywood'),[['公園地址',lateSources.park]]),
 stop('14:00–15:00','Lake Hollywood Park｜HOLLYWOOD SIGN合照','Lake Hollywood Park, Los Angeles','步行','約300–800 m，含拍照45–60分鐘','停合法路邊車位，避開住戶車道；不走私人捷徑。'),
 refs(stop('15:00–15:45','Lake Hollywood Park → The Greek Theatre停車區','2700 N Vermont Ave, Los Angeles, CA 90027','開車','約25–40分鐘／8–12 km＋找位','主方案停Greek Theatre周邊免費公共停車區；只在沒有演出／特殊活動且現場開放時使用。10/4目前官方活動表未列演出，仍須出發前48小時及當天再確認。','greek'),[['天文台官方停車規則',lateSources.griff],['Greek Theatre活動表','https://www.lagreektheatre.com/']]),
 optionStop('15:45–16:30','The Greek Theatre → Griffith Observatory｜A搭DASH／B步行上山',[
  ['A｜搭DASH接駁車（較省體力）',[refs(stop('15:45–16:30','Greek Theatre站 → Griffith Observatory','Griffith Observatory, 2800 E Observatory Rd, Los Angeles','步行＋DASH','走到站牌約3–8分鐘；候車＋車程抓20–40分鐘','每日10:00–22:00，約20–25分鐘一班；現金US$0.50或TAP US$0.35。搭往Observatory方向。','','griff'),[['官方班次與路線',lateSources.griff]])]],
  ['B｜步行上山（不等車）',[refs(stop('15:45–16:30','The Greek Theatre → Griffith Observatory','Griffith Observatory, 2800 E Observatory Rd, Los Angeles','步行上坡','約30–45分鐘／最長約1.6 km上坡','走官方建議的公園道路／步道方向；帶水、防曬，不走封閉路段。若體力或天氣不合適就改DASH。'),[['官方步行與停車說明',lateSources.griff]])]]
 ]),
 stop('16:30–19:30','Griffith Observatory｜展覽・夕陽・夜景','Griffith Observatory, Los Angeles','步行','園區約500–1,000 m；停留約3小時','週日10:00–22:00。傍晚先卡好視野，日落時間出發前再核對；帶外套。'),
 optionStop('19:30–20:15','Griffith Observatory → The Greek Theatre取車｜A搭DASH／B步行下山',[
  ['A｜搭DASH下山（優先）',[refs(stop('19:30–20:15','Observatory站 → Greek Theatre站','The Greek Theatre, 2700 N Vermont Ave, Los Angeles','DASH＋步行','候車＋車程抓20–40分鐘','搭下山方向，在Greek Theatre站下車後走回停車處；不要錯過22:00末段服務。','','griff'),[['官方班次與路線',lateSources.griff]])]],
  ['B｜步行下山',[refs(stop('19:30–20:15','Griffith Observatory → The Greek Theatre','The Greek Theatre, 2700 N Vermont Ave, Los Angeles','步行下坡','約25–40分鐘／最長約1.6 km下坡','只走有照明且開放的公園道路／步道；天黑、疲累或路況不明就改搭DASH。'),[['官方步行與停車說明',lateSources.griff]])]]
 ]),
 stop('20:15–21:00','The Greek Theatre → Airbnb附近晚餐／外帶',la,'開車','約25–45分鐘／10–14 km','取車後回住宿附近買披薩／飯類，或用前晚剩餘蛋肉煮辛拉麵。','stay')
]);

// October 5: downtown basketball/baseball stops first, one beach for the afternoon.
day('10/5',[
 stop('08:00–08:45','Airbnb｜早餐・泳具準備',la,'住宿內','0 m','早餐吐司／優格；泳衣、毛巾、拖鞋、乾衣、防曬與薄外套。'),
 stop('08:45–09:30','開車至L.A. LIVE停車','L.A. LIVE West Garage, 1005 Chick Hearn Ct, Los Angeles','開車','約25–45分鐘／12–16 km＋停車','當日場館活動可能影響入口。','crypto'),
 refs(stop('09:30–10:15','Kobe And Gianna Bryant Statue｜父女雕像','Kobe and Gianna Bryant Statue, Chick Hearn Ct and Georgia St, Los Angeles','步行','停車後約300–600 m／5–10分鐘','位於Crypto.com Arena 11th Street Entrance附近；不是只有Kobe單人的Star Plaza雕像。當日可進入時間／圍封未確認，抵達先看告示。'),[['NBA官方位置',lateSources.statue]]),
 stop('10:15–10:45','開車至Grand Central Market停車','308 S Hill St, Los Angeles, CA 90013','開車','約10–20分鐘／3–4 km＋停車','市場車庫入口在Hill St。','gcm'),
 refs(stop('10:45–11:45','Grand Central Market｜逛市場・早午餐','317 S Broadway, Los Angeles, CA 90013','步行','車庫到市場約100–200 m／3–5分鐘','選蛋堡／塔可／三明治，補足下午游泳前的正餐；各攤商時間不同。'),[['市場位置／停車',lateSources.market]]),
 stop('11:45–12:15','開車至Dodger Stadium Team Store','Top of the Park Official Team Store, Dodger Stadium, Los Angeles','開車','約15–25分鐘／5–7 km＋入場','上午先查10/5是否開放購物及可用入口，避免白跑。','dodgerstore'),
 refs(stop('12:15–13:00','Top of the Park Official Team Store｜購物','Top of the Park Official Team Store, Dodger Stadium','步行','停車至商店距離依園方指定','一般非比賽日10:00–17:00；10/5季後賽／活動可能變動，以當日公告為準，未確認就略過、提早去海邊。'),[['球隊商店時間',lateSources.dodgers]]),
 stop('13:00–14:30','Dodger Stadium → Santa Monica海灘','Santa Monica Parking Structure 6, 1431 2nd St, Santa Monica','開車','約45–75分鐘／30–40 km＋停車','下午只選Santa Monica，不再串Venice和Manhattan；保留玩水時間。','santa'),
 stop('14:30–15:00','停車場 → Santa Monica State Beach','Santa Monica State Beach, north of Santa Monica Pier','步行','約10–15分鐘／600–900 m＋換裝','選當天有救生員值勤、允許游泳的海域；不要直接在碼頭旁下水。'),
 refs(stop('15:00–17:00','Santa Monica State Beach｜玩水・游泳','Santa Monica State Beach','游泳／沙灘活動','約2小時，依海況縮短','當天先問救生員、查水質與警示旗；離岸流、低溫或水質警報就改沙灘散步。游泳在日落前結束，不游到天黑。'),[['海灘安全',lateSources.beach],['當日水質',lateSources.water]]),
 stop('17:00–18:45','換乾衣・海灘夕陽・Pier散步','Santa Monica Pier, Santa Monica','步行','約500–1,000 m，依體力','先擦乾、換衣、補水；夕陽留在沙灘欣賞，日落時間出發前確認。'),
 stop('18:45–19:45','Santa Monica｜晚餐','Santa Monica Pier / Downtown Santa Monica','步行／用餐','約60分鐘','吃魚肉塔可／漢堡／義大利麵，按當天排隊選店。'),
 stop('19:45–20:45','Santa Monica → Airbnb',la,'步行＋開車','回車步行10–15分鐘／600–900 m；車程30–50分鐘／18–23 km','回房整理泳具，隔天環球影城。','stay')
]);

// Internal movement within one activity does not need a distance. Keep distance only for travel
// between itinerary stops or named scenic points.
const internalDurationRules=[
 [/The Squire｜早餐・退房/,''],
 [/Mather Point｜觀景拍照/,'停留約30分鐘'],
 [/Yavapai Point／Yavapai Geology Museum/,'觀景與展館停留約25分鐘'],
 [/Page飯店｜Check-in・放行李/,'入住約15分鐘'],
 [/Page飯店｜早餐・退房準備/,''],
 [/Dixie’s｜報到/,'報到與安檢約45分鐘'],
 [/Zion Guru｜提前領取/,'試裝約30–45分鐘'],
 [/Adventure Tiny House｜入住・放行李/,'入住約25分鐘'],
 [/Walmart｜早餐・登山餐・晚餐食材/,'購物約45分鐘'],
 [/Airbnb｜烤雞腿排／熟食沙拉晚餐/,''],
 [/Airbnb｜晚餐／明日備餐/,''],
 [/Airbnb｜早餐・安全資訊・裝備檢點/,''],
 [/Floating Rock附近｜午餐・拍照・折返/,'最多30分鐘'],
 [/Airbnb｜自煮晚餐/,''],
 [/Airbnb｜恢復・檢查明日Permit/,''],
 [/Fontainebleau｜休息・換裝/,''],
 [/Fontainebleau｜早餐・騎馬準備/,''],
 [/Canyon Rim Ride｜報到・裝備說明/,'報到與說明預留40分鐘'],
 [/Las Vegas North Premium Outlets｜購物/,'購物與用餐約4小時15分鐘'],
 [/North Outlets｜午餐・繼續購物/,'用餐與購物約1小時45分鐘'],
 [/Fontainebleau｜洗澡・休息・換裝/,''],
 [/Fontainebleau｜早餐・慢慢打包/,''],
 [/Barstow｜加油・午餐・換駕駛/,'休息約60分鐘'],
 [/Airbnb｜休息・確認晚餐/,''],
 [/Airbnb｜出門準備/,''],
 [/Lake Hollywood Park｜HOLLYWOOD SIGN合照/,'拍照約45–60分鐘'],
 [/Griffith Observatory｜展覽・夕陽・夜景/,'停留約3小時'],
 [/Airbnb｜早餐・泳具準備/,''],
 [/換乾衣・海灘夕陽・Pier散步/,'換裝、散步與等待日落約1小時45分鐘'],
 [/San Diego Airbnb｜晚餐/,''],
 [/Airbnb｜清冰箱晚餐/,''],
 [/整理廚房・打包/,''],
 [/River Rock｜披薩／漢堡晚餐/,'用餐約50分鐘']
];
const cleanedItems=new Set();
function removeInternalDistances(items){for(const item of items){if(!item||cleanedItems.has(item))continue;cleanedItems.add(item);const meta=item[4]||{};if(meta.mode==='住宿內'&&/0\s*m/i.test(meta.duration||''))meta.duration='';for(const [pattern,duration] of internalDurationRules)if(pattern.test(item[1])){meta.duration=duration;break;}if(meta.duration)meta.duration=meta.duration.replace(/；館內步行約[\d,–-]+\s*m/gi,'；另含館內步行');if(meta.options)for(const [,optionItems] of meta.options)removeInternalDistances(optionItems);}}
for(const tripDay of days)removeInternalDistances(tripDay.items);
for(const dayBranches of Object.values(branches))for(const [,optionItems] of dayBranches)removeInternalDistances(optionItems);
renderDay();
