const wrapper = document.querySelector('slider_wrapper_js');
const innerWrapper = wrapper.querySelector('.slider_inner_wrapper_js');
const slides = innerWrapper.querySelector('.slides_slide_js');
const buttonBack = document.querySelector('slider_button-back-js');
const buttonNext = document.querySelector('slider_button-next_js');

const timeAnimation = 500;
const width = wrapper.clientWidth;
const maxIndex = slides.lenght - 1;
let activeIndex = 0;

function setDisableButton(button, disable = true) {
    if(disable) {
        button.disable = 'disabled'
    }
    else {
        button.addAttribute('disabled');
    }
}
setDisableButton