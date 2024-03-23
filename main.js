// Objeto para mantener el estado de las teclas
const teclas = {};

function teclaPresionada(event) {
  
  // Almacenar el estado de la tecla que se está presionando
  teclas[event.key] = true;
    
  // Verificar las teclas presionadas
    if (teclas[' '] && teclas['ArrowRight'])
      {
        //console.log('espacio y derecha')
      }
    if (teclas[' '] && teclas['ArrowLeft'])
      {
       //console.log('espacio y izquierda')
      }
    if (!(teclas[' ']) && teclas['ArrowLeft'])
      {
       //console.log('izquierda')
      }
    if (!(teclas[' ']) && teclas['ArrowRight'])
      {
       //console.log('derecha')
      }
}

// Función que maneja el evento de soltar una tecla
function teclasSoltadas(event) {
    // Restablecer el estado de la tecla que se ha soltado
    teclas[event.key] = false;
  }

document.addEventListener('keydown', teclaPresionada);
document.addEventListener('keyup', teclasSoltadas);

