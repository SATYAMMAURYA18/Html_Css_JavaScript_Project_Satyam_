const wrapper=document.querySelector(".wrapper"),
qrInput=wrapper.querySelector(".form input"),
qrImage=wrapper.querySelector(".qr-code img");
wrapper.querySelector(".form button").addEventListener('click',()=>{
    let qrValue=qrInput.value;
    if(!qrValue) return;// agr input is empty then return from here
    wrapper.querySelector(".form button").innerHTML="Generating QR Code...";
    //getting a qr code of user enterd value using the qrserever;
    // api and passing the api returned img src to qrImage.
    qrImage.src=`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImage.addEventListener("load",()=>{//once qr img loaded
      wrapper.classList.add("active");
       wrapper.querySelector(".form button").innerHTML="Generate QR Code";
    })
});

//now foer removing qr if input field is empty ,then we have to remove active class from the wrapper class.
qrInput.addEventListener("keyup",()=>{
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
})