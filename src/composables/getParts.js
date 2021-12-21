import { ref } from '@vue/reactivity';

const getParts = () => {
  const parts = ref([]);
  const partsError = ref(null);
  const partsLoading = ref(false);
  const partsload = async () => {
    try {
      partsLoading.value = true;
      let data = await fetch('http://localhost:3000/parts');
      if (!data.ok) {
        throw Error('Sorry, no data available');
      }
      parts.value = await data.json();
      partsLoading.value = false;
    } catch (err) {
      partsError.value = err.message;
      loading.value = false;
      console.log(partsError.value);
    }
  };
  return { parts, partsError, partsLoading, partsload };
};
export default getParts;
