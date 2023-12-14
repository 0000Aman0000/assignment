<template>
    <section class="container mx-auto p-4 md:p-8">
        <div class="bg-white p-4 md:p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold mb-4">Our Story</h2>
            <p class="text-gray-700"><p class="mb-5">We have been serving e-learning industry since 2008. Headquartered in New Delhi, we
                have our development centre placed in Greater Noida, Uttar Pradesh. We also own and Operate our server
                infrastructure in a datacenter located in a facility in Dallas, Texas, USA.</p>
                <p> We are continuously engaged in designing, developing and delivering appropriate learning experience. We also
                deliver e-learning and training solutions, custom made to fit the requirement of our customers.</p>
               
            </p>
        </div>
    </section>

    <section class="container mx-auto p-4 md:p-8 mt-4">
        <div class="bg-white p-4 md:p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold mb-4">Our Team</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div class="bg-gray-200 p-4 rounded-lg">
                    <h3 class="text-xl font-semibold">Jai Gupta</h3>
                    <p class="text-gray-700">CEO</p>
                </div>
                <div class="bg-gray-200 p-4 rounded-lg">
                    <h3 class="text-xl font-semibold">Himanshu</h3>
                    <p class="text-gray-700">Team Leader</p>
                </div>
                <div class="bg-gray-200 p-4 rounded-lg">
                    <h3 class="text-xl font-semibold">Om Prakash Kumar</h3>
                    <p class="text-gray-700">Asst. Team Leader</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useBlogStore } from '~/store/blogs';
const blogs = useBlogStore()

</script>
