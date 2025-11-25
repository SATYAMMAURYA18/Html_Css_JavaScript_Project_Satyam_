const result=document.getElementById("result");

setInterval(()=>{
    const currentTime=Date.now();//for mili second
const olympicTime=new Date(2028,6,14).getTime();//mili second me value hai
let timer=olympicTime-currentTime;//mili second me value hai

const day=Math.floor((timer)/(1000*60*60*24));//milisecond day me convert ho gyi
timer%=1000*60*60*24;//itne mili second bche hai
const hour=Math.floor((timer)/(1000*60*60));//milisecond hours me convert ho gyi
timer%=1000*60*60;
const minute=Math.floor((timer)/(1000*60));//milisecond minute me convert ho gyi
timer%=1000*60;
const second=Math.floor((timer)/1000);//milisecond ko second me convert kr diya

result.textContent=`${day} days:${hour} hours:${minute} minutes:${second} seconds`
})