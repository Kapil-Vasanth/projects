window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"
  ];
  const modal = document.querySelector(".modal");
  const modalText = document.querySelector(".modal p");
  let setColor;//intake color
  let i = 1;//score
  let d = 5;//speed
  const chngclr = document.querySelectorAll('.chngclr')

  
  function updateScore ()  {
    if(i == 5 || i == 15 || i == 20 || i == 30 && d!==0)
    d--;
   /* create more bubbles need some more logic how to add  two click at the same time  
   if(i == 3)
    {
      createBubble();
    }*/
    const score = document.querySelector('.score');
    score.textContent = i;
    score.style.color = setColor;
    i++;
   };

  const createBubble = () => {
    //Create bubbles
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    setColor = colors[Math.floor(Math.random()*6)];
    bubble.style.backgroundColor = setColor ;
    let num = Math.floor(Math.random() * (5-1)) + 1;
    //bubble.textContent = i
    //; for more modification we can create the number shown in bubble and also we can add how much click we want 
    //for eg- if it shows 3 in the bubble then we have to click for 3 times and so.
    chngclr.forEach((chng)=>{
      chng.style.color = setColor;
    });
    
    if(i % 2 == 0)
    bubble.style.animation = `jump${num} ${d}s ease`;
    else
    bubble.style.animation = `jump${num} ${d}s ease reverse`;

    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
      createBubble();
    });
  };
  
createBubble();

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();

      if(colors[index] == setColor)
      {
         updateScore();
      }
      else{
       modal.classList.add("open");
       modalText.classList.add("open");
       modalText.textContent = 'Your score is ' + (i-1);
        i=0;
        d=5;
        updateScore();
      }
    });
  });

modal.addEventListener('click', (e) => {
  if(e.target.classList.contains("modal"))
    modal.classList.remove("open");
});


});
