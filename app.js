//  Grab search form 
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

//Event listener for submit
searchForm.addEventListener('submit', e => {
      //Grab searched term
  const searchTerm = searchInput.value;
//Grab sortBy
const sortBy = document.querySelector('input[name="sortby"]:checked').value;
const searchLimit = document.getElementById('limit').value;

  //Mkae sure no empty submisions
  if(searchTerm === '') {
    showMessage('Please add a search term', 'alert-danger');
  }


        e.preventDefault();
      });

      function showMessage(message, className) {
          //Create div
  const div = document.createElement('div');
   //Add class to div
   div.className = `alert ${className}`;
   //Add text
   div.appendChild(document.createTextNode(message));
   //Get Parent of error message
   const searchContainer = document.getElementById('search-container');
   //Get sibling of error message
   const search = document.getElementById('search');
 
   //Insert message up there
   searchContainer.insertBefore(div, search);
 
   //error message Timeout
   setTimeout(() => div.remove(), 3000);

      }
