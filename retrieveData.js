let dataStorage = JSON.parse(localStorage.getItem("accountData"))
// console.log(dataStorage) 

function checkData(){
    let username = document.getElementById("username").value
    let passcode = document.getElementById("passcode").value

    let reset = 1

    if(username == dataStorage.accountName 
        && passcode == dataStorage.accountPassword){
        
            console.log("username success")
            window.open('Home.html', '_self');
    }
    else if(username == ""){
        alert("Please fill in your username")
        reset = 0
    }
    else if(passcode == ""){
        alert("Please fill in your passcode")
        reset = 0
    }
    else{
        alert("Your username or password is wrong! Please enter the correct username and password")
        reset = 0
    }

    if(reset == 0){
        document.getElementById("username").value = ""
        document.getElementById("passcode").value = ""
    }
    else{
        window.open('Home.html', '_self');
    }
}