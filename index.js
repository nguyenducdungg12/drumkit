window.addEventListener('keydown',(e)=>{
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
      const item = document.querySelector(`.item-drum[data-key="${e.keyCode}"]`)
            audio.currentTime=0;
            audio.play();
            item.style.animation ='animate .1s';
            item.addEventListener('animationend',(e)=>{
                e.target.style.animation ='none';
            })

})