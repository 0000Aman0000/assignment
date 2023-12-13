import { useAuthStore } from "~/store/auths";

export default defineNuxtRouteMiddleware((to, from) => {
  const store = useAuthStore();
 
  if (store.isActive===false) {
    console.log(store.isActive,store.email);
    if (to.path === "/blogs" || to.path === "/blogs/id") {
      alert('Please Sign In First')
      return navigateTo("/");
    }
  }
  else if(store.isActive===true){
    if(to.path==='/login'||to.path==='/signup'){
     return  navigateTo(from.path);
    }
  }
});
