function myfunction()
{
    var emailvar =document.getElementById("email_input").value;
    var namevar =document.getElementById("name_input").value;
    var telephonevar =document.getElementById("telephone_input").value;

    if(emailvar=="" || namevar=="" || telephonevar=="")
    {
        document.getElementById("validationid").innerHTML="Required Fields Are Empty";
        document.getElementById("validationid").style.color="red";
        document.getElementById("validationid").style.fontWeight="bold";
    }

    else
    {
        alert("Thank You For Contacting PICNIC-GAMES, Our Team Will Address You As Soon As Possible!");
        window.open("../index.html");
    }
}