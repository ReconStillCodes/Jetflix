
let container1 = document.getElementById("genre-container-1");
let container2 = document.getElementById("genre-container-2");
let container3 = document.getElementById("genre-container-3");
let container4 = document.getElementById("genre-container-4");

let action = [
    {
        title: "X-men: Days of Future Past", 
        img: "Poster/Action_X men.jpg",
        option: 0
    },
    {
        title: "John Wick: Chapter 4",
        img: "Poster/Action_John wick.jpg",
        option: 1
    },
    {
        title: "The Witcher",
        img: "Poster/Action_Witcher.jpg",
        option: 100
    },
    {
        title: "The Guardian of the Galaxy Volume 3",
        img: "Poster/Action_Guardian.jpg",
        option: 2
    },
    {
        title: "The Batman",
        img: "Poster/Action_Batman.jpg",
        option: 3
    }
]

let horror = [
    {
        title: "M3gan", 
        img: "Poster/Horror_Megan.jpg",
        option: 4
    },
    {
        title: "IT", 
        img: "Poster/Horror_It.jpg",
        option: 5
    },
    {
        title: "Prey", 
        img: "Poster/Horror_Prey.jpg",
        option: 6
    },
    {
        title: "A Quite Place Part II", 
        img: "Poster/Horror_Quite.jpg",
        option: 7
    },
    {
        title: "Nope", 
        img: "Poster/Horror_Nope.jpg",
        option: 8
    }
]

let romance = [
    {
        title: "5 Feet Apart", 
        img: "Poster/Romance_5.jpg",
        option: 9
    },
    {
        title: "Pride and Prejudice", 
        img: "Poster/Romance_Pride.jpg",
        option: 10
    },
    {
        title: "Lalaland", 
        img: "Poster/Romance_Lalaland.jpg",
        option: 11
    },
    {
        title: "Your Name", 
        img: "Poster/Romance_Your name.jpg",
        option: 12
    },
    {
        title: "Whisker Away", 
        img: "Poster/Romance_Whisker.jpg",
        option: 13
    }
]

let comedy = [
    {
        title: "Jumanji: The Next Level", 
        img: "Poster/Comedy_Jumanji.jpg",
        option: 14
    },
    {
        title: "3 Idiots", 
        img: "Poster/Comedy_3.jpg",
        option: 15
    },
    {
        title: "Kung Fu Panda 3", 
        img: "Poster/Comedy_Kungfu.jpg",
        option: 16
    },
    {
        title: "Puss in Boots: The Last Wish", 
        img: "Poster/Comedy_Puss.jpg",
        option: 17
    },
    {
        title: "Mr Bean's Holiday", 
        img: "Poster/Comedy_Bean.jpg",
        option: 18
    }

]





for(let i=0; i<action.length; i++){    
    container1.innerHTML += `
        <div class="mov">
            <img src="${action[i].img}" class="mov-pic">

            <div class="mov-border">
                <div class="mov-title-mini">${action[i].title}</div>
                <button class="mov-watch-but" onclick="choose(${action[i].option})">Watch</button>    
            </div>
        </div>
    `
}

for(let i=0; i<horror.length; i++){    
    container2.innerHTML += `
        <div class="mov">
            <img src="${horror[i].img}" class="mov-pic">

            <div class="mov-border">
                <div class="mov-title-mini">${horror[i].title}</div>
                <button class="mov-watch-but" onclick="choose(${horror[i].option})">Watch</button>    
            </div>
        </div>
      
    `
}

for(let i=0; i<romance.length; i++){    
    container3.innerHTML += `
        <div class="mov">
            <img src="${romance[i].img}" class="mov-pic">

            <div class="mov-border">
                <div class="mov-title-mini">${romance[i].title}</div>
                <button class="mov-watch-but" onclick="choose(${romance[i].option})">Watch</button>    
            </div>
        </div>
      
    `
}

for(let i=0; i<comedy.length; i++){    
    container4.innerHTML += `
        <div class="mov">
            <img src="${comedy[i].img}" class="mov-pic">

            <div class="mov-border">
                <div class="mov-title-mini">${comedy[i].title}</div>
                <button class="mov-watch-but" onclick="choose(${comedy[i].option})">Watch</button>    
            </div>
        </div>
      
    `
}


function choose(option){
    console.log(option)


    if (option == 100){
        window.open('Detail Page Show.html', '_self')
    }
    else{
        localStorage.setItem("opMov", JSON.stringify(option))
        window.open('Detail Page Mov.html', '_self')  
        // console.log(localStorage)   
    }
}