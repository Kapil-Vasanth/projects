
const wrapper = document.querySelector('.wrapper')
const leftEye = document.querySelector('left-eye');
const retina = document.querySelector('retina');
const rightEye = document.querySelector('right-eye');
const retinaRight = document.querySelector('retina-right');


wrapper.addEventListener('mousemove', (e) => {
    let rect = leftEye.getBoundingClientRect();
  let rectretinaRight = rightEye.getBoundingClientRect();
    let x = e.pageX;
    let y = e.pageY;
    retina.style.top = y - rect.top - (retina.offsetHeight / 2 )+ 'px'
    retina.style.left = x - rect.left - (retina.offsetWidth / 2 )  + 'px'
  
  retinaRight.style.top = y - rectretinaRight.top - (retinaRight.offsetHeight / 2 ) + 'px'
    retinaRight.style.left = x - rectretinaRight.left - (retinaRight.offsetWidth / 2 ) + 'px'
  
})


function handleMotionEvent(event) {
    let rect = retina.getBoundingClientRect();
    let rectretinaRight = retinaRight.getBoundingClientRect();
    
    const x = JSON.stringify(event.accelerationIncludingGravity.x);
    const y = JSON.stringify(event.accelerationIncludingGravity.y);
    
    (x=="null") ? retina.style.transition = '0s ease': retina.style.transition = '0.3s ease';
    (y=="null")? retinaRight.style.transition = '0s ease': retinaRight.style.transition = '0.3s ease';
   
    retina.style.top = -y*rect.height/4  + rect.height /2 + 'px'
    retina.style.left = x*rect.width/4  + rect.width  / 2  + 'px'
    retinaRight.style.top = -y*rectretinaRight.width/4  + rectretinaRight.width/2 + 'px'
    retinaRight.style.left = x*rectretinaRight.height/4  + rectretinaRight.height / 2  + 'px'
}

window.addEventListener("devicemotion", handleMotionEvent, true);





