
  //Add event listener to Submit
  document.querySelector('#myForm').addEventListener('submit', saveBookmark);


  //Save bookmark function
  function saveBookmark(e) {
    //Get the value from input fields and store them in local variable (global no-go)
    let siteName = document.querySelector('#siteName').value;
    let siteUrl = document.querySelector('#siteUrl').value;



    //Store the value from input in object
    let bookmark = {
      //date
      name: siteName,
      url: siteUrl
    }



    //Move input value in the bookmark-object to localStorage
      //Test if bookmarks-key is null
      if(localStorage.getItem('bookmarks') === null){
        //init array
        var bookmarkArray = [];
        //Add bookmark object values to array
        bookmarkArray.push(bookmark);
        //Set to localStorage - make 'bookmarks'- key's content into a string with JSON
        localStorage.setItem('bookmarks', JSON.stringify(bookmarkArray));

      }
      //If bookmarks-key's content is containing content from earlier
      else{
        //Store content of bookmarks-key in variable as JSON
        var bookmarkArray = JSON.parse(localStorage.getItem('bookmarks'));
        //Add bookmark-object content to array
        bookmarkArray.push(bookmark);
        //Re-set bookmarkArray back to localStorage as string
        localStorage.setItem('bookmarks', JSON.stringify(bookmarkArray));
      }



    // Local storage - how to

    //   //Set the item in local storage
    //   localStorage.setItem('test', 'Hello world!');
    //   //Get the item from local storage and console log
    //   console.log(localStorage.getItem('test'));
    //   //Delete from local storage
    //   localStorage.removeItem('test');
    //   //Log again to see that its removed
    //   console.log(localStorage.getItem('test'));





    //Make the page load new bookmarks as soon as the Submit-button is clicked
    displayBookmarks();
    //Clear input fields
    document.querySelector('#siteName').value = "";
    document.querySelector('#siteUrl').value = "";

    //Prevents the form from submitting by default
    e.preventDefault();
  }


  //Delete bookmarks function
  function deleteBookmark(url){
   //Store content of bookmarks-key in variable as JSON
   var bookmarkArray = JSON.parse(localStorage.getItem('bookmarks'));
   //Loop through bookmarkArray
   for(var i = 0; i<bookmarkArray.length; i++){
     //check if bookmarkArray[i] === URL
     if(bookmarkArray[i].url == url){
       //Remove the element with that url
       bookmarkArray.splice(i, 1);
      }
    }
    //Re-set bookmarkArray back to localStorage as string
    localStorage.setItem('bookmarks', JSON.stringify(bookmarkArray));

    //Re-fetch displayBookmarksbookmarks so that the page loads right after delete
    displayBookmarks();
  }


  //display localStorage
  function displayBookmarks(){
    //Store content of bookmarks-key in variable as JSON
    var bookmarkArray = JSON.parse(localStorage.getItem('bookmarks'));
    //set bookmarksResults to empty string
    var bookmarksResults = document.querySelector('#bookmarksResults');
    bookmarksResults.innerHTML = '';
    //document.querySelector(".container").classList.add("card");

    //map through bookmarkArray to output content from bookmark-key as HTML
    bookmarkArray.map(singleBookmark => {
      //Build output - Append HTML to bookmarksResults (div)
      bookmarksResults.innerHTML += '<div class="card bg-faded">'+
                                    '<h4>'+singleBookmark.name+
                                    ' '+singleBookmark.url+
                                    '   '+ '<a class="btn btn-default" type="button" target=_blank href="'+singleBookmark.url+'">Visit</a>'+
                                    '   '+'<a onclick="deleteBookmark(\''+singleBookmark.url+'\')" type="button" class="btn btn-danger">Delete</a>'+
                                    '</h4>'+
                                    '</div>';
    });
  }
