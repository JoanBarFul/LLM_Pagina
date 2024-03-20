function mostrarModal() {
    document.getElementById('myModal').style.display = 'block';
    // Desenfocar el fondo
    document.getElementById('PerfilInfoCuerpo').style.filter = 'blur(5px)';
    document.getElementById('menuPerfil').style.filter = 'blur(5px)';
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById('myModal').style.display = 'none';
    // Restaurar el enfoque del fondo
    document.getElementById('PerfilInfoCuerpo').style.filter = 'none';
    document.getElementById('menuPerfil').style.filter = 'none';
}

function actualizarPerfil(){
    var GuildName = document.getElementById('FGuildName').value;
    var GuildLvl = document.getElementById('FGuildLvl').value;
    var UserName = document.getElementById('FUserName').value;
    var Region = document.getElementById('FRegion').value;
    var UserLvl = document.getElementById('FUserLvl').value;
    var Arena = document.getElementById('ArenaRank').value;
    var RTA = document.getElementById('FRTARank').value;
    if (GuildName.length > 20) {
        alert("El nombre del gremio no puede tener más de 20 caracteres.");
        return false;
    }

    if (isNaN(GuildLvl) || GuildLvl < 0 || GuildLvl > 20) {
        alert("El nivel del gremio debe ser un número entre 0 y 20.");
        return false;
    }

    if (UserName.length > 20) {
        alert("El nombre de usuario no puede tener más de 20 caracteres.");
        return false;
    }


    if (isNaN(UserLvl) || UserLvl < 0 || UserLvl > 70) {
        alert("El nivel de usuario debe ser un número entre 0 y 70.");
        return false;
    }

    localStorage.setItem('GuildName', GuildName);
    localStorage.setItem('GuildLvl', GuildLvl);
    localStorage.setItem('UserName', UserName);
    localStorage.setItem('Region', Region);
    localStorage.setItem('UserLvl', UserLvl);
    localStorage.setItem('Arena', Arena);
    localStorage.setItem('RTA', RTA);



    return true;

}

function mostrarDatosGuardados() {
    document.getElementById('nombreGuild').innerText = localStorage.getItem('GuildName') || 'GUILDNAME';
    document.getElementById('nivelGuild').innerText = 'Lvl. ' + (localStorage.getItem('GuildLvl') || '1');
    document.getElementById('nickName').innerText = localStorage.getItem('UserName') || 'USERNAME';
    document.getElementById('server').innerText = localStorage.getItem('Region') || 'GLOBAL';
    document.getElementById('level').innerText = 'Lvl. ' + (localStorage.getItem('UserLvl') || '1');
    document.getElementById('arenaRank').innerText = localStorage.getItem('Arena') || 'AS';
    document.getElementById('RTARank').innerText = localStorage.getItem('RTA') || 'BRONCE';
    document.getElementById('a1').src =  localStorage.getItem('a1') || 'Recursos/PJ_Ic/janutaPortrait.png';
    document.getElementById('a2').src =  localStorage.getItem('a2') || 'Recursos/PJ_Ic/c1097_s01_s.png';
    document.getElementById('a3').src =  localStorage.getItem('a3') || 'Recursos/PJ_Ic/c1086_s.png';
    document.getElementById('a4').src =  localStorage.getItem('a4') || 'Recursos/PJ_Ic/c1012_s.png';
    document.getElementById('a5').src =  localStorage.getItem('a5') || 'Recursos/PJ_Ic/c1028_s.png';

    document.getElementById('myModal').style.display = 'none';
    document.getElementById('myModalImages').style.display = 'none';


    var Arena = localStorage.getItem('Arena') || 'BRONCE';
    var RTA = localStorage.getItem('RTA') || 'BRONCE';
    var imagen;
    var imagenRTA;
    switch (Arena) {
        case 'BRONCE':
            imagen = 'Recursos/rank/bronce.svg';
            break;
        case 'PLATA':
            imagen = 'Recursos/rank/plata.svg';
            break;
        case 'ORO':
            imagen = 'Recursos/rank/gold.svg';
            break;
        case 'AS':
            imagen = 'Recursos/rank/as.svg';
            break;
        case 'RETADOR':
            imagen = 'Recursos/rank/retador.svg';
            break;
        case 'CAMPEON':
            imagen = 'Recursos/rank/champion.svg';
            break;
        case 'LEYENDA':
            imagen = 'Recursos/rank/legend.svg';
            break;
        default:
            imagen = 'Recursos/rank/bronce.svg';
    }
    switch (RTA) {
        case 'BRONCE':
            imagenRTA = 'Recursos/rank/bronce.svg';
            break;
        case 'PLATA':
            imagenRTA = 'Recursos/rank/plata.svg';
            break;
        case 'ORO':
            imagenRTA = 'Recursos/rank/gold.svg';
            break;
        case 'AS':
            imagenRTA = 'Recursos/rank/as.svg';
            break;
        case 'RETADOR':
            imagenRTA = 'Recursos/rank/retador.svg';
            break;
        case 'CAMPEON':
            imagenRTA = 'Recursos/rank/champion.svg';
            break;
        case 'LEYENDA':
            imagenRTA = 'Recursos/rank/legend.svg';
            break;
        default:
            imagenRTA = 'Recursos/rank/bronce.svg';
    }

    document.getElementById('IdArenaLogo').src = imagen;
    document.getElementById('IdRTALogo').src = imagenRTA;

}
function abrirImagenes() {
    document.getElementById('myModalImages').style.display = 'block';
    // Desenfocar el fondo
    document.getElementById('PerfilInfoCuerpo').style.filter = 'blur(5px)';
    document.getElementById('menuPerfil').style.filter = 'blur(5px)';

}

function toggleSelection(img) {
    img.classList.toggle("selected");
    updateSelectedImages(); // Actualizar la lista de imágenes seleccionadas cada vez que se haga clic en una imagen
}

function updateSelectedImages() {
    selectedImages = []; // Limpiar el arreglo de imágenes seleccionadas
    var selectedImgs = document.querySelectorAll('.image-container img.selected');
    selectedImgs.forEach(function(image) {
        selectedImages.push(image.src);
    });
}

function seleccionarImagenes() {
    updateSelectedImages(); // Actualizar la lista de imágenes seleccionadas
    if (selectedImages.length === 5) {
        cerrarModalImages(); // Cerrar el modal si se seleccionaron exactamente 5 imágenes
        for (var i = 0; i < 5; i++) {
            var image = document.getElementById('a' + (i + 1));
            if (image) {
                localStorage.setItem('a' + (i + 1), selectedImages[i]);
                image.src = selectedImages[i];
            }
        }
    } else {
        alert("Por favor seleccione exactamente 5 imágenes.");
    }
}


function cerrarModalImages() {
    document.getElementById('PerfilInfoCuerpo').style.filter = 'none';
    document.getElementById('menuPerfil').style.filter = 'none';
    document.getElementById('myModalImages').style.display = 'none';
}




