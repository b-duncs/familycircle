<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="w-[1024px] h-[768px] bg-white grid grid-cols-2 gap-8">
    <div class="w-[300px] h-[300px] relative">
      <div class="w-[300px] h-[300px] left-0 top-0 absolute bg-white bg-opacity-0 rounded-[50px] shadow-inner border-4 border-indigo-800"></div>
      <div class="w-[308px] h-[308px] left-[-4px] top-[-4px] absolute bg-white bg-opacity-0 rounded-[54px] shadow-inner border-4 border-blue-950"></div>
      <div class="w-[300px] h-[47px] left-0 top-[191px] absolute text-center text-blue-950 text-[40px] font-normal font-['Roboto Serif']">Ben Sbanotto</div>
      <div class="w-[300px] h-[47px] left-0 top-[238px] absolute text-center text-blue-950 text-3xl font-extralight font-['Inter']">grandson</div>
      <img class="w-[150px] h-[150px] left-[75px] top-[28px] absolute rounded-full" src="https://via.placeholder.com/150x150"  alt="profile-pic"/>
    </div>
    <div class="w-[300px] h-[300px] relative">
      <div class="w-[300px] h-[300px] left-0 top-0 absolute bg-white bg-opacity-0 rounded-[50px] shadow-inner border-4 border-indigo-800"></div>
      <div class="w-[308px] h-[308px] left-[-4px] top-[-4px] absolute bg-white bg-opacity-0 rounded-[54px] shadow-inner border-4 border-blue-950"></div>
      <div class="w-[300px] h-[47px] left-0 top-[191px] absolute text-center text-blue-950 text-[40px] font-normal font-['Roboto Serif']">Baylee Bowen</div>
      <div class="w-[300px] h-[47px] left-0 top-[238px] absolute text-center text-blue-950 text-3xl font-extralight font-['Inter']">daughter</div>
      <img class="w-[150px] h-[150px] left-[75px] top-[28px] absolute rounded-full" src="https://via.placeholder.com/150x150"  alt="profile-pic"/>
    </div>
    <div class="w-[300px] h-[300px] relative">
      <div class="w-[300px] h-[300px] left-0 top-0 absolute bg-white bg-opacity-0 rounded-[50px] shadow-inner border-4 border-indigo-800"></div>
      <div class="w-[308px] h-[308px] left-[-4px] top-[-4px] absolute bg-white bg-opacity-0 rounded-[54px] shadow-inner border-4 border-blue-950"></div>
      <div class="w-[300px] h-[47px] left-0 top-[191px] absolute text-center text-blue-950 text-[40px] font-normal font-['Roboto Serif']">Alex Leeper</div>
      <div class="w-[300px] h-[47px] left-0 top-[238px] absolute text-center text-blue-950 text-3xl font-extralight font-['Inter']">nephew</div>
      <img class="w-[150px] h-[150px] left-[75px] top-[28px] absolute rounded-full" src="https://via.placeholder.com/150x150"  alt="profile-pic"/>
    </div>
    <div class="w-[300px] h-[300px] relative">
    </div>
  </div>
</template>

<style scoped>
</style>
