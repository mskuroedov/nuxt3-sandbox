const globCount = ref(1);
export function useCounter() {
  const count = ref(1);
  const increment = () => {
    globCount.value++;
  };
  return {
    count: globCount,
    increment,
  };
}
