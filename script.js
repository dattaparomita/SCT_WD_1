	// Navbar
  let menu = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');
   
  menu.onclick = () => {
      navbar.classList.toggle('active');
  }
   
  window.onscroll = () => {
      navbar.classList.remove('active');
  }
  // Dark Mode
  let darkmode = document.querySelector('#darkmode');
   
  darkmode.onclick = () => {
      if(darkmode.classList.contains('bx-moon')){
          darkmode.classList.replace('bx-moon','bx-sun');
          document.body.classList.add('active');
      }else{
          darkmode.classList.replace('bx-sun','bx-moon');
          document.body.classList.remove('active');
      }
  }
   
  // Scroll Reveal
  const sr = ScrollReveal ({
      origin: 'top',
      distance: '40px',
      duration: 2000,
      reset: true
  });
   
   
  sr.reveal(`.home-text, .home-img,
              .about-img, .about-text,
              .box, .s-box,
              .btn, .connect-text,
              .contact-box`, {
      interval: 200
  })
  
  //nav links
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header ul li a');

  window.onscroll = () => {
  	sections.forEach(sec => {
  		let top = window.scrollY;
  		let offset = sec.offsetTop - 150;
  		let height = sec.offsetHeight;
  		let id = sec.getAttribute('id');

  		if(top >= offset && top< offset + height) {
  			navLinks.forEach(links => {
  				links.classList.remove('active');
  				document.querySelector('header ul li a[href*=' + id + ']').classList.add('active');
  			});
  		};
  	});
  };
