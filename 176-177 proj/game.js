let words = [
    {
        "inputs": 5,
        "category": "Sports",
        "word": "chess"
    },
    {
        "inputs": 6,
        "category": "European Country name",
        "word": "France"
       
        
    },
    {
        "inputs": 5,
        "category": "Name of a food",
        "word": "Pizza"
    }
]

$(document).ready(function () {
    fillBlanks();
})

function fillBlanks() {
var gameOver=false
//fill blanks only if the character match is found
$(".clickable").click(function(){
    var correctGuess= false;

    //get the id of the buttonn clicked
    let id =$(this).attr("id");

    //get the life
    var life=parseInt($("#life").text())

    //loop through all the letters
    for(var i=0; i< randomWord.word.length; i++){
        //check if the character matches the id of the button
          if(randomWord.word.a=charAt(i).toLowerCase()==id){
            //check if the life is still left anf black is empty/already filled
            if(life> 0 && ($(".fill_blanks").eq(i).html()=="_" || $(".fill_blanks").eq(i).html()==id)){

                //fill blanks
                $(".fill_blanks").eq(i).html(id);
                correctGuess = true;
                //check if the word guess is complete
                if($("#blanks").text()===randomWord.word.toLowerCase()){
                    $("#result").text("You Win!!")
                    correctGuess=true;
                    gameOver=true;

                }
            }
          }
    }
})
}