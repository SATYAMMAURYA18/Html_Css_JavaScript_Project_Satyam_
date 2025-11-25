const div=document.querySelector(".time");
setInterval(()=>{
let time= new Date();
div.textContent="Time:\n";
div.append(textContent=time.toLocaleTimeString());
})

const div2=document.querySelector(".date");
setInterval(()=>{
    let date= new Date();
    div2.textContent="Date:\n";
    div2.append(date.toLocaleDateString())
})