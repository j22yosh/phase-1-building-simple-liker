// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

  const emptyHeart = document.querySelectorAll(".like-glyph")
  console.log(emptyHeart)
  emptyHeart.forEach((heart) =>{
    heart.addEventListener('click', () => {
      console.log(emptyHeart.textContent)
      mimicServerCall(heart)
      .then(() =>{
        emptyHeart.textContent = FULL_HEART
        emptyHeart.className = 'activated-heart'})

        .catch((err) => {
              const error = document.querySelector('#modal')
              const modal = document.querySelector('#modal-message')
              error.removeAttribute('class')
              modal.textContent = err
              setTimeout(() => {error.setAttribute('class', 'hidden')}, 3000)
    
    })})})
  

    // addEventListener('click', {})
    
    // mimicServerCall()
      
    //    .then(() =>{
    //    emptyHeart.textContent = FULL_HEART
    //    emptyHeart.className = 'activated-heart'
    //   })

    //   .catch((err) => {
    //     const error = document.querySelector('#modal')
    //     const modal = document.querySelector('#modal-message')
    //     error.removeAttribute('class')
    //     modal.textContent = err
    //     setTimeout(() => {error.setAttribute('class', 'hidden')}, 3000)
    //   })

    // })
  
  //  const filledHeart = document.querySelectorAll('like-glpyh')
  //  filledHeart.forEach(heart =>{
  //    heart.addEventListener('click',{
  
      
            
         
      

     
  
   


  
   ;
  
    





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
