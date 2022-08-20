function myfunction()
{
    var emailvar =document.getElementById("emailid").value;
    var passvar =document.getElementById("passid").value;
    var namevar =document.getElementById("nameid").value;
    var lnamevar =document.getElementById("lnameid").value;

    if(emailvar=="" || passvar=="" || namevar=="" || lnamevar=="")
    {
        alert("Please Fill The Form Accurately");
    }

    else
    {
        alert("Thank You For Signing Up At PICNIC-GAMES!");
        window.open("../index.html");
    }
}