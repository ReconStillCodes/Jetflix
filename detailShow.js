let container = document.getElementById("episodes-container")
let season1 = document.getElementById("season1")
let season2 = document.getElementById("season2")
let vid = document.getElementById("e-mov")

// print(0, 3)

function season(season){
    if (season == 1){
        season2.style.backgroundColor="rgb(18, 17, 17)"
        season1.style.backgroundColor="rgb(232, 58, 58)"
        print(0, 3)

    }
    else if (season == 2){
        season1.style.backgroundColor="rgb(18, 17, 17)"
        season2.style.backgroundColor="rgb(232, 58, 58)"
        print(3, 6)
    }
}

let episodes = [
    {
        title: "The End's Beginning",
        img: "Show/s1_e1.jpg",
        movie:"Show/Mov_s1_e1.mp4",
        num: 1,
        option: 0,
        sypnosis: "The townspeople of Blaviken were surprised to be visited by a Witcher, carrying a monster head. The witcher was there to collect a reward for slaying a monster but took a turn when a wizard wants to hire him."
    },
    {
        title: "Four Marks",
        img: "Show/s1_e2.jpg",
        movie:"Show/Mov_s1_e2.mp4",
        num: 2,
        option: 1,
        sypnosis: "A deformed woman known as Yenefer was sold by her father because of her uselessness. However, the person who bought her is a sorcerer tha saw her potential as her deciple."
    },
    {
        title: "Betrayer Moon",
        img: "Show/s1_e3.jpg",
        movie:"Show/Mov_s1_e3.mp4",
        num: 3,
        option: 2,
        sypnosis: "Geralt found himself to be hunting a dangerous beast called Striga. Turns out this Striga is a daughter of King Foltest, born out of incest and curse by jealousy. Will the witcher succeed in saving the princess, or slay her? Or perhaps she will slay him."
    },
    {
        title: "A Grain of Truth",
        img: "Show/s2_e1.jpg",
        movie:"Show/Mov_s2_e1.mp4",
        num: 1,
        option: 3,
        sypnosis: "Geralt and Ciri set off on their Journey and visit his friend in Sodden to take shelter from a mysterious monster. His friend is a cursed beast that can control his entire mansion but hides a disturbing truth."
    },
    {
        title: "Kaer Morhen",
        img: "Show/s2_e2.jpg",
        movie:"Show/Mov_s2_e2.mp4",
        num: 2,
        option: 4,
        sypnosis: "Geralt and Ciri finally arrived in Kaer Morhen, the fortress of all School of Wolf Witchers. But dangers lurk everywhere, even in their home."
    },
    {
        title: "What is Lost",
        img: "Show/s2_e3.jpg",
        movie:"Show/Mov_s2_e3.mp4",
        num: 3,
        option: 5,
        sypnosis: "Ciri's journey in becoming a disciple of a witcher continues as she kept practicing the art of monster killing. It could prove to be too difficult for her as she doesn't have mutant blood."
    }
]

for(let i=0; i<3; i++){
    // console.log("test");
    container.innerHTML += `
        <div class="e-container">
        <div class="e-pic-container">
            <img src="${episodes[i].img}" class="e-pic">
            <div class="e-shadow">
                <button class="e-play" onclick="playVid(${episodes[i].option})">Play</button>
            </div>
        </div>

        <div class="e-des">
            <div class="e-num">Episode ${episodes[i].num}</div>
            <div class="e-title">${episodes[i].title}</div>
            <div class="e-syp">
                ${episodes[i].sypnosis}
            </div>
        </div>
    </div>

`  
}  

function print(start, end){
    container.innerHTML = ""

    for(let i=start; i<end; i++){
        // console.log(i);
        container.innerHTML += `
            <div class="e-container">
                <div class="e-pic-container">
                    <img src="${episodes[i].img}" class="e-pic">
                    <div class="e-shadow">
                        <button class="e-play" onclick="playVid(${episodes[i].option})">Play</button>
                    </div>
                </div>

                <div class="e-des">
                    <div class="e-num">Episode ${episodes[i].num}</div>
                    <div class="e-title">${episodes[i].title}</div>
                    <div class="e-syp">
                        ${episodes[i].sypnosis}
                    </div>
                </div>
            </div>

        `   
    }  
}

let eMovie = document.getElementById("e-e-mov")

function playVid(x){
    vid.innerHTML = `
        <video class="mov-main" id="mov-main" controls>
            <source src="${episodes[x].movie}" id="e-e-mov"> 
        <video>
    `

    vid.style.display = "flex"
}


function overlayClose(){
    vid.style.display = "none";

}



// Others =============

let otherContainer = document.getElementById("other-container")

let other = [
    {
        title: "X-men: Days of Future Past", 
        option: 0,
        img: "Poster/Action_X men.jpg"
    },
    {
        title: "John Wick: Chapter 4", 
        option: 1,
        img: "Poster/Action_John wick.jpg"
    },
    {
        title: "Guardian of the Galaxy Volume 3", 
        option: 2,
        img: "Poster/Action_Guardian.jpg"
    },
    {
        title: "The Batman",
        option: 3,
        img: "Poster/Action_Batman.jpg"
    }
]

for(let i =0; i<other.length; i++){
    otherContainer.innerHTML += `
        <div class="mov-pc" >
            <img src="${other[i].img}" class="mov-mov-pic">
            <div class="shadow-other">
                <div class="mini-title">${other[i].title}</div>
                <button class="play-but-mov" onclick="send(${other[i].option})">Watch</button>
            </div>
            
        </div>   
    `

}

function send(option){
    localStorage.setItem("opMov", JSON.stringify(option))
    window.open('Detail Page Mov.html', '_self')  
}


