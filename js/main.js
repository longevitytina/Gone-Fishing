



const init = (event) => {
    event.stopPropagation()
    // let score = 0
    // REMOVE .gameStart node from HTML
    const gameStart = document.querySelector('.gameStart')
    gameStart.classList.toggle('hidden')


    let container = document.querySelector('.container')
    container.addEventListener('click', handleFish)

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
        if (item) { item.classList.toggle('moved-fish10') }
    }, 2000)
    setInterval(() => {
        let item = document.querySelector('#fish20')
        if (item) { item.classList.toggle('moved-fish20') }
    }, 1000)
    setInterval(() => {
        let item = document.querySelector('#fish30')
        if (item) { item.classList.toggle('moved-fish30') }
    }, 2000)
    setInterval(() => {
        let item = document.querySelector('#shark20')
        if (item) { item.classList.toggle('movedShark-20') }
    }, 500)
    setInterval(() => {
        let item = document.querySelector('#shark30')
        if (item) { item.classList.toggle('movedShark-30') }
    }, 6000)
    setInterval(() => {
        let item = document.querySelector('#swim')
        if (item) { item.classList.toggle('moved-swim') }
    }, 5000)


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
        fishName: 'swim',
        score: 100,
        image: 'images/swim.png'
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
    },
    {
        fishName: 'shark30',
        score: 0,
        image: 'images/shark30.png'
    }
]

//EVENT DELEGATION
function handleFish(event) {
    let fish = event.target.id
    let fishSource = event.target
    console.log(fish)
    console.log('eventy', event)
    console.log(fishSource)

    if (fish) {
        //if target is class fish, then assign points
        if (fish === 'fish1' || fish === 'fish10') {
            console.log(`${fishes[0].score}`)
            score += fishes[0].score

        } else if (fish === 'fish2' || fish === 'fish20') {
            console.log(`${fishes[1].score}`)
            score += fishes[1].score
        } else if (fish === 'fish3' || fish === 'fish30') {
            console.log(`${fishes[2].score}`)
            score += fishes[2].score
        } else if (fish === 'shark' || fish === 'shark20' || fish === 'shark30') {
            console.log(`${fishes[3].score}`)
            score = 0
        }
        document.querySelector('.score').innerHTML = score
        removeFish(fishSource)
    } else { //IF CLICKED NOT ON FISH
        score -= 10
        document.querySelector('.score').innerHTML = score

    }

    const remainingFish = document.querySelectorAll('.container img')
    if (remainingFish.length === 1) {
        for (let i = 0; i < remainingFish.length; i++) {
            const fish = remainingFish[i]
            fish.remove()
        }
        fishLayout(fishesTwo)
    }
    if (score <= 0) {
        gameOver()

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

//REMOVES CLICKED FISH FROM
function removeFish(srcElement) {
    srcElement.remove()

}

// * Game Over screen = eaten
function gameOver() {


    const gameOver = document.createElement('div')
    gameOver.classList.add('gameOver')
    gameOver.innerHTML = "Game Over"

    //add 'gameover' as a child of container
    const container = document.querySelector('.container')
    container.appendChild(gameOver)
    const images = document.querySelectorAll('img')

    //remove all children of container
    for (let i = 0; i < images.length; i++) {
        images[i].remove()
    }
    container.removeEventListener('click', handleFish)
    //add restart button
    const restart = document.createElement('button')
    restart.setAttribute('id', 'btn-reset')
    restart.innerHTML = 'Restart?'
    gameOver.appendChild(restart)
    restart.addEventListener('click', reset)
}

const reset = () => {
    // const container = document.querySelector('.container')
    // const gameOver = document.querySelector('.gameOver')
    // container.removeChild(gameOver)

    //TODO fix reset button
    // const gameStart = document.querySelector('.gameStart')
    // gameStart.classList.toggle('hidden')
    // init()

    // document.querySelector('.score').innerHTML = score
}

/**

 * TODO
//if score goes below 0points gameover
 *timer

 *fishes dive into water

 */