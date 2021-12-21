import { ref } from '@vue/reactivity';

const getPart = (id) => {
  const part = ref(null);
  const partError = ref(null);
  const partLoading = ref(false);
  const partLoad = async () => {
    try {
      partLoading.value = true;
      // let data = await fetch('http://localhost:3000/parts/' + id);
      let data = await fetch('http://localhost:3000/parts/1');
      if (!data.ok) {
        throw Error(
          "We're sorry. The Web address you entered is not a functioning page on our site."
        );
      }
      part.value = await data.json();
      partLoading.value = false;
    } catch (err) {
      partError.value = err.message;
      partLoading.value = false;
      console.log(partError.value);
    }
  };
  return { part, partError, partLoading, partLoad };
};
export default getPart;
