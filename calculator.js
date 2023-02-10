let outputScreen=document.getElementById("output-screen");




// btn=document.querySelector('[type="text"]');

// btn.addEventListener('click',()=>{

// })
function display(num){
    outputScreen.value+=num;
}
function Calculate(){

    try
    {
    outputScreen.value=eval(outputScreen.value);
    }
    catch(err)
    {
        alert('Invalid');
    
    }
}

function Clear(){
    outputScreen.value='';

}
function del(){
    outputScreen.value=outputScreen.value.slice(0, -1);
}
button=document.querySelector('[type="text"]');

// 1