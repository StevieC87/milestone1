const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');
const axios = require('axios').default;



const p = path.join(rootDir, 'data', 'samplenew.json');
const p2 = path.join(rootDir, 'data', 'bigwordlistnew.json');
const p3 = path.join(rootDir, 'data', 'cleanlistnew57k.json');
const getwordsFromFile = cb => {
  fs.readFile(p3, (err, fileContent) => {
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
      
  
  })
  
 
  }

  static getdefinitionAPI(word, matchingwords, cb) {
  /*   axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(function (response) {
      // handle success
    // console.log(response.data);
     let definition = response.data
      cb(definition);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    }) */
   
 
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
 
  static generateword(cb) {
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
    getwordsFromFile(words => {
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
  static getuniqueletters(word, cb) {
   
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
  
    const newalphabetstring = newalphabet.join('');
 
    //get list of words total into array
    getwordsFromFile(words => {
     // console.log(lettersarray,'word');
      let wordsa = words.words;
      //we want to find words that have a) at least 4 characters
      const wordlist = wordsa.filter(p => p.length >= 4);
      const wordlist2 = wordlist.filter(check2 => {
        const uniqueCount = new Set(check2).size;
    
          if(uniqueCount <= 7) {
      
            return check2;
          }
     });
    const newarraya = [];

    //function find words that only have letters my word has
    const wordlist3 = wordlist2.filter(check3 => {
        const currentwordtoarray = check3.split(''); 
        let string= `/[^${newalphabetstring}]/`;

        let texto = 'cdfghijklopqrsuvwxyz';
        let partooo = `[${texto}]`;
      
        //  let officialtrySTATIC = `[${wordstaticminusalphabetTOstring}]`;
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

        let testregexpCentreletter = regexCentreLetter.test(check3);
          
        let testregexp = regexSTATIC.test(check3); //test static
          
        if (testregexp === false) {
          newarraya.push(check3);
        }
      });
      console.log(newarraya,'newarraya');
    console.log(word,'word');
    console.log(newalphabetstring,'newalphabetstring');

      //Send results back to controller
      cb({uniqueStr:uniqueStr, arrayofuniqueletters: lettersarray})
      //newarray: newarraya, 
    });
  }
};
