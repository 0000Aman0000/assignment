<script setup>
//To get more details about error need to create an instance useError() composables
const error = useError();
</script>

<template>
    <NuxtLayout>
        <div class="prose">
            <template v-if="error.statusCode===404">
              <h1>404!</h1>{{ error.message }}
              <p>Sorry, that page doesn't exist.</p>
            </template>
            <tempalte v-else-if="error.statusCode===500">
              <h1>500!</h1>
              <p>Sorry, We can't reach to the server.</p>
            </tempalte>
            <template v-else>
              <h1>Bang</h1>
                    <p>{{ error.statusCode }}
                      <strong>{{ error.message }}</strong>
                    </p>
              <p>Sorry about that.</p>
          </template>
          <p>
                Go back to  
                <a href="/" @click="handleError">
                  dashboard.
                </a>
              </p>
        </div>
    </NuxtLayout>
</template>
<style></style>