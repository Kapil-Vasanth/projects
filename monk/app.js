const loader = document.getElementById('loader');
const nextBtn = document.getElementById('next-button');
const prevBtn = document.getElementById('prev-button');
const wrapper = document.querySelector('.wrapper');
const pagination = document.querySelectorAll('.pagination a');


const titles = document.querySelectorAll('.content-text');
let arr = [];

// check the screen for mobile or desktop
if(screen.width <= 500){
   arr = [3.5,21.5,27,33.5,47.5,59.8,66.6,80,98,112.5]
}else{
   arr = [0,12.5,21,37.5,50,65.5,80,100,100,112.5]
}

wrapper.style.backgroundPositionX = arr[0] + '%';
checkNavBtns();

 pagination.forEach((item,index) => {
   item.addEventListener('click', () => {
      removeActive(); 
      wrapper.style.backgroundPositionX =  arr[index] + "%";
      titles[index].classList.add('active');
      item.classList.add('active');
      checkNavBtns();
   })
 })
  
nextBtn.addEventListener('click', () => {
     update(1);
     checkNavBtns();
})

prevBtn.addEventListener('click', () => {
    update(-1);
    checkNavBtns();
})

// function to update the contents of the screen and the background
function update(incr){
   let paginationEle,titlesEle,dataValue;
      pagination.forEach((list,index) => { 
        if(list.classList.contains('active')){
          paginationEle = index + incr;
          
          list.classList.remove("active")
        }
      }); 
  
       titles.forEach((title,index) => { 
         if(title.classList.contains('active')){
           titlesEle = index + incr;
           title.classList.remove("active")
         }
       });

    if(paginationEle<pagination.length){
      pagination[paginationEle].classList.add('active');
      dataValue = arr[paginationEle];
      wrapper.style.backgroundPositionX = dataValue + "%";
    }else {
      pagination[0].classList.add('active');
      dataValue = arr[paginationEle];
      wrapper.style.backgroundPositionX = dataValue + "%";
    }
  
    if(titlesEle<titles.length){
      titles[titlesEle].classList.add('active');
    }else{
      titles[0].classList.add('active');
    }
}

// function to remove all the active class from the list
function removeActive(){
      pagination.forEach(list => { 
        if(list.classList.contains('active')){
          list.classList.remove("active")
        }
      }); 
     
      titles.forEach(title => { 
        if(title.classList.contains('active')){
          title.classList.remove("active")
        }
      }); 
}


// function to check for nav btns
function checkNavBtns(){
  let val;
  pagination.forEach((list,index) => { 
    if(list.classList.contains('active')){
      val = index;
    }
  }); 
  
  if(val == 0){
    prevBtn.style.opacity = "0";
    prevBtn.style.pointerEvents = "none";
    nextBtn.style.opacity = "1";
    nextBtn.style.pointerEvents = "all";
  } else if(val == pagination.length - 1){
    prevBtn.style.opacity = "1";
    prevBtn.style.pointerEvents = "all";
    nextBtn.style.opacity = "0";
    nextBtn.style.pointerEvents = "none";
  }else{
    prevBtn.style.opacity = "1";
    prevBtn.style.pointerEvents = "all";
    nextBtn.style.opacity = "1";
    nextBtn.style.pointerEvents = "all";

  }

}