(console.log('get after it'))

let computer = [];
let player = [];
let S = "&#9824;";
let H = "&#9829;";
let C = "&#9827";
let D = "&#9830;";


// Card Arrays
const arrayOfCards = [
  '2S', '2H', '2C', '2D',
  '3S', '3H', '3C', '3D',
  '4S', '4H', '4C', '4D',
  '5S', '5H', '5C', '5D',
  '6S', '6H', '6C', '6D',
  '7S', '7H', '7C', '7D',
  '8S', '8H', '8C', '8D',
  '9S', '9H', '9C', '9D',
  '10S', '10H', '10C', '10D',
  'JS', 'JH', 'JC', 'JD',
  'QS', 'QH', 'QC', 'QD',
  'KS', 'KH', 'KC', 'KD',
  'AS', 'AH', 'AC', 'AD'
]
//   const arrayOfDcCards = [
//     'DC2S', 'DC2H', 'DC2C', 'DC2D',
//   'DC3S', 'DC3H', 'DC3C', 'DC3D',
//   'DC4S', 'DC4H', 'DC4C', 'DC4D',
//   'DC5S', 'DC5H', 'DC5C', 'DC5D',
//   'DC6S', 'DC6H', 'DC6C', 'DC6D',
//   'DC7S', 'DC7H', 'DC7C', 'DC7D',
//   'DC8S', 'DC8H', 'DC8C', 'DC8D',
//   'DC9S', 'DC9H', 'DC9C', 'DC9D',
//   'DC10S', 'DC10H', 'DC10C', 'DC10D',
//   'DCJS', 'DCJH', 'DCJC', 'DCJD',
//   'DCQS', 'DCQH', 'DCQC', 'DCQD',
//   'DCKS', 'DCKH', 'DCKC', 'DCKD',
//   'DCAS', 'DCAH', 'DCAC', 'DCAD'
// ]

/////<-------- Card NumValues -------> 
//const numValues = (arrayOfCards) => {
//    for (let i = 0; i < arrayOfCards.length; i++) {
//        let digit = arrayOfCards[i].split(" ");
//        digit.splice(digit.length - 1);
//        digit.join("");
//        console.log('this is numValues')
//    }
//}
//// <--------- Card Values --------->
//
//const cardValue = (numValues) => {
//    if (numValues == 'J' || numValues == 'Q' || numValues == 'K') {
//        return 10
//    } else if (value == 'A') {
//        return 11
//    } else {
//        return value;
//    }
//}
//
////<-------- Card Letters --------->
//
//const letterValues = (arrayOfCards) => {
//    for (let i = 0; i < arrayOfCards.length; i++) {
//        let letter = arrayOfCards[i].split("");
//        letter.reverse("")
//        letter.splice(letter.length - 2);
//        letter = letter.join('');
//        console.log(letter)
//    }
//
//}
////<--- Create the Card --->
//
//const HTMLImageElement = () => {
//    for (let i = 0; i < arrayOfCards.length; i++) {
//        let image = document.createElement('img')
//        image.src = numValues().concat(letterValues(arrayOfCards))
//        image.style.height = '120px'
//        image.style.width = '100px'
//        
//     $('#player').append(image);
//    $('#computer').append(image);
//
//    }
//}
imgElement = () => {
    for (let i = 0; i < arrayOfCards.length; i++) {
      let image = document.createElement('img')
      image.src = arrayOfCards[i].fileName;
      image.style.height = '120px'
      image.style.width = '100px'
      $('#player').append(image);

    }
  
}




////<--- Get Random Card ---->

const getRandomCard = () => arrayOfCards[Math.floor(Math.random() * arrayOfCards.length)];

const dealCards = (array) => {
    let counter = 1
    let cardsArray = []
    while (counter !== 0) {
        let randomCard = getRandomCard()
        cardsArray.push(randomCard)
        array.splice(array.indexOf(randomCard), 1)
        counter--
//        HTMLImageElement();
    }
    console.log(array)
    console.log(cardsArray)
    return cardsArray;
}

//<------ give Random Card for Hit function ------>
const giveCards = (array) => {
    let counter = 1
    let cardsArray = []
    while (counter !== 0) {
        let randomCard = getRandomCard()
        cardsArray.push(randomCard)
        array.splice(array.indexOf(randomCard), 1)
        counter -= 1
//        HTMLImageElement();
    }
    console.log(array)
    console.log(cardsArray)
    return cardsArray;
}
// <----- Dealer Function ----->
$('#deal').on('click', () => {
    console.log('clicked deal button')
    player.concat(dealCards(arrayOfCards));
    console.log(player)
    computer.concat(dealCards(arrayOfCards));
    console.log(computer)
    $('#computer').append(dealCards(arrayOfCards));
   $('#player').append(dealCards(arrayOfCards));

    let card1 =  $('#computer').append(dealCards(arrayOfCards));
    let card2 =  $('#player').append(dealCards(arrayOfCards))
    const compareCards = () => {
  card = card.split('');
  card.splice(card.length -1);
  card = card.join('') >  card2 = card2.split('');
  card2.splice(card2.length -1);
  card2 = card2.join('')
return card;
}
compareCards(burger)
//    $('#player').append(dealCards(arrayOfCards));
//    $('#computer').append(dealCards(arrayOfCards));
//    
    //    this.sumCards(player)
    //    this.sumCards(computer)
});

// <------- Hit Button -------->

$('#hit').on('click', () => {
    console.log("hit button works")
    player.concat(giveCards(arrayOfCards));
    computer.concat(giveCards(arrayOfCards));
      $('#player').append(giveCards(arrayOfCards));
    $('#computer').append(giveCards(arrayOfCards));
});

////<-------- Card NumValues -------> 
//
//numValues(arrayOfCards) {
//    for (let i = 0; i < arrayOfCards.length; i++) {
//    let digit = arrayOfCards[i].split(" ");
//        digit.splice(digit.length-1);
//        digit.join("");
//       
//    }
//}
//<--------- Generate Card ---------->

  playerImgElement = () => {
    for (let i = 0; i < player.dealCards.arrayOfCards.length; i++) {
      const image = document.createElement('img')
      image.src = player.dealCards.arrayOfCards[i].fileName
      image.style.height = '180px'
      image.style.width = '160px'
      image.style.padding = '10px'
      $('#player').append(image);
    }
  }

  dealerImgElement = () => {
    for (let i = 0; i < computer.dealCards.arrayOfCards.length; i++) {
      const image2 = document.createElement('img');
      image2.src = computer.dealCards.arrayOfCards[i].fileName
      image2.style.height = '180px'
      image2.style.width = '160px'
      image2.style.padding = '10px'
      $('#computer').append(image2);
    }
  }

//
//<-------- Reset Button ------->
//
//               console.log('clear button works')
// document.getElementById("#clear").reset("");





//<-------- Totals -------->

//sumCards = (hand) => {
//    let sum = 0;
//    let aces = 0;
//    for (let card of player) {
//        let value = this.cardValue();
//        if (value === 11) {
//            aces += 1
//            sum += value
//        } else {
//            sum += value
//        }
//    }
//while (aces > 0 && sum > 21) {
//    aces -= 1
//    sum -= 10
//}
//}


//<------ Win Lose or Draw --------> 

//if (sumCards(player) > 22) {
//    alert('You bust. Game Over')
//} else if (sumCards(computer) > 22) {
//    alert('Dealer Bust. You win!')
//} else if
//(sumCards(player) === 21 && sumCards(computer) !== 21) {
//    alert('You Win')
//}
//else if
//(sumCards(player) === 21 && sumCards(computer) === 21) {
//    alert('draw')
//} else {
//    alert('game on')
//}

  
  

//  <----------- Getting Cards to Be pulled -------------->

// }
// BlackJack();
// // pass in two arrays. 1 for players , other for pc
// for ( let i = 0; i < 3; i++ ) {
//    if ( PlayerNumber > ) {
//    playerScore += 1;
// }  else if (playersCardDamage < pcCardDamage) {pcScore += 1; }
//  } else if ( playerNumber === 21 ) {console.log("You win") } else if (pcCardNumber === 21 && playerNumber !== 21) {console.log("You lose")}
//  else {
//  playerScore =+1;
// pcScore += 1;
// }
