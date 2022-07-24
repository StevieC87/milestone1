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
  constructor(word, centerletter, remaininglettersasArray, wordasArray, associatedwords, numberofwords, dateplay) {
    //this.id = id; MAYBE but if save on mongoose i think 
    //it generates one BUT GOGOLE IT, BECAUSE I WANT INCREMENTAL
    this.word = word;
    this.centerletter = centerletter;
    this.remaininglettersasArray = remaininglettersasArray;
    this.wordasArray = wordasArray;
    this.associatedwords = associatedwords;
    this.numberofwords = numberofwords;
    this.dateplay = '';
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
      // let rValue = newarray[rand];
       let randomWord = newarray[rand];
     //  console.log(rValue, 'rValue');

     const uniqueCount = new Set(randomWord).size;
     //get 7 unique letters
     const uniqueStr = [...new Set(randomWord)].join('');
     const lettersarray = uniqueStr.split('');
     const withoutSpaces = uniqueStr.replaceAll(' ', '');


           //Send results back to controller
       cb({randomWord:randomWord, arrayofuniqueletters: lettersarray,uniqueStr:uniqueStr})



     //  cb(rValue);
       
    
      })

  }
  static howmanypangrams(cb) {
    getwordsFromFile(words => {
      let wordsa = words.words;
      const wordlist = wordsa.filter(p => p.length >= 7);
      let newarray = [];
      const wordlist2 = wordlist.filter(check2 => {
         const uniqueCount = new Set(check2).size;
      
           if(uniqueCount === 7) {
             newarray.push(check2);
           }
      });
  
      console.log(newarray.length, 'number of pangrams total possible from this word list');
      cb({total: newarray.length, pangrams: newarray});
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
 //FIND HOW MANY PANGRAMS THERE ARE 
  const allpangrams = [];
  const allpangramsfind = newarraya.filter(wordnow => {
    const unique_letters_count = new Set(wordnow).size;
    if(wordnow.length >= 7 && unique_letters_count === 7){
      allpangrams.push(wordnow);
    } 
    // console.log(allpangrams,'allpangrams');
  })
 
  //console.log(newarraya,'newarraya');
  ///console.log(word,'word');
  // console.log(wordstaticminusalphabetTOstring,'wordstaticminusalphabetTOstring');
  // console.log(newalphabetstring,'newalphabetstring');

 cb({newarray: newarraya, uniqueStr:uniqueStr, arrayofuniqueletters: lettersarray, allpangrams: allpangrams})
      //filter words with these letters
    });
  

    // cb('hellaaao');

  }
/*   static getuniqueletters(word, cb) {
   
    //count letters
    const uniqueCount = new Set(word).size;
    //get 7 unique letters
    const uniqueStr = [...new Set(word)].join('');
    const lettersarray = uniqueStr.split('');
    const withoutSpaces = uniqueStr.replaceAll(' ', '');
          //Send results back to controller
      cb({uniqueStr:uniqueStr, arrayofuniqueletters: lettersarray})
      //newarray: newarraya, 
    } */
  
    //get today's game by date
    static gettodaysgame(cb) {

    }



};
