

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
    this.clients = []
    this.editId = null
    this.id = 1
  },

  bindEvents: function () {
    const self = this

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
      const clientsScoped = this.clients
      
      companyName = this.companyInput.value
      contactName = this.contactInput.value
      countryName = this.countryInput.value

      const addClient = {
        id: Main.id,
        company: companyName,
        contact: contactName,
        country: countryName
      }

      if (companyName && contactName && countryName) {
        if (this.editId == null) {
          clientsScoped.push(addClient)
          Main.id++
          modal.style.display = "none";
          this.displayClients()
        } else {
          this.Events.editUpdate(this.editId, addClient)
          modal.style.display = "none"
        }  
      } else {
        alert('All fields are required')
      }
    },

    removeButton_click: function (id) {
      clientsScoped = Main.clients

      for ( let i = 0; i < clientsScoped.length; i++) {
        if (clientsScoped[i].id == id) {
          clientsScoped.splice(i, 1)
          tablebody.deleteRow(i)
        }
      }
    },
    
    editButton_click: function (data) {
      Main.editId = data.id
      //console.log(this.editId)
      Main.inputs.forEach(input => {
        input.value = ''
      })
      modal.style.display = "block";
      Main.companyInput.value = data.company
      Main.contactInput.value = data.contact
      Main.countryInput.value = data.country

      let btn = Main.saveButton
      btn.innerText = 'UPDATE'
    },

    editUpdate: function (id, addClient) {
      clientsScoped = Main.clients
      console.log(addClient, id)

      for (let i = 0; i < clientsScoped.length; i++) {
        if(clientsScoped[i].id == id) { 
          clientsScoped[i].company = addClient.company
          clientsScoped[i].contact = addClient.contact
          clientsScoped[i].country = addClient.country
        }
      }
      Main.saveButton.innerText = 'SAVE'
      Main.editId = null
      Main.displayClients()
      console.log(clientsScoped)
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
    }
  },
}

Main.init()