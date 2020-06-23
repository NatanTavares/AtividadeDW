const buttonOnCamera = document.querySelector('#buttonOnCamera');
const buttonPanelRec = document.querySelector('#buttonPanelRec');
const buttonPanelPic = document.querySelector('#buttonPanelPic');
const buttonCancel = document.querySelector('#buttonCancel');
const panelCamera = document.querySelector('.container');

const videoCamera = document.querySelector('#video-camera');
var camera;

buttonOnCamera.addEventListener('click', event => {
  togglePanel(true);
  camera = new CameraController(videoCamera);
});

buttonPanelRec.addEventListener('click', event => {
  console.log("Rec");
  // passr parametro para cameraController
  // Em um metodo tirarFotoOuGravar
});

buttonPanelPic.addEventListener('click', event => {
  console.log("Pic");
  // passr parametro para cameraController
  // Em um metodo tirarFotoOuGravar
});

buttonCancel.addEventListener('click', event => {
  console.log("Can");
  togglePanel(false);
  camera.stop();
});

panelCamera.addEventListener('click', event => {
  console.log('Logica para Gravar ou Capturar');
});

function togglePanel(turn) {
  if (turn) {
    buttonOnCamera.classList.add('off');
    buttonCancel.classList.remove('off');
    buttonPanelRec.classList.remove('off');
    buttonPanelPic.classList.remove('off');
    panelCamera.classList.remove('off');
  } else {
    buttonOnCamera.classList.remove('off');
    buttonCancel.classList.add('off');
    buttonPanelRec.classList.add('off');
    buttonPanelPic.classList.add('off');
    panelCamera.classList.add('off');
  }
}