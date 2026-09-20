// Trip-specific detail layer. Times are planning estimates, not live navigation.
const sources={
 gc:'https://www.nps.gov/grca/planyourvisit/shuttle-buses.htm',gcpark:'https://www.nps.gov/grca/planyourvisit/parking_sr.htm',gcmap:'https://www.nps.gov/grca/learn/news/upload/sr-pocket-map.pdf',
 zion:'https://www.nps.gov/zion/planyourvisit/zion-canyon-shuttle-system.htm',zmap:'https://www.nps.gov/zion/planyourvisit/loader.cfm?csModule=security/getfile&pageid=8166212',spring:'https://www.springdale.utah.gov/435/Parking-Rates',
 griff:'https://griffithobservatory.lacity.gov/visit/getting-here/',seaport:'https://www.seaportvillage.com/parking',navy:'https://www.midway.org/visit/know-before-you-go',bestbuy:'https://stores.bestbuy.com/ca/san-diego/5151-mission-center-rd-438.html',
 petco:'https://space.aceparking.com/site/results?address=6th+and+K+Parkade%2C+Sixth+Avenue%2C+San+Diego%2C+CA%2C+USA',
 font:'https://www.fontainebleaulasvegas.com/information/parking-travel/',sm:'https://www.santamonica.gov/places/parking-lots/parking-structure-6',horse:'https://www.visitpageaz.com/places-to-go/horseshoe-bend/'
};
const parking={
 heritage:['Franciscan Plaza Parking Structure, San Juan Capistrano','Los Rios Park Parking Lot, San Juan Capistrano','兩處費率未核實，依入口告示；外帶時不佔卸貨／保留車位。'],
 capo:['Capistrano Beach Park Parking Lot, 35005 Beach Rd, Dana Point','Dana Point Harbor Parking','付費／時價未核實；如海水侵入或封閉直接改港區，不在封鎖處停。'],
 lajolla:['Coast Blvd / Prospect St 合法路邊車格, La Jolla','La Jolla Financial Building Parking, 1200 Prospect St','路邊依標示的收費與限時；私人車庫浮動費率，未核實。先找10分鐘，滿位改車庫。'],
 navy:['Navy Pier Parking, 22 Navy Pier, San Diego','Seaport Village Parking, 849 W Harbor Dr','Navy Pier：4–9月6小時內 US$20，超過6小時 US$25，特殊活動 US$30。備案：一般 US$8/小時；週五消費滿US$10並驗證，前2小時US$5，後每半小時US$3。',[sources.navy,sources.seaport]],
 bestbuy:['Best Buy Mission Valley, 5151 Mission Center Rd, San Diego, CA 92108','Best Buy Mission Valley同一商場其他合法顧客車格, 5151 Mission Center Rd, San Diego, CA 92108','主要與備用都在Best Buy所在的Park Valley Center內；不要再導航到其他同名停車點。門市官方頁未列停車費，依現場標誌使用顧客車格。行李已先放Airbnb，購買後眼鏡與包裝不要留在車內可見處。',sources.bestbuy],
 outlet:['Las Americas Premium Outlets, 4211 Camino De La Plaza, San Diego, CA 92173','Las Americas Premium Outlets北側一般停車區（Samsonite附近）','主要導航改用官方商場完整地址；備用請看官方商場圖找北側一般車格。一般停車依現場告示，付費優先車格不等同一般區；不要停到不允許外客的鄰近商家。','https://www.premiumoutlets.com/outlet/las-americas/about',null,'https://www.premiumoutlets.com/outlet/las-americas/map/'],
 petco:['6th and K Parkade, 289 Sixth Ave, San Diego','Park It On Market, 614 Market St, San Diego','活動日動態價；截圖 US$16/4hr 不是9/25保證價。先在 ACE 選9/25與17:15–22:30查價。備案同樣需查活動價；避開US$10/小時的球場特殊活動路邊區。',sources.petco],
 bear:['Bearizona Wildlife Park Parking, Williams','園方指定 overflow／另一一般停車區','截圖註記停車含門票；售票狀態仍待確認。無法確認外部合法替代場，滿場由工作人員指引。'],
 gcvc:['Grand Canyon Visitor Center Parking Lot 1','Grand Canyon Visitor Center Parking Lot 2 / 3 / 4','園區公共停車無另列停車費；入園費／年票另計。Lot1靠近Mather；Lot3可作overflow。',sources.gcpark],
 gcd:['Grand Canyon Parking Lot D, Backcountry Information Center','Grand Canyon Parking Lot C；再備 Lot A','Lot D 就是本次 Village 停車點。C較近但小；A較遠，需增加步行／藍線時間。',sources.gcpark],
 grandview:['Grandview Point Parking Lot','無已核實步行可達的獨立備用場','合法車格滿就短等或略過；不可停AZ-64路肩。不另排其他觀景點取代。',sources.gcmap],
 lipan:['Lipan Point Parking Lot','無已核實步行可達的獨立備用場','滿位則等待或直接Desert View；不能把道路轉彎處當備用車格。',sources.gcmap],
 desert:['Desert View Parking Lot','同一停車區其他合法車格','無已核實獨立近距離備用场；滿位服從現場指揮，不臨停出口路肩。',sources.gcmap],
 horse:['Horseshoe Bend Parking Lot, Page','無可確認自行步行進入的合法外部備用場','一般小客車 US$10 起；國家公園年票不抵。滿位等候／改時段，或由Page安排接送，不停US-89路肩。',sources.horse],
 dixie:['Dixie’s Lower Antelope Canyon Tours Parking','業者現場指定 overflow（若開放）','憑證未另列停車費；若滿位先問業者 +1 928-640-1761，不停隔壁其他tour車位。'],
 zion:['Zion Canyon Visitor Center Parking','Springdale Zone A／B／C 合法公共停車格','園內停車額滿即改Springdale。鎮上一般車全日：A US$25、B US$20、C US$15；13:00後半日依序US$20/15/10。收費執法06:00–17:00；私人場另計。',sources.spring],
 font:['Fontainebleau Las Vegas Self Parking','同飯店車庫其他一般樓層；必要時詢問飯店 valet','住客入住期間自助停車含於 resort fee，刷房卡。非住客首小時免費、之後24小時US$20；valet另計。',sources.font],
 lvout:['Las Vegas North Premium Outlets Parking, 875 S Grand Central Pkwy','同商場另一座／另一區一般停車場','營運商目前列 US$5 全日；活動日可能變動。','https://denisonparking.com/'],
 sphere:['Sphere 官方預約停車區（按停車票指定入口）','The Venetian / The Palazzo Self Parking','兩者均可能活動日浮動價，未核實10/2價格；優先把車留飯店搭Uber，避免額外找車位。','https://www.thesphere.com/'],
 grove:['The Grove Parking Structure, 189 The Grove Dr','Original Farmers Market Parking, 6333 W 3rd St','兩者收費及消費折抵分開；未核實完整2026費率，入場先看告示，不假設互相折抵。','https://thegrovela.com/'],
 rodeo:['Beverly Canon Gardens Parking, 241 N Canon Dr','Beverly Hills Public Parking, 440 N Camden Dr','各場免費時段與超時費未核實；不可一概當成全日免費。'],
 griff:['Griffith Observatory Parking Lot','Greek Theatre周邊合法停車 → DASH／步行','山頂為付費，現行時價未公布於所查官方頁，依收費機；週日10:00–22:00收費。Greek無演出可免費；演出日13:00後不可作此備案。',sources.griff],
 santa:['Santa Monica Parking Structure 6, 1431 2nd St','Santa Monica Beach Parking Lot 1 North','PS6：前90分US$1、1.5–3h US$4、3–5h US$12、日上限US$22；可能有刷卡費。Beach場按季節／活動另價。',sources.sm],
 venice:['Venice Beach Parking, 2100 Ocean Front Walk','Venice Beach Parking, 3000 Ocean Front Walk','洛杉磯海灘場依季節／星期收費，10/5未核實；步行到運河約10–20分鐘。'],
 manhattan:['Manhattan Beach Pier Parking Lots','Downtown Manhattan Beach Public Parking Lot 3','公共計時車格；現行時價未核實，注意車格最長停留與收費時段。'],
 universal:['Universal Studios Hollywood Parking（依當日安排）','Universal Studios Hollywood 一般停車區','由行程安排人處理停車；一般自助停車費另按官方當日牌價。'],
 shopping:['所選超市顧客停車場','同商場合法一般顧客區','僅限購物期間使用；費率／限時依告示，不可作全天寄放車輛。'],
 stay:['住宿指定住客車位','先聯絡飯店／房東詢問合法備用車位','以住宿憑證與房東指示為準；切勿停鄰戶車道。'],
 fuel:['加油站指定加油／短停區','下一個合法加油站（不在路肩等候）','加油區不是長時間停車場；採買時移到顧客車格。']
};
const stop=(time,name,address,mode,duration,note='',park='',bus='')=>[time,name,address,note,{mode,duration,park,bus}];
const sd='4131 Mississippi St, San Diego, CA 92104',la='7721 Beverly Blvd, Los Angeles, CA 90036',virgin='1871 East 50 South, Virgin, UT 84779';
const day=(date,items)=>{days.find(d=>d.d===date).items=items;};
day('9/24',[
stop('08:00–09:00','Hampton Inn LAX｜早餐・整理','10300 La Cienega Blvd, Inglewood, CA 90304','住宿內','原地','行李先留房內。'),
stop('09:00–09:30','SIXT／LAX Rental Car Facility','5251 W 98th St, Los Angeles, CA 90045','步行','約20–30分鐘（依截圖估1.5km）','不拖大行李；先確認可通行人行路線，施工時改合法接送。'),
stop('09:30–10:30','SIXT LAX｜取車與驗車','5251 W 98th St, Los Angeles, CA 90045','辦理取車','約60分鐘','租車預約10:00；護照、台灣／國際駕照、信用卡；拍攝車況。'),
stop('10:30–11:00','Hampton Inn LAX｜拿行李・退房','10300 La Cienega Blvd, Inglewood, CA 90304','開車','約10–15分鐘','11:00前退房。','stay'),
stop('11:00–12:10','Heritage Barbecue｜開車抵達','31721 Camino Capistrano, San Juan Capistrano, CA 92675','開車','約70–100分鐘，不含塞車','I-405／I-5方向；原表70分鐘偏順暢情況。','heritage'),
stop('12:10–12:40','Heritage Barbecue｜外帶午餐','31721 Camino Capistrano, San Juan Capistrano, CA 92675','步行','停車後約3–10分鐘','Toast若可預點，取餐目標12:15–12:30；排隊超45分鐘就改餐。'),
stop('12:40–13:00','Capistrano Beach Park｜海邊停車','35005 Beach Rd, Dana Point, CA 92624','開車','約20分鐘','遇封閉改Dana Point Harbor。','capo'),
stop('13:00–13:30','Capistrano Beach｜吃BBQ・看海','Capistrano Beach Park, Dana Point','步行','停車後短走','把車停妥後再用餐；勿在此重新整理後車廂。'),
stop('13:30–15:00','BEAUTIFUL Private Studio｜San Diego','4131 Mississippi St, San Diego, CA 92104','開車','約90–120分鐘','I-5往南；塞車延誤就縮短海邊或採買。','stay'),
stop('15:00–15:30','San Diego Airbnb｜入住・放行李',sd,'入住','30分鐘','依房東說明從後方alley進入，使用4131指定車位；門鎖密碼不放公開行程。'),
stop('15:30–16:00','La Jolla Cove｜開車抵達','1100 Coast Blvd, La Jolla, CA 92037','開車','約30–45分鐘','先找Coast Blvd／Prospect St合法車格。','lajolla'),
stop('16:00–18:00','La Jolla Cove → Children’s Pool','La Jolla Cove / Children’s Pool Beach','步行','兩點間約15–20分鐘','看海與拍照；不要靠近海豹或海獅。18:00離開，替Costco關門時間保留緩衝。'),
stop('18:00–18:30','La Jolla → Best Buy Mission Valley','5151 Mission Center Rd, San Diego, CA 92108','開車','約20–30分鐘／18–22 km','前往Park Valley Center；9/24週四門市時間當天再確認。','bestbuy'),
stop('18:30–19:20','Best Buy Mission Valley｜試戴・購買Meta glasses','5151 Mission Center Rd, San Diego, CA 92108','步行／購物','約50分鐘','先在BestBuy.com把門市設為Mission Valley確認庫存。優先試約131 mm Fury，再試134 mm Adventurer Large；你平常132 mm鏡框最合，鼻橋以可調款優先。確認夾頭、鼻托、鏡腳、相機與收音後再買，不要因缺貨改拿明顯不合尺寸。19:20要離開，避免趕不上Costco。','bestbuy'),
stop('19:20–19:35','Best Buy → Costco Wholesale Mission Valley','2345 Fenton Pkwy, San Diego, CA 92108','開車','約10–15分鐘／5–7 km','主要採買改到Mission Valley Costco；帶會員卡與可用付款方式。','shopping'),
stop('19:35–20:20','Costco｜Road Trip主要採買','2345 Fenton Pkwy, San Diego, CA 92108','購物','約45分鐘','依你提供的資料，9/24週四營業至20:30；20:20前開始結帳。採買水、零食、濕紙巾、垃圾袋、防曬、保冷袋／冰塊及隔日早餐。若Best Buy延誤，改用9/25 Walmart補採買。','shopping'),
stop('20:20–20:35','Costco｜結帳・裝車','2345 Fenton Pkwy, San Diego, CA 92108','步行／整理','約15分鐘','結帳後把冷藏品、眼鏡與貴重物品放妥；不要把包裝留在車內可見處。','shopping'),
stop('20:35–21:00','Costco → San Diego Airbnb',sd,'開車','約20–25分鐘／10–13 km','回住宿後立刻處理冷藏品。','stay'),
stop('21:00–21:40','Airbnb｜晚餐・整理採買・眼鏡配對',sd,'住宿內','約40分鐘','晚餐可在Costco買熟食／簡餐；若Food Court已停止接單，回程另買。替Meta glasses充電並完成Meta AI App配對／韌體更新；保留盒裝與收據。')]);
day('9/25',[
stop('08:30–09:30','San Diego Airbnb｜早餐・整理',sd,'住宿內','原地','確認Meta glasses已完成配對、充電與基本錄影測試；準備MLB行動票。'),
stop('09:30–10:00','Navy Pier Parking｜海港停車','22 Navy Pier, San Diego, CA 92132','開車','約20–30分鐘','按你截圖首選Navy Pier；如果主要逛Seaport可用較近備案。','navy'),
stop('10:00–12:00','Seaport Village｜港邊散步・早午餐','849 W Harbor Dr, San Diego, CA 92101','步行','從Navy Pier約15–20分鐘','先沿海港步行，再到Seaport Village；用餐地點未定。'),
stop('12:00–16:30','A／B方案｜Outlet為主・缺貨才補採買','Las Americas Premium Outlets, 4211 Camino De La Plaza','開車','依方案約20–45分鐘／段','A方案直接去Outlet，可逛約3小時45分；只有9/24發現缺少必需品才選B快速補買，Best Buy不再排在今天。'),
stop('16:30–17:15','San Diego Airbnb｜放戰利品',sd,'開車','從Outlet約30–45分鐘','冷藏食物優先放回；球賽前清空車內。','stay'),
stop('17:15–17:40','6th and K Parkade｜球賽停車','289 Sixth Ave, San Diego, CA 92101','開車','約20–35分鐘＋停車排隊','滿位或排隊超10分鐘改Park It On Market。','petco'),
stop('17:40–18:40','Petco Park｜入場・球場拍照','100 Park Blvd, San Diego, CA 92101','步行','約5–10分鐘；備案約10–15分鐘','MLB Ballpark行動票先開好；先拍球場、找座位再買餐。'),
stop('18:40–賽後','Padres vs Diamondbacks','Petco Park, San Diego','座位活動','比賽長度非固定','213區／6排／17–18；21:40為原估散場，不保證。'),
stop('賽後','步行回停車場 → San Diego Airbnb',sd,'步行＋開車','步行5–15分＋開車20–40分','僅缺必需品才去Walmart；隔天05:00起床。','stay')]);
day('9/26',[
stop('05:00–05:30','San Diego Airbnb｜退房・出發',sd,'住宿內','30分鐘','採用你最新截圖的05:30出發。'),
stop('05:30–07:15','Costco El Centro Gas Station','2030 N Imperial Ave #121c, El Centro, CA 92243','開車','約1小時45分／177km（原表估）','I-8往東；出發前查加油站營業。','fuel'),
stop('07:15–07:30','Costco El Centro｜第一次加油','2030 N Imperial Ave #121c, El Centro, CA 92243','原地','15分鐘','加油、換駕駛。'),
stop('07:30–08:30','Denny’s El Centro｜早餐','1445 Ocotillo Dr, El Centro, CA 92243','開車','短程約10–15分鐘','留完整早餐／洗手間休息。','shopping'),
stop('08:30–13:00','Costco Prescott｜長途抵達','3911 AZ-69, Prescott, AZ 86301','開車','約4.5小時／428km（原表估）','淨駕駛時間外另加安全休息；疲勞時不要硬趕Bearizona。','fuel'),
stop('13:00–13:40','Costco Prescott｜加油・最後補給','3911 AZ-69, Prescott, AZ 86301','原地','40分鐘','水、點心、簡餐；休息後換駕駛。'),
stop('13:40–15:00','Bearizona Wildlife Park','1500 E Route 66, Williams, AZ 86046','開車','約1小時20分／114km（原表估）','目標15:00到；原表註16:00最後車輛入場，需當日確認；門票待訂。','bear'),
stop('15:00–17:30','Bearizona｜Drive-through → Walk-through','Bearizona Wildlife Park','自駕＋步行','約2–2.5小時','先車遊，剩餘時間再步行區；遵從車窗／下車規定。'),
stop('17:30–18:30','Holiday Inn Resort the Squire','74 AZ-64, Tusayan, AZ 86023','開車','約1小時／81km（原表估）','黃昏小心動物。','stay'),
stop('18:30–19:00','The Squire｜Check-in','74 AZ-64, Tusayan, AZ 86023','入住','30分鐘','拿隔天早餐資訊。'),
stop('19:00後','We Cook Pizza and Pasta／飯店簡餐','605 AZ-64, Tusayan, AZ 86023','開車或步行','短程約5–15分鐘','此為原截圖餐廳備選，營業時間當日再查。','shopping')]);
day('9/27',[
stop('07:00–08:00','The Squire｜早餐・退房','74 AZ-64, Tusayan, AZ 86023','住宿內','60分鐘','先裝好行李、貴重物品隨身。'),
stop('08:00–08:30','Grand Canyon Visitor Center Parking','Grand Canyon Visitor Center Parking Lot 1','開車','約25–35分鐘＋入園排隊','停Lot1優先，備2／3／4；拍下車位。','gcvc'),
stop('08:30–08:45','Mather Point｜步行抵達','Mather Point, Grand Canyon','步行','約5–15分鐘','由Visitor Center停車區沿指標到崖邊。'),
stop('08:45–09:15','Mather Point｜觀景拍照','Mather Point, Grand Canyon','原地','30分鐘','第一個主要觀景點。'),
stop('09:15–10:00','Rim Trail → Yavapai Point','Yavapai Point, Grand Canyon','步行','約30–45分鐘含拍照','沿Rim Trail向西，不下切進峽谷。'),
stop('10:00–10:25','Yavapai Point／Yavapai Geology Museum','Yavapai Geology Museum, Grand Canyon','步行','短程','觀景為主，博物館依開放狀況。'),
stop('10:25–10:55','返回 Grand Canyon Visitor Center 牽車','Grand Canyon Visitor Center Shuttle Bus Terminal','橘線接駁／步行','候車0–15分＋短程；走回約25–35分','在Yavapai Geology Museum站搭往Visitor Center的Kaibab Rim Orange；不要搭去Yaki Point的東向支線。','','gc'),
stop('10:55–11:15','Parking Lot D｜Grand Canyon Village停車','Grand Canyon Parking Lot D, Backcountry Information Center','開車','約10–20分鐘','Lot D就是村落停車，不再額外開車找Village第二個車位。','gcd'),
stop('11:15–11:30','Bright Angel Lodge／Trailhead崖邊','Bright Angel Lodge, Grand Canyon Village','步行','從Lot D約10–15分鐘','只逛崖邊，不下Bright Angel Trail。'),
stop('11:30–11:45','Lookout Studio','Lookout Studio, Grand Canyon Village','步行','約3–5分鐘','拍照、看峽谷。'),
stop('11:45–12:05','El Tovar → Hopi House','El Tovar Hotel / Hopi House, Grand Canyon Village','步行','約5–10分鐘','歷史建築、紀念品；依店面營業。'),
stop('12:05–12:35','村落外帶午餐／點心 → 回Lot D','Bright Angel Lodge, Grand Canyon Village','步行','購餐＋回車約20–30分鐘','先在村內找當日供應的外帶；排隊太長改自備點心。不額外繞Market Plaza。'),
stop('12:35–13:10','Grandview Point Parking Lot','Grandview Point Parking Lot, Grand Canyon','開車','約30–35分鐘','沿Desert View Drive東行；吃東西請在停妥時進行。','grandview'),
stop('13:10–13:25','Grandview Point','Grandview Point, Grand Canyon','步行','停車場到觀景點約2–5分鐘','只看觀景台，不下Grandview Trail。'),
stop('13:25–13:55','Lipan Point Parking Lot','Lipan Point Parking Lot, Grand Canyon','開車','約25–30分鐘','不加插Moran Point，保留Page時間。','lipan'),
stop('13:55–14:10','Lipan Point','Lipan Point, Grand Canyon','步行','約2–5分鐘','拍照、欣賞科羅拉多河景。'),
stop('14:10–14:25','Desert View Parking Lot','Desert View Parking Lot, Grand Canyon','開車','約10–15分鐘','最後一個大峽谷停車點。','desert'),
stop('14:25–15:00','Desert View Watchtower／Desert View Point','Desert View Watchtower, Grand Canyon','步行','停車場步行約5–10分鐘','觀景、洗手間、補水；不保證能登塔。'),
stop('15:00–17:10','Best Western View of Lake Powell｜Page','716 Rimview Dr, Page, AZ 86040','開車','約2小時–2小時15分','從東口出園，AZ-64→US-89；晚到要縮短後續活動。','stay'),
stop('17:10–17:30','Page飯店｜Check-in・放行李','716 Rimview Dr, Page, AZ 86040','入住','20分鐘','快速放行李。'),
stop('17:30–17:45','Horseshoe Bend Parking Lot','Horseshoe Bend Parking Lot, Page','開車','約10–15分鐘','日落時間另查；不要為追日落超速。','horse'),
stop('17:45–18:45','Horseshoe Bend Overlook','Horseshoe Bend Overlook, Page','步行','來回約40–50分鐘＋拍照','全程約1.5mi往返；帶頭燈，天黑則縮短或取消。'),
stop('18:45–20:00','Big John’s Texas BBQ','153 S Lake Powell Blvd, Page, AZ 86040','開車','約10–15分鐘','晚餐後回716 Rimview Dr，約5–10分钟。','shopping')]);
const branches={
 '9/25':[
 ['A｜主要方案：直達Outlet',[
 stop('12:00–12:45','Seaport Village → Las Americas Premium Outlets','4211 Camino De La Plaza, San Diego, CA 92173','開車','約30–45分鐘／28–32 km','主要方案；9/24已完成採買與Best Buy，今天直接去Outlet。','outlet'),
 stop('12:45–16:30','Las Americas｜午餐・逛街','4211 Camino De La Plaza, San Diego, CA 92173','步行／購物','約3小時45分鐘','先在Outlet餐飲區快速吃午餐，再逛主要店家；16:30準時離開。','outlet')]],
 ['B｜缺東西才用：快速補採買',[
 stop('12:00–12:20','Seaport Village → Walmart National City','1200 Highland Ave, National City, CA 91950','開車','約15–25分鐘／11–14 km','只有9/24漏買必需品才使用此方案。','shopping'),
 stop('12:20–12:45','Walmart｜快速補買','1200 Highland Ave, National City, CA 91950','購物','約25分鐘','照缺貨清單補買，不逛其他區域；可順便買車上吃的午餐。','shopping'),
 stop('12:45–13:05','Walmart → Las Americas Premium Outlets','4211 Camino De La Plaza, San Diego, CA 92173','開車','約15–25分鐘／17–20 km','','outlet'),
 stop('13:05–16:30','Las Americas｜午餐・逛街','4211 Camino De La Plaza, San Diego, CA 92173','步行／購物','約3小時25分鐘','若未在Walmart買午餐，就先到餐飲區用餐；16:30準時離開。','outlet')]]]
};
// Keep the surprise out of ordinary itinerary, ticket and checklist views.
const surpriseDay=days.find(x=>x.d==='10/6');
const secretItems=surpriseDay.items.map(x=>JSON.parse(JSON.stringify(x)));
const secretTicket=tickets.find(x=>x[1].includes('VIP Add-On'));
tickets.splice(tickets.indexOf(secretTicket),1);
checks.forEach((c,i)=>{checks[i]=c.replace('與 VIP 報到規定','與入園準備');});
days.find(d=>d.d==='10/5').items.forEach(i=>i[3]=i[3].replace('Universal VIP','環球影城'));
surpriseDay.badge='電影世界';
surpriseDay.items=[stop('07:30–08:30','LA Airbnb｜早餐・出發準備',la,'住宿內','60分鐘','帶證件、手機與當日票券。'),stop('08:30–09:15','Universal Studios Hollywood','100 Universal City Plaza, Universal City, CA 91608','開車','約30–60分鐘','留早上交通緩衝，停車由行程安排人處理。','universal'),stop('09:15–10:00','Universal入口｜停車・入園準備','Universal Studios Hollywood Entrance','步行','約15–30分鐘','照當天安排集合。'),stop('10:00–17:00','Universal Studios Hollywood｜園區體驗','Universal Studios Hollywood','步行／園區安排','日間時段','依當日安排遊玩、用餐；節目與結束時間非固定。'),stop('17:00–閉園','園區自由活動／Universal CityWalk','Universal CityWalk Hollywood','步行','園區內','依官方當天關園時間調整，不假設營業到21:00。'),stop('離園後','回LA Airbnb',la,'開車','約30–60分鐘','先記下停車位置。','stay')];

// Supplement remaining days without converting flexible choices into reservations.
const enrichment={
 '9/23':['步行／自駕','機場步行','飛機','步行','飯店接駁或Uber','入住'],
 '9/28':['住宿內','開車','步行','步行導覽','開車','開車','開車／住宿內'],
 '9/29':['住宿內','開車','步行／領裝備','開車或鎮上接駁＋園內接駁','步行','涉水健行','步行＋園內接駁','開車／步行','開車'],
 '9/30':['住宿內','開車＋步行','园內接駁','步行','登山步行','登山步行','下山步行＋園內接駁','步行＋開車'],
 '10/1':['住宿內','退房','開車','開車＋步行','開車／入住','步行／Uber'],
 '10/2':['住宿內','開車','開車／住宿內','步行／Uber','Uber／計程車','步行／座位活動','Uber／計程車'],
 '10/3':['住宿內','開車','開車','開車','入住','步行／開車'],
 '10/4':['住宿內','開車＋步行','步行','開車＋步行','開車＋步行','開車＋步行／DASH','開車'],
 '10/5':['住宿內','開車＋步行','步行','開車＋步行','開車＋步行','開車'],
 '10/7':['住宿內','開車','開車／步行','步行／開車','開車','開車／還車','機場接駁＋步行','步行'],
 '10/8':['飛機','飛機'], '10/9':['飛機／步行','航廈轉移','飛機','步行']};
Object.entries(enrichment).forEach(([d,modes])=>days.find(x=>x.d===d).items.forEach((i,n)=>{i[4]={mode:modes[n]||'依當日選項',duration:'時段含交通與活動；淨移動時間以導航為準'};}));
function attach(date,match,meta){const d=days.find(x=>x.d===date);for(const i of d.items)if((i[1]+i[2]).includes(match))Object.assign(i[4]||={},meta);}
attach('9/28','Dixie',{park:'dixie',duration:'飯店至店家約15–20分鐘，另外預留報到'});
attach('9/28','前往 Virgin',{park:'stay',duration:'約2.5–3小時實際駕駛；跨州手錶快1小時'});
// Original Page-to-Virgin block omitted Utah's clock change.
for(const i of days.find(x=>x.d==='9/28').items){if(i[1].includes('前往 Virgin')){i[0]='13:00 AZ → 約16:30–17:00 UT';i[3]+=' Utah比Page快1小時，抵達顯示時間已加1小時。';}if(i[1].includes('採買、準備'))i[0]='17:00–20:00 UT';}
attach('9/29','開車至 Zion Guru',{park:'zion',duration:'Virgin至Zion Guru約35–45分鐘'});
attach('9/29','Temple of Sinawava',{bus:'zion',duration:'園內車程約45分鐘＋排隊，步行另計'});
attach('9/30','前往 Zion',{park:'zion',duration:'Virgin至南入口約35–45分鐘＋找位'});
attach('9/30','接駁',{bus:'zion',duration:'Visitor Center至The Grotto估30–40分鐘＋候車'});
attach('10/1','Fontainebleau',{park:'font',duration:'Virgin至飯店約2–2.5小時實際駕駛，時鐘減1小時'});
attach('10/1','Outlet',{park:'lvout'});attach('10/2','Outlets',{park:'lvout',duration:'飯店至North Outlets約15–25分鐘'});
attach('10/2','Sphere',{park:'sphere',duration:'飯店搭Uber約10–25分鐘＋下車步行／安檢'});
attach('10/3','Los Angeles',{duration:'全日淨駕駛約4.5–6小時＋休息，週末可能更久',park:'stay'});
attach('10/4','Grove',{park:'grove',duration:'住宿開車約10–15分鐘'});attach('10/4','Rodeo',{park:'rodeo',duration:'Grove開車約20–35分鐘'});attach('10/4','Griffith',{park:'griff',bus:'griff',duration:'市區至Griffith约35–60分鐘，停車／DASH再加20–45分鐘'});
attach('10/5','Santa Monica Pier',{park:'santa',duration:'LA住宿約35–60分鐘'});attach('10/5','Venice',{park:'venice',duration:'Santa Monica至Venice约15–25分鐘'});attach('10/5','Manhattan',{park:'manhattan',duration:'Venice至Manhattan约25–45分鐘'});
attach('10/7','行李寄放',{duration:'寄放點尚未選定，選好才能核算交通',park:''});attach('10/7','SIXT',{duration:'市區至LAX至少留60–90分鐘，還車另留30分鐘'});
// Resolve flexible labels without presenting unbooked meals as reservations.
for(const d of days)for(const i of d.items){
 if(i[2]==='Virgin Airbnb')i[2]=virgin;
 if(i[2]==='LA Airbnb')i[2]=la;
 if(i[2]==='Las Vegas Premium Outlets')i[2]='Las Vegas North Premium Outlets, 875 S Grand Central Pkwy, Las Vegas';
 if(i[2]==='Zion Shuttle Stop 6')i[2]='The Grotto Shuttle Stop, Zion National Park';
 if(i[2]==='Temple of Sinawava → Visitor Center'||i[2]==='The Grotto → Visitor Center')i[2]='Zion Canyon Visitor Center';
 if(i[2]==='Sec 406 Row 5 Seats 21–22'){i[2]='Sphere, 255 Sands Ave, Las Vegas';i[3]+=' Sec 406 Row 5 Seats 21–22。';}
 if(i[2]==='SIXT Car Rental LAX')i[2]='SIXT, 5251 W 98th St, Los Angeles, CA 90045';
 if(i[2]==='Los Angeles luggage storage')i[3]+='【待選定】尚無已確認寄放店，不能直接導航至泛稱。';
}
attach('9/23','前往機場飯店',{mode:'免費飯店接駁；備案Uber',bus:'hampton',duration:'車程約10–20分鐘＋候車／航廈接送時間'});
attach('9/23','前往桃園',{mode:'開車＋停車業者接駁',duration:'依出發地及停車業者；業者名称與班次尚待確認'});
attach('10/7','接駁至 Terminal B',{bus:'sixt',duration:'約15–20分鐘一班；另留航廈繞行及步行緩衝'});
attach('9/29','返回接駁站',{bus:'zion'});attach('9/30','下山、接駁',{bus:'zion'});
attach('10/3','The Grove',{park:'grove'});
days.find(d=>d.d==='10/4').items[4][3]+=' 尚未選定：Melrose Avenue／Beverly Center（8500 Beverly Blvd）／Westfield Century City（10250 Santa Monica Blvd）。停車與下一段車程需依最後選擇確認。';
// Every remaining item keeps its named destination visibly accessible.
const busInfo={
 sixt:{title:'LAX SIXT機場交通車',text:'24小時運行；租車站頁列約15–20分鐘一班。還車：5251 W 98th St二樓SIXT → 一樓接駁乘車區 → 告知司機Terminal B。官方提供即時車輛路線圖，不是逐班發車表。',url:'https://www.sixt.com/car-rental/usa/los-angeles/los-angeles-airport/',map:'https://sixtshuttlelax.transloc.com/routes'},
 hampton:{title:'Hampton LAX飯店接駁',text:'Hilton官網列免費24/7 LAX接駁；未刊登逐班時刻或固定路線圖。領完行李後聯絡飯店確認當晚航廈上車點與下一班；不要套用SIXT的紫色租車接駁站。',url:'https://www.hilton.com/en/hotels/laxaphx-hampton-los-angeles-airport-lax/hotel-location/',map:'https://www.hilton.com/en/hotels/laxaphx-hampton-los-angeles-airport-lax/hotel-location/'},
 gc:{title:'大峽谷橘線｜9/12–11/30 秋季',text:'免費。06:00–09:00每20分鐘；09:00至日落後1小時每15分鐘。你用西側支線：Visitor Center → Mather Point → Yavapai Geology Museum → Visitor Center。藍線備案：07:00–10:00每15分、10:00–19:00每12分、19:00–21:00每15分。Tusayan紫線秋季停駛。',url:sources.gc,map:sources.gcmap},
 zion:{title:'Zion兩套接駁｜9/13–10/24',text:'園內免費，每5–10分：Stop1 Visitor Center → Stop6 The Grotto（Angels Landing）→ Stop9 Temple of Sinawava（Narrows）。首班07:00、入口最後上行18:00、Stop9末班下行19:15；不要等末班。園外Springdale免費，每10–15分；Stop9首班08:00，Zion Canyon Village Stop1末班19:00。兩線不直通：鎮上Stop1下車、步行過橋入園，再走至Visitor Center換車。若晚餐拖過19:00，先取車或改合法接送。',url:sources.zion,map:sources.zmap},
 griff:{title:'DASH Observatory / Los Feliz｜Greek Theatre往返天文台',text:'每日10:00–22:00，約20–25分鐘一班；單程現金US$0.50／TAP US$0.35，請備妥零錢。Greek Theatre站可直接搭到Observatory，回程搭下山方向回Greek Theatre取車。演出夜可能塞車與延誤；10/4出發前再次確認官方活動與交通公告。',url:sources.griff,map:sources.griff}
};
function escapeText(v){return String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
const queryLink=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
// The backup is another space in the same property, not a separately named lot.
parking.bestbuy[5]=queryLink('Best Buy, 5151 Mission Center Rd, San Diego, CA 92108');
function parkingHTML(key){const p=parking[key];if(!p)return '';const primaryURL=p[4]||queryLink(p[0]);const backupURL=p[5]||queryLink(p[1]);return `<details class="transport-detail"><summary>🅿 主要／備用停車與費用</summary><p><b>主要：</b><a href="${primaryURL}" target="_blank" rel="noopener">${escapeText(p[0])} ↗</a></p><p><b>備用：</b>${escapeText(p[1])} ${!p[1].startsWith('無')?`<a href="${backupURL}" target="_blank" rel="noopener">查看地圖 ↗</a>`:''}</p><p>${escapeText(p[2])}</p>${p[3]?(Array.isArray(p[3])?p[3]:[p[3]]).map(u=>`<a class="mini" href="${u}" target="_blank" rel="noopener">費率／官方來源 ↗</a>`).join(''): '<p class="small">來源：你的原行程／現場待確認；不當作已核實報價。</p>'}</details>`;}
function busHTML(key){const b=busInfo[key];return b?`<details class="transport-detail"><summary>🚌 ${b.title}｜班次・路線圖</summary><p>${b.text}</p><div class="actions"><a class="mini" href="${b.url}" target="_blank" rel="noopener">官方班次 ↗</a><a class="mini" href="${b.map}" target="_blank" rel="noopener">官方路線圖／PDF ↗</a></div></details>`:'';}
function itemHTML(i,prev){const options=i[4]?.options||branches[days[current].d];if(options&&i[1].includes('方案'))return '<div class="stop branch-stop"><div class="time">'+escapeText(i[0])+'</div><div class="dot"></div><div><h4>'+escapeText(i[1])+'</h4><p>依當日情況擇一，點開查看各站。</p>'+options.map(([title,items])=>'<details class="transport-detail branch-option"><summary>'+escapeText(title)+'</summary>'+items.map((child,n)=>itemHTML(child,n?items[n-1]:prev)).join('')+'</details>').join('')+'</div></div>';const m=i[4]||{mode:'依現場安排',duration:'見時段'};const leg=[m.mode,m.duration].filter(Boolean).map(escapeText).join(' · ');return `<div class="stop"><div class="time">${escapeText(i[0])}</div><div class="dot"></div><div><h4>${escapeText(i[1])}</h4><p class="destination">📍 ${escapeText(i[2])}</p><div class="leg">${leg}</div><p>${escapeText(i[3])}</p><div class="actions"><a class="mini" href="${queryLink(i[2])}" target="_blank" rel="noopener">目的地 ↗</a></div>${parkingHTML(m.park)}${busHTML(m.bus)}${typeof itemDocumentsHTML==="function"?itemDocumentsHTML(i):""}</div></div>`;}
function detailedRender(){const x=days[current];document.getElementById('dayCounter').textContent=`${current+1} / ${days.length}`;document.querySelectorAll('.day-chip').forEach((b,i)=>b.classList.toggle('active',i===current));document.getElementById('dayCard').innerHTML=`<div class="day-title"><div><div class="date">2026 · ${x.d}（${x.w}）</div><h3>${x.place}</h3></div><span class="badge">${x.badge}</span></div><p class="detail-intro">時間為當地計畫值；開車時間為估算、不含即時路況。折疊項目可查看停車、費率與接駁資料。</p><div class="timeline">${x.items.map((i,n)=>itemHTML(i,n?x.items[n-1]:null)).join('')}</div>`;}
const style=document.createElement('style');style.textContent='.destination{color:#e8d5bd!important;overflow-wrap:anywhere}.leg{padding:6px 9px;margin:8px 0;background:#071923;border-radius:8px;color:#f7b66e;font-size:.9rem}.transport-detail{margin-top:12px;background:rgba(0,0,0,.16);border:1px solid var(--line);border-radius:12px;padding:10px}.transport-detail summary{cursor:pointer;font-weight:650;font-size:.9rem;min-height:28px}.transport-detail a{color:#ffd2a4}.transport-detail p{font-size:.92rem}.detail-intro{padding:0 20px;color:var(--muted);font-size:.86rem}.branches{padding:0 18px 20px}.time{overflow-wrap:anywhere}.stop{grid-template-columns:90px 12px minmax(0,1fr)}.stop:not(:last-child):after{left:95px}.stop h4{font-size:1.08rem}.stop p{font-size:.95rem}.mini{min-height:38px;align-items:center}.hidden-trip-dialog{max-width:620px;width:calc(100% - 28px);max-height:85vh;overflow:auto;color:var(--cream);background:var(--navy);border:1px solid var(--orange);border-radius:20px;padding:22px}.hidden-trip-dialog::backdrop{background:#000b}.hidden-trip-dialog button{background:var(--cream);color:var(--ink);padding:10px;border:0;border-radius:8px;cursor:pointer}@media(max-width:480px){.stop{grid-template-columns:63px 9px minmax(0,1fr);gap:7px}.stop:not(:last-child):after{left:67px}.time{font-size:.8rem}.timeline{padding-left:12px;padding-right:12px}.hero{min-height:290px}.hero h1{font-size:2.4rem}}';document.head.appendChild(style);
// Intentional easter egg, not a security boundary. No persistence: reload hides it again.
let secretClicks=0,secretLast=0;
const trigger=document.querySelector('.hero .eyebrow');trigger.setAttribute('role','button');trigger.setAttribute('tabindex','0');trigger.setAttribute('aria-label','旅程標題');
function secretTap(){const now=Date.now();if(now-secretLast>1800)secretClicks=0;secretLast=now;if(++secretClicks<5)return;secretClicks=0;const dialog=document.createElement('dialog');dialog.className='hidden-trip-dialog';dialog.innerHTML='<h2>只給這趟旅行的小驚喜 ✨</h2><p>10/6 Universal VIP Experience · 2人</p><p><b>10:30出發，10:00前至VIP Reception。</b>入口右側Will Call旁；帶兩種票、購票信用卡及持卡人照片證件。</p><p>Jurassic Valet含於加購：保留停車單，報到時驗證。含VIP餐與當日無限Express。一般入園票UH00005PCJN＋VIP加購UH0000674PS。</p><p>導覽結束時間依當日安排；不預告給旅伴。一般頁面仍只顯示環球影城行程。</p><p class="small">這是避免一般瀏覽劇透的彩蛋，不是密碼保護；查看原始碼仍可能找到。</p><button>收起驚喜</button>';dialog.querySelector('button').onclick=()=>{dialog.close();dialog.remove()};dialog.addEventListener('cancel',()=>dialog.remove());document.body.appendChild(dialog);dialog.showModal();}trigger.addEventListener('click',secretTap);trigger.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();secretTap();}});
