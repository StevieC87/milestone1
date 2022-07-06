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





