// Compact, correctly positioned day selector for iPhone/PWA.
(()=>{
  const weekdayNames={日:'Sun.',一:'Mon.',二:'Tue.',三:'Wed.',四:'Thu.',五:'Fri.',六:'Sat.'};
  const monthNames={'9':'Sep.','10':'Oct.'};

  function formatDaySelector(){
    if(typeof days==='undefined')return;
    document.querySelectorAll('#dayStrip .day-chip').forEach((button,index)=>{
      const tripDay=days[index];
      if(!tripDay)return;
      const [month,date]=tripDay.d.split('/');
      const place=tripDay.place.split('·')[0].split('→').slice(-1)[0].trim();
      button.innerHTML='<span class="day-chip-meta">Day '+(index+1)+' <b>|</b> '+monthNames[month]+' '+Number(date)+' <b>|</b> '+weekdayNames[tripDay.w]+'</span><span class="day-chip-place">'+place+'</span>';
    });
  }

  const primaryNav=document.querySelector('.sticky');
  function updateNavigationHeight(){
    if(!primaryNav)return;
    document.documentElement.style.setProperty('--nav-height',Math.ceil(primaryNav.getBoundingClientRect().height)+'px');
  }

  formatDaySelector();
  if(primaryNav&&typeof ResizeObserver!=='undefined'){
    const observer=new ResizeObserver(()=>requestAnimationFrame(updateNavigationHeight));
    try{observer.observe(primaryNav,{box:'border-box'});}catch{observer.observe(primaryNav);}
  }
  ['load','resize','orientationchange','pageshow'].forEach(name=>window.addEventListener(name,updateNavigationHeight,{passive:true}));
  if(window.visualViewport)window.visualViewport.addEventListener('resize',updateNavigationHeight,{passive:true});
  requestAnimationFrame(()=>requestAnimationFrame(updateNavigationHeight));
})();
