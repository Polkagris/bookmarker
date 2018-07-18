

  //Add event listener to Submit
  document.querySelector('#myForm').addEventListener('submit', saveBookmark);

  //Save bookmark function
  function saveBookmark(e) {
    //Get the value from input fields and store them in local variable (global no-go)
    let siteName = document.querySelector('#siteName').value;
    let siteUrl = document.querySelector('#siteUrl').value;
    console.log(siteName);
    console.log(siteUrl);

    //Store the value from input in object
    let bookmark = {
      name: siteName,
      url: siteUrl
    }

    console.log(bookmark);

    //Prevents the form from submitting
    e.preventDefault();
  }



  //get siteName and siteUrl
