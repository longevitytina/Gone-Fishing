
const init = () => {
    let score = 0
    // REMOVE .gameStart node from HTML
    const gameStart = document.querySelector('.gameStart')
    gameStart.remove()


    //RENDER FISHES FROM OBJECT
    fishLayout(fishes)

    // TOGGLE
    setInterval(() => {
        let item = document.getElementById('fish1')
        let itemTwo = document.querySelector('#fish2')
        // if item is existing in DOM, then continue with toggle
        if (item) { item.classList.toggle('moved-fish1') }
        if (itemTwo) { itemTwo.classList.toggle('moved-fish2') }
    }, 1000)

    setInterval(() => {
        let item = document.querySelector('#fish3')
        if (item) { item.classList.toggle('moved') }
    }, 2000)

    setInterval(() => {
        let item = document.querySelector('#shark')
        if (item) { item.classList.toggle('movedShark') }
    }, 2000)
    //TODO make transitions, and intervals for new array
    setInterval(() => {
        let item = document.querySelector('#fish10')
        if (item) { item.classList.toggle('') }
    }, 2000)



}

// START BUTTON
document.querySelector('.btn-start').addEventListener('click', init)
let score = 0
document.querySelector('.score').innerHTML = score

//FISH
const fishes = [
    {
        fishName: 'fish1',
        score: 100,
        image: 'images/fish1.png'
    },
    {
        fishName: 'fish2',
        score: 200,
        image: 'images/fish art2.png'
    },
    {
        fishName: 'fish3',
        score: 300,
        image: 'images/fish art3.png'
    },
    {
        fishName: 'shark',
        score: 0,
        image: 'images/shark.png'
    }
]
//FISH LVL 2
const fishesTwo = [
    {
        fishName: 'fish10',
        score: 100,
        image: 'images/fish art4.png'
    },
    {
        fishName: 'fish20',
        score: 200,
        image: 'images/fish art5.png'
    },
    {
        fishName: 'fish30',
        score: 300,
        image: 'images/fish art3.png'
    },
    {
        fishName: 'shark20',
        score: 0,
        image: 'images/shark.png'
    }
]



//SHUFFLE FISH ARRAY(IN PLACE)
function shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--)
        // And swap it with the current element.
        t = array[m]
        array[m] = array[i]
        array[i] = t
    }
    return array
}



//EVENT DELEGATION
let container = document.querySelector('.container')
container.addEventListener('click', handleFish)

function handleFish(event) {
    let fish = event.target.id
    let fishSource = event.target
    console.log(fish)
    console.log('eventy', event)
    console.log(fishSource)
    // let fishPoint = event.target.fishes.score
    // for (let i in fishes) {
    //     console.log(fishes[i].score)
    // }
    if (fish) {
        //if target is class fish, then assign points
        if (fish === 'fish1') {
            console.log(`${fishes[0].score}`)
            score += fishes[0].score

        } else if (fish === 'fish2') {
            console.log(`${fishes[1].score}`)
            score += fishes[1].score
        } else if (fish === 'fish3') {
            console.log(`${fishes[2].score}`)
            score += fishes[2].score
            // } else if (fish === '3') {
            //     console.log(`${fishes[3].score}`)
            //     score += fishes[0].score
        } else if (fish === 'shark') {
            console.log(`${fishes[3].score}`)
            score = 0
            gameOver()
        }
        document.querySelector('.score').innerHTML = score
        removeFish(fishSource)
    }

    const remainingFish = document.querySelectorAll('.container img')
    if (remainingFish.length === 1) {
        fishLayout(fishesTwo)
    }

}
// RENDER FISH

function fishLayout(array) {
    array.forEach(function (fish, ) {
        let fishElement = document.createElement('img')
        fishElement.setAttribute('src', fish.image)
        fishElement.setAttribute('id', fish.fishName)
        document.querySelector('.container').appendChild(fishElement)
    })
}

// function addFishesTwo() {
//     fishesTwo.forEach(function (fish, idx) {
//         let fishElement = document.createElement('img')
//         fishElement.setAttribute('src', fish.image)
//         fishElement.setAttribute('id', idx)
//         document.querySelector('.container').appendChild(fishElement)
//     })

// }

//REMOVES CLICKED FISH FROM
function removeFish(srcElement) {
    srcElement.remove()

    //
    //everytime srcElement.remove()
    //addFishTwo()
}

// * Game Over screen = eaten
function gameOver() {
    const gameOver = document.createElement('div')
    gameOver.classList.add('gameOver')
    gameOver.innerHTML = "Game Over"

    //add 'gameover' as a child of container
    const container = document.querySelector('.container')
    container.appendChild(gameOver)
}

/**
 * Store clicked fish into empty array
 * if full then empty fishTwo array into game
 *
 * or check if fish3 is the only remaining childnode,
 * then render fishesTwo array
 *
 * replace a new fish as soon as a previous fish is removed
 */





/***
 * TODO
 * more fishes appear that are harder to click
 *  to replace original fish
 * More sharks appear
 *
 *
 *timer
clicking outside of images = lose points

 *fishes dive into water

 add more fishes to array(or have a lvl 2 array),
 distribute only some of fishes at first,
 then distribute more as game goes on?
 need to have remainder to speed up transitions
 */