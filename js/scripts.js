const botones = document.querySelectorAll('.boton');

botones.forEach((boton) => {
  boton.addEventListener('mouseover', () => {
    const sonido = new Audio('/assets/button-click.mp3');
    sonido.play();
  });
});

document.addEventListener("click", function() {
    const audio = document.getElementById("musica-fondo");
    audio.play();
});