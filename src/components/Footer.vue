<script setup>
const currentYear = new Date().getFullYear()
</script>
<template>
  <!-- footer -->
  <footer>
    <div class="flex flex-col items-center justify-center gap-y-2 py-5">
      <div class="col">
        <p class="text-center text-sm text-gray-500">
          © 2019 - {{ currentYear }} Created By
          <a href="https://github.com/arewtech" class="font-semibold" target="_blank">Maman</a> All
          Rights Reserved.
        </p>
      </div>
      <div class="col">
        <div class="flex items-center justify-center gap-2">
          <a href="https://github.com/arewtech" target="_blank"
            ><i class="bx bxl-github text-xl lg:text-lg"></i
          ></a>
          <a href="https://www.linkedin.com/in/maman27/" target="_blank"
            ><i class="bx bxl-linkedin text-xl lg:text-lg"> </i
          ></a>
        </div>
      </div>
    </div>
  </footer>
  <!-- end footer -->
</template>
