const element=document.querySelector('form');
element.addEventListener('submit',(e)=>{
    e.preventDefault();
    const boy=document.getElementById("boy");
    const girl=document.getElementById("girl");
    const l1=boy.value.length;
    const l2=girl.value.length;
    const result=Math.pow(l1+l2,3)%101;
    document.querySelector('h2').textContent=`Percentage: ${result}%`;
    const boyPr=Math.pow(l1,3)%101;
    const girlPr=result-boyPr;
    document.querySelector('#pboy').textContent=`Boy:${boyPr}%`;
     document.querySelector('#pgirl').textContent=`Girl:${girlPr}%`;
    element.reset();
})



 

//   const element=document.querySelector('form');
// element.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     const boy=document.getElementById("boy");
//     const girl=document.getElementById("girl");
//     const l1=boy.value.length;
//     const l2=girl.value.length;
//     const result=Math.floor(Math.random() * 41) + 60;
//     document.querySelector('h2').textContent=`Percentage: ${result}%`;
//     const boyPr=Math.pow(l1,3)%101;
//     const girlPr=result-boyPr;
//     document.querySelector('#pboy').textContent=`Boy:${boyPr}%`;
//      document.querySelector('#pgirl').textContent=`Girl:${girlPr}%`;
//     element.reset();
// })