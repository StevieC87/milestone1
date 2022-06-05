/* import axios from 'axios';
 */


document.querySelector('#generatewordbutton').addEventListener('click', callback => {
   /*  axios.get('/getwordsgenerate')
    .then(response => {
        console.log(response.data);
    }); */
   /*  fetch('/miniwordlist.json')
    .then(response => response.json())
    .then(data => console.log(data)); */
    fetch('/getwordsgenerate')
    .then(response => response.json())
    .then(data => console.log(data)); 
      });
      
  /*   */