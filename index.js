// alert("Hi");

// this is for button click or press
for (var i = 0; i < document.querySelectorAll('.drum').length; i++)
{
  document.querySelectorAll('.drum')[i].addEventListener('click', function() {
    // this.style.color = "#696467";
    // alert('Button Clicked');
    // let audio = new Audio('sounds/tom-1.mp3');
    // audio.play();
    var buttonText = this.innerHTML;
    makeSound(buttonText);
    buttonAnimation(buttonText);
  });
}
function buttonAnimation(key)
{
  var currentButton = document.querySelector("."+key);

  currentButton.classList.add("pressed");

  setTimeout(function () {
    currentButton.classList.remove("pressed");
  },100);
  // 100ms = 0.1 s

}
// this is for keyboard press
document.addEventListener("keydown",function(event)
{
  // alert('Key presses');
  // console.log(event);
  makeSound(event.key)
  buttonAnimation(event.key);
});


// key is passed as buttonclick and keyboardpress
function makeSound(key)
{
  switch (key) {
    case "a":
      let a = new Audio('sounds/tom-1.mp3');
      a.play();
    break;

    case "s":
      let s = new Audio('sounds/tom-2.mp3');
      s.play();
    break;

    case "d":
      let d = new Audio('sounds/tom-3.mp3');
      d.play();
    break;

    case "f":
      let f = new Audio('sounds/tom-4.mp3');
      f.play();
    break;

    case "j":
      let j = new Audio('sounds/snare.mp3');
      j.play();
    break;

    case "k":
      let k = new Audio('sounds/crash.mp3');
      k.play();
    break;

    case "l":
      let l = new Audio('sounds/kick-bass.mp3');
      l.play();
    break;

    default:
      console.log(document.querySelector(".drum").innerHTML);
  }
}
