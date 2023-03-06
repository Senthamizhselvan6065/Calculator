function clicking(event){
    let parent = document.querySelector('.output')
    // console.log(event.innerText);
    let operator = ['-','+','*','%','/']
    if(!(operator.includes(parent.innerText.slice(-1)) && operator.includes(event.innerText))){
       // console.log('last data operator');
    }
    parent.innerText = parent.innerText + event.innerText
 }
 const evaluate1 = () => {
    let parent = document.querySelector('.output')
    let data = parent.innerText
    let out = eval(data)
    answer = document.querySelector('.ans')
    answer.append(out)
 };
 
 let Clear = () =>{
    let parent = document.querySelector('.output')
    let child = document.querySelector('.ans')
    parent.innerText = "";
    child.innerText = "";
 };
 
 
 window.addEventListener('keypress',(event) =>{
    let operator = ['-','+','*','%','/']
   let num = event.key
   let num1 = event.code
     if(num1.includes("Digit") || operator.includes(num)){
    let parent = document.querySelector('.output')
    parent.innerText = parent.innerText + key
    console.log('key');
    console.log(event);
 
    }
    else{
       alert("Warning")
    }
 })