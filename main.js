let bola = document.getElementById('bola')

let leftNumber = parseFloat(window.getComputedStyle(bola).getPropertyValue("left"));
let topNumber = parseFloat(window.getComputedStyle(bola).getPropertyValue("top"));

let leftBolaNumber
let topBolaNumber

// Objeto para mantener el estado de las teclas
const teclas = {};

let saltarBolaIzqId;

function teclaPresionada(event) {
  
  // Almacenar el estado de la tecla que se está presionando
  teclas[event.key] = true;
    
  // Verificar las teclas presionadas
    if (teclas[' '] && teclas['ArrowRight'])
      {
		  if (leftNumber <= 375 ) {
		   	leftBolaNumber = leftNumber
			topBolaNumber = topNumber
		  	saltarBolaIzqId = setInterval(saltarBolaDca, 50);
		   	saltarBolaDca()
	  }
	}
    if (teclas[' '] && teclas['ArrowLeft'])
      {
		  if (leftNumber >= 75 ) {
		  	leftBolaNumber = leftNumber
			topBolaNumber = topNumber
		  	saltarBolaIzqId = setInterval(saltarBolaIzq, 50);
		  	saltarBolaIzq()
		  }
		}
    if (!(teclas[' ']) && teclas['ArrowLeft'])
      {
       		moverBola('izq'); 
	  }
	if (!(teclas[' ']) && teclas['ArrowRight'])
      {
			moverBola('dca')  
      }
}

// Función que maneja el evento de soltar una tecla
function teclasSoltadas(event) {
    // Restablecer el estado de la tecla que se ha soltado
    teclas[event.key] = false;
  }
 
 

  
function moverBola(dirMover){
	//console.log(dirMover)
	if (dirMover === 'izq' && leftNumber > 0){ 
		leftNumber -= 2;
	   	bola.style.setProperty("left", leftNumber + "px");
	   }
	else if (dirMover === 'dca' && leftNumber < 450){ 
		leftNumber += 2; 
	   bola.style.setProperty("left", leftNumber + "px");
	   }
		
}  

let contIzd = 1;

console.log(topBolaNumber)

function saltarBolaIzq(){
			//console.log(topNumber);
			
			if (contIzd <= 20) {
				topBolaNumber -= 8;
				bola.style.setProperty("top", topBolaNumber + "px");
				leftBolaNumber -= 2;
	   			bola.style.setProperty("left", leftBolaNumber + "px");
				contIzd++;}
				
			if (contIzd >= 20) {
				topBolaNumber += 8;
				bola.style.setProperty("top", topBolaNumber + "px");
				leftBolaNumber -= 2;
	   			bola.style.setProperty("left", leftBolaNumber + "px");
				contIzd++;
				}
			if (topBolaNumber >= topNumber) {
				contIzd = 1;
				leftNumber = leftBolaNumber;
				clearInterval(saltarBolaIzqId);
				}
}

function saltarBolaDca(){
			//console.log(topNumber);
			
			if (contIzd <= 20) {
				topBolaNumber -= 8;
				bola.style.setProperty("top", topBolaNumber + "px");
				leftBolaNumber += 2;
	   			bola.style.setProperty("left", leftBolaNumber + "px");
				contIzd++;}
				
			if (contIzd >= 20) {
				topBolaNumber += 8;
				bola.style.setProperty("top", topBolaNumber + "px");
				leftBolaNumber += 2;
	   			bola.style.setProperty("left", leftBolaNumber + "px");
				contIzd++;
				}
			if (topBolaNumber >= topNumber) {
				contIzd = 1;
				leftNumber = leftBolaNumber;
				clearInterval(saltarBolaIzqId);
				}
}






document.addEventListener('keydown', teclaPresionada);
document.addEventListener('keyup', teclasSoltadas);