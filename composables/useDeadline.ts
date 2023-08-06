export function useDeadline(ddlTime: string, startTime?: string) {
  const targetDate = ref(ddlTime);
  const remainingTime = ref(0);
  let totalTime = ref(
    startTime
      ? new Date(ddlTime).getTime() - new Date(startTime).getTime()
      : null
  );

  let interval: Timer | null = null;

  function startCountdown() {
    interval = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate.value).getTime();
      const diff = target - now;
      remainingTime.value = diff > 0 ? diff : 0;
    }, 1000);
  }

  const days = computed(() =>
    Math.floor(remainingTime.value / (1000 * 60 * 60 * 24))
  );
  const hours = computed(() =>
    Math.floor((remainingTime.value / (1000 * 60 * 60)) % 24)
  );
  const minutes = computed(() =>
    Math.floor((remainingTime.value / 1000 / 60) % 60)
  );
  const seconds = computed(() => Math.floor((remainingTime.value / 1000) % 60));
  const passedTime = computed(() =>
    totalTime.value ? totalTime.value - remainingTime.value : 0
  );
  onMounted(() => {
    startCountdown();
  });

  onBeforeUnmount(() => {
    if (interval) {
      clearInterval(interval);
    }
  });
  const text = computed(() => {
    if (remainingTime.value > 0) {
      //       return `${days.value} дней, ${hours.value} часов, ${minutes.value} минут, and
      // ${seconds.value} секунд до ${targetDate.value}`;

      return `${days.value} дней, ${hours.value} часов, ${minutes.value} минут, ${seconds.value} секунд`;
    } else {
      return 'Окончено';
    }
  });
  return {
    totalTime,
    passedTime,
    text,
  };
}
