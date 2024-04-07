//Ignore Notes they are for me to reference to better understand the code and a way to make sure I know what everything means.


// Btn will equal "button-one" because I grabbed it using the get element by ID then I added an event listener to the btn(Google Search button) and when the button is clicked it will run the function I am about to create.....I used the window object because it is a global object and paired with the location property it will allow me to navigate to the url of the page and then with the added .href property that can be paired with .location I can add the url to the page.I combine it with the window.location.href = "https://www.google.com" to make it so when the button is clicked it will paste that in the url bar, along with whatver value is typed in the search bar. That is why I used the get element by Id to locate the search input and whatever vaule is entered in the search bar will be pasted into the url bar together. It should create a search for whatever value is entered in the search bar..
let btn = document.getElementById("button-one");

btn.addEventListener('click', function() {

  window.location.href = "https://www.google.com/search?q=" + document.getElementById("search-input").value;
}) 


const buttonOptions = [
  "I'm Feeling Lucky",
  "I'm Feeling Artistic",
  "I'm Feeling Playful",
  "I'm Feeling Funny",
  "I'm Feeling Curious",
];

function buttonHover() {
  // Get a random index within the buttonOptions array length
  const randomIndex = Math.floor(Math.random() * buttonOptions.length);

  // The querySelector method searches within the element's "family" for the specified selector, which here is 'span'. Then the .textContent property is used to set the text content of the span element to the random button option.
  this.querySelector('span').textContent = buttonOptions[randomIndex];
}

//  Add an event listener to the button element it will listens for the mouseover event and will run the buttonHover function when the event occurs.
document.getElementById("button-two").addEventListener('mouseenter', buttonHover);

