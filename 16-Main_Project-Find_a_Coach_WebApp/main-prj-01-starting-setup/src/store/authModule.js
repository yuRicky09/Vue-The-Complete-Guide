let timer;

//! authModule不加namespace是因為想維持之前寫的code讓auth模組能被併到store裡的root，讓其他模組一樣能從rootGetters拿到想要的東西
//! https://firebase.google.com/docs/reference/rest/auth?authuser=0#section-create-email-password firebase 透過信箱密碼創立帳號的doc
export default {
  state() {
    //! Vuex只要知道現在發送request的user是誰再給他她可看的資料就好，所以當然只存現在這個使用者的資訊， 而firebase就要把所有在此網站註冊的使用者全部存下來。
    return {
      //* signup or login之後，我們就會透過firebase的API獲得這些認證資訊，把這些資訊存入Vuex後就能藉由這些資訊做權限認證。(記住只有這樣的話按f5重整或重輸入url發request都會讓App重啟造成狀態不見，所以還要靠localstorage幫忙 才能達成自動login等功能。)  要logout的話只要把這些認證資訊清除就好(真正需要存的用戶資料等都已存於database中)
      token: null,
      userId: null,
      isAutoLogout: false
    };
  },
  actions: {
    async authMode(context, data) {
      const fetchUrlMode =
        data.authMode === 'signup' ? 'signUp' : 'signInWithPassword';

      const res = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:${fetchUrlMode}?key=AIzaSyBEJnVRqnoYubz5zqNg_S3A8NJK_9bR77U`,
        {
          method: 'POST',
          body: JSON.stringify({
            email: data.email,
            password: data.password,
            returnSecureToken: true
          })
        }
      );

      const resData = await res.json();
      if (!res.ok) {
        console.log(resData);
        const error = new Error(resData.message || 'Fail to signup');
        throw error;
      }

      console.log('成功後得到的response:', resData);

      //! 當用戶透過firebase提供的api接口創立帳戶成功時，得到的response內就會有一些我們想要的資訊 如下
      //! firebase預設token有效時間為3600秒===1hours 此資訊會存於response的expiresIn屬性

      //將時間轉為毫秒 方便計時器倒數
      const tokenExpirationTime =
        +resData.expiresIn * 1000 + new Date().getTime();
      const authTokenData = {
        token: resData.idToken,
        userId: resData.localId,
        tokenExpirationTime
      };
      //! 將token等重要資訊存於localstorage，讓用戶關掉網頁後再一定時間內回來也能自動登入
      localStorage.setItem('token', JSON.stringify(authTokenData));

      timer = setTimeout(() => {
        context.dispatch('logout', 'isAutoLogout');
      }, 15000);

      context.commit('setUser', {
        token: resData.idToken,
        userId: resData.localId
      });
    },
    logout(context, data) {
      clearTimeout(timer);
      localStorage.clear('token');

      if (data === 'isAutoLogout') {
        context.dispatch('autoLogout');
      }

      context.commit('setUser', {
        token: null,
        userId: null
      });
    },
    autoLogin(context, authTokenData) {
      //! 判斷token是否過期，過期則不讓用戶能自動登入， 沒過期的話則自動登入，並重新繼續倒數。
      const tokenExpirationDiff =
        +authTokenData.tokenExpirationTime - new Date().getTime();
      console.log(tokenExpirationDiff);
      if (tokenExpirationDiff < 0) {
        console.log('我要強制登出摟');
        context.dispatch('logout');
      } else {
        timer = setTimeout(() => {
          context.dispatch('logout', 'isAutoLogout');
        }, tokenExpirationDiff);
        console.log('重新倒數中');
        context.commit('setUser', {
          token: authTokenData.token,
          userId: authTokenData.userId
        });
      }
    },
    autoLogout(context) {
      context.commit('autoLogout');
    }
    // autoLogout(context) {
    //   context
    // }
    // async signup(context, data) {
    //   //* 使用信箱密碼方法創帳戶時 提交的body就必須要有這兩個屬性
    //   console.log(data);
    //   const res = await fetch(
    //     'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBEJnVRqnoYubz5zqNg_S3A8NJK_9bR77U',
    //     {
    //       method: 'POST',
    //       body: JSON.stringify({
    //         email: data.email,
    //         password: data.password,
    //         returnSecureToken: true
    //       })
    //     }
    //   );

    //   const resData = await res.json();
    //   if (!res.ok) {
    //     console.log(resData);
    //     const error = new Error(resData.message || 'Fail to signup');
    //     throw error;
    //   }

    //   console.log('singup成功後得到的response:', resData);

    //   //! 當用戶透過firebase提供的api接口創立帳戶成功時，得到的response內就會有一些我們想要的資訊 如下
    //   context.commit('setUser', {
    //     token: resData.idToken,
    //     userId: resData.localId,
    //   });
    // },
    // async login(context, data) {
    //   const res = await fetch(
    //     'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBEJnVRqnoYubz5zqNg_S3A8NJK_9bR77U',
    //     {
    //       method: 'POST',
    //       body: JSON.stringify({
    //         email: data.email,
    //         password: data.password,
    //         returnSecureToken: true
    //       })
    //     }
    //   );

    //   const resData = await res.json();
    //   if (!res.ok) {
    //     console.log(resData);
    //     const error = new Error(resData.message || 'Fail to login');
    //     throw error;
    //   }
    //   context.commit('setUser', {
    //     token: resData.idToken,
    //     userId: resData.localId,
    //   });
    // },
  },
  mutations: {
    setUser(state, data) {
      state.token = data.token;
      state.userId = data.userId;
    },
    autoLogout(state) {
      state.isAutoLogout = true;
      console.log('安安安', state.isAutoLogout);
    }
  },
  getters: {
    userId(state) {
      return state.userId;
    },
    token(state) {
      return state.token;
    },
    isAuthenticated(state) {
      //把這個資料轉成trusy falsy
      return !!state.token;
    },
    isAutoLogout(state) {
      return state.isAutoLogout;
    }
  }
};
