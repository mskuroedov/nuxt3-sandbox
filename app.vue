<template>
  <div class="bg-cyan-950 min-h-screen">
    <div class="flex gap-2 p-6 justify-center bg-white/10 mb-12">
      <btn1 @click="$router.push('/')">home</btn1>
      <btn1 @click="$router.push('/test')">test</btn1>
    </div>
    <div class="container px-2">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>
