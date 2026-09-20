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
      button.replaceChildren();
      const meta=document.createElement('span');meta.className='day-chip-meta';meta.textContent=monthNames[month]+' '+Number(date)+' ('+weekdayNames[tripDay.w]+')';
      const label=document.createElement('span');label.className='day-chip-place';label.textContent='Day '+(index+1)+' - '+place;
      button.append(meta,label);
    });
  }

  const primaryNav=document.querySelector('.sticky');
  function updateNavigationHeight(){
    if(!primaryNav)return;
    const root=document.documentElement;
    const navHeight=Math.ceil(primaryNav.getBoundingClientRect().height);
    root.style.setProperty('--nav-height',navHeight+'px');
    const hero=document.querySelector('.hero');
    if(hero){
      const heroHeight=hero.getBoundingClientRect().height;
      root.style.setProperty('--hero-image-height',heroHeight+'px');
      root.style.setProperty('--cover-image-height',(heroHeight+navHeight)+'px');
    }
  }

  formatDaySelector();
  window.addEventListener('load',formatDaySelector,{once:true});
  if(primaryNav&&typeof ResizeObserver!=='undefined'){
    const observer=new ResizeObserver(()=>requestAnimationFrame(updateNavigationHeight));
    try{observer.observe(primaryNav,{box:'border-box'});}catch{observer.observe(primaryNav);}
  }
  ['load','resize','orientationchange','pageshow'].forEach(name=>window.addEventListener(name,updateNavigationHeight,{passive:true}));
  if(window.visualViewport)window.visualViewport.addEventListener('resize',updateNavigationHeight,{passive:true});
  requestAnimationFrame(()=>requestAnimationFrame(updateNavigationHeight));
})();
