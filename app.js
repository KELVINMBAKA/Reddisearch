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
        
      }
