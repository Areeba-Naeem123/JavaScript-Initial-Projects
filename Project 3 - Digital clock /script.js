const clock=document.getElementById('clock');
// const clock= document.querySelector('#clock')


//  for continues running of the function we can use set interval 

setInterval(function(){
    let date= new Date();
// console.log(date.toLocaleDateString());
clock.innerHTML=date.toLocaleTimeString();

},1000);
