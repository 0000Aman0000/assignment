export const useBlogStore = defineStore("blogCheck", {
  state: () => ({ blogData: [], id: 1 }),
  getters: {},
  actions: {
    async getData() {
      const data = await useFetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      // .then((res) =>(this.blogData=res.json()))
      // .then(data=> console.log(data))
      // .catch((err) => console.log(err));
      // console.log(picked);
      this.blogData = data
    },
  },
});
//  default useBlogStore /

