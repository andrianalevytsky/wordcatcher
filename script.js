

//load content
document.addEventListener('DOMContentLoaded', function() {
  
  
  // add text when you click buttons
  var buttons = document.querySelectorAll('button');
  var container = document.getElementById('container');

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      var buttonText = button.textContent;
      container.append(buttonText);
    });
  }); 
  
  //add image when you click image button
  
  const imgbuttons = document.querySelectorAll('.image-button');
    imgbuttons.forEach(button => {
        button.addEventListener('click', () => {
            const img = button.querySelector('img');
            const newImage = document.createElement('img');
            newImage.src = img.src;
            newImage.alt = img.alt;
            newImage.style.width = '100px'; // set the width
            newImage.style.objectFit = 'cover'; // maintain aspect ratio

            document.getElementById('container').appendChild(newImage);
        });
    });

  
  //timing visibility of each section
  var question = document.getElementById('question');
  var story = document.getElementById('story');
  var shells = document.getElementById('shells');
  // the story or second sequence visible for 20 seconds
  function startStory() {
    question.style.display = 'none';
    story.style.display = 'block';

    //defining function to end story
    function endStory() {
    question.style.display = 'block';
    story.style.display = 'none';
    shells.style.display = 'block';
    }
    //ending story after 83s
    setTimeout(endStory, 83000);
    
    //toggle button visiblity  
    var toggle = document.querySelectorAll('.toggle');
    var currentIndex = 0;
    var toggleInterval = 1000; // Time interval in milliseconds

    setInterval(function() {
      toggle[currentIndex].style.display = 'none';
      currentIndex = (currentIndex + 1) % toggle.length;
      toggle[currentIndex].style.display = 'block';
    }, toggleInterval);
  
  }

  // Delaying start of story so intial question is visible for 10 seconds at start
  setTimeout(startStory, 10000);
  
});




//move button position
function randomPosition(element) {
  var maxX = window.innerWidth - element.offsetWidth;
  var maxY = window.innerHeight - element.offsetHeight;
  var newX = Math.floor(Math.random() * maxX);
  var newY = Math.floor(Math.random() * maxY);
  element.style.left = newX + 'px';
  element.style.top = newY + 'px';
}

var elements = document.querySelectorAll('.moving');
var interval = setInterval(function() {
  elements.forEach(function(element) {
    randomPosition(element);
  });
}, 1000); // Change position every 1 seconds
