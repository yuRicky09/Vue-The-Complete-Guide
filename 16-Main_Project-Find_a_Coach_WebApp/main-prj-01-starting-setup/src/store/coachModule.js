export default {
  namespaced: true,
  state() {
    return {
      coaches: [],
      lastFetchTimestamp: null
    };
  },
  actions: {
    async addCoachData(context, data) {
      const coachId = context.rootGetters.userId;

      const token = context.rootGetters.token;
      const res = await fetch(
        `https://find-a-coach-cdacd-default-rtdb.firebaseio.com/coaches/${coachId}.json?auth=${token}`,
        {
          method: 'PUT',
          body: JSON.stringify(data)
        }
      );

      if (!res.ok) {
        console.log('有錯誤');
      }

      const registerData = {
        ...data,
        id: coachId
      };

      context.commit('addCoachData', registerData);
    },

    //! 因為有設置refresh按鈕可供用戶強制reload最新data，所以我們可以設置當前次與這次切換到coaches route時，時間很近的話不重新reload的設定(就用之前緩存的檔案)。
    async loadCoachData(context, reloadByRefreshBtn) {
      //! 判斷時否要進行reload
      const nowTime = new Date().getTime();
      const timePassMoreThanOneMin =
        (nowTime - context.state.lastFetchTimestamp) / 1000 > 60;

      //! 當已有時間戳(但表不是初始化)且上次reload距離這次不超過1分鐘
      if (
        context.state.lastFetchTimestamp !== null &&
        !timePassMoreThanOneMin &&
        !reloadByRefreshBtn
      ) {
        return;
      }

      const res = await fetch(
        `https://find-a-coach-cdacd-default-rtdb.firebaseio.com/coaches.json`
      );

      const data = await res.json();

      // if (!res.ok) {
      //   console.log('log', data);
      //   throw new Error();
      // }

      //! 因為firebase存資料是用巢狀obj方式來存 我們要先轉換格式為想要的陣列格式
      //! for in 可以遍歷出obj的所有key
      const coaches = [];
      for (let coachId in data) {
        const coach = {
          id: coachId,
          firstName: data[coachId].firstName,
          lastName: data[coachId].lastName,
          description: data[coachId].description,
          hourlyRate: data[coachId].hourlyRate,
          areas: data[coachId].areas
        };

        coaches.push(coach);
      }
      //! 可以同時commit多個任務
      context.commit('loadCoachData', coaches);
      context.commit('lastFetchTime');
    }
  },
  mutations: {
    lastFetchTime(state) {
      //* getTime method可以拿到從1970年開始到現在的毫秒數
      state.lastFetchTimestamp = new Date().getTime();
    },
    addCoachData(state, data) {
      state.coaches.push(data);
    },
    loadCoachData(state, data) {
      state.coaches = data;
    }
  },
  getters: {
    coaches(state) {
      return state.coaches;
    },
    hasCoach(state) {
      return state.coaches && state.coaches.length > 0;
    },
    isCoach(_, getters, _2, rootGetters) {
      return getters.coaches.some(coach => coach.id === rootGetters.userId);
    }
  }
};
