$(init);

var score;
var cardsInPlay;
var userChoices;
var $grid;
var $reset;
var $turns;
var $messages;

var images = [
  'card1',
  'card2',
  'card3',
  'card4',
  'card5',
  'card6',
  'card7',
  'card8',
  'card9',
  'card10'
];

function init() {
  $grid       = $('#grid');
  $reset      = $('#reset');
  $turns      = $('#turns');
  $messages   = $('#messages');

  addCardsToPage();

  $reset .on('click', resetBoard);
  $grid.on('click', 'li.card', chooseCard);
}

function addCardsToPage() {
  $grid.html('');
  score       = 0;
  cardsInPlay = shuffle(images.concat(images));
  userChoices = [];
  $turns.text(score);

  for (var j = 0; j < cardsInPlay.length; j++) {
    var liToAppend = '<li class="card" data-image="' + cardsInPlay[j] + '"></li>';
    $grid.append(liToAppend);
  }
}

function shuffle(newArray){
  var currentIndex = newArray.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = newArray[currentIndex];
    newArray[currentIndex] = newArray[randomIndex];
    newArray[randomIndex] = temporaryValue;
  }
  return newArray;
}

function chooseCard() {
  var card = $(this);

  // Push the whole card, not just the string...
  userChoices.push($(this));

  card.html('<img class="cardImage" src="images/'+card.attr('data-image')+'.jpg">');

  // Prevent that card from being clicked again
  // .off removes the eventListener
  card.off('click', chooseCard);

  // User has only chosen 1 card
  if (userChoices.length !== 2){
    // DO NOTHING
    return false;

  // User has chosen 2 cards and it's a match
  } else if (userChoices.length === 2 && checkForMatch()) {
    score++;
    $turns.text(score);
    $messages.text('Match');
    userChoices = [];

  // User has chosen 2 cards and it's not a match
  } else {
    score++;
    $turns.text(score);
    $messages.text('Try again');

    setTimeout(function(userChoices) {
      userChoices.forEach(function(card) {
        card.html('');
      });
    }, 1000, userChoices);

    userChoices = [];
  }
}

function checkForMatch() {
  return userChoices[0].attr('data-image') === userChoices[1].attr('data-image');
}

function resetBoard() {
  addCardsToPage();
}
