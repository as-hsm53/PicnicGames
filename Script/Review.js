function myfunction()
{
    var namevar =document.getElementById("name").value;
    var emailvar =document.getElementById("email").value;

    if(emailvar=="" || namevar=="")
    {
        alert("Name & Email Are Required In Order To Send A Review");
    }
    else
    {
        alert("Thank You For Taking Your Time To Review PICNIC-GAMES");
    }
}