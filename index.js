// let firstcard = getRandomcard()
// let secondcard = getRandomcard()
let cards = [/*firstcard, secondcard*/]
let sum = 0
let hasblackjack = false
let isalive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let player = {
    name : "Althere" ,
    chips : 100
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " : Rs. " + player.chips

function getRandomcard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}
function startgame(){
    isalive = true
    let firstcard = getRandomcard()
    let secondcard = getRandomcard()
    cards = [firstcard, secondcard]
    sum = firstcard + secondcard
    rendergame()
}

function rendergame() {
    cardsEl.textContent = "Cards : " 
    for(let i = 0; i< cards.length;i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum : " + sum
    if (sum <= 20) {
        message = "Do you want to draw another card?"
    } else if (sum === 21){
    message = "You got Blackjack"
    hasblackjack = true
    // player.chips += 5
    } else {
        message = "You lose Try Again"
        isalive = false 
    //    player.chips -= 5
    }

    messageEl.textContent = message 
    // playerEl.textContent = player.name + " : Rs. " + player.chips
}

function newcard() {
    if (isalive === true && hasblackjack === false){
        console.log("Drawing a new card from deck")
        let card = getRandomcard()
        sum += card
        cards.push(card)
        rendergame()
    }
}


