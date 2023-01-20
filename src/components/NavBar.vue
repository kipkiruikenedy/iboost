


<template>
    <div class="flex justify-between px-4 bg-blue-900 text-white  py-3 fixed top-0 z-50 w-[100vw]">
        <div> <p>
            <RouterLink to="/"   class=" hover:bg-blue-600 hover:text-white rounded-lg"> 
                <img class="h-10 w-10 rounded-full" src="../assets/images/iboost.jpg" alt="Logo" />
            </RouterLink>
           
        </p></div>

        <div class="flex space-x-3">
      
            <RouterLink to="/about"   class="px-2 py-1 hover:bg-blue-600 hover:text-white rounded-lg">About</RouterLink>
        <RouterLink to="/contact"   class="px-2 py-1 hover:bg-blue-600 hover:text-white rounded-lg">Contact Us</RouterLink>
        <RouterLink to="/map">map</RouterLink>
     
      
       
       
    </div>
       
       
    </div>
</template>
<script setup>
import { RouterLink } from 'vue-router';
</script>
