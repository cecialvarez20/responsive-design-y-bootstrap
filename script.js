const btnOpciones = document.getElementById('btnOpciones');
const listOpciones = document.getElementById('listOpciones');

btnOpciones.addEventListener('click', () => {
  if (btnOpciones.getAttribute('data-clicked') === "")
    listOpciones.classList.add('d-none', 'd-lg-block');
  else
    listOpciones.classList.remove('d-none', 'd-lg-block');

  btnOpciones.toggleAttribute('data-clicked');
});
