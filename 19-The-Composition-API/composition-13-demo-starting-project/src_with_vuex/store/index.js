import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      users: [
        {
          id: 'max',
          fullName: 'Maximilian Schwarzmüller',
          projects: [
            { id: 'max_p1', title: 'Record the Vue course' },
            { id: 'max_p2', title: 'Create more courses' },
            { id: 'max_p3', title: 'Keep content updated' }
          ]
        },
        {
          id: 'manu',
          fullName: 'Manuel Lorenz',
          projects: [
            { id: 'manu_p1', title: 'Create more courses' },
            { id: 'manu_p2', title: 'Dive into data science topics' },
            { id: 'manu_p3', title: 'Various things' }
          ]
        },
        {
          id: 'julie',
          fullName: 'Julie Jones',
          projects: [
            { id: 'julie_p1', title: 'Create agenda for next months' },
            { id: 'julie_p2', title: 'Explore new topics' }
          ]
        },
        {
          id: 'michael',
          fullName: 'Michael Miller',
          projects: []
        }
      ],
      selectedUser: '',
      inputEnteredValue: ''
    };
  },
  actions: {},
  mutations: {
    changeSelectedUser(state, selectedUser) {
      state.selectedUser = selectedUser;
    },
    updateInputEnteredValue(state, value) {
      state.inputEnteredValue = value;
    }
  },
  getters: {
    users(state) {
      return state.users;
    },
    selectedUser(state) {
      return state.selectedUser;
    },
    selectedUserProjects(state, getters) {
      const selectedUserData = state.users.find(
        user => user.id === getters.selectedUser
      );
      if (!selectedUserData) return;
      return selectedUserData.projects;
    }
  }
});

export default store;
