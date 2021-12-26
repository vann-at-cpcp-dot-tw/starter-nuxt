const todos = [
  {
    id: 1, title: 'nuxt 3',
  },
  {
    id: 2, title: 'vue 3',
  }
]

export default ()=>{
  return {
    success: true,
    data: {
      todos,
    }
  }
}