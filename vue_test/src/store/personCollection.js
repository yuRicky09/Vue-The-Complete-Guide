import { nanoid } from "nanoid";

export default {
  namespaced: true,
  actions: {
    addPerson(content, value) {
      const personInfo = {
        id: nanoid(),
        name: value,
      };
      content.commit("AddPerson", personInfo);
    },
  },
  mutations: {
    AddPerson(state, value) {
      state.personList.unshift(value);
    },
  },
  state: {
    personList: [],
  },
};
