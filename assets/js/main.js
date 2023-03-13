const addButton = document.querySelector('#addButton')
const modal = document.querySelector('#modal')
const saveButton = document.querySelector('#saveButton')
const table = document.querySelector('#table')
const companyInput = document.querySelector('#companyName')
const contactInput = document.querySelector('#contactName')
const countryInput = document.querySelector('#countryName')
const inputs = document.querySelectorAll('input')
const deleteButton = document.getElementById('deleteButton')



addButton.addEventListener('click', () => {
  modal.style.display = 'block'
  inputs.forEach(input => input.value = '')
})

// when user clicks outside de modal, it closes
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



let clients = [
  
]



saveButton.addEventListener('click', () => {
  

  companyName = companyInput.value
  contactName = contactInput.value
  countryName = countryInput.value

  const addClient = {
    id: (clients.length + 1),
    company: companyName,
    contact: contactName,
    country: countryName
  }

  clients.push(addClient)
  

  table.innerHTML = `
      <tr>
        <th>ID</th>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
        <th>Edit | Delete</th>
      </tr>
      `
  var displayClients = clients.map((client, i) => {
    return `
          
      <tr>
        <td>${client.id}</td>
        <td>${client.company}</td>
        <td>${client.contact}</td>
        <td>${client.country}</td>
        <td><i id="editButton" class="fa-solid fa-pen"></i><i id="deleteButton" class="fa-solid fa-trash"></i></td>
      </tr>
    `
  })
  
  table.innerHTML += displayClients.join("")
  modal.style.display = "none";


  var deleteButton = document.querySelectorAll('#deleteButton');
  deleteButton.forEach((button) => {
    button.addEventListener('click', (e) => {
      const id = Number(e.target.parentElement.parentElement.firstChild.nextSibling.innerHTML)
      
      const clientsFiltered = clients.filter((client) => {
        if (client.id !== id) {
          return true
        }
      })

      table.innerHTML = `
      <tr>
        <th>ID</th>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
        <th>Edit | Delete</th>
      </tr>
      `

      var displayFiltered = clientsFiltered.map((client) => {
        return `
          <tr>
            <td>${client.id}</td>
            <td>${client.company}</td>
            <td>${client.contact}</td>
            <td>${client.country}</td>
            <td><i id="editButton" class="fa-solid fa-pen"></i><i id="deleteButton" class="fa-solid fa-trash"></i></td>
          </tr>
        `
      })
      table.innerHTML += displayFiltered.join("")
    })
  })
  
  
  
})







/*

*/








