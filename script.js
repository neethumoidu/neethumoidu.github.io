// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
let open = false;
menuBtn.addEventListener('click', () => {
  open = !open;
  if(open){
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.right = '20px';
    nav.style.top = '64px';
    nav.style.background = 'white';
    nav.style.padding = '12px';
    nav.style.borderRadius = '8px';
    nav.style.boxShadow = '0 10px 30px rgba(16,24,40,0.08)';
  } else {
    nav.style.display = '';
    nav.style.position = '';
    nav.style.boxShadow = '';
  }
});

// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click', function(e){
    const targetId = this.getAttribute('href');
    if(targetId.length>1){
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({behavior:'smooth', block:'start'});
      // close mobile if open
      if(open){
        menuBtn.click();
      }
    }
  });
});

// Set year in footer
document.getElementById('year').textContent = new Date().getFullYear();
