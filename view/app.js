const buttonPanelRec = document.querySelector('#buttonPanelRec');
const buttonPanelPic = document.querySelector('#buttonPanelPic');
const buttonCancel = document.querySelector('#buttonCancel');
const panelCamera = document.querySelector('.container');

const camera = new CameraController();

buttonPanelRec.addEventListener('click', event => {
  console.log("Rec");
  togglePanel(true);
  // passr parametro para cameraController
  // Em um metodo tirarFotoOuGravar
});

buttonPanelPic.addEventListener('click', event => {
  console.log("Pic");
  togglePanel(true);
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
    buttonCancel.classList.remove('off');
    panelCamera.classList.remove('off');
  } else {
    buttonCancel.classList.add('off');
    panelCamera.classList.add('off');
  }
}