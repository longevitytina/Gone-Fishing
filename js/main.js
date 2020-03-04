
const init = () => {
    let score = 0
    //RENDER FISHES FROM OBJECT
    fishLayout()

    //TOGGLE
    setInterval(() => {
        //to use numbers as IDs format: '#\\3 ID'
        document.querySelector('#\\31 ').classList.toggle('movedB')
        document.querySelector('#\\30 ').classList.toggle('movedUp')
    }, 1000)

    setInterval(() => {
        document.querySelector('#\\32 ').classList.toggle('moved')
    }, 2000)

    setInterval(() => {
        document.querySelector('#\\33 ').classList.toggle('movedShark')
    }, 2000)
}

// START BUTTON
document.querySelector('.btn-start').addEventListener('click', init)
let score = 0
document.querySelector('.score').innerHTML = score

//FISH
const fishes = [
    {
        fishName: '1',
        fishType: document.querySelector('.fish'),
        score: 100,
        image: 'images/fish1.png'
    },
    {
        fishName: '2',
        fishType: document.querySelector('.fish2'),
        score: 200,
        image: 'images/fish art2.png'
    },
    {
        fishName: '3',
        fishType: document.querySelector('.fish3'),
        score: 300,
        image: 'images/fish art3.png'
    },
    {
        fishName: 'shark',
        fishType: document.querySelector('.shark'),
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
    // console.dir(event.target.dataset.id)
    // let fishPoint = event.target.fishes.score
    // for (let i in fishes) {
    //     console.log(fishes[i].score)
    // }

    //if target is class fish, then assign points
    if (fish === '0') {
        console.log(`${fishes[0].score}`)
        score += fishes[0].score
    } else if (fish === '1') {
        console.log(`${fishes[1].score}`)
        score += fishes[1].score
    } else if (fish === '2') {
        console.log(`${fishes[2].score}`)
        score += fishes[2].score
        // } else if (fish === '3') {
        //     console.log(`${fishes[3].score}`)
        //     score += fishes[0].score
    } else if (fish === '3') {
        console.log(`${fishes[3].score}`)
        score = 0
    }
    document.querySelector('.score').innerHTML = score
}

// RENDER FISH
function fishLayout() {
    fishes.forEach(function (fish, idx) {
        const fishElement = document.createElement('img')
        fishElement.setAttribute('src', fish.image)
        fishElement.setAttribute('id', idx)
        document.querySelector('.container').appendChild(fishElement)


    })
}

function clickedFish() {
    //if fish image is clicked(get attribute)
    // then remove/hide, set attribute ===none

}


/***
 * TODO
 * images disappear after clicking
 * more fishes appear that are harder to click
 *  to replace original fish
 * More sharks appear
 *
 * Game Over screen = eaten
 * game over screen = time runs out
 * Game start screen with instructions
 *
 *timer
clicking outside of images = lose points

 *fishes dive into water
 */