function clearErrors(){
    for(var loopCounter = 0;loopCounter < document.forms["displayEvens"].elements.length;loopCounter++){
        if(document.forms["displayEvens"].elements[loopCounter].parentElement.className.indexOf("has-") != -1){
            document.forms["displayEvens"].elements[loopCounter].parentElement.className = "form-group";
        }
    }
}

function calculateEvens(){
    var firstNum = document.forms["displayEvens"]["firstNum"].value;
    var secondNum = document.forms["displayEvens"]["secondNum"].value;
    var temp = firstNum;
    var steps = document.forms["displayEvens"]["steps"].value;
    var list = new Array(secondNum - firstNum);
    var ul = document.getElementById("count");
    for(counter = 0;counter < steps;counter++){
        if(temp % 2 == 0){
            list.unshift(temp);
            document.write("<td>" + temp + "</td>")
        }
    }
}

function resetForm(){
    clearErrors();
    document.forms["displayEvens"]["firstNum"].value="";
    document.forms["displayEvens"]["secondNum"].value="";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Submit";
    document.forms["displayEvens"]["firstNum"].focus();
}

function validateItems() {
    clearErrors();
    var firstNum = document.forms["displayEvens"]["firstNum"].value;
    var secondNum = document.forms["displayEvens"]["secondNum"].value;

    if(firstNum < secondNum && steps != 0){
        if (firstNum == "" || isNaN(firstNum)) {
            alert("First number must be filled in with a number.");
            document.forms["displayEvens"]["firstNum"]
            .parentElement.className = "form-group has-error";
            document.forms["displayEvens"]["firstNum"].focus();
            return false;
        }
    if (secondNum == "" || isNaN(secondNum)) {
        alert("Second number must be filled in with a number.");
        document.forms["displayEvens"]["secondNum"]
            .parentElement.className = "form-group has-error"
        document.forms["displayEvens"]["secondNum"].focus();
        return false;
    }
    }
    else{
        alert("Make sure your first number is smaller than the second, and steps is greater than 0.")
    }
   document.getElementById("results").style.display = "block";
   document.getElementById("submitButton").innerText = "Recalculate";


   

   // We are returning false so that the form doesn't submit 
   // and so that we can see the results
   return false;
}