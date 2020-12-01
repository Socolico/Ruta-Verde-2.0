
function Agregar_elementos(){
    $("#card1").append(
        '<h4>Dinámicas de trabajo a través deTeamBuilding</h4>'
        +"<img id='logo' src='img/trabajo en equipo (1).JPG'/>"
        +'<p>Disfruta la Experiencia de trabajar con otras personas para actividades grupales</p>');

    $("#card2").append(
        '<h4>Fogata y Karaoke bajo las estrellas</h4>'
        +"<img id='logo' src='img/fogata (1).jpg'/>"
       
        +'<p>Descansa de un dia productiva con una fogata juntos a todos los miembros y visitantes</p>');
        
    $("#card3").append(
        '<h4>Caminata Familiar</h4>'
        +"<img id='logo' src='img/caminata familiar (2).JPG'/>"
        +'<p>Disfruta de aire libre con una caminata por la naturaleza</p>');
}

window.onload = Agregar_elementos();
