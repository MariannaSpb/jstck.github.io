import "./style.css";


const inputs = document.querySelectorAll('.feedback__form-input');
const sendButton = document.querySelector('.feedback__button');
const feedbackForm = document.querySelector("#application");
const link = document.querySelectorAll('.scroll');
const navLinks = document.querySelectorAll('.anchor');
const sectionScroll = document.querySelectorAll('.section-scroll');


inputs.forEach((item) => {
    item.addEventListener('input', () => {
      if (item.value !== '') {
        item.classList.add('focused')
      } else {
        item.classList.remove('focused')
      }
    });

    item.addEventListener('blur', () => {
        if (!item.value.length) {
          item.classList.remove('focused')
          item.classList.remove('error')
        } 
      });
    });

inputs.forEach((item) => {
    item.addEventListener('blur', () => {
        if (item.value.length) {
        item.classList.remove('focused')
        item.classList.remove('error')
        } 
    });
});

sendButton.addEventListener('click', (event) => {
    inputs.forEach(item => {
        if(item.value.length === 0) {
            item.classList.add('error')
            event.preventDefault();
        }
        if(item.value.length > 0) {
            item.classList.remove('error')
        }
    })
});



function handleButtonClick(evt) {
   evt.preventDefault();
   feedbackForm.scrollIntoView({block: "center", behavior: "smooth"});
}
link.forEach(item => {
  item.addEventListener('click', handleButtonClick);
});


function handleLinkClick(evt) {
  evt.preventDefault();
  let targetElement = evt.target.getAttribute(`href`);
  sectionScroll.forEach(section => {
    if (targetElement === `#` + section.getAttribute(`id`)) {
      section.scrollIntoView({block: "start", behavior: "smooth"});
    }
  });
}

navLinks.forEach(item => { 
  item.addEventListener("click", handleLinkClick)
});