// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likehearts = document.querySelectorAll(".like-glyph")
function likebutton(e){
  alert("You like the post")
  const heart = e.target
  mimicServerCall()
  .then(function(){
    if (heart.innerHTML === EMPTY_HEART){
      heart.innerHTML = FULL_HEART;
      heart.className = "activated-heart"
    } else {
      heart.innerHTML = EMPTY_HEART;
      heart.className = "";
    }
  })
  .catch(function(error){
    const err = document.getElementById("modal");
    err.innerHTML = error
    setTimeout(() => err.className = "hidden", 3000);
  })
}
likehearts.forEach(likehearts => {
  likehearts.addEventListener("click",likebutton)
})



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
