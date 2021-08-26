<template>
  <div>
    <label>
      請輸入訊息:
      <input type="text" v-model="userEnteredValue" />
    </label>
    <h2>用戶輸入的訊息:{{ userEnteredValue }}</h2>
  </div>
</template>

<script>
import { reactive, ref, toRef, toRefs, customRef } from "vue";

export default {
  name: "App",

  setup() {
    //* customRef 自定義一個ref函數，可透過customRef API設定當有人讀取、修改這個自定義ref函數所定義出的數據時要做啥動作。
    //* 等於說可以自定義出一個含有自己的邏輯的ref函數

    //*  自定義一個數據一秒後才會響應式呈現的ref
    const delayOneSecondShow = function(value) {
      //* 使用customRef API自定義一個ref函數
      return customRef((track, trigger) => {
        let timer;
        return {
          get() {
            console.log(`有人讀取了delayOneSecondShow容器裡的數據，${value}`);
            track(); //! track用意: 追蹤數據的改變，當數據遭改變時會接受新數據，等到有人在讀這個數據時就會給予新數據。 不寫這個set完的新數據get收不到
            return value;
          },

          set(newValue) {
            //! 防抖  當計時器計時期間又開啟了一次計時器時，就關掉前一個重新計時，這樣最終就只會執行一次完整計時完成後時觸發的回調。
            clearTimeout(timer);
            timer = setTimeout(() => {
              console.log(
                `有人修改了delayOneSecondShow容器裡的數據， 改為${newValue}`
              );
              value = newValue;
              trigger(); //! trigger用意:通知Vue說，有人修改數據了 請重新解析模板!
            }, 1000);
          },
        };
      });
    };

    let userEnteredValue = delayOneSecondShow("");

    return {
      userEnteredValue,
    };
  },
};
</script>

<style></style>
