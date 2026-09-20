function documentLink(d){return `<a class="pdf-link" href="${d.url}" target="_blank" rel="noopener">📄 ${escapeText(d.label)} <small>PDF · ${(d.bytes/1024/1024).toFixed(2)} MB ↗</small></a>`;}
const normalDocuments=tripDocuments.filter(d=>d.group!=='彩蛋');
const pdfSection=document.createElement('div');pdfSection.id='pdfDocuments';
pdfSection.innerHTML='<div class="group-title">原始 PDF 文件</div><p>點文件另開 PDF，可用手機瀏覽器儲存到「檔案」。收據請搭配活動指定的入場票券 App 使用。</p>'+[...new Set(normalDocuments.map(d=>d.group))].map(g=>`<details class="transport-detail" open><summary>${g}</summary><div class="pdf-grid">${normalDocuments.filter(d=>d.group===g).map(documentLink).join('')}</div></details>`).join('');
document.getElementById('bookings').appendChild(pdfSection);
const documentRules=[
 ['機票｜',/報到|JX002|JX001|JX822|轉機|登機/],
 ['LAX｜',/Hampton|機場飯店|回飯店/],
 ['San Diego｜',/San Diego Airbnb|4131 Mississippi|回Airbnb|回 Airbnb/],
 ['Grand Canyon｜',/Squire|Tusayan|飯店Check|飯店 Check/],
 ['Page｜',/Best Western|716 Rimview|Page飯店|Page.*入住|入住.*Page/],
 ['Zion／Virgin｜',/Virgin Airbnb|1871 East|回住宿|整理住宿/],
 ['Las Vegas｜',/Fontainebleau|回飯店|返回飯店/],
 ['Los Angeles｜',/LA Airbnb|7721 Beverly|Melrose Airbnb|回 Airbnb|回住宿/],
 ['環球影城｜入園票',/Universal|入園準備/],
 ['MLB｜',/Petco|Padres|入場/],
 ['Sphere｜',/Sphere/],
 ['下羚羊谷｜',/Dixie|Lower Antelope|報到/],
 ['The Narrows｜',/Zion Guru|Dry Bib|歸還裝備/],
 ['美國行｜',/大園|桃園機場轉機/],
 ['日本行｜',/桃園機場轉機/],
 ['ESTA｜',/入境、領行李|機場報到/]
];
function itemDocumentsHTML(i){const date=days[current].d;const docs=normalDocuments.filter(d=>d.dates.includes(date)&&documentRules.some(([prefix,pattern])=>d.label.startsWith(prefix)&&pattern.test(i[1]+(d.group==='住宿'?' '+i[2]:''))));return docs.length?'<div class="item-pdfs"><div class="pdf-grid">'+docs.map(documentLink).join('')+'</div></div>':'';}
const usParking=days.find(d=>d.d==='9/23').items[0];usParking[1]='大園出國停車場・第三停車場 → 桃園第二航廈';usParking[2]='桃園市大園區中山南路544號旁';usParking[3]='美國航班9/24凌晨起飛，9/23晚間進場。出示美國行停車憑證；進出場需持卡人本人＋實體信用卡。接駁發車間隔未列於憑證，抵達後向業者確認。';
days.find(d=>d.d==='10/9').items[1][3]+=' 已附日本行大園第三停車場憑證，以及美國行憑證供取車查閱。若需出航廈辦理取車／重新入場，須另留接駁及重新報到時間；此處未假設一定需要取車。';
const important=document.getElementById('important');const medical=document.createElement('div');medical.className='day-pdfs';medical.innerHTML='<h3>入境與保險文件</h3><div class="pdf-grid">'+normalDocuments.filter(d=>d.group==='入境與保險').map(documentLink).join('')+'</div>';important.appendChild(medical);
new MutationObserver(records=>{for(const r of records)for(const n of r.addedNodes){if(n.nodeType===1&&n.classList.contains('hidden-trip-dialog')){const p=document.createElement('div');p.innerHTML=tripDocuments.filter(d=>d.group==='彩蛋').map(documentLink).join('');n.appendChild(p);}}}).observe(document.body,{childList:true});
const pdfStyle=document.createElement('style');pdfStyle.textContent='.pdf-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr));gap:8px}.pdf-link{display:flex;flex-direction:column;gap:4px;padding:12px;border:1px solid var(--line);border-radius:10px;min-height:48px;color:inherit;text-decoration:none;overflow-wrap:anywhere}.pdf-link small{font-size:.8rem;opacity:.7}.pdf-link:hover{border-color:var(--orange)}.day-pdfs{padding:18px;border-top:1px solid var(--line)}#pdfDocuments{margin-top:24px}#pdfDocuments p{font-size:1rem}';document.head.appendChild(pdfStyle);
const inlineStyle=document.createElement('style');inlineStyle.textContent='.item-pdfs{margin-top:12px}.branch-option>.stop{margin-top:18px}.branch-option>.stop:last-child{padding-bottom:0}.branch-option{padding:12px}.branch-option .pdf-grid{grid-template-columns:1fr}@media(max-width:600px){.branch-option>.stop{display:block;padding:12px 0;border-top:1px solid var(--line)}.branch-option>.stop>.dot,.branch-option>.stop:after{display:none}.branch-option>.stop>.time{margin-bottom:8px;font-size:.9rem}.branch-option>.stop h4{font-size:1rem}}';document.head.appendChild(inlineStyle);
renderDay();
