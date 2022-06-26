let clickydiv = document.querySelector('#ourmatchedwordsdiv1');
let clickyouter = document.querySelector('#ourmatchedwordsdivouter');
//if click the div with the arrow, expand and show list of words 
clickydiv.addEventListener('click', e => {
  //only if you have found words expand
  if(yourmatchedwords.length >= 1) {
    //expand
    clickyouter.classList.toggle('clickydivexpand');
    clickyouter.classList.toggle('overflowscroll');//divtoincludein.className.toggle('d-none');

    let wrap = document.querySelector('#ourmatchedwordsdivouter');
    let divtoincludein = document.querySelector('#youhavefounddiv');

    if (wrap.classList.contains('clickydivexpand')) {
       //alert('open')
      divtoincludein.classList.remove('d-none');

    }
    else {
      //alert('close')
      //divtoincludein.classList.remove('d-block');
      divtoincludein.classList.add('d-none');
    }


    //hide game
    document.querySelector('#letterstype').classList.toggle('d-none');
    document.querySelector('#outerdiv').classList.toggle('d-none');
    document.querySelector('#buttonsdiv').classList.toggle('d-none');
    //hide words while open
    document.querySelectorAll('.ourmatchedwordsdiv1 > span').forEach(function(element, index) {
        element.classList.toggle('d-none');
    });
    
    //set word or word(s)
    let numberofwordsyoufound = yourmatchedwords.length;
    let plural = '';
    if(numberofwordsyoufound > 1) {
        plural = 's';
    }

    //create the 'you have found x words message'
    //let creatediv   = document.createElement('div');

 
    //creatediv.id = 'youfoundxwordsdiv';
    let texttoadd = `<span>You have found ${numberofwordsyoufound} word${plural}</span>`;
    divtoincludein.innerHTML = texttoadd;
    //
    // let parenthere = document.querySelector('#ourmatchedwordsdiv1');
    //parenthere.appendChild(creatediv);

  }
  

 
  
})


