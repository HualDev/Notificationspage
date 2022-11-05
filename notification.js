let mark = document.getElementById('mark')
let comment = document.getElementsByClassName('comment')
let circle = document.getElementsByClassName('circle')
let number = document.getElementById('number')

mark.addEventListener('click',()=>{
   for(i=0;i<comment.length;i++){
    comment[i].style.backgroundColor='white'    
    }

   for(i=0;i<circle.length;i++){
    circle[i].style.display='none'
   } 
   
   number.innerHTML='0'
})