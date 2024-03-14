<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import AOS from 'aos'

const loading = ref(true)

onMounted(() => {
  AOS.init()
  setTimeout(() => {
    loading.value = false
    document.body.style.overflow = 'auto'
  }, 3000)

  document.body.style.overflow = 'hidden'
})
</script>

<template>
  <div v-if="loading" class="loading-overlay">
    <div class="loader"></div>
  </div>
  <div class="container m-auto">
    <RouterView />
  </div>
</template>
<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loader {
  position: relative;
  font-size: 16px;
  width: 5.5em;
  height: 5.5em;
}

.loader:before {
  content: '';
  position: absolute;
  transform: translate(-50%, -50%) rotate(45deg);
  height: 100%;
  width: 4px;
  background: #fff;
  left: 50%;
  top: 50%;
}

.loader:after {
  content: '';
  position: absolute;
  left: 0.2em;
  bottom: 0.18em;
  width: 1em;
  height: 1em;
  background-color: orange;
  border-radius: 15%;
  animation: rollingRock 2.5s cubic-bezier(0.79, 0, 0.47, 0.97) infinite;
}

@keyframes rollingRock {
  0% {
    transform: translate(0, -1em) rotate(-45deg);
  }

  5% {
    transform: translate(0, -1em) rotate(-50deg);
  }

  20% {
    transform: translate(1em, -2em) rotate(47deg);
  }

  25% {
    transform: translate(1em, -2em) rotate(45deg);
  }

  30% {
    transform: translate(1em, -2em) rotate(40deg);
  }

  45% {
    transform: translate(2em, -3em) rotate(137deg);
  }

  50% {
    transform: translate(2em, -3em) rotate(135deg);
  }

  55% {
    transform: translate(2em, -3em) rotate(130deg);
  }

  70% {
    transform: translate(3em, -4em) rotate(217deg);
  }

  75% {
    transform: translate(3em, -4em) rotate(220deg);
  }

  100% {
    transform: translate(0, -1em) rotate(-225deg);
  }
}
</style>
