var button=document.querySelector(".btn");
  button.style.backgroundColor="gray";
  var body=document.querySelector("body");

var currentmode="light";
button.addEventListener("click",function(){
    if(currentmode==="light"){
        currentmode="dark";
        body.style.backgroundColor="black";
        body.style.color="white";
        button.innerText="light_mode";

    }
    else{
        currentmode="light";
        body.style.backgroundColor="white";
        body.style.color="black";
        button.innerText="dark mode";
    }
    console.log(currentmode);
})