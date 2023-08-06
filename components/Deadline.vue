<script lang="ts">
import RadialProgressBar from 'vue3-radial-progress';
export default {
  components: {
    RadialProgressBar,
  },
};
</script>

<script setup lang="ts">
const { startDate, endDate, done, total, title } = defineProps<{
  startDate: string;
  endDate: string;
  done: nubmer;
  total: number;
  title?: string;
}>();
const { text, totalTime, passedTime } = useDeadline(endDate, startDate);
</script>

<template>
  <div
    class="
      relative
      flex
      w-auto
      flex-col
      rounded-xl
      bg-white bg-clip-border
      text-gray-700
      shadow-md
      mt-6
    "
  >
    <div
      class="
        relative
        mx-4
        -mt-6
        h-40
        overflow-hidden
        rounded-xl
        bg-blue-gray-500 bg-clip-border
        text-white
        shadow-lg shadow-blue-gray-500/40
        bg-gradient-to-r
        from-blue-500
        to-blue-600
      "
    >
      <div class="grid grid-cols-2 items-center h-full">
        <div class="flex flex-col items-center justify-center">
          <span class="text-sm font-bold"> PROGRESS</span>
          <radial-progress-bar
            :diameter="80"
            :completed-steps="done"
            :total-steps="total"
            :start-color="'#9EFF29'"
            :stop-color="'#29F8FF'"
            :inner-stroke-color="'transparent'"
          >
            <span class="text-xs">{{ (done / total) * 100 }} %</span>
          </radial-progress-bar>
        </div>

        <div class="flex flex-col items-center justify-center">
          <span class="text-sm font-bold"> TIME</span>
          <radial-progress-bar
            :diameter="80"
            :completed-steps="passedTime"
            :total-steps="totalTime"
            :start-color="'#FF1515'"
            :stop-color="'#29F8FF'"
            :inner-stroke-color="'transparent'"
          >
            <span class="text-xs"
              >{{ ((passedTime / totalTime) * 100).toFixed(0) }} %</span
            >
          </radial-progress-bar>
        </div>
      </div>
    </div>
    <div class="p-6">
      <h5
        class="
          mb-2
          block
          font-sans
          text-xl
          font-semibold
          leading-snug
          tracking-normal
          text-blue-gray-900
          antialiased
        "
      >
        {{ title }} <br />
        {{ done }}/{{ total }} BLOCKS <br />
      </h5>
      <p
        class="
          block
          font-sans
          text-base
          font-light
          leading-relaxed
          text-inherit
          antialiased
        "
      >
        {{ text }}
      </p>
    </div>
  </div>
</template>
