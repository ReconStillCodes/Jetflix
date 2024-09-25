


function savingData(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let confirm = document.getElementById("confirm").value
    let date = document.getElementById("date").value
    let genderM = document.getElementById("genderM").checked
    let genderF = document.getElementById("genderF").checked
    let tos = document.getElementById("tos").checked

    let reset = 1
    let gender


    // console.log(name);
    // console.log(email);
    // console.log(password);
    // console.log(confirm);
    // console.log(genderM);
    // console.log(genderF);
    // console.log(tos);

    if(name == ""){
        alert("Name must be filled")
        reset = 0
    }


    else if(email == ""){
        alert("Email must be filled")
        reset = 0
    }
    else if(email.indexOf('@') == -1){
        alert("Email is invalid")
        reset = 0
    }

    else if(password.length < 8){
        alert("Password length must be at least 8 characters")
        reset = 0
    }
    else if(password != confirm){
        alert("Password confimation is wrong")
        reset = 0
    }

    else if(date == ""){
        alert("Birth Date must be filled")
        reset = 0
    }

    else if(!genderM && !genderF){
        alert("Gender must be filled")
        reset = 0
    }

    else if(!tos){
        alert("Term of Service must be checked")
        reset = 0
    }



    if (reset == 0){
        document.getElementById("name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("password").value = ""
        document.getElementById("confirm").value = ""
        document.getElementById("date").value = ""
        document.getElementById("genderM").checked = ""
        document.getElementById("genderF").checked = ""
        document.getElementById("tos").checked = ""

    }
    else{

        if(!genderM){
            gender = "Female"
        }
        else if(!genderF){
            gender = "Male"
        }

        let accountData = {
            accountName : name,
            accountEmail : email,
            accountPassword : password,
            accountDate : date,
            accountGender : gender
        }

        // console.log(accountData)

        let accountData_storage = JSON.stringify(accountData)
        localStorage.setItem("accountData", accountData_storage)
        // console.log(localStorage)

        window.open('Home.html', '_self');
    }
}
