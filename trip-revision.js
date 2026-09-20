// Requested September 14 refinements. Distances are rounded planning estimates.
const revisedSources={airbnb:'https://www.airbnb.com/rooms/1013957220957614686',guru:'https://www.zionguru.com/rentals/narrows/equipment',walmart:'https://www.walmart.com/store/4678-hurricane-ut',costco:'https://www.costco.com/warehouse-locations/st-george-saint-george-ut-672.html',fuel:'https://www.nps.gov/places/000/desert-view-gas-station.htm',narrows:'https://www.nps.gov/zion/planyourvisit/thenarrows.htm',conditions:'https://www.nps.gov/zion/planyourvisit/conditions.htm',video:'https://www.youtube.com/watch?v=jH8fjrhRyTM&t=55s',hike:'https://hikingguy.com/hikes/zion-narrows/',rock:'https://riverrockroasters.com/'};
const getDay=d=>days.find(x=>x.d===d);
function refs(i,links){i[4].refs=links;return i;}
const guruAddress='1013 Zion Park Blvd, Springdale, UT 84767';
const walmartAddress='180 N 3400 W, Hurricane, UT 84737';
const costcoAddress='835 N 3050 E, St. George, UT 84790';
const kitchenText='房源已列：小廚房、冷藏／冷凍冰箱、戶外瓦斯烤爐。爐台、微波爐、電鍋、鍋具及調味料未從頁面確認。主菜採烤爐料理，主食用麵包／餅皮；若烤爐當天不可用，改熟食＋沙拉。先確認烤爐使用規則與瓦斯，無需另買木炭。';
const groceryText='兩人3晚＋3早餐＋2份登山日午餐：小包燕麥約500g、牛奶1L、優格4杯、香蕉6根／蘋果4顆、吐司1條或餅皮8–10片、花生醬小罐、鮪魚袋4包、堅果／能量棒8–10份。晚餐：雞腿排約600g、牛排或熟香腸約500g、沙拉2包、甜椒2顆、櫛瓜2條、玉米2支。小瓶油、鹽胡椒、鋁箔、夾鏈袋視住宿現有用品再補；帶保冷袋與冰袋。9/30以剩菜為主，別再買整箱生鮮。';

// Day 3: preserve the user's specified four driving assignments.
for(const [match,driver] of [['Costco El Centro Gas','Pei Chin（芹芹）'],['Costco Prescott｜長途','Kuan Wei'],['Bearizona Wildlife Park','Pei Chin（芹芹）'],['Holiday Inn Resort the Squire','Kuan Wei']]){
 const i=getDay('9/26').items.find(x=>x[1].includes(match));i[4].duration+=' · 駕駛：'+driver;
}
getDay('9/26').items.find(i=>i[1].includes('Costco Prescott｜加油'))[3]+=' 午餐：先吃帶來的三明治／捲餅＋水果，或賣場熟食；不要只喝水就繼續開4小時。';

// Day 4: estimates for each distinct walk or drive, retaining the exact requested route.
const gcDistances=['住宿內，0 m','約25–35分鐘／12–15 km＋入園排隊','約5–15分鐘／300–500 m','觀景區約100–200 m，停留30分鐘','約25–35分鐘／1,100 m；另留拍照','約5分鐘／100–200 m；觀景停留20分鐘','橘線候車0–15分＋約5–10分車程；步行備案約25–35分／1,200–1,500 m','約10–20分鐘／5–6 km','約10–15分鐘／600–800 m','約3–5分鐘／150–250 m','約5–10分鐘／400–600 m','購餐＋回車約20–30分／700–1,000 m','約30–35分鐘／20–23 km','約2–5分鐘／100–200 m（單程）','約25–30分鐘／18–21 km','約2–5分鐘／100–200 m（單程）','約10–15分鐘／6–8 km','約5–10分鐘／400–600 m（單程）','約2小時–2小時15分／175–185 km','停車到房間約100–200 m','約10–15分鐘／8–10 km','來回約40–50分鐘／2,400 m＋拍照','約10–15分鐘／8–10 km'];
getDay('9/27').items.forEach((i,n)=>i[4].duration=gcDistances[n]);
const gc=getDay('9/27').items;
gc.find(i=>i[1].includes('村落外帶'))[3]='午餐：Bright Angel Lodge附近當日供應的三明治／捲餅＋水果或點心外帶；若排隊太長，吃自備花生醬吐司、鮪魚餅皮。回Lot D停妥用餐。';
const fuelIndex=gc.findIndex(i=>i[1].includes('Best Western'));
gc.splice(fuelIndex,0,refs(stop('15:00–15:15','Desert View Gas Station｜加油','Desert View Gas Station, Grand Canyon National Park','開車','約3–5分鐘／0.5–1 km＋加油10分鐘','離開園區前補油。NPS列刷卡自助加油全年24小時；油價依泵上顯示。信用卡無法使用時不要等到見底才找備案。','fuel'),[['NPS加油站',revisedSources.fuel]]));
gc.find(i=>i[1].includes('Best Western'))[0]='15:15–17:30';gc.find(i=>i[1].includes('Page飯店'))[0]='17:30–17:45';gc.find(i=>i[1].includes('Horseshoe Bend Parking'))[0]='17:45–18:00';gc.find(i=>i[1].includes('Horseshoe Bend Overlook'))[0]='18:00–18:45';
gc.find(i=>i[1].includes('Horseshoe Bend Overlook'))[3]+=' 加油後行程较紧；可能遇日落／暮色，若不足以安全往返就取消今晚，不為照片摸黑靠近崖邊。';

// Day 5: Arizona → Utah clock change included; early rental pickup comes before groceries.
day('9/28',[
 stop('08:15–09:15 AZ','Page飯店｜早餐・退房準備','Best Western View of Lake Powell, 716 Rimview Dr, Page','住宿內','0 m','早餐吃蛋、麵包／燕麥、水果；補水。依原安排裝好行李，貴重物品隨身。'),
 stop('09:15–10:00 AZ','前往Dixie’s Lower Antelope Canyon','Dixie’s Lower Antelope Canyon Tours, Page, AZ','開車','約15–20分鐘／10–12 km＋停車緩衝','09:45左右到，最晚10:00開始報到。','dixie'),
 stop('10:00–10:45 AZ','Dixie’s｜報到','Dixie’s Lower Antelope Canyon Tours','步行','停車至報到約100–300 m／3–5分鐘','10:45 Tour；提前45分鐘。Booking D-113491；依憑證禁帶包包、腳架等。'),
 stop('10:45–12:00 AZ','Lower Antelope Canyon Tour','Lower Antelope Canyon','步行導覽','約60–75分鐘；路線與階梯依業者安排','2位成人，包鞋。'),
 stop('12:00–12:35 AZ','Page｜外帶午餐','Page, AZ','開車','回Page約15–20分鐘／10–12 km','午餐：前晚先備的鮪魚捲餅／三明治＋水果，停妥再吃；需要加買就找Page沿途外帶店，不再排長餐。'),
 stop('12:35–13:00 AZ','Page Chevron｜補滿油再離城','59 S Lake Powell Blvd, Page, AZ 86040','開車','市區約5–10分鐘／1–3 km＋加油','指定加油點；營業／油價待當日導航確認。備案：Page市區其他營業加油站；不要把第一個加油機會押在Zion山路。','fuel'),
 stop('13:00 AZ → 16:30–17:00 UT','Page → Zion Guru｜東入口穿越Zion',guruAddress,'開車','约2.5–3小時／185–200 km；手錶快1小時','US-89 → UT-9 → Zion–Mount Carmel Tunnel → Springdale。含園區進出，帶年票；另留隧道管制、排隊與拍照緩衝。延誤時先通知店家。','shopping'),
 refs(stop('16:30–17:15 UT','Zion Guru｜提前領取Dry Bib ×2',guruAddress,'步行／試裝','門口合法短停至店內約50–200 m；試裝30–45分鐘','前一天14:00–19:30可免費領取，視庫存而定；原9/29 08:00租借仍為使用日。查詢碼3QTUXW，餘款US$72.06。試鞋與背帶，確認內建襪、防水高度、登山杖、防水袋是否另租；問清9/29最晚歸還時間（官網：關店前1小時）。','shopping'),[['提前領取規則',revisedSources.guru]]),
 stop('17:15–19:45 UT','採買A／B方案｜擇一','Hurricane / St. George, Utah','開車','詳見方案內車程與距離','Walmart較適合兩人少量多樣；Costco適合補油與大包裝，兩家不用全跑。'),
 refs(stop('19:15–20:00 UT','Adventure Tiny House｜入住・放行李',virgin,'入住','各方案已含回住宿車程；按到達時間入住','Walmart方案較早到、Costco方案較晚到；先把生鮮放冰箱，再確認烤爐及厨房用品。'+kitchenText,'stay'),[['查看住宿設備',revisedSources.airbnb]]),
 stop('20:00–21:00 UT','Airbnb｜自煮晚餐・備明日餐',virgin,'住宿內','0 m','晚餐：烤雞腿排＋甜椒／櫛瓜＋餅皮；無烤爐則改熟雞肉／熟食＋沙拉與麵包。睡前做隔夜燕麥，裝好明日免冷藏午餐。'+groceryText)
]);
branches['9/28']=[
 ['A｜Hurricane Walmart（兩人採買主方案）',[
 stop('17:15–18:00','Zion Guru → Hurricane Walmart',walmartAddress,'開車','約40–50分鐘／40–45 km','沿UT-9西行；超市顧客車位。','shopping'),
 refs(stop('18:00–18:45','Walmart｜採買3晚與登山餐',walmartAddress,'步行','賣場內約500–1,000 m／45分鐘','每日06:00–23:00。'+groceryText),[['官方營業時間',revisedSources.walmart]]),
 stop('18:45–19:15','Walmart → Virgin Airbnb',virgin,'開車','約25–30分鐘／25–30 km','採買後直接回住宿冷藏。','stay')]],
 ['B｜Washington周邊Costco（官方名稱St. George Warehouse）',[
 stop('17:15–18:15','Zion Guru → Costco St. George',costcoAddress,'開車','約55–65分鐘／60–65 km','比Walmart遠；先評估抵達時間。','shopping'),
 refs(stop('18:15–19:00','Costco｜採買・視油量加油',costcoAddress,'步行／場內開車','採買＋加油約45分鐘','週一一般會員10:00–20:30，Executive 09:00起；加油06:00–22:00。兩人只選小包肉、熟食、水果與需要的水；大包剩量不宜全買。'),[['官方門市／油站時間',revisedSources.costco]]),
 stop('19:00–19:45','Costco → Virgin Airbnb',virgin,'開車','約35–45分鐘／40–45 km','直接回住宿冷藏，晚餐用熟食可省時間。','stay')]]];

// Day 6: equipment already in hand; aim beyond Floating Rock, not Big Spring.
day('9/29',[
 refs(stop('05:45–06:30','Airbnb｜早餐・安全資訊・裝備檢點',virgin,'住宿內','0 m','早餐：隔夜燕麥＋優格／香蕉。檢查Dry Bib破損與背帶、內建襪／租鞋尺寸、木杖、防水袋、手機防水、保暖快乾層、替換乾衣、頭燈、飲水和午餐。查NPS開放與山洪預報、當日水流；裝備不能取代水況判斷。'),[['NPS當日狀況',revisedSources.conditions],['Narrows規劃',revisedSources.narrows]]),
 stop('06:30–07:10','Virgin → Zion Visitor Center停車','Zion Canyon Visitor Center','開車','約35–45分鐘／30–35 km','已領裝備，不再等08:00開店；滿位則Springdale停車，鎮上接駁08:00才開始，需相應延後。','zion'),
 stop('07:10–08:15','Visitor Center → Temple of Sinawava','Temple of Sinawava, Zion National Park','步行＋園內接駁','步行200–400 m／5–10分；巴士約45分＋候車','洗手間、装水，搭往Stop9。','','zion'),
 stop('08:15–08:45','Riverside Walk → 下水點','Riverside Walk, Zion National Park','步行','約30分鐘／1,600 m（單程）','乾燥鋪面走到終點後才下水。'),
 refs(stop('08:45–11:30','The Narrows｜Mystery Falls → Orderville岔口 → Floating Rock','Floating Rock, The Narrows, Zion National Park','涉水步行','往返总規劃約10–12 km（含Riverside Walk），約6–7小時含休息；不是GPS精準里程','順主河上溯，不轉入Orderville支線。目標Floating Rock後再前進約100–200 m拍照；遇深水、急流或寒冷就提前折返，不以到達地標為硬目標。'),[['路線圖與地標',revisedSources.hike],['你提供的影片（未取得完整內容）',revisedSources.video]]),
 stop('11:30–12:00','Floating Rock附近｜午餐・拍照・折返','Floating Rock, The Narrows, Zion National Park','步行／休息','附近短移動約100–200 m，最多30分鐘','午餐：花生醬餅皮＋即開鮪魚袋、能量棒、蘋果；選安全乾燥位置短休。最晚12:00折返，就算未到Floating Rock也回頭；不走到Big Springs。'),
 stop('12:00–15:00','原路下行 → Riverside Walk → Temple of Sinawava','Temple of Sinawava, Zion National Park','涉水＋步行','約2.5–3小時；返回距離依實際折返點約5–6 km','回程一樣小心濕滑石頭，預留慢走與換乾衣時間。'),
 stop('15:00–16:00','搭接駁回Visitor Center牽車','Zion Canyon Visitor Center','園內接駁＋步行','巴士約45分鐘＋候車；步行200–400 m','不要靠末班車才回。','','zion'),
 refs(stop('16:00–16:30','Zion Guru｜歸還装備',guruAddress,'開車＋步行','約5–10分鐘／2–3 km；歸還約15分鐘','確認兩套裝備齊全。歸還截止以9/28領取時確認的時間為準，官網要求使用日關店前1小時。','shopping'),[['租借／歸還規則',revisedSources.guru]]),
 stop('16:30–17:15','Zion Guru → Virgin Airbnb',virgin,'開車','約30–40分鐘／28–32 km','回房洗澡、更衣、曬裝備。','stay'),
 stop('18:00–19:00','Airbnb｜自煮晚餐',virgin,'住宿內','0 m','晚餐：烤牛排或熟香腸＋玉米＋沙拉＋麵包；無烤爐則用熟食冷盤。吃完裝好明日花生醬／鮪魚餅皮與零食。'),
 stop('19:00–20:30','Airbnb｜恢復・檢查明日Permit',virgin,'住宿內','0 m','腳部保養、補水；Angels Landing證件、permit、登山鞋、頭燈與外套。')
]);

// Day 7: packed lunch and cook remaining groceries, with La Verkin fallback.
getDay('9/30').items[0][3]+=' 早餐：燕麥／吐司＋優格、水果；裝好午餐與點心。';
getDay('9/30').items[3][3]+=' 11:45先吃午餐：花生醬或鮪魚餅皮＋水果，12:00後開始步道；攀登中另留短暫補給。';
getDay('9/30').items.splice(-1,1,stop('18:20–20:30','晚餐A／B方案｜剩菜自煮或La Verkin','Virgin / La Verkin, Utah','開車','約35–50分鐘／30–40 km，依方案','下山後直接回住宿或La Verkin，不在Springdale安排晚餐。'));
branches['9/30']=[['A｜剩餘食材自煮',[
 stop('18:20–19:10','Zion入口 → Virgin Airbnb',virgin,'開車','約35–45分鐘／30–35 km','若車在鎮上，先預留取車時間。','stay'),
 stop('19:10–20:15','Airbnb｜清冰箱晚餐',virgin,'住宿內','0 m','剩餘熟肉＋烤蔬菜／沙拉做餅皮捲或三明治；只吃妥善冷藏食物。把10/1早餐燕麥、吐司、水果先留出來。'),
 stop('20:15–20:30','整理廚房・打包',virgin,'住宿內','0 m','依房東規定洗餐具、處理垃圾及剩餘食材。')]],['B｜食材不夠：La Verkin晚餐',[
 refs(stop('18:20–19:10','River Rock Roasting Company｜La Verkin','394 S State St, La Verkin, UT 84745','開車','約35–45分鐘／35–40 km','選Main Café，不是另一間Drive Through；官方列週一至六06:30–21:00。','shopping'),[['官方地點／時間',revisedSources.rock]]),
 stop('19:10–20:00','River Rock｜披薩／漢堡晚餐','394 S State St, La Verkin, UT 84745','步行','停車至餐廳約50–150 m','依當日供應點餐；若下山太晚先查廚房是否仍接單，備案自備餅皮＋鮪魚。'),
 stop('20:00–20:20','La Verkin → Virgin Airbnb',virgin,'開車','約15–20分鐘／12–16 km','回房打包。','stay')]]];

// Day 8: three unbooked dinner choices live inside the dinner time slot.
getDay('10/1').items[0][3]+=' 早餐：吃完留下的燕麥、吐司、優格與水果；冷藏剩菜不留車內長途攜帶。';
getDay('10/1').items[3][2]='Las Vegas North Premium Outlets, 875 S Grand Central Pkwy, Las Vegas';getDay('10/1').items[3][3]='午餐：Outlet餐飲區吃三明治／沙拉，晚餐留胃口；之後輕逛。';
getDay('10/1').items.splice(-1,1,stop('16:30–17:30','Fontainebleau｜休息・換裝','2777 S Las Vegas Blvd, Las Vegas','住宿內','0 m','晚餐三選一，以下均未訂位。'),stop('17:30–20:30','晚餐A／B／C方案｜Las Vegas','Las Vegas','Uber／計程車','每段約15–30分鐘／4–7 km＋飯店內步行','車留Fontainebleau，晚餐後依體力散步或回飯店。'));
branches['10/1']=[
 ['A｜Gordon Ramsay Burger・Planet Hollywood',[
 refs(stop('17:30–18:15','前往Gordon Ramsay Burger','3667 S Las Vegas Blvd, Las Vegas, NV 89109','Uber＋步行','約20–30分鐘／6–7 km；館內步行約300–700 m','採Planet Hollywood店，避免導航到Flamingo分店；週四11:00–翌日01:00。'),[['官方店址／時間','https://www.gordonramsayrestaurants.com/en/us/gordon-ramsay-burger/locations/planet-hollywood-las-vegas']]),
 stop('18:15–19:30','Gordon Ramsay Burger｜漢堡晚餐','Gordon Ramsay Burger, Planet Hollywood, Las Vegas','用餐','約60–75分鐘＋排隊','漢堡＋薯條，可分享奶昔；用餐時間依排隊順延。'),stop('19:30–20:30','Strip短走／回Fontainebleau','Fontainebleau Las Vegas','步行＋Uber','散步自選；返程約20–30分鐘／6–7 km','不排太晚。')]],
 ['B｜Peter Luger Steak House・Caesars Palace',[
 refs(stop('17:30–18:15','前往Peter Luger Steak House','3570 S Las Vegas Blvd, Las Vegas, NV 89109','Uber＋步行','約15–25分鐘／4–6 km；館內步行約500–900 m','建議先訂18:00–18:30；週四訂位頁列11:30–22:00。'),[['官方餐廳','https://www.caesars.com/caesars-palace/restaurants/peter-luger-steak-house'],['訂位與營業時間','https://www.opentable.com/r/peter-luger-at-caesars-palace-las-vegas']]),
 stop('18:15–20:00','Peter Luger｜牛排晚餐','Peter Luger Steak House, Caesars Palace','用餐','约90–120分鐘','雙人分享牛排，另點蔬菜／馬鈴薯；依菜單份量及食量決定。未訂位。'),stop('20:00–20:30','返回Fontainebleau','Fontainebleau Las Vegas','Uber','約15–25分鐘／4–6 km','回房休息。')]],
 ['C｜Lawry’s The Prime Rib',[
 refs(stop('17:30–18:00','前往Lawry’s The Prime Rib','4043 Howard Hughes Pkwy, Las Vegas, NV 89169','Uber','約15–25分鐘／4–6 km','週四晚餐17:00–21:00；建議訂18:00。Business casual，避免運動服及夾腳拖。'),[['官方資訊與時間','https://www.lawrysonline.com/faqs-las-vegas/']]),
 stop('18:00–19:30','Lawry’s｜Prime Rib晚餐','4043 Howard Hughes Pkwy, Las Vegas, NV 89169','用餐','約90分鐘','主餐選Prime Rib，配菜依菜單；未訂位。'),stop('19:30–20:00','返回Fontainebleau','Fontainebleau Las Vegas','Uber','約15–25分鐘／4–6 km','回房休息或飯店散步。')]]];

// Put concrete meal ideas into the existing relevant time blocks across the rest of the trip.
const mealNotes={
 '9/23':[[0,'出發前18:00–19:00先吃晚餐：飯／麵＋蛋白質，別空腹到機場。'],[2,'航程中的正餐／早餐依機上供餐，另帶小點心。'],[4,'若落地後餓，入住前買三明治／飯糰；不另跑宵夜店。']],
 '9/24':[[0,'早餐：飯店早餐，蛋＋吐司／燕麥＋水果。']],
 '9/25':[[0,'早餐：Airbnb吃吐司、優格、水果。'],[2,'早午餐：Seaport Village選三明治／咖啡。'],[6,'晚餐：入場後買球場塔可／熱狗／漢堡，先吃再看18:40比賽。']],
 '10/2':[[0,'早餐：飯店咖啡／糕點＋蛋類，避免只喝咖啡。'],[2,'午餐：逛完Outlet吃三明治／沙拉再回飯店。'],[3,'晚餐：17:00左右吃飯店或Sphere附近義大利麵／漢堡，18:15前結束；店家尚未選定。']],
 '10/3':[[0,'早餐：飯店麵包／蛋類＋咖啡。'],[2,'午餐：Baker／Barstow休息站選漢堡或三明治，停車後吃。'],[5,'晚餐：The Grove／Original Farmers Market選烤肉飯或義大利麵；菜單現場看。']],
 '10/4':[[0,'早餐：住宿吃吐司、優格、水果。'],[2,'午餐：Original Farmers Market選墨西哥飯／塔可或烤肉。'],[6,'晚餐：看完夜景回住宿附近吃披薩／外帶飯，時間約20:00–21:00。']],
 '10/5':[[0,'早餐：吐司、蛋／優格、水果。'],[2,'午餐：Santa Monica吃魚肉塔可／三明治。'],[5,'晚餐：Manhattan Beach選漢堡／義大利麵，吃完回住宿。']],
 '10/6':[[0,'早餐：住宿吃吐司、優格、水果。'],[3,'午餐依當日安排用餐。'],[4,'晚餐：園區或CityWalk選披薩／漢堡，依胃口與離園時間。']],
 '10/7':[[0,'早餐：用完住宿剩下的麵包與水果。'],[3,'午餐：購物區選沙拉／三明治，避免大包外帶。'],[7,'晚餐：通過安檢後在Terminal B選飯／麵／三明治，先確認登機時間。']],
 '10/8':[[1,'早餐、午餐、晚餐隨機上供餐與睡眠調整，不另排地面餐廳。']],
 '10/9':[[1,'早餐：桃園機場吃粥／飯糰／蛋餅；先完成轉機必要手續。'],[2,'午餐依JX822機上供餐。'],[3,'抵達後若餓先補點心；晚餐留給日本段住宿區，後續目的地未在本行程確認。']]
};
for(const [d,entries] of Object.entries(mealNotes))for(const [n,note] of entries)getDay(d).items[n][3]+=' '+note;

// Finish meal gaps within their existing choices.
getDay('9/27').items[0][3]+=' 早餐：飯店蛋類＋吐司／燕麥＋水果。';
const rentalCard=tickets.find(t=>t[1].includes('Zion Guru'));
rentalCard[2]='9/29使用｜計畫9/28 16:30–17:15提前領取（UT）';
rentalCard[5]='Dry Bib ×2；總額US$144.14，已付US$72.08，餘款US$72.06。原憑證使用日9/29 08:00不變；官網允許前一日14:00–19:30免費領取，視庫存而定。9/29關店前1小時歸還，領取時確認截止時間。';
document.getElementById('tickets').innerHTML=cards(tickets);
// Explicit voucher placement: each document appears only at the point of use.
function bindDocs(date,match,prefixes){const i=getDay(date).items.find(x=>match.test(x[1]));if(!i)throw Error('Missing voucher target '+date+' '+match);i[4].docs=normalDocuments.filter(d=>prefixes.some(p=>d.label.startsWith(p))).map(d=>d.url);}
bindDocs('9/23',/大園/,['美國行｜']);bindDocs('9/23',/機場報到/,['機票｜','ESTA｜']);bindDocs('9/23',/前往機場飯店/,['LAX｜']);
bindDocs('9/24',/入住・放行李/,['San Diego｜']);bindDocs('9/26',/The Squire｜Check-in/,['Grand Canyon｜']);bindDocs('9/27',/Page飯店｜Check-in/,['Page｜']);bindDocs('9/28',/入住・放行李/,['Zion／Virgin｜']);bindDocs('10/1',/入住 Fontainebleau/,['Las Vegas｜']);bindDocs('10/3',/入住 Melrose/,['Los Angeles｜']);
bindDocs('9/25',/Petco Park｜入場/,['MLB｜']);bindDocs('9/28',/Dixie’s｜報到/,['下羚羊谷｜']);bindDocs('9/28',/提前領取/,['The Narrows｜']);bindDocs('9/29',/歸還装備/,['The Narrows｜']);bindDocs('10/2',/前往 Sphere/,['Sphere｜']);bindDocs('10/6',/入園準備/,['環球影城｜入園票']);bindDocs('10/7',/接駁至 Terminal B/,['機票｜']);bindDocs('10/9',/桃園機場轉機/,['機票｜','日本行｜','美國行｜']);
const secondEntry=getDay('10/7').items.find(i=>i[1].includes('第2日'));secondEntry[4].docs=normalDocuments.filter(d=>d.label.startsWith('環球影城｜入園票')).map(d=>d.url);
itemDocumentsHTML=function(i){const urls=i[4]?.docs||[];return urls.length?'<div class="item-pdfs"><div class="pdf-grid">'+normalDocuments.filter(d=>urls.includes(d.url)).map(documentLink).join('')+'</div></div>':'';};
// Append source links within the same stop, keeping the HTML containers balanced.
const renderStopBeforeSources=itemHTML;
itemHTML=function(i,prev){const html=renderStopBeforeSources(i,prev);const links=i[4]?.refs;if(!links)return html;return html.slice(0,-12)+'<div class="actions">'+links.map(([label,url])=>'<a class="mini" href="'+url+'" target="_blank" rel="noopener">'+escapeText(label)+' ↗</a>').join('')+'</div></div></div>';};
getDay('9/23').items[0][4].duration='停車業者接駁；發車間隔未列於憑證，進場確認';
renderDay();
