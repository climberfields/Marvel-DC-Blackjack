(console.log('get after it'))

let computer = [];
let player = []; <
//<--- Create an Image--->

HTMLImageElement() {
    for (let i = 0; i < arrayOfCards.length; i++) {
        let image = document.createElement('img')
        img.src = arrayOfCards[].fileName;
        image.style.height = '120px'
        image.style.width = '100px'
        $(.player).append(image);

    }
}



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

const getRandomCard = () => arrayOfCards[Math.floor(Math.random() * arrayOfCards.length)];

const dealCards = (array) => {
    let counter = 2
    let cardsArray = []
    while (counter !== 0) {
        let randomCard = getRandomCard()
        cardsArray.push(randomCard)
        array.splice(array.indexOf(randomCard), 1)
        counter--
    }
    console.log(array)
    console.log(cardsArray)
    return cardsArray;
}
const giveCards = (array) => {
    let counter = 1
    let cardsArray = []
    while (counter !== 0) {
        let randomCard = getRandomCard()
        cardsArray.push(randomCard)
        array.splice(array.indexOf(randomCard), 1)
        counter -= 1
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
});

// <------- Hit Button -------->

$('#hit').on('click', () => {
    console.log("hit button works")
    player.concat(giveCards(arrayOfCards));
    computer.concat(giveCards(arrayOfCards));
});
// <--------- Display Cards --------->









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
