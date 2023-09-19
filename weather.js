function uppass() {

    var sendPass = document.getElementById('countpass');
    var getPassStyle = document.getElementById('password');
    var disable = document.getElementById('button');
    var user = document.getElementById('id').value;
    var getPass = document.getElementById('password').value;

    var progresse1 = document.getElementById('progress-1');
    var progresse2 = document.getElementById('progress-2');

    let len = getPass.length;

    // PasswordBox Length Count
    if (getPass) {
        getPassStyle.style.borderColor = 'green';
        getPassStyle.style.width = '90%';
        sendPass.style.display = 'block';
        sendPass.style.marginLeft = '10px';

        sendPass.innerHTML = len
    } else {
        getPassStyle.style.borderColor = 'black';
        getPassStyle.style.width = '100%';
        sendPass.style.display = 'none';
    }


    // PROGRESSBAR DESIGN

    if (user) {
        progresse1.style.backgroundColor = '#27AE60'
        progresse2.style.boxShadow = '0px 0px 1px 0px red inset'
    } else {
        progresse1.style.backgroundColor = 'transparent'
        progresse2.style.boxShadow = '0px 0px 0px 0px red inset'
    }

    if (getPass) {
        progresse2.style.backgroundColor = '#27AE60'
        progresse1.style.boxShadow = '0px 0px 1px 0px red inset'
    } else {
        progresse2.style.backgroundColor = 'transparent'
        progresse1.style.boxShadow = '0px 0px 0px 0px red inset'
    }


    /*   if (user = false, getPass = false) {
        disable.style.border = '1px solid red'
    } else
    {
        progresse2.style.boxShadow = 'none'
        progresse1.style.boxShadow = 'none'
        disable.style.border = '1px solid green'
        disable.style.backgroundImage = 'linear-gradient(to bottom, #fff, green)'
    }*/


    // PasswordBox Limitatio

    switch (len) {
        case 5:
            getPassStyle.style.borderColor = '#FFAAAB'
            //getPassStyle.removeAttribute("disabled", "true")
            break;
        case 6:
            getPassStyle.style.borderColor = '#FFAAAB'
            //getPassStyle.removeAttribute("disabled", "true")
            break;

        case 7:
            getPassStyle.style.borderColor = '#FF7F80'
            //getPassStyle.removeAttribute("disabled", "true")
            break;

        case 8:
            getPassStyle.style.borderColor = '#FF7F80'
            // getPassStyle.removeAttribute("disabled", "true")
            break;

        case 9:
            getPassStyle.style.borderColor = '#FF5556'
            //getPassStyle.removeAttribute("disabled", "true")
            break;

        case 10:
            getPassStyle.style.borderColor = '#FF0002'
            //getPassStyle.removeAttribute("disabled", "true")
            break;

        case 11:
            getPassStyle.style.borderColor = '#FF0002'
            getPassStyle.setAttribute("disabled", "true")
            alert("Password Length Out Of Limit, Reload ")
            break;
    }


    // Enable and Disable button
    /*
    if (user, getPass) {
        button.removeAttribute("disabled", "true")
    } else
    {
        button.setAttribute("disabled", "true")
    }
   */

    if (user != 0 && getPass != 0) {
        button.removeAttribute("disabled", "true")
    } else {
        button.setAttribute("disabled", "true")
    }

}
//setInterval(uppass, 100)

// RepairCode

/*
    // Get references to the HTML elements
var sendPass = document.getElementById('countpass');
var getPassStyle = document.getElementById('password');
var disable = document.getElementById('button');
var user = document.getElementById('id');
var getPass = document.getElementById('password');
var progresse1 = document.getElementById('progress-1');
var progresse2 = document.getElementById('progress-2');
*/
// Get the values of the user and getPass fields
/*var userInput = user.value.trim();
var getPassInput = getPass.value.trim();

    // Check if both user and getPass fields have input
if (userInput !== '' && getPassInput !== '') {
    // Enable the disable button
    disable.disabled = false;
} else {
    // Disable the disable button
    disable.disabled = true;
}
*/





/*
//var allowCharecter = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '{', '}', '[', ']', '|', '\\', ';', ':', '"', '\'', '<', '>', ',', '.', '?', '/'];

const allSpecialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '{', '}', '[', ']', '|', '\\', ';', ':', '"', '\'', '<', '>', ',', '.', '?', '/'];

//const excludedCharacters = allSpecialCharacters.filter(char => !restrictedCharacters.includes(char));


const restrictedCharacters = ['<', '>', '&', '"', "'", '/', '\\', ';', ':', '|', '=', '-', '(', ')', '[', ']', '{', '}', '$', '#', '@', '!', '`', '%', '^', '*', '?', ' '];


//console.log(restrictedCharacters)

var sendPass = document.getElementById('countpass');
var getPassStyle = document.getElementById('password');
var disable = document.getElementById('button');
var user = document.getElementById('id').value;
var getPass = document.getElementById('password').value;

var progresse1 = document.getElementById('progress-1');
var progresse2 = document.getElementById('progress-2');


/*
function z(char) {
    return restrictedCharacters != getPass
}

const y = allSpecialCharacters.filter(z);



setInterval(test, 100)




console.log(y)*/
