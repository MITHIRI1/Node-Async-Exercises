const BASE_URL = 'https://deckofcardsapi.com/api/deck';

// 1.

async function getSingleCard() {
  let data = await $.getJSON(`${BASE_URL}/new/draw`);
  let { suit, value } = data.cards[0];
  console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
  console.log(data);
}


// 2.

async function getCardsNewDeck() {
  let data = await $.getJSON(`${BASE_URL}/new/draw`);

  let firstCard = data.cards[0];
  let deckId = data.deck_id;

  let data2 = await $.getJSON(`${BASE_URL}/${deckId}/draw`);
  let secondCard = data2.cards[0];

  let cards = [firstCard, secondCard];
  cards.forEach(function (card) {
    console.log(`${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`);
  });
}

// 3.

async function showCards() {
  let $button = $('#new-card');
  let $cardArea = $('#card-area');

  let deck = await $.getJSON(`${BASE_URL}/new/shuffle/`);

  $button.on('click', async function () {
    let cardData = await $.getJSON(`${BASE_URL}/${deck.deck_id}/draw/`);

    let cardImgSrc = cardData.cards[0].image;


    $cardArea.append(`<img src=${cardImgSrc}>`);
  });
  if (data.remaining === 0) {
    $button.remove();
    alert('All cards drawn!');
  }
}
showCards();
