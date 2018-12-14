window.onload = start;

/* With the placeholder text, we are adding/removing several different pieces of
text based on the user input/validation. The programme needs to have a clear sequence for it to
run correctly. First I am calling the 'hints', which needs to be presented on page load, this function
then calls the validate or clearError functions based on user input. The hint function is then
recalled or it's input removed. The other form inputs are listend for in load event listeners, which also in
turn validate or report errors. */



function start() {
    firstNameHint();
    secondNameHint();
    healthHint();
    loadEventListeners();
    switchToolTip();
}

function loadEventListeners() {
     // anonymous function to call clear error on focus with the id of email as an argument
     var email = document.getElementById('email');
     email.onfocus = function() {
         email = this.id;
         clearError(email);
     }

     var telephone = document.getElementById('telephone');

     telephone.onfocus = function() {
         telephone = this.id;
         clearError(telephone);
     }

    document.getElementById('telephone').onblur = validateTelephone;
    document.getElementById('email').onblur = validateEmail;
    document.getElementById('userInfo').onsubmit = processForm;

}


function switchToolTip() {
  document.getElementById('qmark').onmouseover = function() {
  var toolTip = document.getElementById('ttip');
  toolTip.style.display='block';
  }
  document.getElementById('qmark').onmouseout = function() {
  var toolTip = document.getElementById('ttip');
  toolTip.style.display='none';
  }
}



function processForm() {

    var firstName = validateFirstName();
    var lastName = validateSecondName();
    var email = validateEmail();
    var health = validateHealthAuthority();

    if (firstName == true) {
        console.log('x is true');
    }
    if (lastName == true) {
        console.log('y is true');
    }
    return false;
}


function clearError(id) {
    document.getElementById(id + 'Error').innerHTML = "&nbsp;";
}


function validateFirstName() {

    var defaultText = "Enter your name.";
    var valid = true;
    var firstNameField = document.getElementById('first-name');
    var firstName = document.getElementById('first-name').value;
    console.log(firstName);
    /* first name contain only letters and is at least two charecters long, case insensitive  */
    var re = new RegExp(/^[a-z]{2,}$/i);
    if (re.test(firstName)) {

         firstNameField.classList.remove('focusgreen');
        return valid;
    } else {
        document.getElementById('first-nameError').innerHTML = 'error in the name field';
         firstNameField.classList.add('focusgreen');
        /*MAYBE ADD IF STATEMENT HERE */
        if(firstName ==''){
        firstNameHint()
    }
        return valid = false;
    }
}


function validateSecondName() {

    var defaultText = "Enter your name.";
    var valid = true;
    var secondName = document.getElementById('second-name').value;
    console.log(secondName);
    /* first name contain only letters and is at least two charecters long, case insensitive  */
    var re = new RegExp(/^[a-z-]{2,}$/i);
    if (re.test(secondName)) {

        return valid;
    } else {
        document.getElementById('second-nameError').innerHTML = 'error in the name field';
        if(secondName == ''){
        secondNameHint();
    }
        return valid = false;
    }
}

function validateEmail() {
    var valid = true;
    var email = document.getElementById('email').value;

    /* https://code.tutsplus.com/tutorials/8-regular-expressions-you-should-know--net-6149   */
    var re = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);
    if (re.test(email)) {
        return valid;
    } else {
        document.getElementById('emailError').innerHTML = 'error in the name field';

        return valid = false;
    }
}

function validateTelephone() {
    var valid = true;
    var telephone = document.getElementById('telephone').value;

    /* https://code.tutsplus.com/tutorials/8-regular-expressions-you-should-know--net-6149   */
    var re = new RegExp(/^\d{11}$/i);
    if (re.test(telephone)) {
        return valid;
    } else {
        document.getElementById('telephoneError').innerHTML = 'error in the name field';

        return valid = false;
    }
}


function validateHealthAuthority() {


        var defaultText = "Enter health number.";
        var valid = true;
        var health = document.getElementById('health').value;
        console.log(health);
        /* first name contain only letters and is at least two charecters long, case insensitive  */
        var re = new RegExp(/^zha\d{6}$/i);
        if (re.test(health)) {
            console.log('REG EX WORKED')
            return valid;
        } else {
            document.getElementById('healthError').innerHTML = 'error in the name field';
            if(health == ''){
            healthHint()
        }
            return valid = false;
        }
    }

function firstNameHint() {
    var defaultText = "Enter your name.";
    var txtElem = document.getElementById("first-name");
    txtElem.value = defaultText;
    txtElem.style.color = "#A8A8A8";
    txtElem.style.fontStyle = "italic";

    txtElem.onfocus = function() {
        //the value being operated on
        if (this.value === defaultText) {

            this.value = "";
            this.style.color = "#000";
            this.style.fontStyle = "normal";

        }

        textElemId = this.id;
        clearError(textElemId);
    }
    txtElem.onblur = function() {
        if (this.value === "") {
            this.value = defaultText;
            this.style.color = "#A8A8A8";
            this.style.fontStyle = "italic";

        }
        validateFirstName();

    }
}

// YOU CAN USE THIS HERE to clear error and in error function
function secondNameHint() {
    var defaultText = "Enter your name.";
    var txtElem = document.getElementById("second-name");
    txtElem.value = defaultText;
    txtElem.style.color = "#A8A8A8";
    txtElem.style.fontStyle = "italic";

    txtElem.onfocus = function() {
        //the value being operated on
        if (this.value === defaultText) {

            this.value = "";
            this.style.color = "#000";
            this.style.fontStyle = "normal";



        }
        textElemId = this.id;
        clearError(textElemId);
    }

    txtElem.onblur = function() {
        if (this.value === "") {
            this.value = defaultText;
            this.style.color = "#A8A8A8";

            this.style.fontStyle = "italic";
        }
        validateSecondName();
    }
}



function healthHint() {
    var defaultText = "Health number.";
    var txtElem = document.getElementById("health");
    console.log(txtElem + 'HEALTH');
    txtElem.value = defaultText;
    txtElem.style.color = "#A8A8A8";
    txtElem.style.fontStyle = "italic";


    txtElem.onfocus = function() {

        // the value being operated on
        if (this.value === defaultText) {
            console.log('HELLLO health')
            this.value = "";
            this.style.color = "#000";
            this.style.fontStyle = "normal";

        }
        textElemId = this.id;
        clearError(textElemId);

    }

    txtElem.onblur = function() {
        if (this.value === "") {
            this.value = defaultText;
            this.style.color = "#A8A8A8";
            this.style.fontStyle = "italic";
        }
        // user moving away from form field will trigger form validation

        validateHealthAuthority();
    }
}
