document.querySelector("body").addEventListener('click',(e)=>{
    const circle=document.createElement('div');
    circle.classList.add('circle');
    circle.style.top=`${e.clientY-25}px`;//clientY=y ka position
    circle.style.left=`${e.clientX-25}px`;//clientX= x ka position
    circle.textContent="Hii";
    const color=['blue','orange','purple','green','red'];
    const random=Math.floor(Math.random()*color.length);
   circle.style.backgroundColor=color[random];
  document.body.append(circle);
  setTimeout(()=>{
        circle.remove();
  },5000)
})