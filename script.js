// const is another way of writing var
// this line of code creates a variable called poetic edge which is equal to any element inside of the HTML that has a class called poetic-edge, in the case of this website each html section has this class, there are about 18 elements
const poeticEdge = document.getElementsByClassName("poetic-edge");

// this is called a for loop, it allows you to take a group of elements and do something which each one, this for loop is adding an event listener for a mouse click, in other words it is making sure that each poetic edge is ready to do something when a person clicks on it, in this case each poetic edge is going to call the showPoetics function when a person clicks on it
for (let i=0; i<poeticEdge.length; i++) {
  poeticEdge[i].addEventListener('click', function () { showPoetics(i) });
}

// this is a javascript function, this particular function takes an argument, in this case the argument the letter i. arguments always go inside the parentheses of the function.  
function showPoetics(i) {
  // get all elements with the id of whatever i is equal to, in this case i is equal to a number 0-18
  const thisPoeticEdge = document.getElementById(i);
  // get all elements with the id of whatever i is equal to + 1
  const nextPoeticEdge = document.getElementById(i+1);
  // get the body element
  const body = document.getElementsByTagName('body')[0];
  // if i is equal to 0 this means that a person has clicked through the to last section of the HTML, at this point the person should be able to click back to the first section or top layer of the web page so the class time-traveling-towards-the-past is being removed and the class time-traveling-towards-the-future is being added.
  if (i === 0) {
    body.classList.remove('time-traveling-towards-the-past');
    body.classList.add('time-traveling-towards-the-future');
  }
  // if i is equal to 18 this means that a person has clicked back through the to first section of the HTML so the class time-traveling-towards-the-future is being removed and the class time-traveling-towards-the-past is being added.
  if (i === 18 && body.classList.contains('time-traveling-towards-the-future')) {
    body.classList.remove('time-traveling-towards-the-future');
    body.classList.add('time-traveling-towards-the-past');
  }
  // if the body has the class time-traveling-towards-the-future then the person should be moving forward through the site so each poetic edge should be removing the class of hide, if the body doesnt have the the class time-traveling-towards-the-future then the person should be moving towards the past in which case the class of hide should be added back to the poetic edge.
  if (body.classList.contains('time-traveling-towards-the-future')) {
    nextPoeticEdge.classList.remove('hide');
  } else {
    thisPoeticEdge.classList.add('hide');
  }
}