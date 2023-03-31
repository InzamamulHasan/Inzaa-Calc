let a=document.getElementsByClassName("items");
let ans="";
let ans2=""
for(let i=0;i<a.length;i++){
    a[i].addEventListener("click",function(){
        let str=a[i].innerText;
        ans2+=str;
        if(str==="x"){
            str="*";
        }else if(str==="%"){
            str="/";
        }
        ans+=str;
        //console.log(ans);
        document.querySelector(".c").innerText=ans2;
    });
}

let equ=document.querySelector(".items2");
var sum="";
equ.addEventListener("click",function(){
    
    if(ans!==""){
        sum=eval(ans);
    }
    document.querySelector(".c").innerText=sum;
    ans="";
    ans2="";
})
let can=document.querySelector(".cancel");
can.addEventListener("click",function(){
    ans="";
    ans2="";
    sum="";
    document.querySelector(".c").innerText="";
})




