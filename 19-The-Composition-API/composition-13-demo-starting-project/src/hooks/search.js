import { ref, watch, computed } from 'vue';

export default function(items, prop) {
  const enteredSearchTerm = ref('');
  const activeSearchTerm = ref('');

  //! computed計算屬性得到的return值 就是一個read only的ref object
  const availableItems = computed(() => {
    let newItems = [];
    if (activeSearchTerm.value) {
      newItems = items.value.filter(item =>
        item[prop].includes(activeSearchTerm.value)
      );
    } else if (items.value) {
      newItems = items.value;
    }

    return newItems;
  });
  const updateSearch = function(val) {
    enteredSearchTerm.value = val;
  };

  watch(enteredSearchTerm, newVal => {
    setTimeout(() => {
      if (newVal === enteredSearchTerm.value) {
        activeSearchTerm.value = newVal;
      }
    }, 300);
  });

  return {
    enteredSearchTerm,
    activeSearchTerm,
    availableItems,
    updateSearch
  };
}
