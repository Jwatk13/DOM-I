const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

// console.log('project wired!')

//Setting up objects first
//NAV SECTION
const navLinks = document.querySelectorAll('header nav a');
const navTexts = Object.values(siteContent.nav);

//CTA SECTION
const h1 = document.querySelector("h1");
const button = document.querySelector("button");

//MAIN CONTENT
const mainContent = document.querySelector(".top-content");

//BOTTOM CONTENT
const botContent = document.querySelector('.bottom-content');

//CONTACT SECTION
const contacting = document.querySelector("section.contact");

//FOOTER COPYRIGHT
const copyright = document.querySelector("footer a");

//PAGE IMAGES
const logoImg = document.querySelector("#logo-img");
const ctaImg = document.querySelector("#cta-img");
const accentImg = document.querySelector("#middle-img");


//Making the new objects useable
//NAV SECTION
navLinks.forEach((link, idx) => {
  link.textContent = navTexts[idx];
  link.classList.add('italic');
});

//CTA SECTION
h1.textContent = siteContent.cta['h1'];
button.textContent = siteContent.cta['button'];

//MAIN CONTENT
mainContent.children[0].children[0].textContent = siteContent['main-content']['features-h4'];
mainContent.children[0].children[1].textContent = siteContent['main-content']['features-content'];
mainContent.children[1].children[0].textContent = siteContent['main-content']['about-h4'];
mainContent.children[1].children[1].textContent = siteContent['main-content']['about-content'];

//BOTTOM CONTENT
botContent.children[0].children[0].textContent = siteContent['main-content']['services-h4'];
botContent.children[0].children[1].textContent = siteContent['main-content']['services-content'];
botContent.children[1].children[0].textContent = siteContent['main-content']['product-h4'];
botContent.children[1].children[1].textContent = siteContent['main-content']['product-content'];
botContent.children[2].children[0].textContent = siteContent['main-content']['vision-h4'];
botContent.children[2].children[1].textContent = siteContent['main-content']['vision-content'];

//CONTACT SECTION
contacting.querySelector('h4').textContent = siteContent.contact['contact-h4'];
contacting.querySelector('p:nth-of-type(1)').textContent = siteContent.contact['address'];
contacting.querySelector('p:nth-of-type(2)').textContent = siteContent.contact['phone'];
contacting.querySelector('p:nth-of-type(3)').textContent = siteContent.contact['email'];

//FOOTER COPYRIGHT
copyright.textContent = siteContent.footer.copyright;
copyright.classList.add('bold');

//PAGE IMAGES
logoImg.src = siteContent.images['logo-img'];
ctaImg.src = siteContent.images['cta-img'];
accentImg.src = siteContent.images['accent-img'];

