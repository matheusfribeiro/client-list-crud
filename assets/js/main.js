const addButton = document.querySelector('#addButton')
const modal = document.querySelector('#modal')

addButton.addEventListener('click', () => {
  modal.style.display = 'block'
})

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}