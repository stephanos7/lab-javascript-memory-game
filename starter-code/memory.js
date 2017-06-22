// //******************************************************************
// // Game Logic
// //******************************************************************
function MemoryGame (){
    this.selectedCards = [];
    this.pairsClicked = parseInt(document.getElementById("pairs_clicked").innerHTML);
    this.correctPairs = 0;
    this.cards = [
  		{ name: "aquaman",         img: "aquaman.jpg" },
  		{ name: "batman",          img: "batman.jpg" },
  		{ name: "captain america", img: "captain-america.jpg" },
  		{ name: "fantastic four",  img: "fantastic-four.jpg" },
  		{ name: "flash",           img: "flash.jpg" },
      { name: "green arrow",     img: "green-arrow.jpg" },
  		{ name: "green lantern",   img: "green-lantern.jpg" },
  		{ name: "ironman",         img: "ironman.jpg" },
  		{ name: "spiderman",       img: "spiderman.jpg" },
  		{ name: "superman",        img: "superman.jpg" },
  		{ name: "the avengers",    img: "the-avengers.jpg" },
  		{ name: "thor",            img: "thor.jpg" },
      { name: "aquaman",         img: "aquaman.jpg" },
  		{ name: "batman",          img: "batman.jpg" },
  		{ name: "captain america", img: "captain-america.jpg" },
      { name: "fantastic four",  img: "fantastic-four.jpg" },
  		{ name: "flash",           img: "flash.jpg" },
  		{ name: "green arrow",     img: "green-arrow.jpg" },
  		{ name: "green lantern",   img: "green-lantern.jpg" },
  		{ name: "ironman",         img: "ironman.jpg" },
  		{ name: "spiderman",       img: "spiderman.jpg" },
  		{ name: "superman",        img: "superman.jpg" },
  		{ name: "the avengers",    img: "the-avengers.jpg" },
  		{ name: "thor",            img: "thor.jpg" },
  	];
}

  //add element to the selected array
  MemoryGame.prototype.addCardToArray = function(id){
    this.selectedCards.push(id);
    console.log(this.selectedCards);
    if(this.selectedCards.length > 1){
        alert("i will compare");
        this.compareSelected(this.selectedCards[1]);
    }
}
  //increment the clicks on the status box
  MemoryGame.prototype.incrementPairsClicked = function(){
    this.pairsClicked ++;
}


  
  
  
//Shuffling the array of images
MemoryGame.prototype.shuffle =  function (card) {
  var m = this.cards.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = this.cards[m];
    this.cards[m] = this.cards[i];
    this.cards[i] = t;
  }

  return this.cards;
};


MemoryGame.prototype.compareSelected = function(word){
  if(word.valueOf() === this.selectedCards[0].valueOf()){
     alert("same!");
      return true;
  }else{
      alert("no");
      return false;
  }
}

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************


$(document).ready(function(){
    
    var memoryGame = new MemoryGame();
    var html = '';

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card actual-image" id="card_' + sanitizedName + '">';

    html += '<div class="front" ';
    html += 'style="background: url(\'img/' + pic.img + '\') no-repeat"';
    html += '    id="'       + pic.img +  '">';
    html += '</div>';
    html += '</div>';

  });
// Add all the divs to the HTML
  var board = document.getElementById('memory_board').innerHTML = html;
  var cards = document.getElementsByClassName("card");
    
//click a box
  $(cards).on('click', function (e) {
  alert(this);      
 
//restrict user from clicking the same box again
 $(this).addClass("blockClick");    

      
          //show image by changing the clicked item's class
 $(this).find(".front").css("display", "block");
//get the clicked box's id and add to array where comparison will take place
  memoryGame.addCardToArray(e.currentTarget.getAttribute("id"));
      

//restrict the user from clicking any additional boxes      
  if(memoryGame.selectedCards.length > 1){
//if so, disable further clicking  
    $(cards).addClass("blockClick");
    }
});
    

//var myCard = $(".front");
//myCard.toggleClass("blocked");
//console.log(myCard[0].getAttribute("class"));

    
});

