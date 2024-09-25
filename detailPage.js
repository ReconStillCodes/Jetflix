let storage = JSON.parse(localStorage.getItem("opMov"))
let option = storage

// Movie Data =======================================================

let mov = [
    {
        genre: "Action",
        option: 0,
        title: "X-men: Days of Future Past", 
        img1: "Poster/Action_X men.jpg",
        img2: "Preview/Action_X men.jpg",
        year: 2014,
        rating: "7.9/10",
        director: "Bryan Singer",
        cast: "Patrick Stewart, Ian McKellen, Hugh Jackman, Michael Fassbender, James McAvoy",
        sypnosis: "In the distance future, mutants are hunted down by Sentinels that has the ability to shape-shift. Wolverine must travels back in time by changing the past. He must stop Mystique assassinating Bolivar Trask, whose death leads to her capture and the creation of Sentinels.",
        duration: "2h 12m",
        movie: "Clip/Mov_Action_X men.mp4",
        preview: "Clip/Action_X men.mp4"

    },
    {
        genre: "Action",
        option: 1,
        title: "John Wick: Chapter 4", 
        img1: "Poster/Action_John wick.jpg",
        img2: "Preview/Action_John.jpg",
        year: 2023,
        rating: "8.0/10",
        director: "Chad Stahelski",
        cast: "Keanu Reeves, Laurence Fishburne, Ian McShane, Donnie Yen, George Georginu",
        sypnosis: "The High Table still hunting John Wick down. However he has uncovered away to gain his freedom back. But before gaining his freedom, he must fight new powerful foes, and even an old friend.",
        duration: "2h 49m",
        movie: "Clip/Mov_Action_John wick.mp4",
        preview: "Clip/Action_John wick.mp4"

    },
    {
        genre: "Action",
        option: 2,
        title: "Guardian of the Galaxy Volume 3", 
        img1: "Poster/Action_Guardian.jpg",
        img2: "Preview/Action_Guardian.jpg",
        year: 2023,
        rating: "8.2/10",
        director: "James Gunn",
        cast: "Chris Pratt, Chukwudi Iwuji, Bradley Cooper, Pom Klementieff, Dave Bautista",
        sypnosis: "The group of misfits known as The Guardian of the Galaxy continues to protect the universe from powerful threats. However, they may have to face their greatest challenge yet. Now they must embark on an epic journey to safe the galaxy, but it may be their end if they didn't succeed in completing their mission",
        duration: "2h 30m",
        movie: "Clip/Mov_Action_Guardian.mp4",
        preview: "Clip/Action_Guardian.mp4"

    },
    {
        genre: "Action",
        option: 3,
        title: "The Batman", 
        img1: "Poster/Action_Batman.jpg",
        img2: "Preview/Action_Batman.jpg",
        year: 2022,
        rating: "7.8/10",
        director: "Matt Reeves",
        cast: "Robert Pattinson, Zoë Kravitz, Jeffrey Wright, Colin Farrell, Paul Dano",
        sypnosis: "Batman, the dark knight of Gotham set on fighting criminals in his violent, corrupted city. When a sadistic serial killer began to emerge and murder political figures in Gotham, Batman must investigate this city's hidden crimes and figure out the mystery behind the Riddler.",
        duration: "2h 56m",
        movie: "Clip/Mov_Action_Batman.mp4",
        preview: "Clip/Action_Batman.mp4"

    },
    {
        genre: "Horror",
        option: 4,
        title: "M3GAN", 
        img1: "Poster/Horror_Megan.jpg",
        img2: "Preview/Horror_Megan.jpg",
        year: 2022,
        rating: "6.4/10",
        director: "Gerard Johnstone",
        cast: "Allison Williams, Ronny Chieng, Amie Donald, Violet McGraw, Jenna Davis",
        sypnosis: "M3gan is a lifelike doll that are programmed to be a child’s friend. Gemma, who is one of M3gan’s creator, unexpectedly have to take care of her 8 year old niece. In order to accompany her, Gemma gives her M3gan which leads to unimaginable consequences.",
        duration: "1h 42m",
        movie: "Clip/Mov_Horror_Megan.mp4",
        preview: "Clip/Horror_Megan.mp4"

    },
    {
        genre: "Horror",
        option: 5,
        title: "IT", 
        img1: "Poster/Horror_It.jpg",
        img2: "Preview/Horror_It.jpg",
        year: 2017,
        rating: "7.3/10",
        director: "Andy Muschiettie",
        cast: "Bill Skarsgård, Jaeden Martell, Finn Wolfhard, Sophia Lillis, Jeremy Ray Taylor",
        sypnosis: "One by one, the children of Derry start to disappear. A bunch of kids called the Loser's Club decides to investigate this mysterious phenomenon after one of their little brothers suddenly went missing. Turns out the culprit behind it is an evil shape-shifting monster that took the form of a clown. Now they must face their greatest fear to save Derry.",
        duration: "2h 15m",
        movie: "Clip/Mov_Horror_It.mp4",
        preview: "Clip/Horror_It.mp4"

    },
    {
        genre: "Horror",
        option: 6,
        title: "Prey", 
        img1: "Poster/Horror_Prey.jpg",
        img2: "Preview/Horror_Prey.jpg",
        year: 2022,
        rating: "7.1/10",
        director: "Dan Trachtenberg",
        cast: "Amber Midthunder, Dakota Beavers, Dane DiLiegro, Stormee Kipp, Michelle Thrush",
        sypnosis: "Naru, a member of a Native American tribe, was hunting a bear that was believed to be behind of some killings. Her adventure took a twist when an alien, armored with weapons, was behind the killings. Now Naru must protect her tribe from this predator and proof herself to be a warrior.",
        duration: "1h 40m",
        movie: "Clip/Mov_Horror_Prey.mp4",
        preview: "Clip/Horror_Prey.mp4"

    },
    {
        genre: "Horror",
        option: 7,
        title: "A Quiet Place Part II", 
        img1: "Poster/Horror_Quite.jpg",
        img2: "Preview/Horror_Quiet.jpg",
        year: 2020,
        rating: "7.2/10",
        director: "John Krasinski",
        cast: "Emily Blunt, Millicent Simmonds, Cillian Murphy, John Krasinski, Noah Jupe",
        sypnosis: "The Abbott family continues their struggle to survive in this apocalyptic world. They must venture into the outside world without making any sound, otherwise they might meet the monster lurking in silents. But perhaps, its time for the humans to finally fight back against these creatures.",
        duration: "1h 37m",
        movie: "Clip/Mov_Horror_Quiet.mp4",
        preview: "Clip/Horror_Quiet.mp4"

    },
    {
        genre: "Horror",
        option: 8,
        title: "Nope", 
        img1: "Poster/Horror_Nope.jpg",
        img2: "Preview/Horror_Nope.jpg",
        year: 2022,
        rating: "7.2/10",
        director: "Jordan Peele",
        cast: "Daniel Kaluuya, Keke Palmer, Brandon Perea, Michael Wincott, Steven Yeun",
        sypnosis: "A small town called Lonely Gulch finds themselves to be trap beneath a floating object. Strange disturbance slowly to appear. As fear and panic escalate, a group of people finally decides to confront this mysterious object.",
        duration: "2h 10m",
        movie: "Clip/Mov_Horror_Nope.mp4",
        preview: "Clip/Horror_Nope.mp4"

    },
    {
        genre: "Romance",
        option: 9,
        title: "5 Feet Apart", 
        img1: "Poster/Romance_5.jpg",
        img2: "Preview/Romance_5.jpg",
        year: 2019,
        rating: "7.2/10",
        director: "Justin Baldoni",
        cast: "Haley Lu Richardson, Cole Sprouse, Moises Arias, Kimberly Hebert Gregory, Parminder Nagra",
        sypnosis: "Stella and Will are two teenagers that have cystic fibrosis, which is a very sensitive lung disease. They met in a hospital and continue to build up their relationship. Due to their disease, they must be six feet apart in order to not spread their infections. However, as their relationship grows, they struggle to keep their boundaries.",
        duration: "1h 56m",
        movie: "Clip/Mov_Romance_5.mp4",
        preview: "Clip/Romance_5.mp4"

    },
    {
        genre: "Romance",
        option: 10,
        title: "Pride and Prejudice", 
        img1: "Poster/Romance_Pride.jpg",
        img2: "Preview/Romance_Pride.jpg",
        year: 2005,
        rating: "7.8/10",
        director: "Joe Wright",
        cast: "Keira Knightley, Matthew Macfadyen, Brenda Blethyn, Donald Sutherland, Talulah Riley",
        sypnosis: "Set in 19th-century England, Elizabeth Bennet met the proud Mr. Darcy at a ball. Their confrontation turns into a clash that leads to a misunderstanding. However, their hating relationship turns around and now, they must navigate their prejudice to find love.",
        duration: "2h 9m",
        movie: "Clip/Mov_Romance_Pride.mp4",
        preview: "Clip/Romance_Pride.mp4"

    },
    {
        genre: "Romance",
        option: 11,
        title: "Laland", 
        img1: "Poster/Romance_Lalaland.jpg",
        img2: "Preview/Romance_Lalaland.jpg",
        year: 2016,
        rating: "8.0/10",
        director: "Damien Chazelle",
        cast: "Ryan Gosling, Emma Stone, Rosemarie DeWitt, J.K. Simmons, Amiee Conn",
        sypnosis: "A jazz pianist and an aspiring actress cross paths with one another. A relationship sparks as they try to navigate Los Angeles and make their dreams come true. However, will their relationship goes on, or will they sacrifice it in order to pursue their long life dream?",
        duration: "2h 8m",
        movie: "Clip/Mov_Romance_Lalaland.mp4",
        preview: "Clip/Romance_Lalaland.mp4"

    },
    {
        genre: "Romance",
        option: 12,
        title: "Your Name", 
        img1: "Poster/Romance_Your name.jpg",
        img2: "Preview/Romance_Your name.jpg",
        year: 2016,
        rating: "8.4/10",
        director: "Makoto Shinkai",
        cast: "Ryunosuke Kamiki, Mone Kamishiraishi, Ryo Narita, Aoi Yûki, Nobunaga Shimazaki",
        sypnosis: "Taki Tachibana and Mitsuha Miyamizu are two teenagers in Japan that suddenly swap bodies every day. They can only communicate by leaving a message when they swap. This mysterious phenomena leads to very interesting and complicated situation.",
        duration: "1h 46m",
        movie: "Clip/Mov_Romance_Your name.mp4",
        preview: "Clip/Romance_Your name.mp4"
    },
    {
        genre: "Romance",
        option: 13,
        title: "Whisker Away", 
        img1: "Poster/Romance_Whisker.jpg",
        img2: "Preview/Romance_Whisker.jpg",
        year: 2020,
        rating: "6.7/10",
        director: "Jun'ichi Satô, Tomotaka Shibayama",
        cast: "Mirai Shida, Natsuki Hanae, Susumu Chiba, Ayako Kawasumi, Rina Kitagawa",
        sypnosis: "Miyo Sasaki is in love with her classmate, Kento Hinode. Miyo can also transform herself to become a cat using a magical mask that was given to her when she was a child. She likes to use the mask to get close to Kento since he also likes cats. However, through a series of unfortunate events, Miyo is stuck in her cat form. Now Kento must find a way to bring her back to normal.",
        duration: "1h 44m",
        movie: "Clip/Mov_Romance_Whisker.mp4",
        preview: "Clip/Romance_Whisker.mp4"
    
    },
    {
        genre: "Comedy",
        option: 14,
        title: "Jumanji: The Next Level", 
        img1: "Poster/Comedy_Jumanji.jpg",
        img2: "Preview/Comedy_Jumanji.jpg",
        year: 2019,
        rating: "6.7/10",
        director: "Jake Kasdan",
        cast: "Dwayne Johnson, Jack Black, Kevin Hart, Karen Gillan, Nick Jonas",
        sypnosis: "After the events from Jumanji: Welcome to the Jungle, the gang grew up and started their future. However, Spencer is the only one to be stuck in his past. The thrill of playing as Bravestone makes Spencer once again play Jumanji. The rest of the gang finally figures out what happens and enters the game to save him, but the game has changed once again.",
        duration: "2h 3m",
        movie: "Clip/Mov_Comedy_Jumanji.mp4",
        preview: "Clip/Comedy_Jumanji.mp4"
    
    },
    {
        genre: "Comedy",
        option: 15,
        title: "3 Idiots", 
        img1: "Poster/Comedy_3.jpg",
        img2: "Preview/Comedy_3.jpg",
        year: 2009,
        rating: "8.4/10",
        director: "Rajkumar Hirani",
        cast: "Aamir Khan, Madhavan, Mona Singh, Sharman Joshi, Kareena Kapoor",
        sypnosis: "Farhan and Raju found themselves on a journey to meet their long-lost friend, Rancho. Three of them went to the same Engineering University and were known as the 3 idiots. Despite being called idiots, Rancho is a genius that helps his friends to finally embrace their passion.",
        duration: "2h 50m",
        movie: "Clip/Mov_Comedy_3.mp4",
        preview: "Clip/Comedy_3.mp4"
    
    },
    {
        genre: "Comedy",
        option: 16,
        title: "Kung Fu Panda 3", 
        img1: "Poster/Comedy_Kungfu.jpg",
        img2: "Preview/Comedy_Kungfu.jpg",
        year: 2016,
        rating: "7.1/10",
        director: "Alessandro Carloni, Jennifer Yuh Nelson",
        cast: "Jack Black, Bryan Cranston, Dustin Hoffman, Angelina Jolie, J.K. Simmons",
        sypnosis: "Po finally becomes the master of the Jade Palace but was horrible at it. Besides that, he finally met his real father. At the same time, the power hungry Kai has return to take Chi from all Kungu master across China. In order to defeat him, Po must learn to use Chi by following his father since Panda was the original Chi users.",
        duration: "1h 35m",
        movie: "Clip/Mov_Comedy_Kungfu.mp4",
        preview: "Clip/Comedy_Kungfu.mp4"
    
    },
    {
        genre: "Comedy",
        option: 17,
        title: "Puss in Boots: The Last Wish", 
        img1: "Poster/Comedy_Puss.jpg",
        img2: "Preview/Comedy_Puss.jpg",
        year: 2022,
        rating: "7.9/10",
        director: "Joel Crawford, Januel Mercado",
        cast: "Antonio Banderas, Salma Hayek, Harvey Guillén, John Mulaney, Wagner Moura",
        sypnosis: "Puss in Boots discovered that he has only one life left. Other than that, a bounty hunter is chasing after him. He must find a mystical last wish in order to survive, but he isn’t the only one that wants that wish.",
        duration: "1h 42m",
        movie: "Clip/Mov_Comedy_Puss.mp4",
        preview: "Clip/Comedy_Puss.mp4"
    
    },
    {
        genre: "Comedy",
        option: 18,
        title: "Mr. Bean's Holiday", 
        img1: "Poster/Comedy_Bean.jpg",
        img2: "Preview/Comedy_Bean.jpg",
        year: 2007,
        rating: "6.4/10",
        director: "Steve Bendelack",
        cast: "Rowan Atkinson, Willem Dafoe, Steve Pemberton, Lily Atkinson, Preston Nyman",
        sypnosis: "Mr. Bean wins a trip to Cannes and he's going on a holiday. But since he's the Mr. Bean, he unwittingly seperates a young boy from his father, who is a famous figure in the entertainment idustry. Now he must fix his errors and return the boy to his father while getting enjoying his holiday.",
        duration: "1h 30m",
        movie: "Clip/Mov_Comedy_Bean.mp4",
        preview: "Clip/Comedy_Bean.mp4"
    
    }
]

// console.log(mov[0].action[0])


// Content =====================================================

// let vid = document.getElementById("main-vid")
let jumbo = document.getElementById("jumbo-pic-container")
let preview = document.getElementById("mov-pc")

let year =document.getElementById("year")
let duration =document.getElementById("duration")
let rating = document.getElementById("rating")
let genre = document.getElementById("genre")
let sypnosis = document.getElementById("sypnosis")
let director = document.getElementById("director")
let cast = document.getElementById("cast")


jumbo.innerHTML = `
    <img src="${mov[option].img1}" class="jumbo-pic"> 
    <div class="shadow">

        <div class="mov-title">${mov[option].title}</div>

        <button class="play-but" onclick="playVid()">Play</button>
    </div> 
`
year.innerText = mov[option].year
duration.innerText = mov[option].duration
rating.innerHTML = `
    ${mov[option].rating}
    <img src="Assets/Star Icon.png" class="icon-rating">
`
genre.innerText = mov[option].genre
sypnosis.innerText = mov[option].sypnosis
director.innerHTML = `
    <span class="category">Director: </span> ${mov[option].director}
`
cast.innerHTML = `
<span class="category">Cast: </span> ${mov[option].cast}
`
preview.innerHTML = `
    <img src="${mov[option].img2}" class="mov-mov-pic">
    <div class="shadow-other">
        <button class="play-but-mov" onclick="playPrev()">Play</button>
    </div>
`








// Buttons ==========================================================

let overlay = document.getElementById("mov-overlay")
let vid = document.getElementById("mov-main")
let overlay2 = document.getElementById("prev-overlay")
let vid2 = document.getElementById("prev-main")

function playVid(){

    overlay.style.display = "flex";
    vid.innerHTML = `
        <source src="${mov[option].preview}"> 
    `
    vid.play()


}

function playPrev(){
    
    overlay2.style.display = "flex";
    vid2.innerHTML = `
        <source src="${mov[option].preview}"> 
    `
    vid2.play()
}

function overlayClose(){
    // let overlay = document.getElementById("mov-overlay")
    vid.pause()
    vid2.pause()
    
    overlay.style.display = "none";
    overlay2.style.display = "none";

    // console.log("test overlay")
}



// Other Movies



function choose(option){
    console.log(option)


    if (option == 100){
        console.log("Witcher")
    }
    else{
        localStorage.setItem("opMov", JSON.stringify(option))
        window.open('Detail Page Mov.html', '_self')  
        // console.log(localStorage)   
    }
}


let start, end
let otherMov = document.getElementById("other-container")

if (option >= 0 && option <= 3){ //Action
    start = 0
    end = 4
}
else if(option >= 4 && option <=8){ //Horror
    start = 4
    end = 9
}
else if(option >= 9 && option <=13){ //Romance
    start = 9
    end = 14

}
else if(option >= 14 && option <= 18){ //Comedy
    start = 14
    end = 19
}



    for(let i=start; i<end; i++){
        if(!(start == 0 && end == 4)){
            if(option == end-1){
                if (i != option && i != option-1){
                    showOther(i)
                }   
            }
            else{
                if (i != option && i != option+1){
                    showOther(i)
                } 
            }
  
        }
        else{
            if (i != option){ 
                    showOther(i)
            }     
        }

          
    }

    function showOther(i){
        otherMov.innerHTML += `
            <div class="mov-pc" >
                <img src="${mov[i].img1}" class="mov-mov-pic">
                    <div class="shadow-other">
                        <div class="mini-title">${mov[i].title}</div>
                        <button class="play-but-mov"   onclick="choose(${mov[i].option})" >Watch</button>
                    </div>
            </div>
        `    
    }




    
    
