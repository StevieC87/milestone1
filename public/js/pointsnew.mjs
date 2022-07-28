
let currentscore = 0;
let currentpointslevel = '';
//POINT CIRCLES RELATED
let currentlevel = 'beginner';
let currentlevelshorthand = 'beginner';
let beginnercircle = document.querySelector('#beginner');
beginnercircle.classList.add('circleactive');
let numberhtmlelement = '<div class="numberpoint">0</div>';
document.querySelector('#beginner').innerHTML = numberhtmlelement;

let yourmatchedwords = [];
let ourmatchedwordsdiv = document.querySelector('#ourmatchedwordsdiv1');
let alertdiv = document.querySelector('#alertdiv');
let alertmessage = '';


export function makestringfromletters() {
         
    let lettersboxis =  document.querySelector('#letterstype');
    let lettersinbox = document.querySelectorAll('#letterstype span');
    let wordarray = [];
    lettersinbox.forEach(function(letter, index) {
        wordarray.push(letter.textContent);
    });
    let wordfromarray = wordarray.join();
    const wordfromarray1 = wordfromarray.replaceAll(',', '').toLowerCase();
    //alert(wordfromarray1);
    return wordfromarray1;
}
export function validation(word, wordsarray, pangrams, userid, gamedate) {
       //alert pangrams to string
    let pangrams1 = pangrams.replaceAll(',', '');
    
       // alert(`${word} + ${wordsarray} + ${pangrams}, word and wordsarray`);
       // let wordsarray = '<%=  allmatchingwordsa %>';
       // needs wordsarray

        //IF LESS THAN 4 CHARACTERS - MESSAGE
       
        console.log(yourmatchedwords,   'yourmatchedwords');
     //   let pangrams = pagramparam;
        if(word.length < 4 ){
            //console.error(word.length, 'word length');
            return MessageM('Word too short');
        }
        //IF MORE THAN 4 CHARACTERS
        else if(word.length > 3){  
            //MAKE SURE CENTRE LETTER IS INCLUDED
            //TODO  SFKJASDF
            if(!word.includes(centerletter)) {
                console.error('missing center letter');
                return MessageM('Missing Center Letter');
            }
            //IF LETTER INCLUDED, CHECK IF WORD IS INCLUDED
            else {
                //filter the yourmatchedwords array  
                let checkifduplicate = yourmatchedwords.filter(function(element, index) {
                    return element === word;
                });
                if(checkifduplicate.length !== 0) {
                    //then it's fine , you haven't already found word                }
                    return MessageM('Already found!');
                }
                //if(yourmatchedwords.includes(word) == true) {
                else {
                //CHECK IF WORD IS IN OUR LIST 
                    
                    //IF NOT A WORD
                    console.log(wordsarray, 'wordsarray');
                    console.log(typeof wordsarray, 'typeof wordsarray');

                    let checkifvalidword = wordsarray.filter(function(element, index) {
                        return element === word;
                    });

                    if(checkifvalidword.length === 0) {
                        //console.error(checkifvalidword, 'checkifvalidword');
                        return MessageM('Not a word');
                    }
                    //IF WORD IS A WORD
                  /*   else {
                        //CHECK IF WORD IS A PANGRAM
                        
                    } */
                  /*   if(!wordsarray.includes(word)) {
                        console.log(wordsarray, 'WOOOOOOOORDSAWWAY');
                        return MessageM('Not a word');
                    } */
                    //IF IT'S IN OUR LIST, ADD IT TO ARRAY
                    else {
                        yourmatchedwords.push(word);
                        console.log(yourmatchedwords,'yourmatchedwords');

                        //ALSO SAVE TO LOCAL STORAGE AND DB
                        savetoLocalStorage(word);
                        
                        //this is wrong here               
                        const ifpangram = pangrams1.includes(word);
                        const wordpoints = setupgame(pangrams, ifpangram, word);

                   //CLEAR WORD AREA
                   let lettersinbox = document.querySelectorAll('#letterstype span');          
                            lettersinbox.forEach (function(element, index) {
                            element.remove();
                            });
                
                    newfunctionPoints(wordpoints, currentscore);
                    showinExpDivNewWord(word);
                            if(ifpangram == true) {
                            return MessageM('Pangram!', wordpoints);
                            }
                            else {
                            return MessageM('success',wordpoints);
                            }
                            
                            }


                       
                    }
                
               
                return alertmessage = '';
                }
            }
        
} 


    /**********  FUNCTIONS FOR ENTER  ***********/
//get total points all words
function maxpoints(pangrams1) {
    //create array of all words
   let totalpoints = 0;
    //count how many points for each word, add to totalpoints
    matchingwordstoarray.forEach(function(word, index) {
        let wordlength = word.length;     
        if(wordlength === 4) {
            totalpoints += 1;
        }
        else if(wordlength > 4) {
            totalpoints += wordlength;
        }
    });
    //then add THE POINTS FOR THE PANGRAMS 
   // let pangrams1 = '<%= pangrams %>';
    let pangramsarray = pangrams1.split(',');
    pangramsarray.forEach(function(pangram, index) {
        totalpoints += 7;
    });
    return totalpoints;
}

//get level based on points
function returnCurrentLevel(ourscore) {
    let currentlevelstage = 0;
    console.log(ourscore,'ourscore');
    let totalpoints = maxpoints(pangrams);
    //console.log(totalpoints,' totalpoints');
    let beginner = 0;
    let goodstart =  Math.round(totalpoints * 0.0215);
    let movingup = Math.round(totalpoints * 0.0537);
    let good = Math.round(totalpoints * 0.075);
    let solid = Math.round(totalpoints * 0.15);
    let nice = Math.round(totalpoints * 0.247);
    let great = Math.round(totalpoints * 0.397);
    let amazing = Math.round(totalpoints * 0.505);
    let genius = Math.round(totalpoints * 0.69);
    if(ourscore == 0) {
        currentpointslevel = 'Beginner';
        currentlevelshorthand = 'beginner';
        currentlevelstage = 0;
    }
   // else if(ourscore >= goodstart && ourscore < movingup) {
    else if(ourscore > 0 && ourscore < movingup) {
        currentpointslevel = 'Good start';
        currentlevelshorthand = 'goodstart';
        currentlevelstage = 1;
        //circleweneed = goodstartcircle;
    }
    else if (ourscore >= movingup && ourscore < good) {
        currentpointslevel = 'Moving Up';
        currentlevelshorthand = 'movingup';
        currentlevelstage = 2;
        // circleweneed = movingupcircle;
    }
    else if (ourscore >= good && ourscore < solid) {
        currentpointslevel = 'Good';
        currentlevelshorthand = 'good';
        currentlevelstage = 3;
        // circleweneed = goodcircle;
    }
    else if (ourscore >= solid && ourscore < nice) {
        currentpointslevel = 'Solid';
        currentlevelshorthand = 'solid';
        currentlevelstage = 4;
        // circleweneed = solidcircle;
    }
    else if (ourscore >= nice && ourscore < great) {
        currentpointslevel = 'Nice';
        currentlevelshorthand = 'nice';
        currentlevelstage = 5;
        //  circleweneed = nicecircle;
    }
    else if (ourscore >= great && ourscore < amazing) {
        currentpointslevel = 'Great';   
        currentlevelshorthand = 'great';
        currentlevelstage = 6;
        // circleweneed = greatcircle;
    }
    else if (ourscore >= amazing && ourscore < genius) {
        currentpointslevel = 'Amazing';
        currentlevelshorthand = 'amazing';
        currentlevelstage = 7;
        // circleweneed = amazingcircle;
    }
    else if (ourscore >= genius) {
        currentpointslevel = 'Genius';
        currentlevelshorthand = 'genius';
        currentlevelstage = 8;
        //   circleweneed = geniuscircle;
    }
    else if(ourscore === totalpoints) {
        alert('Queen Bee');
        currentlevelstage = 9;
        currentpointslevel = 'Queen Bee';
        currentlevelshorthand = 'queenbee';

    }
    else {
        currentpointslevel = 'Beginner';
    }
    return {currentpointslevel, currentlevelstage, currentlevelshorthand};
}

function newfunctionPoints(wordpoints, currentscore) {
   
  //  let totalpointsare = points(pangrams);
    let currentpointslevel = '';
 /*    console.log(goodstart, 'goodstartrounded');
    console.log(movingup, 'movingup'); */
    let beginnercircle = document.querySelector('#beginner');
    let goodstartcircle = document.querySelector('#goodstart');
    let movingupcircle = document.querySelector('#movingup');
    let solidcircle =  document.querySelector('#solid');
    let goodcircle = document.querySelector('#good');
    let nicecircle = document.querySelector('#nice');
    let greatcircle = document.querySelector('#great');
    let amazingcircle = document.querySelector('#amazing');
    let geniuscircle = document.querySelector('#genius');


    let circleweneed = '';
    const leveldisplay = document.querySelector('#leveldisplay');
   
    let check =  document.querySelector('#numberpoint');
    if(check)
    {
       // check.remove();
        check.innerHTML = '';
    }
    //show here our total score
    let pointstoshow = `<div id="numberpoint" class="numberpoint">${currentscore}</div>`;
    beginnercircle.classList.add('colorin');
    let circles = document.querySelectorAll('.circlecircle');
            circles.forEach(function(circle, index) {
                circle.classList.remove('circleactive');
                circle.innerHTML = '';
        }); 
        let ourcurrentlevel = returnCurrentLevel(currentscore).currentpointslevel;
        let ourcurrentlevelstage = returnCurrentLevel(currentscore).currentlevelstage;
        let currentlevelshorthand = returnCurrentLevel(currentscore).currentlevelshorthand;
        console.log(ourcurrentlevel,'ourcurrentlevel!!!!!!!!');
        if(ourcurrentlevel === 'Beginner') {
            circleweneed = goodstartcircle;
            //currentlevelstage = 0;
        }
        else if(ourcurrentlevel === 'Good start') {
            circleweneed = goodstartcircle;
            //currentlevelstage = 1;
        }
        else if(ourcurrentlevel === 'Moving Up') {
            circleweneed = movingupcircle;
           // currentlevelstage = 2;
        }
        else if(ourcurrentlevel === 'Good') {
            circleweneed = goodcircle;
           // currentlevelstage = 3;
        }
        else if(ourcurrentlevel === 'Solid') {
            circleweneed = solidcircle;
            //currentlevelstage = 4;
        }
        else if(ourcurrentlevel === 'Nice') {
            circleweneed = nicecircle;
           /// currentlevelstage = 5;
        }
        else if(ourcurrentlevel === 'Great') {
            circleweneed = greatcircle;
           // currentlevelstage = 6;
        }
        else if(ourcurrentlevel === 'Amazing') {
            circleweneed = amazingcircle;
          //  currentlevelstage = 7;
        }
        else if(ourcurrentlevel === 'Genius') {
            circleweneed = geniuscircle;
          //  currentlevelstage = 8;
        }
        else {
            alertdiv.textContent = 'You are a beginner';
        }
        let shorthandlevelsArray = ['beginner', 'goodstart', 'movingup', 'good', 'solid', 'nice', 'great', 'amazing', 'genius'];
        circleweneed.classList.add('circleactive');
        //we know current level stage
        //we want all previous level stages, to have colorin class
       // let levelsinarray = ['Beginner', 'Good start', 'Moving Up', 'Good', 'Solid', 'Nice', 'Great', 'Amazing', 'Genius'];
        //find index of current level, then for previous levels, we can try add class , for their circles
        console.log(ourcurrentlevel,'ourcurrentlevel');
        let currentlevelindex = shorthandlevelsArray.indexOf(currentlevelshorthand); //e.g. 0 for beginner, 1 for goodstart, 2 for movingup, 3 for good, 4 for solid, 5 for nice, 6 for great, 7 for amazing, 8 for genius
        console.log(currentlevelindex, 'currentlevelindex!!!!********');
        let previouslevels = shorthandlevelsArray.slice(0, currentlevelindex); //e.g. ['Beginner', 'Good start', 'Moving Up']
        console.log(previouslevels,'previouslevelspreviouslevels');
        previouslevels.forEach(function(level, index) {
            let circle = document.querySelector(`#${level}`); //e.g. goodstartcircle
            console.log(circle,'circle');
            circle.classList.add('colorin');
        });
        //get also circles for previous levels

        
        //loop for as many as current index level, then remove class colorin
        console.log(ourcurrentlevelstage,'ourcurrentlevelstageBEFORELOOP');
        let i = 0;
        for(i = 0; i < ourcurrentlevelstage; i++) {
           /*  let circle = document.querySelector(`#${shorthandlevelsArray}`);
            circle.classList.remove('colorin'); */
            //otherwise try: 
            let classhere = `circle${i}newclass`;
         
            console.log(classhere,'classhere');
            let elementwiththatclass = document.querySelector(`.${classhere}`);
            if(elementwiththatclass) {
                elementwiththatclass.classList.remove(classhere);
            }
           
        }
         let findprevious = `circle${ourcurrentlevelstage}newclass`;
         console.log(findprevious,'findprevious!');
        let findpreviousfill = document.querySelector('findprevious');
        if(findpreviousfill) {
            findpreviousfill.classList.remove('findprevious');
        };
        console.log(findpreviousfill,'findpreviousfill!!!!!!!!');
         let classtoadd = `circle${ourcurrentlevelstage}newclass`
    // circleweneed.classList.add('circle2newclass');
        console.log(classtoadd,'classtoadd');
        circleweneed.classList.add(classtoadd);
        circleweneed.classList.add('colorin');
        circleweneed.innerHTML = pointstoshow;
        
        leveldisplay.textContent = ourcurrentlevel;
            
       // console.log(ourcurrentlevelstage,'ourcurrentlevelstageafterLOOP');
}

 //show pop up message
function MessageM(message,wordpoints) {
        //grab html element div
        let pointshowdiv = document.querySelector('#pointshow');

        //PREPARE PARAMETERS TO CALL F TO GET CURRENT LEVEL
        //total points for all words
    //    let totalpointsare = points(pangrams);
        
        //add the points for current word to our total score
       // currentscore += wordpoints;
        if(wordpoints == 0) {
            currentscore = 0;
        }
       
        //get current level 
        let currentlevel = returnCurrentLevel(currentscore).currentpointslevel;
        console.log(currentlevel,'currentlevel');

        //CREATE ELEMENT TO DISPLAY MESSAGE
        let pointstoshow = '+'+wordpoints; //e.g. +5
        let pangramwhat = false;

        //whether to display LEVEL or ALERT

        //IF WORD SUCCESSFUL - DISPLAY LEVEL AND POINTS
        if(message === 'success') {
            //then display alert
            alertdiv.textContent = currentlevel;
            pointshowdiv.textContent = pointstoshow;
        }
        else if(message === 'Pangram!') {
            alertdiv.textContent = message;
            pointshowdiv.textContent = pointstoshow;
            pangramwhat = true;
            alertdiv.classList.add('pangram-alert');
           // alert('Pangram!');
        }
        else {
            //IF WORD WRONG - DISPLAY ALERT 
            alertdiv.textContent = message;
        }
 
        // e.g. 'Amazing'
        alertdiv.classList.add('alertdivshow');

         //THEN TO REMOVE ALL THESE CLASSES AND HIDE THE NOTICES AFTER 2 SECONDS
        let wait = setTimeout(() => {
             alertdiv.textContent = '';
             alertdiv.classList.remove('alertdivshow');
             pointshowdiv.textContent = '';
             let lettersinbox = document.querySelectorAll('#letterstype span');
             alertdiv.classList.remove('pangram-alert');
            if(pangramwhat === true) {
             
              
                
            }
            lettersinbox.forEach (function(element, index) {
                element.remove();
            });
        }, 1500
            )

  
}


function setupgame(pangrams, ifpangram, word) {
        //check if pangram
    let pangramsarray = pangrams.split(',');
    //let ifpangram = pangramsarray.includes(word);
    //CALCULATE POINTS AND DISPLAY
    let points = word.length; 
    let wordpoints = 0;

    if (points === 4) {
    wordpoints += 1;
    }
    else if (points > 4) {
    wordpoints += points;
    }

    if(ifpangram == true) {
    wordpoints += 7;
    
    }

    
    currentscore += wordpoints;
 //   displaywordsinExpDiv()
    return wordpoints;

}


// ===========================  LOCAL STORAGE STUFF  ================================

function savetoLocalStorage(word) {

    //IF localstorage already exists, get array, add word, and replace it
    if(localStorage.getItem('localstorageGame') !== null) {
        //get the localstorageGame object
        let localstorageGame = JSON.parse(localStorage.getItem('localstorageGame'));
        //add the new word to the array
        localstorageGame.yourmatchedwords.push(word);
        //save the new array to localstorage
        localStorage.setItem('localstorageGame', JSON.stringify(localstorageGame));
    }
    //if localstorage doesn't exist
    else {  //create it and save it                      
        let localstorageGame = {
            userid: userid,
            gamedate: gamedate,
            yourmatchedwords : yourmatchedwords
        }
        //stringify it
        let localstorageGameStringified = JSON.stringify(localstorageGame);
        localStorage.setItem('localstorageGame',localstorageGameStringified);
        
        
        console.log(localstorageGameStringified, 'localstorageGameStringified');
        //check if user is logged in 
        if(userid) {
            //then save to db with replace the whole array. 
            //if logged in do fetch post request
        
            fetch('/user/updatewords', {
                method: 'post',
            
                body: JSON.stringify({
                    userid: userid,
                    yourmatchedwords: yourmatchedwords,
                    gamedate: gamedate

                }),
                headers: {
                    //'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            .then(response => response.json())
            .then(data => {
                console.log(data, 'data');
            }
            )
            .catch(err => {
                console.log(err, 'err');
            })
        }
    }
}

export function getfromLocalStorage() {
    //if localstorage exists, get array, add word, and replace it
    if(localStorage.getItem('localstorageGame') !== null) {
        //get the localstorageGame object
     
        let localstorageGame = JSON.parse(localStorage.getItem('localstorageGame'));
        console.log(localstorageGame, 'localstorageGame !!!!!!!!!!!!!!!');
        //HERE EDIT LATER IF DATABASE IS NEWER - BUT IT SHOULDNT BE - YES IF OTHER DEVICE
        yourmatchedwords = localstorageGame.yourmatchedwords;
        //THEN DISPLAY THEM IN THE EXPANDABLE DIV
        //get parent
        let ourmatchedwordsbelow = document.querySelector('#ourmatchedwordsbelow');
      
        yourmatchedwords.sort();
        //CLEAR EXPANDABLE DIV WORDS
        ourmatchedwordsbelow.innerHTML = '';
        displaywordsinExpDiv();
    }
}

// ===========================================================================
// THIS HERE WORKS - DISPLAY ALL THE WORDS IN THE BEGINNING
function displaywordsinExpDiv() {
    let ourmatchedwordsbelow = document.querySelector('#ourmatchedwordsbelow');
    //create element
    //CLEAR EXPANDABLE DIV WORDS
    ourmatchedwordsbelow.innerHTML = '';

    yourmatchedwords.sort();
    yourmatchedwords.forEach(function(word, index) {
        includetoExpDivOpen(word);
        includetoExpDivClosed(word);
    });   
}
// ===========================================================================
// THIS FUNCTION IS CALLED AFTER USER FINDS A WORD - to add it to the EXPANDABLE DIV
function showinExpDivNewWord(word) {
    let ourmatchedwordsbelow = document.querySelector('#ourmatchedwordsbelow');
    let ourmatchedwordsdiv1 = document.querySelector('#ourmatchedwordsdiv1');
    ourmatchedwordsdiv1.innerHTML = '';
    ourmatchedwordsbelow.innerHTML = '';
    yourmatchedwords.sort();
    yourmatchedwords.forEach(function(word, index) {
        includetoExpDivOpen(word);
        includetoExpDivClosed(word);
    });   
}
 




function includetoExpDivOpen(word) { 
    //here do in closed expendable div
    let spanmake = document.createElement('span');
    spanmake.className = 'wordlistword';
    let capitalisedMatchedword = word.charAt(0).toUpperCase() + word.slice(1);         
    spanmake.textContent = capitalisedMatchedword;
    ourmatchedwordsdiv.appendChild(spanmake);

}
function includetoExpDivClosed(word) { 
    //here make in OPEN expendable div
    let capitalisedword = word.charAt(0).toUpperCase() + word.slice(1);  
    let span4div = document.createElement('div');
    span4div.className = 'yourmatchedwodsindiv';
    let spanmake4 = `<span class="yourmatchedwordsin">${capitalisedword}</span></br><hr>`;
    span4div.innerHTML = spanmake4;
    ourmatchedwordsbelow.appendChild(span4div);   
}
// ===========================================================================

//THESE FUNCTIONS ARE FOR WHEN WORD FOUND - SHOW IN EXPANDABLE DIV , both open and closed 
//THESE TWO FUNCTIONS I WILL REPLACE
        //for single word when find
    /*     function displayfoundwordinExpdivClosed(word) {
            //get parent
            //here do in closed expendable div
            let spanmake = document.createElement('span');
            spanmake.className = 'wordlistword';
            let capitalisedMatchedword = word.charAt(0).toUpperCase() + word.slice(1);         
            spanmake.textContent = capitalisedMatchedword;
            ourmatchedwordsdiv.appendChild(spanmake);

        }

        function displayfoundwordinExpdivOpen(word) {
            //now first we want to include it to the array of words in the expendable div, sort it and then display it

            
            //here make in OPEN expendable div
            let capitalisedword = word.charAt(0).toUpperCase() + word.slice(1); 
            let span4div = document.createElement('div');
            span4div.className = 'yourmatchedwodsindiv';
            let spanmake4 = `<span class="yourmatchedwordsin">${capitalisedword}</span></br><hr>`;
            span4div.innerHTML = spanmake4;
            ourmatchedwordsbelow.appendChild(span4div);   
        }
 */

// ===========================================================================



function getTotalscorefromwords(words) {
    //DO THIS LATER
}
