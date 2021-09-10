<template>
  <div>
    <base-dialog :show="!!errorMessage" title="認證失敗" @close="handelError">
      {{ errorMessage }}
    </base-dialog>
    <base-dialog :show="isLoading" title="帳號驗證中..." fixed="fixed">
      <base-spinner></base-spinner>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitData">
        <div class="form-control">
          <label for="email">E-mail:</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model.trim="password" />
        </div>
        <div v-if="!formIsvalid">
          <p>表單不正確，請確實填入。密碼須至少6碼</p>
        </div>
        <base-button>{{ actionBtnName }}</base-button>
        <!-- 下面這個按鈕沒有要提交東西，只是要作模式轉換 所以添加type='button -->
        <base-button type="button" mode="flat" @click="changeAuthMode">{{
          insteadActionBtnName
        }}</base-button>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  name: 'UserAuth',
  data() {
    return {
      email: '',
      password: '',
      formIsvalid: true,
      mode: 'login',
      isLoading: false,
      errorMessage: null,
      fixed: true
    };
  },
  computed: {
    actionBtnName() {
      return this.mode === 'login' ? 'Login' : 'Signup';
    },
    insteadActionBtnName() {
      return this.mode === 'login' ? 'Instead Signup' : 'Instead Login';
    }
  },
  methods: {
    async submitData() {
      this.formIsvalid = true;

      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.password.length < 6
      ) {
        this.formIsvalid = false;
        return;
      }

      const userInfor = {
        email: this.email,
        password: this.password
      };

      this.isLoading = true;

      try {
        //必須寫await， 等await完後我們才能再把loading狀態改為false。 不寫await的話 loading就會直接跳成false
        if (this.mode === 'login') {
          userInfor.authMode = 'login';
          await this.$store.dispatch('authMode', userInfor);
        } else if (this.mode === 'signup') {
          userInfor.authMode = 'signup';
          await this.$store.dispatch('authMode', userInfor);
        }

        // 不同登入狀況將會跳轉不同網頁 提高用戶體驗
        this.$route.query.jumpToRegister
          ? this.$router.replace('/register')
          : this.$router.replace('/coaches');
      } catch (error) {
        this.errorMessage = error.message;
      }

      this.isLoading = false;
    },
    changeAuthMode() {
      this.mode === 'login' ? (this.mode = 'signup') : (this.mode = 'login');
    },
    handelError() {
      this.errorMessage = null;
    }
  }
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>
