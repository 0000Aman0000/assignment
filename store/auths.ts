export const useAuthStore = defineStore('auths', {
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      email: '',
      isActive:false,
    }},

  getters: {
    double(state) {
      console.log(state.isActive, 'getters');
      return state.isActive 
    },
    setter(state){
      console.log(state.email);
      return state.email
    }
  },
  actions: {
    activate() {
      this.isActive = true
    },
    deActivate(){
      if(this.isActive == true){
        this.isActive = false
        this.email = ''
      }
      
    },
  },

})
