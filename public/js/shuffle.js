
/* SHUFFLE WORDS */
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  //  event.preventDefault();
    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
    }
document.querySelector('#shuffle').addEventListener('click', e => {
    
   
    const existingwordtoarray = existingword1.split(',');
    let newarray = shuffle(existingwordtoarray);

    let lettersinpage = document.querySelectorAll('.letterouter');
    newarray.forEach(function(letter1, index) {

        document.querySelector(`#outerletter${index}`).textContent = letter1.toUpperCase();
    });

    e.preventDefault();
})
