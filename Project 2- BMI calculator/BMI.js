const formHolder=document.querySelector("form");

 formHolder.addEventListener('submit',function(e){
    e.preventDefault()// stops the form to submit before doing the mentioned steps 

// extracting data from html form

    //  selecting input
    const height=parseFloat(document.querySelector('#height').value);
    const weight=parseFloat(document.querySelector('#weight').value);
    const result=document.querySelector('#results');
// parseInt(height);
// parseInt(weight);
// to get only non- null values 
//  donot give null values immediately after loading the form 



if(height=='' || height<=0 || isNaN(height)||weight=='' || weight<=0 || isNaN(weight)){
    result.innerHTML=`Please give a Valid Input your input is :${height} ${weight}`;

}
else {
    console.log(height);

    console.log(weight);

    
const BMI=((weight/((height/100)*(height/100)).toFixed(2)));
console.log(BMI);

result.innerHTML=`<span> Your BMI: ${BMI}</span>`

//  show results 
if(BMI<18.6){
    result.innerHTML=`<span> Your BMI: ${BMI}<br>Under Weight</span>`
}

else if(BMI>=18.6 && BMI<=24.9){
    result.innerHTML=`<span> Your BMI: ${BMI}<br>Your BMI is Normal</span>`

}
else if(BMI>24.9){
    result.innerHTML=`<span> Your BMI: ${BMI}<br>You are Overweight</span>`

}
}



// result.innerHTML=`${height}`
 })
