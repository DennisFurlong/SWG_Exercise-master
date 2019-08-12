function clearErrors(){
    for(var loopCounter = 0;loopCounter < document.forms["contactUs"].elements.length;loopCounter++){
        if(document.forms["contactUs"].elements[loopCounter].parentElement.className.indexOf("has-") != -1){
            document.forms["contactUs"].elements[loopCounter].parentElement.className = "form-group";
        }
    }
}

function resetForm(){
    clearErrors();
    document.forms["contactUs"]["name"].value="";
    document.forms["contactUs"]["email"].value="";
    document.forms["contactUs"]["phone"].value="";
    document.forms["contactUs"]["name"].focus();
}


function validateItems() {
    clearErrors();

    var name = document.forms["contactUs"]["name"].value;
    var email = document.forms["contactUs"]["email"].value;
    var phone = document.forms["contactUs"]["phone"].value;



    if (name == "" || name(isNaN)) {
        alert("Please fill in your Name.");
        document.forms["contactUs"]["name"].parentElement.className = "form-group has-error";
        document.forms["contactUs"]["name"].focus();
        return false;
    }

   if (email == "") {
       alert("Email must be filled in with a valid Email address.");
       document.forms["contactUs"]["email"].parentElement.className = "form-group has-error";
       document.forms["contactUs"]["email"].focus();
       return false;
   }

   if(phone == "" || isNaN(phone)){
        alert("Phone must be a valid Phone Number.");
        document.forms["contactUs"]["phone"].parentElement.className ="form-group has-error";
        document.forms["contactUs"]["email"].focus();
   }

   else{
       alert("Information Submitted!");
   }
   return false;
}