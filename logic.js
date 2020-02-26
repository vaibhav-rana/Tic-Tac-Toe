let sign = "X";

function printx(number){
    let b= document.getElementById("r"+number);
    if(b.innerText == ""){
        b.innerHTML=sign; 
        winner();
        checksign();
        disp.innerHTML= sign+" turn ⏳";
    }  
}
function checksign(){
    if(sign=="X")
        sign="O";
    else
        sign="X";
}
function getvlue(no){
    return document.getElementById("r"+no).innerHTML;
}
function checkmove(a,b,c,m){
    if(getvlue(a)==m && getvlue(b)==m && getvlue(c)==m){
        return true;
    }
    else
        return false;
}
function winner(){
    if(checkmove(1,2,3,sign) || checkmove(4,5,6,sign) || checkmove(7,8,9,sign) ||
       checkmove(1,4,7,sign) || checkmove(2,5,8,sign) || checkmove(3,6,9,sign) || 
       checkmove(1,5,9,sign) || checkmove(3,5,7,sign)){
       disp.innerHTML = sign + "'s win...👏🏻🏆"; 
        for(let i=1;i<=9;i++){
           document.getElementById("r"+i).innerHTML="";
        }
        throw "end game";
    }
    else
        if(getvlue(1)!="" && getvlue(2)!="" && getvlue(3)!="" &&
           getvlue(6)!="" && getvlue(5)!="" && getvlue(4)!="" && 
           getvlue(7)!="" && getvlue(8)!="" && getvlue(9)!=""){
           disp.innerHTML = "It's tie...👎🏻🏻";
            throw "tie";
        }
        
}
function reset(){
    for(let i=1;i<=9;i++){
           document.getElementById("r"+i).innerHTML="";
        }
    sign="X";
    disp.innerHTML="Let's Play";
}