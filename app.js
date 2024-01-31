let btn=document.querySelector(".convert-button");
let btn1=document.querySelector(".reset-button");
let btn2=document.querySelector(".swap-button");
let content=document.querySelector(".search-box");
let print=document.querySelector(".answer-text");
console.log("hii");
btn.addEventListener("click",function(){
    let matter=content.value;
    let check=checking(matter);
    if(check){
        let answer= tobinary(matter);
        print.classList.add("answer-text1");
        print.innerHTML=answer;
        print.style.color="black";
        print.style.fontSize="30px";
    }
    else{
        setTimeout(function(){
            content.style.border="2px solid red";
        },100);
        setTimeout(function(){
            content.style.border="2px solid black";
        },1000);
        reset();
    }
    
});
function checking(matter){
    return /^[0-9]+$/.test(matter);
}
function tobinary(matter){
    let answer="";
    while(matter!=0){
        answer=(matter%2)+answer;
        matter=Math.floor(matter/2);
    }
    return answer;
};
function reset(){
    content.value="";
    print.innerHTML="";
}
btn1.addEventListener("click",function(){
        content.value="";
        print.innerHTML="";
});

let check1=true;
btn2.addEventListener("click",function(){
    if(check1){
    let text=document.querySelector(".text");
    let heading=document.querySelector(".heading");
    text.innerHTML="Enter Binary Number";
    heading.innerHTML="Binary to Decimal Convertor";
    check1=false;
    }
    else{
    let text=document.querySelector(".text");
    let heading=document.querySelector(".heading");
    text.innerHTML="Enter Decimal Number";
    heading.innerHTML="Decimal to Binary Convertor";
    check1=true;
    }

});

