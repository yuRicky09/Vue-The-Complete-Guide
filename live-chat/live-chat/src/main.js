import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import { auth } from "../firebase/config.js";

let app;

//! 當我們重整頁面時會讓app整個初始化且firebase也是(要重新連結到backend)，所以當我們希望用戶在登入狀態下按重整時，能保持住登入狀態的話，
//! 我們就需要讓firebase先連結完成(抓出currentUser)，然後再讓app初始化完成。 (而且也加了判斷，當app已存在時權限改變不會再讓app被重new，只有初始的第一次才會)
//! 不這樣寫就會丟失狀態，因為firebase連結時為非同步(auth: null=> ???user)，所以app初始時所拿到的user為null，所以才要用這種callback方法，讓firebase連結完後才建app
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(router)
      .mount("#app");
  }
});
