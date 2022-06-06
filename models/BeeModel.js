const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');

const p = path.join(rootDir, 'data', 'samplenew.json');
const p2 = path.join(rootDir, 'data', 'littlelistnew.json');
const getwordsFromFile = cb => {
  fs.readFile(p2, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

const getwordsFromFileReal = cb => {
  fs.readFile(p2, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class SpellingBee {
  constructor(word, centerletter, remaininglettersasArray, wordasArray, associatedwords, numberofwords) {
    //this.id = id; MAYBE but if save on mongoose i think 
    //it generates one BUT GOGOLE IT, BECAUSE I WANT INCREMENTAL
    this.word = word;
    this.centerletter = centerletter;
    this.remaininglettersasArray = remaininglettersasArray;
    this.wordasArray = wordasArray;
    this.associatedwords = associatedwords;
    this.numberofwords = numberofwords;
  }

  //dunno about the folliwingn - adapt to save 
  save() {
    getwordsFromFile(words => {
      
    /*   if(this.id){
       // console.log('hello id', this.id);
        const existingProductIndex = words.findIndex(
          prod => prod.id === this.id
        );
     console.log(existingProductIndex, 'existingProductIndex');
        const updatedProducts = [...words];
      //  console.log(updatedProducts,'updatedProducts');
        updatedProducts[existingProductIndex] = this;
        console.log(this, 'this');
        fs.writeFile(p, JSON.stringify(updatedProducts), err => {
          console.log(err);
        })
      }
      else {
        this.id = Math.random().toString();
    //    getProductsFromFile(products => {
        words.push(this);
          fs.writeFile(p, JSON.stringify(words), err => {
            console.log(err);
         // });
        }); 
      } */
  })
  
 
  }
 

  static fetchAll(cb) {
    getwordsFromFile(cb);
  }
  static findById(id, cb) {
    getwordsFromFile(products => {
      const product = products.find(p => p.id === id);
      cb(product);
    })
  }
  static fetchAll2 = cb => {
    let asdf = ['asf', 'asdf', 'asdf'];
   // console.log('adsflkjasld;jf');
      cb(asdf);
  }
    //static findmin72(cb) {
 
  static findmin71(cb) {
    //findmin7(cb) => {
      getwordsFromFile(words => {
       let wordsa = words.words;
       const wordlist = wordsa.filter(p => p.length >= 7);
       let newarray = [];
       const wordlist2 = wordlist.filter(check2 => {
          const uniqueCount = new Set(check2).size;
          // console.log(uniqueCount);
          // const uniqueStr = [...new Set(uniqueCount)].join('');
          // const withoutSpaces = uniqueStr.replaceAll(' ', '');
            if(uniqueCount === 7) {
              newarray.push(check2);
            }
       });
       let rand = Math.floor(Math.random()*newarray.length);
       let rValue = newarray[rand];
     //  console.log(rValue, 'rValue');
       cb(rValue);
       
    
      })

  }
  static getwordswithcenterletter(word,centerletter, cb) {
    const uniqueCount = new Set(word).size;
    const uniqueStr = [...new Set(word)].join('');
    const lettersarray = uniqueStr.split('');
    //START PREPARING FOR REGEX
    const alphabetarray = [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    const newalphabet = alphabetarray.filter(letter => {
      if(!lettersarray.includes(letter)) {
        return letter;
      }
    })
    const newalphabetstring = newalphabet.join('');

    //get words and start processing 
    getwordsFromFileReal(words => {
      const wordsa = words.words;
      const wordlist = wordsa.filter(p => p.length >= 4);
      const wordlist2 = wordlist.filter(check2 => {
        const uniqueCount = new Set(check2).size;
        // console.log(uniqueCount);
        // const uniqueStr = [...new Set(uniqueCount)].join('');
        // const withoutSpaces = uniqueStr.replaceAll(' ', '');
          if(uniqueCount <= 7) {
            // newarray.push(check2);
            return check2;
          }
      });

      const newarraya = [];
      const wordlist3 = wordlist2.filter(check3 => {
          const currentwordtoarray = check3.split(''); 
          let officialtry = `[${newalphabetstring}]`;
          let centreletter = `[${centerletter}]`;
          const regexwords = new RegExp(`${officialtry}`, 'g');
          const regexCentreLetter = new RegExp(`${centerletter}`, 'g');
          let testregexp = regexwords.test(check3);
          let testregexpcenter = regexCentreLetter.test(check3);
          if (testregexp === false) {
              //   newarraya.push(check3);
               if (testregexpcenter == true) {
                 newarraya.push(check3);
                } 
              }

 });
  //console.log(newarraya,'newarraya');
  ///console.log(word,'word');
  // console.log(wordstaticminusalphabetTOstring,'wordstaticminusalphabetTOstring');
  // console.log(newalphabetstring,'newalphabetstring');

 cb({newarray: newarraya, uniqueStr:uniqueStr, arrayofuniqueletters: lettersarray})
      //filter words with these letters
    });
  

    // cb('hellaaao');

  }
  static getwordsfromletters(word, cb) {
    //cb('hello');
   
    //WE NEED TO MATCH WORDS FROM THE DICTIONARY WITH THE SEVEN LETTERS..
    //count letters
    const uniqueCount = new Set(word).size;
   //get 7 unique letters   //WHAT IF HAS DASH
    const uniqueStr = [...new Set(word)].join('');
    const lettersarray = uniqueStr.split('');
    const withoutSpaces = uniqueStr.replaceAll(' ', '');
    
    //then i can remove the ones i have, and exclude the other letters
    const alphabetarray = [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    const newalphabet = alphabetarray.filter(letter => {
      if(!lettersarray.includes(letter)) {
        return letter;
      }
    })
  //  console.log(newalphabet); //this is the new alphabet
    //convert to string
    const newalphabetstring = newalphabet.join('');
  //  console.log(newalphabetstring);
    
    // console.log(uniqueCount);
   
    let wordstatic = 'abatement';
    let wordstaticminusalphabet = alphabetarray.filter(letter => {
     if(!wordstatic.includes(letter)) {
       return letter;
     }
   })
   const wordstaticminusalphabetTOstring = wordstaticminusalphabet.join('');
   console.log(wordstatic);
   console.log(wordstaticminusalphabetTOstring);
    //HERE TEST FILTER WORDS WITH THESE LETTERS
    
    //get list of words total into array
    getwordsFromFileReal(words => {
     // console.log(lettersarray,'word');
      let wordsa = words.words;

      //we have our word: e.g. absorbant
      //we have string of letters we can make words with 'absornt'
      //we have array of all word [hell, hello, help etc]
      
      
      

      //we want to find words that have a) at least 4 characters
      const wordlist = wordsa.filter(p => p.length >= 4);
      const wordlist2 = wordlist.filter(check2 => {
        const uniqueCount = new Set(check2).size;
        // console.log(uniqueCount);
        // const uniqueStr = [...new Set(uniqueCount)].join('');
        // const withoutSpaces = uniqueStr.replaceAll(' ', '');
          if(uniqueCount <= 7) {
            // newarray.push(check2);
            return check2;
          }
     });
     const newarraya = [];
     const wordlist3 = wordlist2.filter(check3 => {
       
        //get unique letters of our word now
      //  const uniqueletters = [...new Set(check3)].join('');
     //   const listwordtoarray = uniqueletters.split(''); //listword, into array of unique letters

      const currentwordtoarray = check3.split(''); 
   //   console.log(currentwordtoarray,'currentwordtoarray');
 //  let string = `[^${newalphabetstring}]/g`;
   let string= `/[^${newalphabetstring}]/`;
   
  //console.log(wordstaticminusalphabet); //this is the new alphabet
  //convert to string

  //console.log(wordstaticminusalphabetTOstring);
   //'abatement'
    let texto = 'cdfghijklopqrsuvwxyz';
    let partooo = `[${texto}]`;
    
    let officialtrySTATIC = `[${wordstaticminusalphabetTOstring}]`;
    let officialtry = `[${newalphabetstring}]`;
    let centreletterstatic = `[t]`;
    let centreletterhere = 'a';
    let centreletter = `[${centreletterhere}]`;
   let part = '[cdfghijklopqrsuvwxyz]';
 
  let string7= `/[${newalphabetstring}]/`;

  //console.log(string6,'string6');
 //  console.log(word,'word');
 const regex = new RegExp(`${officialtry}`, 'g');
 const regexSTATIC = new RegExp(`${partooo}`, 'g');
 const regexCentreLetter = new RegExp(`${centreletterstatic}`, 'g');
 //  const regex = new RegExp(string3, 'g');
   // const regex1 = string4.test(check3);
   //const regex = new RegExp(string3, 'g');
  // NO const regex = new RegExp(/[^cdfghijklopqrsuvwxyz]/, 'g');
 //  console.log(regex.test(check3), check3);
 
  // let testregexp = check3.match(regex1);
      let testregexpCentreletter = regexCentreLetter.test(check3);
  //WORKS let testregexp = regex.test(check3);
  let testregexp = regexSTATIC.test(check3); //test static
  //original let regezwhat = string.test(check3);
   //console.log(regezwhat, 'regezwhat');
   //   console.log(regezwhat);
      if (testregexp === false) {
        newarraya.push(check3);
       /*  if (testregexpCentreletter == true) {
          newarraya.push(check3);
        } */
     
      }

    //let myRegExp = /[^ ]/i;

      /*   let  arr = []; 
        function arrayMatch(arr1, arr2) {
          // Array to contain match elements
          for(var i=0 ; i<arr1.length ; ++i) {
            for(var j=0 ; j<arr2.length ; ++j) {
              if(arr1[i] == arr2[j]) {    // If element is in both the arrays
              //  arr.push(arr1[i]);        // Push to arr array
              // return ..
               console.log(arr1[i], 'match');
                }
            }
          }
           
          return arr;  // Return the arr elements
        } */
    //   arrayMatch(currentwordtoarray, lettersarray);
     //  console.log(arr,'arr', word);
     // newarraya.push(listwordtoarray);

     // return uniqueletters;
       /* 
         
        console.log(arrayMatch(arr1, arr2)); */

        // e.g abcotx  and our other word is : abcfot  - so MISMATCH

       // console.log(uniqueletters);
     });
  console.log(newarraya,'newarraya');
  console.log(word,'word');
  console.log(wordstaticminusalphabetTOstring,'wordstaticminusalphabetTOstring');
  console.log(newalphabetstring,'newalphabetstring');
      //WE WANT TO FIND NOW - ANY WORD OVER 4 LETTERS THAT HAS ANY OF THESE letters, and no more#
      //SO IT MUST NOT HAVE OTHER LETTERS for a start
      //e.g. list brings up this word : aardwolf , and our word is abactinal
        //get unique letters from each: ardwolf, 
        //but shouldnt have more than 7 unique numbers
        //should not have other letters than the 7 we chose

        
        //DO ALL LETTERS OF EACH WORD IN LIST, EXIST IN OUR LETTERSARRAY
      //AND ALSO - AFTER, MAYBE OUR CENTER LETTER when we decide which 
      //letter to use as the center letter

      //MAYBE SEE EACH WORD, what unique letters it contains


     // const wordlist2 = wordlist.filter(p => p.length >= 5);

      //TRY WITHOUT FILTER NOW // push into another array - but maybe too big



      //also they must contain any of these letters in our string

     /*  const wordlist2 = wordlist.filter(check2 => {
        check2 => check2.length >= 5
      }); */
  //   cb(newarraya);
    cb({newarray: newarraya, uniqueStr:uniqueStr, arrayofuniqueletters: lettersarray})
      //filter words with these letters
    });
   /* 
    
  
      let newarray = [];
      const wordlist2 = wordlist.filter(check2 => {
         const uniqueCount = new Set(check2).size;
         // console.log(uniqueCount);
         // const uniqueStr = [...new Set(uniqueCount)].join('');
         // const withoutSpaces = uniqueStr.replaceAll(' ', '');
           if(uniqueCount === 7) {
             newarray.push(check2);
           }
      });
      let rand = Math.floor(Math.random()*newarray.length);
      let rValue = newarray[rand];
    //  console.log(rValue, 'rValue');
      cb(rValue);
 */



  }
  
  /* static findmin7(cb) {
    getwordsFromFile(words => {
      const wordlist = words.find(p => p.length > 7);
      cb(wordlist);
    })
  } */
};
