//const camera = new CameraController();

const buttonPanelRec = document.querySelector('#buttonPanelRec');
const buttonPanelPic = document.querySelector('#buttonPanelPic');
const buttonCancel = document.querySelector('#buttonCancel');
const panelCamera = document.querySelector('.container');

buttonPanelRec.addEventListener('click', event => {
  console.log("Rec");
  buttonCancel.classList.remove('off');
  panelCamera.classList.remove('off');
  // passr parametro para cameraController
  // Em um metodo tirarFotoOuGravar
});

buttonPanelPic.addEventListener('click', event => {
  console.log("Pic");
  buttonCancel.classList.remove('off');
  panelCamera.classList.remove('off');
  // passr parametro para cameraController
  // Em um metodo tirarFotoOuGravar
});

buttonCancel.addEventListener('click', event => {
  console.log("Can")
  buttonCancel.classList.add('off');
  panelCamera.classList.add('off');
});

panelCamera.addEventListener('click', event => {
  alert('Logica para Gravar ou Capturar');
});