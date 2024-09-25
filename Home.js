let dataStorage = JSON.parse(localStorage.getItem("accountData"))

let username = document.getElementById("name");
username.innerText = dataStorage.accountName;

let profile = document.getElementById("but");

if (dataStorage.accountGender == "Male"){
    profile.innerHTML = `<img src="Assets/Male Icon.png" alt="">`
}
else{
    profile.innerHTML = `<img src="Assets/Female Icon.png" alt="">`
}
