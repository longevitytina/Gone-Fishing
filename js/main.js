
const init = () => {
    //renders fish images
    // fishLayout()
    let score = 0
    //RENDER FISHES FROM OBJECT
    function fishLayout() {
        fishes.forEach(function (fish, idx) {
            const fishElement = document.createElement('img')
            fishElement.setAttribute('src', fish.image)
            fishElement.setAttribute('id')


        })
    }

    //TOGGLE
    setInterval(() => {
        document.querySelector('.fish1').classList.toggle('movedB')
        document.querySelector('.fish3').classList.toggle('movedUp')
    }, 1000)

    setInterval(() => {
        document.querySelector('.fish2').classList.toggle('moved')
    }, 2000)

    setInterval(() => {
        document.querySelector('.shark').classList.toggle('movedShark')
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
        image: ''
    },
    {
        fishName: '3',
        fishType: document.querySelector('.fish3'),
        score: 300,
        image: ''
    },
    {
        fishName: 'shark',
        fishType: document.querySelector('.shark'),
        score: 'DEAD',
        image: ''
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
    // let fishPoint = event.target.fishes.score
    // for (let i in fishes) {
    //     console.log(fishes[i].score)
    // }

    //if target is class fish, then assign points
    if (fish === '1') {
        console.log(`${fishes[0].score}`)
        score += fishes[0].score

    } else if (fish === '2') {
        console.log(`${fishes[1].score}`)
        score += fishes[0].score
    } else if (fish === '3') {
        console.log(`${fishes[2].score}`)
        score += fishes[0].score
    } else if (fish === '4') {
        console.log(`${fishes[3].score}`)
        score = 0
    }
    incrementScore()

}

function incrementScore() {
    document.querySelector('.score').innerHTML += score
}

//image appears onto screen intermittendly,

//darts across screen and dissappears


//arrays of possible positions
// positions = [
    // {one: x,y coordinates}
    // {two: x,y coordinates}
    // {three: x,y coordinates}
 //]

 // random number loop to select position
