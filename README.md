# 美國西南旅行：GitHub Pages 與 iPhone 主畫面

這份網站支援 PWA／iPhone 主畫面獨立視窗，並非已簽署的 iOS 安裝檔，也尚未送至 App Store 或 TestFlight。

## 直接在 iPhone 使用

1. 用 Safari 開啟已發布的行程網址。
2. 分享 → 加入主畫面；若出現「以網頁 App 開啟」，將它打開。
3. 點「加入」，再從桌面圖示開啟。
4. 首次連網載入後，在「重要事項 → 在 iPhone 加入主畫面」確認離線行程已準備完成。

行程文字、導覽與本機清單可在快取成功後離線使用。PDF 不會自動全部下載，請另存至 iPhone「檔案」。Google Maps、票券 App、外部查詢需要網路。裝置清理網站資料可能移除離線快取；勾選清單不跨裝置或網址同步。

## 上傳包使用方式

ZIP 根目錄就是網站內容，包含 index.html、JavaScript、CSS、assets、documents、manifest.webmanifest、sw.js、.nojekyll。

1. 在電腦解壓縮，不要只把 ZIP 本身上傳。
2. 在你自己的 GitHub repository 上傳解壓縮後的內容，讓 index.html 位於根目錄。
3. Settings → Pages → Build and deployment → Deploy from a branch，選 main 和 /(root)，Save。
4. 等 GitHub Pages 完成後，使用其顯示的網址；再按上面的 Safari 步驟加入主畫面。
5. 此包使用相對網址，同時相容帳號首頁與 /repository-name/ 子路徑。若使用此 Site 的完整原始 Git 專案而非 ZIP，公開輸出位於 dist，需將 dist 作為 Pages 成品發布。

包內有你要求保留的個人 PDF 憑證。GitHub 公開 repository 會公開原始碼與文件；Pages 網站的文件也可被取得。請只在你確認的專案中發布，勿把此包當成不含個資的公開範例。

## 更新

每次改網站內容，也要改 sw.js 的 CACHE 版本字串。Safari 連網重新開啟會檢查更新；若仍顯示舊版，關閉主畫面 App 後連網再開啟。不要為了更新任意清除瀏覽資料，這會清掉勾選紀錄。

## 本次核對（2026/9/20）

- 17 天的日期／星期及頁面資料可產生；所有網頁內 PDF 路徑均有對應檔案。
- 機票原始附件：JX002 9/24 00:10 TPE → 9/23 21:10 LAX；JX001 10/8 00:35 → 10/9 05:40 TPE；JX822 10/9 10:15 → 14:00 KIX。
- 活動附件：9/25 Padres 18:40、9/28 下羚羊谷10:45、10/2 Sphere20:00；其餘票券時間按原附件核對，驚喜內容仍藏在彩蛋中。
- 官方目前資料：Zion9/13–10/24 Stop9末班19:15，行程仍提早排回程；大峽谷橘線／藍線秋季班次；Greek Theatre演出日13:00後不能當作免費停車方案。
- Costco Mission Valley：2345 Fenton Pkwy，平日一般會員10:00–20:30；Las Americas地址4211 Camino de la Plaza；SIXT取車櫃台1F／還車區2F。
- Zion Guru前一天14:00–19:30可免費提前取裝備，視供應狀況；9/28領裝備安排落在此窗口。
- 未確定項目保留在各站提醒：騎馬尚待訂位時間、10/4劇院演出與停車管制、10/7行李寄放、部分餐廳營業與活動日停車價。車程與距離是規劃估算，不是即時導航。
- 已做腳本、資源、日期、清單與離線快取邏輯檢查；尚未在實體 iPhone 驗證安裝與瀏覽器畫面。

官方參考：
- https://www.nps.gov/zion/planyourvisit/zion-canyon-shuttle-system.htm
- https://www.nps.gov/grca/planyourvisit/shuttle-buses.htm
- https://griffithobservatory.lacity.gov/visit/getting-here/
- https://www.costco.com/w/-/ca/san-diego/488
- https://www.sixt.com/car-rental/usa/los-angeles/los-angeles-airport/
- https://www.zionguru.com/rentals/narrows/equipment
- https://support.apple.com/guide/iphone/bookmark-a-website-iph42ab2f3a7/ios
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
