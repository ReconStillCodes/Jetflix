let dataStorage = JSON.parse(localStorage.getItem("accountData"))

let username = document.getElementById("nba-name");
username.innerText = dataStorage.accountName;

let profile = document.getElementById("nba-imgContainer");

if (dataStorage.accountGender == "Male"){
    profile.innerHTML = `<img src="Assets/Male Icon.png" alt="">`
}
else{
    profile.innerHTML = `<img src="Assets/Female Icon.png" alt="">`
}

function link(option){
    if(option == 1){
        window.open('Home.html', '_self')
    }
    else if(option == 2){
        window.open('Movie.html', '_self')
    }
    else if(option == 3){
        window.open('News & Popular.html', '_self')
    }
}