

const Main = {
  init: function () {
    this.cacheSelectors()
    this.bindEvents()
    
  },

  cacheSelectors: function () {
    this.addButton = document.querySelector('#addButton')
    this.modal = document.querySelector('#modal')
    this.saveButton = document.querySelector('#saveButton')
    this.table = document.querySelector('#table')
    this.companyInput = document.querySelector('#companyName')
    this.contactInput = document.querySelector('#contactName')
    this.countryInput = document.querySelector('#countryName')
    this.inputs = document.querySelectorAll('input')
    this.clients = []
  },

  bindEvents: function () {
    this.addButton.addEventListener('click', this.Events.addButton_click.bind(this))
    window.onclick = this.Events.closeModal_click
    this.saveButton.addEventListener('click', this.Events.saveClient_click.bind(this))
  },


  Events: {
    addButton_click:function () {
      modal.style.display = 'block'
      this.inputs.forEach(input => {
        input.value = ''
      })
    },

    closeModal_click: function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    },

    

    saveClient_click: function () {
      
      
      companyName = this.companyInput.value
      contactName = this.contactInput.value
      countryName = this.countryInput.value

      /*
      const addClient = {
        id: (clients.length + 1),
        company: companyName,
        contact: contactName,
        country: countryName
      }

      clients.push(addClient)
      */
      console.log(this.clients)
      modal.style.display = "none";

    }
  }


}

Main.init()

/*




addButton.addEventListener('click', () => {
  this.inputs.forEach(input => input.value = '')
})

// when user clicks outside de modal, it closes
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



function displayClients () {
  table.innerHTML = `
      <thead>
        <tr>
          <th>ID</th>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
          <th>Edit | Delete</th>
        </tr>
        <thead>  
      `
  var setClients = clients.map((client, i) => {
    return `
          
      <tbody>
        <tr>
          <td>${client.id}</td>
          <td>${client.company}</td>
          <td>${client.contact}</td>
          <td>${client.country}</td>
          <td><i id="editButton" class="fa-solid fa-pen"></i><i id="deleteButton" class="fa-solid fa-trash"></i></td>
        </tr>
      </tbody>
    `
    
  })

  table.innerHTML += setClients.join("")
  modal.style.display = "none";
}


let clients = [
  
]

saveButton.addEventListener('click', saveClient) 

function saveClient() {
  

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
  
  displayClients()

  
}


/////////

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
*/

