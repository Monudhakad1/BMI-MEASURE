const form=document.querySelector('form')
// this use case give empty value:
// const height=parseInt(document.querySelector('#height').value)
form.addEventListener('submit',function(e){
     e.preventDefault();

     const height = parseInt(document.querySelector('#height').value);
     const weight = parseInt(document.querySelector('#weight').value);
     const results= document.querySelector('#results')
     if(height===" " || height<0 || isNaN(height)){
          results.innerHTML=`Please Give a valid Height ${height}`;
     } else if(weight===" " || weight<0 || isNaN(weight)){
          results.innerHTML=`Please Give a valid Height ${weight}`;
     }
     else {
          const bgmi=(weight/((height*height)/10000)).toFixed(2);
          results.innerHTML= `<span>BMI for a give details are ${bgmi}</span>`;
     }


});