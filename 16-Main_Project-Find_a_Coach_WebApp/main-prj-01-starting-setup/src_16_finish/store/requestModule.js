export default {
  namespaced: true,
  state() {
    return {
      requests: []
    };
  },
  actions: {
    async addRequest(context, data) {
      const newRequest = {
        email: data.email,
        message: data.message
      };

      const res = await fetch(
        `https://find-a-coach-cdacd-default-rtdb.firebaseio.com/requests/${data.coachId}.json`,
        {
          method: 'POST',
          body: JSON.stringify(newRequest)
        }
      );

      const resData = await res.json();

      newRequest.id = resData.name;
      newRequest.coachId = data.coachId;

      context.commit('addRequest', newRequest);
    },
    async loadRequests(context) {
      const coachId = context.rootGetters.userId;

      const res = await fetch(
        `https://find-a-coach-cdacd-default-rtdb.firebaseio.com/requests/${coachId}.json`
      );

      const data = await res.json();
      const requests = [];

      for (let req in data) {
        const newRequest = {
          id: req,
          coachId: coachId,
          email: data[req].email,
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
