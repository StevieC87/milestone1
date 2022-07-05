
//POINT CIRCLES RELATED
let currentlevel = 'beginner';
let beginnercircle = document.querySelector('#beginner');
beginnercircle.classList.add('circleactive');
let numberhtmlelement = '<div class="numberpoint">0</div>';
document.querySelector('#beginner').innerHTML = numberhtmlelement;


//Calculate and return TOTAL POINTS FOR ALL WORDS
const points = () => {
    //create array of all words
    let matchingwords = '<%=  allmatchingwordsa %>';
    let matchingwordstoarray = matchingwords.split(',');
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




//FUNCTION FOR POINT CIRCLE
function gamelevel(totalpoints, ourscore) {
    //THEN CALCULATE HOW MANY POINTS FOR EACH LEVEL YOU NEED
    let beginner = 0;
    let goodstart =  Math.round(totalpoints * 0.0215);
    let movingup = Math.round(totalpoints * 0.0537);
    let good = Math.round(totalpoints * 0.075);
    let solid = Math.round(totalpoints * 0.15);
    let nice = Math.round(totalpoints * 0.247);
    let great = Math.round(totalpoints * 0.397);
    let amazing = Math.round(totalpoints * 0.505);
    let genius = Math.round(totalpoints * 0.69);
    //let goodstartrounded = Math.round(goodstart);

    let currentpointslevel = '';
    console.log(goodstart, 'goodstartrounded');
    console.log(movingup, 'movingup');
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
    let pointstoshow = `<div class="numberpoint">${ourscore}</div>`;
    beginnercircle.classList.add('colorin');
    //otherwise DO A FOR EACH, STRIP THEM OF THEIR CLASSES MAYBE

    //this is inside another function here
    function testmethis() {
        let circles = document.querySelectorAll('.circlecircle');
            circles.forEach(function(circle, index) {
                circle.classList.remove('circleactive');
                circle.innerHTML = '';
        }); 
        if(ourscore >= goodstart && ourscore < movingup) {
            currentpointslevel = 'Good start';
            currentlevelstage = 1;
            circleweneed = goodstartcircle;
        }
        else if (ourscore >= movingup && ourscore < good) {
            currentpointslevel = 'Moving Up';
            currentlevelstage = 2;
            circleweneed = movingupcircle;
        }
        else if (ourscore >= good && ourscore < solid) {
            currentpointslevel = 'Good';
            currentlevelstage = 3;
            circleweneed = goodcircle;
        }
        else if (ourscore >= solid && ourscore < nice) {
            currentpointslevel = 'Solid';
            currentlevelstage = 4;
            circleweneed = solidcircle;
        }
        else if (ourscore >= nice && ourscore < great) {
            currentpointslevel = 'Nice';
            currentlevelstage = 5;
            circleweneed = nicecircle;
        }
        else if (ourscore >= great && ourscore < amazing) {
            currentpointslevel = 'Great';
            currentlevelstage = 6;
            circleweneed = greatcircle;
        }
        else if (ourscore >= amazing && ourscore < genius) {
            currentpointslevel = 'Amazing';
            currentlevelstage = 7;
            circleweneed = amazingcircle;
        }
        else if (ourscore >= genius) {
            currentpointslevel = 'Genius';
            currentlevelstage = 8;
            circleweneed = geniuscircle;
        }
        else if(ourscore === totalpoints) {
            alert('queen bee');

        }


        circleweneed.classList.add('circleactive');
        //class to add 
        let classtoadd = `circle${currentlevelstage+1}newclass`
    // circleweneed.classList.add('circle2newclass');
    console.log(classtoadd,'classtoadd');
        circleweneed.classList.add(classtoadd);
        circleweneed.classList.add('colorin');
        circleweneed.innerHTML = pointstoshow;
        
        leveldisplay.textContent = currentpointslevel;
    
    }
    testmethis();
  
   
}
let centerletteris = '<%=centerletter%>';
document.addEventListener('click', e => {
        console.log(e, 'event');
        console.log(e.target.tagName, 'e.target.tagName');
        console.log(e.target.id, 'e.target.id');
        let clicktag = e.target.tagName;
        let clickclass = e.target.classList;
        let clickid = e.target.id; 
        let getnumberindex = clickid[clickid.length -1]
       //this is also the array index
        //now if we click on polygon
        let clickidconcat = '#' + clickid;
      //   if(clicktag == 'polygon' || clicktag == 'TEXT'){
        if(clicktag == 'polygon' || clickclass.contains('letter')){
                console.log('clicked', clicktag);
       
           let effecttarget =  document.querySelector(`#p${getnumberindex}`);

            let newnumberonly = clickid.charAt(clickid.length-1);
            effecttarget.classList.add('animate');
            let wait = setTimeout(() => {
                effecttarget.classList.remove('animate');
            }, 300);   
          
           let letterindex = `outerletter${newnumberonly}`;
           let letterindextexttag = document.querySelector(`#${letterindex}`);
           let leterindextexttagLetter = letterindextexttag.textContent;
         
        let targetbox = document.querySelector('#letterstype');
  //      let targetboxAddletter = targetbox.textContent = leterindextexttagLetter;
    //    let targetboxtext = targetbox.textContent;

            let spanmake = document.createElement('span');
            spanmake.textContent = leterindextexttagLetter;
            let parent = targetbox;
            let contents = targetbox.childNodes;
            let contentslength = targetbox.childNodes.length;
            let findcontents = contents.forEach(function(element, index) {
                console.log(element, index, 'element', 'index');
            });
            console.log(contents, 'contents');
            console.log(centerletteris,'centerletteris');
            console.log(leterindextexttagLetter, 'leterindextexttagLetter');
            if(leterindextexttagLetter === centerletteris.toUpperCase()){
                alert(leterindextexttagLetter);
                spanmake.className = 'orange';
            }
           
       //     console.log(targetbox.innerHTML,'targetbox.innerHTML');
            //console.log(targetbox.innerHTML.tagName,'tagName');
          
            else {
                spanmake.className = 'blue';
            }
            const pointerline = document.querySelector('#pointerline');
          pointerline.before(spanmake);
        //   parent.appendChild(spanmake);

    //    document.querySelector('#outerletter'+newnumberonly).classList.add('animate');
//works   document.querySelector('#outerletter'+newnumberonly).classList.add('clicktransformtest');
            //now we need to get the letter from the array
        } //  document.querySelector
    })

document.querySelector('#deleteb').addEventListener('click', e => {
        event.preventDefault();
        let lettersboxis =  document.querySelector('#letterstype');
       //we want to delete last span which is letter
       //we might have last span always defa
        //grab all 
        let lettersinbox = document.querySelectorAll('#letterstype span');

        lettersinbox[lettersinbox.length-1].remove();
        
        
        
       let wordfromarray = newarray1.join();
       const wordfromarray1 = wordfromarray.replaceAll(',', '');

       // lettersboxis.prepend

        console.log(newarray1, 'newarray1');
        console.log(wordfromarray1, 'wordfromarray');
        //let lettersinboxlength = lettersinbox.length;

    }
    )
    
let yourmatchedwords = [];
let ourmatchedwordsdiv = document.querySelector('#ourmatchedwordsdiv1');

let lettersinbox = document.querySelectorAll('#letterstype span');
let alertdiv = document.querySelector('#alertdiv');
let alertmessage = '';
let centerletter = '<%= centerletter %>';




//EVENT LISTENER FOR PRESS 'ENTER' , 
document.querySelector('#enterb').addEventListener('click', e => {
    event.preventDefault();
    
    //MAKE A STRING OF WORD, FROM SELECTED LETTERS 
    let lettersboxis =  document.querySelector('#letterstype');
    let lettersinbox = document.querySelectorAll('#letterstype span');
    let wordarray = [];
    lettersinbox.forEach(function(letter, index) {
        wordarray.push(letter.textContent);
    });
    let wordfromarray = wordarray.join();
    const wordfromarray1 = wordfromarray.replaceAll(',', '').toLowerCase();
   
    //CHECK IF WORD IS A MATCH
    let wordsarray = '<%=  allmatchingwordsa %>';
    let ifincludes = wordsarray.includes(wordfromarray1);
    let message = '';

    
/* function test1 () {

 */
    // METHOD THAT DISPLAYS MESSAGE ON THE SPELLIGN BEE e.g. 'word already found'
    function MessageM(message, wordpoints) {
        let pointshowdiv = document.querySelector('#pointshow');
        let pointstoshow = '+'+wordpoints;
        pointshowdiv.textContent = pointstoshow;
        alertdiv.textContent = message;
        alertdiv.classList.add('alertdivshow');

        currentscore += wordpoints;
        
        //show current score in the points div

        //but ALSO GET THE LEVEL FROM THE CURRENT SCORE
        //current level
        let totalpointsare = points();
        console.log(totalpointsare,'totalpointsare');
       let currentlevel = gamelevel(totalpointsare, currentscore);
      //   let currentlevel = gamelevel(totalpointsare, 125);
        console.log(currentlevel, 'currentlevel');


        /* TRYING HERE TO ADD THE WORD INSIDE THE 
        YOUR MATCHED WORD LIST */
        





        let wait = setTimeout(() => {
            debugger
        //    alertdiv.classList.remove('alertdivshow');
         //   alertdiv.classList.toggle('d-none');
     //       alertdiv.classList.add('alertdivshow');
            alertdiv.textContent = '';
            lettersinbox.forEach (function(element, index) {
            element.remove();
        });
        }, 2000);
    }
    
    //VALIDATION FOR WORD TO SEE IF IT'S A VALID WORD
    const validation = () => {
        //IF LESS THAN 4 CHARACTERS - MESSAGE
        if(wordfromarray1.length < 4 ){
            console.error(wordfromarray1.length, 'word length');
            return MessageM('Word too short');
        }
        //IF MORE THAN 4 CHARACTERS
        else if(wordfromarray1.length > 3){  
            //MAKE SURE CENTRE LETTER IS INCLUDED
            if(!wordfromarray1.includes(centerletter)) {
                console.error('missing center letter');
                return MessageM('Missing Center Letter');
            }
            //IF LETTER INCLUDED, CHECK IF WORD IS INCLUDED
            else {
                //CHECK YOU HAVEN'T FOUND WORD ALREADY
                if(yourmatchedwords.includes(wordfromarray1) == true) {
                return MessageM('Already found!');
                }
                else {
                //CHECK IF WORD IS IN OUR LIST 
                    //if not in word list
                    if(!wordsarray.includes(wordfromarray1)) {
                        return MessageM('Not a word');
                    }
                    //IF IT'S IN OUR LIST, ADD IT TO ARRAY
                    else {
                       // console.log('word found');
                        yourmatchedwords.push(wordfromarray1);
                       
                        //check if pangram
                        let pangrams = '<%= pangrams %>';
                        let pangramsarray = pangrams.split(',');
                        let ifpangram = pangramsarray.includes(wordfromarray1);

                     //   console.log(pangrams,'pangrams!!!!!!');

                        //CALCULATE POINTS AND DISPLAY
                        let points = wordfromarray1.length; 
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

                     //   console.log(wordpoints, 'wordpoints');

                       // var sentence = "Mr. glue has a blue shouse";
                      //  var regularExpression = /\bblue\b/g;
                 /*      let  regularExpression = `/\b${wordfromarray1}\b/g`;
                  //      var output = regularExpression.test(sentence);
                       // let centreletter = `[${centerletter}]`;
                        const regexCentreLetter = new RegExp(`${regularExpression}`, 'g');
                        let testregexpcenter = regexCentreLetter.test(pangrams);
                       alert(testregexpcenter,'testregexpcenter')


                        let pagrammatch = pangrams.includes(wordfromarray1); */

                        //CREATE WORD TO ADD TO OUR LIST OF MATCHED WORDS
                        let ourmatchedwordsbelow = document.querySelector('#ourmatchedwordsbelow');

                        let spanmake = document.createElement('span');
                        spanmake.className = 'wordlistword';
                        let capitalisedMatchedword = wordfromarray1.charAt(0).toUpperCase() + wordfromarray1.slice(1);         
                      

                       spanmake.textContent = capitalisedMatchedword;

                   /*     let spanmake3div = document.createElement('div');
                       spanmake3div.className = 'yourmatchedwodsindiv';
                       let spanmake3 = `<span class="yourmatchedwordsin">${capitalisedMatchedword}</span>
                       </br>
                       <hr>`;  
                        spanmake3div.innerHTML = spanmake3;
 */
                      /*  let spanmake2 = document.createElement('span');
                          spanmake2.className = 'wordlistword';
                          spanmake2.textContent = capitalisedMatchedword; */
                     
                          yourmatchedwords.sort();
                          ourmatchedwordsbelow.innerHTML = '';
                       yourmatchedwords.forEach(function(element, index) {

                            let capitalisedword = element.charAt(0).toUpperCase() + element.slice(1);   

                             let span4div = document.createElement('div');
                           span4div.className = 'yourmatchedwodsindiv';

                            let spanmake4 = `<span class="yourmatchedwordsin">${capitalisedword}</span>
                            </br>
                            <hr>`;
                            span4div.innerHTML = spanmake4;
                         
                            ourmatchedwordsbelow.appendChild(span4div);
                          //  alert('word');
                            
                        });

                        
                   //     ourmatchedwordsbelow.appendChild(spanmake3div);
                        ourmatchedwordsdiv.appendChild(spanmake);
                     
                   
                   //OTHER WAY
                                       
                            lettersinbox.forEach (function(element, index) {
                            element.remove();
                            });
                        if(ifpangram == true) {
                            //create span to display word on page
                           
                            return MessageM('Pangram!', wordpoints);
                        }
                        else {
                           //create span to display word on page
                        

                            return MessageM('Nice!', wordpoints);

                            }


                       
                    }
                
                //can create inside div a list, and append each
                //or can do for each, everytime udpda
             //   let arraytowords = yourmatchedwords.forEach(function(element, index) {
                
                //then clear board
                
              //  });
                return alertmessage = '';
                }
            }
            //else if includes center letter




    } 
    }

   //validation();
    if(validation() !== ''){
     //   alert(alertmessage);
    }

})


