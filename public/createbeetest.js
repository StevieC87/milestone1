/* import axios from 'axios';
 */


document.querySelector('#generatewordbutton').addEventListener('click', callback => {
    //alert('skdfs');
    /*  axios.get('/getwordsgenerate')
 
    .then(response => {
        console.log(response.data);
    }); */
   /*  fetch('/miniwordlist.json')
    .then(response => response.json())
    .then(data => console.log(data)); */
    //fetch('/getwordsgenerate')
    fetch('/getwordsgenerate')
    .then(word => {
        await console.log(word, 'word');
        // console.log('word', word);
    }).
   // next();
   
    /* .then(test => {
        console.log(test,'test')
    }) */

    //.then(response => response.json())
    //.then(data => console.log(data)); 

});
      
  /*   */