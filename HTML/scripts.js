/* OCULTAR LA PAGINA DEL PERFIL SI NO HAY LOG IN */
var login = false
function compLogIn(){
    if (login == true){
        let contingut = ('<li id="myprofile"><a href="">MY PROFILE</a></li>')
        document.getElementById('logbutton').insertAdjacentHTML("beforebegin",contingut);
        let logtext = "LOG OUT";
        document.getElementById('buttonid').innerText = logtext;
    }
    else{
        let logtext = "LOG IN";
        document.getElementById('buttonid').innerText = logtext;
    }
}
function logInOut(){
    let compUser = false;
    let compPasswd = false;
    if (login == false){
        let user = prompt("Username:");
        if (user == 'Barful' || user == 'barful'){
            compUser=true
        }
        else{
            alert('El usuario ' + user + ' no existe');
        }
        if (compUser == true){
            let passwd = prompt("Password:");
            if (passwd == 1234){
                compPasswd = true;
            }
            else{
                alert('Contraseña incorrecta')
            }
        }
        
        if ((compUser == true) && (compPasswd == true)){
            login = true;
            alert("You have logged in successfully");
            compLogIn()
        }
    }
    else{
        let mp = document.getElementById('myprofile');
        mp.remove();
        login = false;
        alert("You have logged out");
        compLogIn()
        
    }
}