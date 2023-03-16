

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
    //this.removeButtons = document.querySelectorAll('.fa-trash')
    this.clients = []
  },



  bindEvents: function () {
    const self = this

    this.addButton.addEventListener('click', this.Events.addButton_click.bind(this))

    window.onclick = this.Events.closeModal_click

    this.saveButton.addEventListener('click', this.Events.saveClient_click.bind(this))

    /*
    this.removeButtons.forEach(function(button) {
      button.onclick = self.Events.removeButton_click
    })
    */
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
      let id = crypto.randomUUID()
      
      
      
      companyName = this.companyInput.value
      contactName = this.contactInput.value
      countryName = this.countryInput.value

      const addClient = {
        id: clientsScoped.length + 1,
        company: companyName,
        contact: contactName,
        country: countryName
      }

      if (companyName && contactName && countryName) {
        clientsScoped.push(addClient)
        modal.style.display = "none";
        this.displayClients()
      } else {
        alert('All fields are required')
      }
      
      
    
    },

    removeButton_click: function (id) {
      clientsScoped = Main.clients
      console.log(tablebody)

      
      for ( let i = 0; i < clientsScoped.length; i++) {
        if (clientsScoped[i].id == id) {
          clientsScoped.splice(i, 1)
          tablebody.deleteRow(i)
        }
      }
      
    },
    
    editButton_click: function (data) {
      Main.inputs.forEach(input => {
        input.value = ''
      })
      modal.style.display = "block";
      Main.companyInput.value = data.company
      Main.contactInput.value = data.contact
      Main.countryInput.value = data.company
    },

    editUpdate: function () {
      
    }
  },


  displayClients: function () {
    clientsScoped = this.clients
    tablebody = this.tbody
    tablebody.innerText = null

    for(let i = 0; i < clientsScoped.length; i++) {
      let tr = tablebody.insertRow()

      let td_id = tr.insertCell()
      let td_company = tr.insertCell()
      let td_contact = tr.insertCell()
      let td_country = tr.insertCell()
      let td_actions = tr.insertCell()

      td_id.innerText = clientsScoped[i].id
      td_company.innerText = clientsScoped[i].company
      td_contact.innerText = clientsScoped[i].contact
      td_country.innerText = clientsScoped[i].country

      let imgEdit = document.createElement("i")
      imgEdit.setAttribute("class", "fa-solid fa-pen")
      imgEdit.setAttribute("onclick", `Main.Events.editButton_click(${JSON.stringify(clientsScoped[i])})`)
      
      
      let imgDelete = document.createElement("i")
      imgDelete.setAttribute("class", "fa-solid fa-trash")
      imgDelete.setAttribute("onclick", `Main.Events.removeButton_click(${clientsScoped[i].id})`)
      
      td_actions.appendChild(imgEdit)
      td_actions.appendChild(imgDelete)
      
      console.log(clientsScoped)
      
      
    }
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

