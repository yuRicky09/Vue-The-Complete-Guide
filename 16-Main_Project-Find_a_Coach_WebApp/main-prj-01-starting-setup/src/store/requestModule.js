export default {
  namespaced: true,
  state() {
    return {
      requests: []
    };
  },
  actions: {
    async addRequest(context, data) {
      await fetch(
        'https://find-a-coach-cdacd-default-rtdb.firebaseio.com/requests.json',
        {
          method: 'POST',
          body: JSON.stringify(data)
        }
      );
      context.commit('addRequest', data);
    },
    async loadRequests(context) {
      const res = await fetch(
        'https://find-a-coach-cdacd-default-rtdb.firebaseio.com/requests.json'
      );
      const data = await res.json();
      const requests = [];

      for (let req in data) {
        const newRequest = {
          coachId: data[req].coachId,
          email: data[req].email,
          id: data[req].id,
          message: data[req].message
        };
        requests.push(newRequest);
      }

      context.commit('loadRequests', requests);
    }
  },
  mutations: {
    addRequest(state, data) {
      state.requests.push(data);
    },
    loadRequests(state, data) {
      state.requests = data;
    }
  },
  getters: {
    requests(state, _, _2, rootGetters) {
      return state.requests.filter(req => req.coachId === rootGetters.userId);
    },
    hasRequest(state, getters, _2, rootGetters) {
      return (
        state.requests.filter(req => req.coachId === rootGetters.userId) &&
        getters.requests.length > 0
      );
    }
  }
};
