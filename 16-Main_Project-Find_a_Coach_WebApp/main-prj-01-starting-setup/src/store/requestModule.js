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

      //! 我們再firebase的rule設置了request需要有token才可看 token用法如下
      const token = context.rootGetters.token;
      const res = await fetch(
        `https://find-a-coach-cdacd-default-rtdb.firebaseio.com/requests/${coachId}.json?auth=${token}`
      );

      const data = await res.json();
      const requests = [];

      if (!res.ok) {
        const error = new Error(data.error || 'fail to fetch data');

        //! 失敗就丟出error給外層的fn接(丟給呼叫dispatch的RequestList組件的loadRequestsList方法)
        throw error;
      }

      for (let req in data) {
        console.log(data[req].message);
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
