let container = document.getElementById("trending-container")

let trending =[
    {
        title: "X-men: Days of Future Past",
        option: 0,
        movie: "Clip/Action_X men.mp4",
        img: "Poster/Action_X men.jpg",
        year: 2014,
        rating: "7.9/10",
        director: "Bryan Singer",
        genre: "Action, Adventure, Sci-Fi",
        cast: "Patrick Stewart, Ian McKellen, Hugh Jackman, Michael Fassbender, James McAvoy",
        sypnosis: "In the distance future, mutants are hunted down by Sentinels that has the ability to shape-shift. Wolverine must travels back in time by changing the past. He must stop Mystique assassinating Bolivar Trask, whose death leads to her capture and the creation of Sentinels."
    },
    {
        title: "Puss in Boots: The Last Wish", 
        option: 17,
        movie: "Clip/Comedy_Puss.mp4",
        img: "Poster/Comedy_Puss.jpg",
        year: 2022,
        rating: "7.9/10",
        genre: "Animation, Adventure, Comedy",
        director: "Joel Crawford, Januel Mercado",
        cast: "Antonio Banderas, Florence Pugh, Salma Hayek, John Mulaney, Wagner Moura, Olivia Colman, Samson Kayo, Ray Winstone",
        sypnosis: "Puss in Boots discovered that he has only one life left. Other than that, a bounty hunter is chasing after him. He must find a mystical last wish in order to survive, but he isn’t the only one that wants that wish."
    },
    {
        title: "M3GAN", 
        option: 4,
        movie: "Clip/Horror_Megan.mp4",
        img: "Poster/Horror_Megan.jpg",
        year: 2022,
        rating: "6.4/10",
        genre: "Horror, Sci-Fi, Thriller",
        director: "Gerard Johnstone",
        cast: "Allison Williams, Ronny Chieng, Amie Donald, Violet McGraw, Jenna Davis",
        sypnosis: "M3gan is a lifelike doll that are programmed to be a child’s friend. Gemma, who is one of M3gan’s creator, unexpectedly have to take care of her 8 year old niece. In order to accompany her, Gemma gives her M3gan which leads to unimaginable consequences."
    },
    {
        title: "John Wick: Chapter 4", 
        option: 1,
        movie: "Clip/Action_John wick.mp4",
        img: "Poster/Action_John wick.jpg",
        year: 2023,
        rating: "8.0/10",
        genre: "Action, Crime, Thriller",
        director: "Chad Stahelski",
        cast: "Keanu Reeves, Laurence Fishburne, Ian McShane, Donnie Yen, George Georginu",
        sypnosis: "The High Table still hunting John Wick down. However he has uncovered away to gain his freedom back. But before gaining his freedom, he must fight new powerful foes, and even an old friend."
    },
    {
        title: "Your Name", 
        option: 12,
        movie: "Clip/Romance_Your name.mp4",
        img: "Poster/Romance_Your name.jpg",
        year: 2016,
        rating: "8.4/10",
        genre: "Animation, Drama, Fantansy, Romance",
        director: "Makoto Shinkai",
        cast: "Ryunosuke Kamiki, Mone Kamishiraishi, Ryo Narita, Aoi Yûki, Nobunaga Shimazaki",
        sypnosis: "Taki Tachibana and Mitsuha Miyamizu are two teenagers in Japan that suddenly swap bodies every day. They can only communicate by leaving a message when they swap. This mysterious phenomena leads to very interesting and complicated situation."
    },
    
]

for(let i =0; i<trending.length; i++){
    container.innerHTML += `

    <div class="trending-container" >

        <div class="mov-t-container">
            <div class="mov-t">
                <img src="${trending[i].img}" class="mov-t-pic">
                <div class="mov-t-num">Top ${i+1}</div>
            </div>
            <div class="but-t-container">
                <button class="but-t" onclick = "playVid(${i})">Play</button>
                
                    <button class="but-t" onclick = "download(${i})">Download</button>
                        
            </div>

        </div>

        <div class="detail-t-container">
            <div class="title-dt">${trending[i].title}</div>
            <div class="extra-dt">
                <div class="year-extra-dt">${trending[i].year}</div>
                <span> </span>
                <div class="rating-extra-dt">${trending[i].rating}</div>
                <img src="Assets/Star Icon.png" class="icon-extra-dt">
            </div>

            <div class="des-dt">
                <span class="category-dt">Director:</span>
                ${trending[i].director}
            </div>

            <div class="des-dt">
                    <span class="category-dt">Genre:</span>
                    ${trending[i].genre}
                </div>
            <div class="des-dt">
                <span class="category-dt">Cast:</span>
                ${trending[i].cast}
            </div>
            <div class="des-dt">
                <span class="category-dt">Sypnosis:</span>
                ${trending[i].sypnosis}
            </div>
        </div>
    </div>
    `
}



function choose(option){
    // console.log(option)


    if (option == 100){
        console.log("Witcher")
    }
    else{
        localStorage.setItem("opMov", JSON.stringify(option))
        window.open('Detail Page Mov.html', '_self')  
        // console.log(localStorage)   
        
    }
}


// Video

let overlay = document.getElementById("mov-overlay")
let vid = document.getElementById("mov-main")

function playVid(option){
    console.log(option)
    let videoTemp = trending[option].movie
    console.log(videoTemp)
    
    vid.innerHTML = `
        <source src="${videoTemp}"> 
    `
    
    overlay.style.display = "flex";
    vid.play()


}

function overlayClose(){
    // let overlay = document.getElementById("mov-overlay")
    vid.pause()
    // vid2.pause()
    
    overlay.style.display = "none";
    location.reload();
    // overlay2.style.display = "none";

    // console.log("test overlay")
}

function download(option){
    window.open(trending[option].movie)
}