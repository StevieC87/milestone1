function onclick(matchingwords,wordsarray,centerletter ) {
    let matchingwordstoarray = matchingwords.split(',');

}
    
//**********  CLICK ON ENTER **********
/* export function alertme() {
    alert('123123');
}
 */
//**********  EVENT LISTENER ENTER ********** 
/* document.querySelector('#enterb').addEventListener('click', e => {
    e.preventDefault(); */

    // needs wordsarray
//check if word is valid
export function makestringfromletters() {
    /*     
    let lettersboxis =  document.querySelector('#letterstype');
    let lettersinbox = document.querySelectorAll('#letterstype span');
    let wordarray = [];
    lettersinbox.forEach(function(letter, index) {
        wordarray.push(letter.textContent);
    });
    let wordfromarray = wordarray.join();
    const wordfromarray1 = wordfromarray.replaceAll(',', '').toLowerCase(); */
    alert(wordfromarray1);
    return wordfromarray1;
}
export function validation(word, wordsarray) {
        alert(`${word} + ${wordsarray}, word and wordsarray`);
       // let wordsarray = '<%=  allmatchingwordsa %>';
       // needs wordsarray

        //IF LESS THAN 4 CHARACTERS - MESSAGE
        if(word.length < 4 ){
            console.error(word.length, 'word length');
            return MessageM('Word too short');
        }
        //IF MORE THAN 4 CHARACTERS
        else if(word.length > 3){  
            //MAKE SURE CENTRE LETTER IS INCLUDED
            if(!word.includes(centerletter)) {
                console.error('missing center letter');
                return MessageM('Missing Center Letter');
            }
            //IF LETTER INCLUDED, CHECK IF WORD IS INCLUDED
            else {
                //CHECK YOU HAVEN'T FOUND WORD ALREADY
                if(yourmatchedwords.includes(word) == true) {
                return MessageM('Already found!');
                }
                else {
                //CHECK IF WORD IS IN OUR LIST 
                    
                    //IF NOT A WORD
                    if(!wordsarray.includes(word)) {
                        console.log(wordsarray, 'WOOOOOOOORDSAWWAY');
                        return MessageM('Not a word');
                    }
                    //IF IT'S IN OUR LIST, ADD IT TO ARRAY
                    else {
                        yourmatchedwords.push(word);
                       
                        //check if pangram
                        let pangrams = '<%= pangrams %>';
                        let pangramsarray = pangrams.split(',');
                        let ifpangram = pangramsarray.includes(word);

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
                        //SHOW WORD INSIDE EXPANDABLE DIV 
                        //get parent
                        let ourmatchedwordsbelow = document.querySelector('#ourmatchedwordsbelow');
                        //create element
                        let spanmake = document.createElement('span');
                        spanmake.className = 'wordlistword';
                        let capitalisedMatchedword = word.charAt(0).toUpperCase() + word.slice(1);         
                        spanmake.textContent = capitalisedMatchedword;
                        yourmatchedwords.sort();

                        //CLEAR EXPANDABLE DIV WORDS
                        ourmatchedwordsbelow.innerHTML = '';

                        //our array of all matched words
                      //  wordsarraytoarray.sort();
                       // console.log(wordsarraytoarray,'matchingwords');
                      //  wordsarraytoarray.forEach(function(element, index) {
                        //OUR ARRAY OF MATCHED WORDS - LOOP AND APPEND
                      yourmatchedwords.forEach(function(element, index) {
                        let capitalisedword = element.charAt(0).toUpperCase() + element.slice(1);   
                        let span4div = document.createElement('div');
                        span4div.className = 'yourmatchedwodsindiv';
                        let spanmake4 = `<span class="yourmatchedwordsin">${capitalisedword}</span></br><hr>`;
                        span4div.innerHTML = spanmake4;
                        ourmatchedwordsbelow.appendChild(span4div);   
                        });

                        
                   //     ourmatchedwordsbelow.appendChild(spanmake3div);
                        ourmatchedwordsdiv.appendChild(spanmake);
                    
                   //CLEAR WORD AREA
                   let lettersinbox = document.querySelectorAll('#letterstype span');          
                            lettersinbox.forEach (function(element, index) {
                            element.remove();
                            });
                    //IF PANGRAM 
                        if(ifpangram == true) {
                            //create span to display word on page
                            newfunctionPoints(wordpoints, currentscore);
                            return MessageM('Pangram!', wordpoints);
                        }
                    //ELSE IF NORMAL WORD MATCHED
                        else {
                           //create span to display word on page
                            newfunctionPoints(wordpoints, currentscore);
                            return MessageM('success',wordpoints);

                            }


                       
                    }
                
               
                return alertmessage = '';
                }
            }
        
    } 
    }

    
   
    //MAKE A STRING OF WORD, FROM SELECTED LETTERS e.g. 'basket'


    //let ifincludes = wordsarray.includes(wordfromarray1);
 //   let message = '';

   //call validation on word - to see if it's a word
  //  validation(wordfromarray1, wordsarray);
  /*   if(validation(wordfromarray1) !== ''){
     //   alert(alertmessage);
    } */

    //DISPLAY A MESSAGE e.g. 'nice +5'
    //ALSO WE NEED TO SHOW POINTS AT THE TOP 
 
    

//})
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

/**********  FUNCTIONS FOR ENTER  ***********/
//get total points all words
const points = () => {
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
    let pangrams1 = '<%= pangrams %>';
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
    let totalpoints = points();
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
   
    let totalpointsare = points();
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


        //class to add 
        //for loop with ++i
        //loop for as many as current index level, then remove class colorin
        console.log(ourcurrentlevelstage,'ourcurrentlevelstageBEFORELOOP');
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
        let totalpointsare = points();
        
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
         
            lettersinbox.forEach (function(element, index) {
                element.remove();
            });
        }, 1500);
  
    }





