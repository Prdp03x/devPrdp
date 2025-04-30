//=========== Change background header ===========ho
function scrollheader() {
  const header = document.getElementById('header');
  if(this.scrollY>50)header.classList.add('scroll-header');
}
window.addEventListener('scroll',scrollheader);

//=========== Service Modal ===========
const modalViews = document.querySelectorAll('.service_modal');

      modalBtns = document.querySelectorAll('.service_button'); 

      modalClose = document.querySelectorAll('.service_modal-close');

let modal = (modalClick)=>{
  modalViews[modalClick].classList.add('active-modal');
}
modalBtns.forEach((mb,i)=>{
  mb.addEventListener('click',()=>{
    modal(i)
  })
})

modalClose.forEach((mc)=>{
  mc.addEventListener('click',()=>{
    modalViews.forEach((mv)=>{
      mv.classList.remove('active-modal')
    })
  })
})
//=========== Mixitup Js filter ===========
let mixerWork = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});

//=========== Work Filter ===========

const linkWork = document.querySelectorAll('.work_item');

function activeWork(){
  linkWork.forEach(l=>l.classList.remove('active-work'));
  this.classList.add('active-work')
}

linkWork.forEach(a => a.addEventListener('click',activeWork))

//================ Swiper Js ==========

let swiperTestimonial = new Swiper('.testimonial_container', {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,
  
  pagination : {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints : {
    576: {
      slidesPerView: 2
    },
    786: {
      slidesPerView: 2,
      spaceBetween: 48
    }
  }
});

//=========== Navbar active links ===========

const sections = document.querySelectorAll('section[id]');
//console.log(sections)

function scrollActive() {
  const scrollY = window.pageYOffset;
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id')
          
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav_menu a[href*='+sectionId+']').classList.add('active-link')
    }else{
      document.querySelector('.nav_menu a[href*='+sectionId+']').classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll',scrollActive);

//================ Light Theme ===============

const themeBtn = document.getElementById('theme-button');
const iconTheme = 'bx-sun';
const lightTheme = 'light-theme';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'light' : 'dark';
const getCurrentIcon = () => themeBtn.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';

// Apply saved theme and icon when page loads
if (selectedTheme) {
  document.body.classList[selectedTheme === 'light' ? 'add' : 'remove'](lightTheme);
  themeBtn.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme);
}

// When user clicks the theme button
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle(lightTheme);
  themeBtn.classList.toggle(iconTheme);

  // Save the new theme and icon to localStorage
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

//============ Scrollreveal Js ============
const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 2500,
	delay: 400
})
sr.reveal('.home_data')
sr.reveal('.home_handle', {delay: 700})
sr.reveal('.home_social, .home_scroll',{delay: 900, origin: 'bottom'})