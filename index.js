var opvalue='';
let finalResult='';
let output=document.getElementById("result");
let number=['1','2','3','4','5','6','7','8','9','0']
let flag=0;


function addop(op){

    if(flag){
        if (op in number) {
            reset();
            opvalue += op;
        } 
        else{
            opvalue=finalResult + op;
        }
        flag=0;
    }
    else opvalue += op;
    
    
output.textContent=opvalue;

}
function printres(){
    finalResult=eval(opvalue);
    output.textContent=finalResult;
    flag=1;
  
}

function reset(){
    opvalue='';
    output.textContent='';
    finalResult='';
}