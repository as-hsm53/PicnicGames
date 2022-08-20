function myfunction()
{
    var emailvar =document.getElementById("emailid").value;
    var passvar =document.getElementById("passid").value;

    if(emailvar=="" || passvar=="")
    {
        document.getElementById("validationid").innerHTML="Please fill this form";
        document.getElementById("validationid").style.color="red";
        document.getElementById("validationid").style.fontWeight="bold";
    }

    else
    {
        if(emailvar=="admin@gmail.com" &&  passvar=="admin123")
        {
            alert("Thank You For Selecting PICNIC-GAMES!");
            window.open("../index.html");
        }
        else
        {
            document.getElementById("validationid").innerHTML="Data not found";
            document.getElementById("validationid").style.color="blue";
            document.getElementById("validationid").style.fontWeight="bold";
        }

    }
}