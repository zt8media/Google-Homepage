//Ignore Notes they are for me to reference to better understand the code and a way to make sure I know what everything means.


document.getElementById('search-input-images').addEventListener('keydown', function(event) {
    // This line adds an event listener to the input element with the id 'search-input-images'.
    // It listens for the 'keydown' event, which is triggered when a key is pressed.
    // The function passed as the second argument will be executed when the event occurs. (argument is a value that you pass to a function or method when calling it. In this case, the function is called when the Enter key is pressed.)
  
    if (event.key === 'Enter') {
      // This condition checks if the key pressed is the Enter key.(conditions are true or false)
  
      const inputValue = this.value.trim();
      // this.value gets the value entered into the input field.
     // .trim() removes any whitespace from the value.
     // const inputValue = ... assigns the trimmed value to the variable inputValue, which can then be used later in the code.
  
      if (inputValue) {
        // This condition checks if inputValue is not an empty string.
  
        const searchTerm = encodeURIComponent(inputValue);
        // This line encodes the search term to make sure it's URL-safe.
  
        const imageSearch = `https://www.google.com/search?q=${searchTerm}&tbm=isch`;
        // This line is the URL for the Google Images search using the encoded search term.
  
        alert('Google Image Search for: ' + inputValue);
        // This line displays an alert with the search term.
  
        window.location.href = imageSearch;
        // This line redirects the user to the Google Images search URL.
      } else {
        alert('Please Enter a Search Value.');
        // If inputValue is empty, this will display.
      }
    }
  });