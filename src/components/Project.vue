<script setup>
import { portfolioPosts } from '../plugins/data.js'

const colorTags = (tag) => {
  switch (tag) {
    case 'laravel':
      return 'bg-red-100 text-red-500'
    case 'tailwind':
      return 'bg-sky-100 text-sky-500'
    case 'react':
      return 'bg-blue-100 text-blue-500'
    case 'golang':
      return 'bg-sky-100 text-sky-500'
    default:
      return 'bg-indigo-100 text-indigo-500'
  }
}

const colorStatus = (status) => {
  switch (status) {
    case 'private':
      return 'bg-red-100 text-red-500'
    case 'public':
      return 'bg-indigo-100 text-blue-500'
    default:
      return 'bg-yellow-100 text-yellow-500'
  }
}
</script>
<template>
  <!-- latest project -->
  <section id="project" class="-scroll-mt-12 py-16 lg:py-20">
    <h1
      class="mb-10 text-center font-lora text-2xl font-semibold text-slate-900 lg:mb-14 lg:text-3xl lg:font-medium"
    >
      My Latest Project
    </h1>
    <!-- latest -->
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      class="card-format flex flex-wrap justify-center gap-7"
    >
      <div
        v-for="(post, index) in portfolioPosts"
        :key="index"
        class="card relative max-w-[18rem] overflow-hidden rounded-lg border border-slate-100 bg-white/70 p-1 text-center shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-1 2xl:max-w-sm"
      >
        <!-- badge for new project -->
        <div class="absolute right-3 top-2">
          <span
            :class="colorStatus(post.status)"
            class="inline-flex scale-90 items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize"
          >
            {{ post.status }}
          </span>
        </div>
        <a v-if="post.link" :href="post.link" target="_blank">
          <div
            class="images-product overflow-hidden rounded-md border border-gray-50 shadow-3xl outline outline-1 outline-slate-100"
          >
            <img class="h-[8.1rem] w-full" :src="post.image" :alt="post.title" />
          </div>
        </a>
        <div
          v-else
          class="images-product overflow-hidden rounded-md border border-gray-50 shadow-3xl outline outline-1 outline-slate-100"
        >
          <img class="h-[8.1rem] w-full object-contain" :src="post.image" :alt="post.title" />
        </div>
        <div class="pt-4">
          <p class="text-sm font-medium text-gray-500 lg:text-xs lg:text-gray-400">
            {{ post.category }}
          </p>
          <h3 class="text-base font-semibold text-slate-900 lg:text-sm">{{ post.title }}</h3>
          <div class="mb-4 mt-1 flex items-center justify-center">
            <span
              v-for="(tag, index) in post.tags"
              :key="index"
              :class="colorTags(tag)"
              class="inline-flex scale-90 items-center rounded-sm px-2.5 py-0.5 text-xs font-medium capitalize"
              >{{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- <p class="mt-7 text-center text-sm">
      <a class="text-slate-500 hover:text-slate-700" href="#">And many more...</a>
    </p> -->
  </section>
  <!-- end latest project -->
  <hr />
</template>
