//  styling buttons 

const buttons= document.querySelectorAll('.button');// returns nodelist
// console.log(buttons);
const body=document.querySelector('body')// returns html collection 
// console.log(body)
buttons.forEach(function (button){
console.log(button);
button.addEventListener('click',function(event){
    console.log(event);
    console.log(event.target);
    if(event.target.id=='grey'){
        body.style.backgroundColor=event.target.id;

    }
    if(event.target.id=='red'){
        body.style.backgroundColor=event.target.id;
        
    } if(event.target.id=='yellow'){
        body.style.backgroundColor=event.target.id;
        
    } if(event.target.id=='pink'){
        body.style.backgroundColor=event.target.id;
        
    }
    if(event.target.id=='purple'){
        body.style.backgroundColor=event.target.id;
        
    }
})
})
