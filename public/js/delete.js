
document.querySelector('#deleteb').addEventListener('click', e => {
    e.preventDefault();
    let lettersboxis =  document.querySelector('#letterstype');
    //collect here all the letter spans
    let lettersinbox = document.querySelectorAll('#letterstype span');
    //count how many letter spans, how long word is
    let numberofletters = lettersinbox.length;
    
    let letterweanttodelete = lettersinbox[numberofletters - 1];
    letterweanttodelete.remove();
    console.log(letterweanttodelete, 'letterweanttodelete');
      
    
   let wordfromarray = newarray1.join();
   const wordfromarray1 = wordfromarray.replaceAll(',', '');

   // lettersboxis.prepend

    console.log(newarray1, 'newarray1');
    console.log(wordfromarray1, 'wordfromarray');
    //let lettersinboxlength = lettersinbox.length;

}
)
