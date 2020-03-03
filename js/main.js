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


//FISH
const fishes = [
    {
        fishName: 1,
        fishType: document.querySelector('.fish'),
        score: 100,
        image: 'images/fish1.png'
    },
    {
        fishType: document.querySelector('.fish2'),
        score: 200,
        image: ''
    },
    {
        fishType: document.querySelector('.fish3'),
        score: 300,
        image: ''
    },
    {
        fishType: document.querySelector('.shark'),
        score: 300,
        image: ''
    }
]

//SHUFFLE FISH ARRAY
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

fishLayout(){
    shuffle(fishes)


}

// fishes.fishType.addEventListener('click', function () {
//     console.log('clicked')
// })

// apply event delegation to container,
// .target => fish
// condition if event.target

// for (let i in fishes) {
//     console.log(fishes[i].fishType)
//     const fish = fishes[i].fishType
//     fish.addEventListener('click', function () {
//         console.log('clicked')
//     })
// }

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
    } else if (fish === '2') {
        console.log(`${fishes[1].score}`)
    } else if (fish === '3') {
        console.log(`${fishes[2].score}`)
    }
}

const init = () => {
    //
}

//image appears onto screen intermittendly,

//darts across screen and dissappears

////user clicks image only when visible

//console.log('clicked')
//recieves scores when clicked



//arrays of possible positions
// positions = [
    // {one: x,y coordinates}
    // {two: x,y coordinates}
    // {three: x,y coordinates}
 //]

 // random number loop to select position
