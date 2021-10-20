//form1
function vfun(){
    var Firstname=document.forms["myform"]["Firstname"].value;
    var Password=document.forms["myform"]["Password"].value;

    if (Firstname==null ||Firstname=="")
    {
        document.getElementById("errorbox").innerHTML=
        "Username Required";
        return false;
    }
    if (Password==null ||Password=="")
    {
        document.getElementById("errorbox").innerHTML=
        "Password Required";
        return false;
    }
if(Firstname != '' && Password != ''){
alert("log in succesful");
}
}