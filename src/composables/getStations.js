import { ref } from '@vue/reactivity';

const getStations = () => {
  const stations = ref([]);
  const error = ref(null);
  const loading = ref(false);
  const load = async () => {
    try {
      loading.value = true;
      let data = await fetch('http://localhost:3000/stations');
      if (!data.ok) {
        throw Error('Sorry, no data available');
      }
      stations.value = await data.json();
      loading.value = false;
    } catch (err) {
      error.value = err.message;
      loading.value = false;
      console.log(error.value);
    }
  };
  return { stations, error, loading, load };
};
export default getStations;
