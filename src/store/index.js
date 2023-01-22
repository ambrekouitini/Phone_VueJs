import { createStore } from 'vuex'

export default createStore({
  state: {
    contacts: [
      {
        name: 'Amber',
        number: '0606060606',
      },
      {
        name: 'Amino',
        number: '0605050505',
      },
      {
        name: 'Jibou',
        number: '0604040404',
      },
    ],
    journal : [],
  },
  getters: {
  },
  mutations: {
    addContact(state, contact) {
      state.contacts.push(contact)
    },

    callContact(state, contact) {
      state.journal.push(contact)
    },

    callNumber(state,contact) {
      state.journal.push(contact)
    },

    matchingContact(state, contact) {
      state.journal.push(contact)
    },
    
  },
  actions: {
  },
  modules: {
  }
})
