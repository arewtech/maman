<script setup>
import iconFigma from './Icons/Figma.vue'
import iconJavascript from './Icons/Javascript.vue'
import iconSql from './Icons/Sql.vue'
import iconTailwind from './Icons/Tailwind.vue'
import iconVue from './Icons/Vue.vue'
</script>
<template>
  <!-- my strength -->
  <section class="py-16 font-lora lg:py-20">
    <div class="">
      <h1
        class="mb-8 text-center text-2xl font-semibold text-slate-900 lg:mb-14 lg:text-3xl lg:font-medium"
      >
        My Strength
      </h1>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        class="flex flex-wrap justify-center gap-x-3 gap-y-8 md:justify-between lg:justify-center lg:gap-x-10"
      >
        <div class="pill scale-90 md:scale-100">
          <div
            class="interaction flex h-36 w-24 flex-col items-center justify-center gap-y-1 rounded-full bg-circle"
          >
            <iconFigma class="w-14" />
            <!-- <img class="w-14" src="./public/assets/images/figma.svg" alt="lg" /> -->
            <!-- <h4 class="text-sm">😍</h4> -->
          </div>
          <p class="mt-2 text-center text-sm">Figma</p>
        </div>
        <div class="pill scale-90 md:scale-100">
          <div
            class="interaction flex h-36 w-24 flex-col items-center justify-center gap-y-1 rounded-full bg-circle"
          >
            <iconJavascript class="w-14" />
            <!-- <img class="w-14" src="./public/assets/images/adobexd.svg" alt="lg" /> -->
            <!-- <h4 class="text-sm">😖</h4> -->
          </div>
          <p class="mt-2 text-center text-sm">Javascript</p>
        </div>
        <div class="pill scale-90 md:scale-100">
          <div
            class="interaction flex h-36 w-24 flex-col items-center justify-center gap-y-1 rounded-full bg-circle"
          >
            <!-- <img class="w-14" src="./public/assets/images/js.svg" alt="lg" /> -->
            <!-- <h4 class="text-sm">🤓</h4> -->
            <iconVue class="w-14" />
          </div>
          <p class="mt-2 text-center text-sm">Vue Js</p>
        </div>
        <div class="pill scale-90 md:scale-100">
          <div
            class="interaction flex h-36 w-24 flex-col items-center justify-center gap-y-1 rounded-full bg-circle"
          >
            <iconTailwind class="w-14" />
            <!-- <img class="w-14" src="./public/assets/images/html5.svg" alt="lg" /> -->
            <!-- <h4 class="text-sm">😎</h4> -->
          </div>
          <p class="mt-2 text-center text-sm">B5/Tailwind</p>
        </div>
        <div class="pill scale-90 md:scale-100">
          <div
            class="interaction flex h-36 w-24 flex-col items-center justify-center gap-y-1 rounded-full bg-circle"
          >
            <img class="w-14" src="https://img.icons8.com/nolan/96/laravel.png" alt="lg" />
            <!-- <h4 class="text-sm">🫣</h4> -->
          </div>
          <p class="mt-2 text-center text-sm">Laravel</p>
        </div>
        <div class="pill scale-90 md:scale-100">
          <div
            class="interaction flex h-36 w-24 flex-col items-center justify-center gap-y-1 rounded-full bg-circle"
          >
            <iconSql class="w-14" />
            <!-- <img class="w-14" src="./public/assets/images/python.svg" alt="lg" /> -->
            <!-- <h4 class="text-sm">🤤</h4> -->
          </div>
          <p class="mt-2 text-center text-sm">MySql</p>
        </div>
      </div>
    </div>
  </section>
  <!-- end my strength -->
  <hr />
</template>
