<template>
  <form @submit.prevent="submitData">
    <div class="form-control" :class="{ invalid: !dataIsValid.firstName }">
      <label for="firstname">Firstname</label>
      <input
        type="text"
        id="firstname"
        v-model.trim="firstName"
        @blur="checkEnteredValue('firstName')"
      />
    </div>
    <div class="form-control" :class="{ invalid: !dataIsValid.lastName }">
      <label for="lastname">Lastname</label>
      <input
        type="text"
        id="lastname"
        v-model.trim="lastName"
        @blur="checkEnteredValue('lastName')"
      />
    </div>
    <div class="form-control" :class="{ invalid: !dataIsValid.desc }">
      <label for="description">Description</label>
      <input
        type="textarea"
        id="description"
        row="5"
        v-model.trim="desc"
        @blur="checkEnteredValue('desc')"
      />
    </div>
    <div class="form-control" :class="{ invalid: !dataIsValid.rate }">
      <label for="rate">Hourly Rate</label>
      <input
        type="number"
        id="rate"
        min="0"
        v-model.number="rate"
        @blur="checkEnteredValue('rate')"
      />
    </div>
    <div class="from-control" :class="{ invalid: !dataIsValid.areas }">
      <h3>Areas of Expertise</h3>
      <div>
        <input
          type="checkbox"
          value="frontend"
          v-model="areas"
          @blur="checkEnteredValue('area')"
        />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="backend"
          v-model="areas"
          @blur="checkEnteredValue('area')"
        />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="career"
          v-model="areas"
          @blur="checkEnteredValue('area')"
        />
        <label for="career">Career Advisory</label>
      </div>
    </div>
    <p v-if="hasError" :class="{ invalid: hasError }">
      Please fix Your form. Cannot have empty field.
    </p>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  name: 'Coachform',
  emits: ['save-data'],
  data() {
    return {
      firstName: '',
      lastName: '',
      desc: '',
      rate: null,
      areas: [],
      dataIsValid: {
        firstName: true,
        lastName: true,
        desc: true,
        rate: true,
        areas: true
      },
      hasError: false
    };
  },
  methods: {
    checkEnteredValue(type) {
      if (type === 'firstName') {
        this.firstName === ''
          ? (this.dataIsValid.firstName = false)
          : (this.dataIsValid.firstName = true);
      }
      if (type === 'lastName') {
        this.lastName === ''
          ? (this.dataIsValid.lastName = false)
          : (this.dataIsValid.lastName = true);
      }
      if (type === 'desc')
        this.desc === ''
          ? (this.dataIsValid.desc = false)
          : (this.dataIsValid.desc = true);
      if (type === 'rate')
        !this.rate
          ? (this.dataIsValid.rate = false)
          : (this.dataIsValid.rate = true);
      if (type === 'area')
        this.areas.length > 0
          ? (this.dataIsValid.areas = true)
          : (this.dataIsValid.areas = false);
    },
    validateAllData() {
      const { firstName, lastName, desc, rate, areas } = this.dataIsValid;

      if (
        firstName &&
        lastName &&
        desc &&
        rate &&
        areas &&
        //! 設計瑕疵 防止用戶啥都不填就送單能成功(因為為了不讓錯誤class一開始就出現，先設定全部為合法值)
        this.areas.length > 0
      ) {
        this.hasError = false;
      } else {
        this.hasError = true;
      }
    },
    submitData() {
      this.validateAllData();
      if (this.hasError) return;
      const registerData = {
        firstName: this.firstName,
        lastName: this.lastName,
        description: this.desc,
        hourlyRate: this.rate,
        areas: this.areas
      };

      this.$emit('save-data', registerData);
    }
  }
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}

p.invalid {
  color: red;
}
</style>
