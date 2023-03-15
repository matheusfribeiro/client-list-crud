

const Main = {
  init: function () {
    this.cacheSelectors()
    this.bindEvents()
    
    
  },

  cacheSelectors: function () {
    this.addButton = document.querySelector('#addButton')
    this.modal = document.querySelector('#modal')
    this.saveButton = document.querySelector('#saveButton')
    this.tbody = document.querySelector('#tbody')
    this.companyInput = document.querySelector('#companyName')
    this.contactInput = document.querySelector('#contactName')
    this.countryInput = document.querySelector('#countryName')
    this.inputs = document.querySelectorAll('input')
    this.removeButtons = document.querySelectorAll('#deleteButton')
    this.clients = []
  },



  bindEvents: function () {
    const self = this

    this.addButton.addEventListener('click', this.Events.addButton_click.bind(this))

    window.onclick = this.Events.closeModal_click

    this.saveButton.addEventListener('click', this.Events.saveClient_click.bind(this))

    this.removeButtons.forEach(function(button) {
      button.onclick = self.Events.removeButton_click
    })
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
      const clientsScoped = this.clients
      
      companyName = this.companyInput.value
      contactName = this.contactInput.value
      countryName = this.countryInput.value

      const addClient = {
        id: (clientsScoped.length + 1),
        company: companyName,
        contact: contactName,
        country: countryName
      }

      if (companyName && contactName && countryName) {
        clientsScoped.push(addClient)
        modal.style.display = "none";
      } else {
        alert('All fields are required')
      }
      
      this.displayClients()
    
    },

    removeButton_click: function () {
      alert('test for echo')
    }
  },

  displayClients: function () {
    clientsScoped = this.clients
    this.tbody.innerHTML = null
    

    clientsScoped.map((client) => {
      this.tbody.innerHTML += `
        <tr>
          <td>${client.id}</td>
          <td>${client.company}</td>
          <td>${client.contact}</td>
          <td>${client.country}</td>
          <td><i id="editButton" class="fa-solid fa-pen"></i><i id="deleteButton" class="fa-solid fa-trash"></i></td>
        </tr>
      `
      console.log(clientsScoped)
      this.cacheSelectors()
      this.bindEvents()
    }).join('')
  },


}

Main.init()

/*


this.table.innerHTML +=  `

            <tr>
              <td>1</td>
              <td>${client.company}</td>
              <td>${client.contact}</td>
              <td>${client.country}</td>
              <td><i id="editButton" class="fa-solid fa-pen"></i><i id="deleteButton" class="fa-solid fa-trash"></i></td>
            </tr>
          `

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

