export const useBlogStore = defineStore("blogCheck", {
  state: () => ({ blogData: [], id: 1 }),
  getters: {},
  actions: {
    async getData() {
      const posts = await useFetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      // console.log(posts.data.value);
      // .then((res) =>(this.blogData=res.json()))
      // .then(data=> console.log(data))
      // .catch((err) => console.log(err));
      // console.log(picked);
      this.blogData = posts.data.value
      return this.blogData;
    },
  },
});
//  default useBlogStore /

