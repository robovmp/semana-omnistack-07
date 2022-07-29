<template>
  <div class="feed">
    <post-component />
  </div>
</template>

<script>

import PostComponent from '@/components/PostComponent.vue';
import {io} from 'socket.io-client'

const socket = io('http://localhost:3333')

export default{
  components: {PostComponent},
  async beforeMount(){
    await this.$http.get('posts').then(res =>{
      let post = res.data
      this.$store.commit('adicionarPost', post)  
    })

    this.registerSocket()
  },
  methods:{
    registerSocket(){
    
      socket.on('post', newPost =>{

        let oldPostFeed = this.$store.getters.retornaPost

        let newPostFeed = [newPost, ...oldPostFeed]

        this.$store.commit('adicionarPost', newPostFeed)
      })

      socket.on('like', likedPost =>{
        
        let oldPostFeed = this.$store.getters.retornaPost

        let newPostFeed = oldPostFeed.map(post =>
          post._id === likedPost._id ? likedPost : post
        )
        
        this.$store.commit('adicionarPost', newPostFeed)

      })
    }
  }

}

</script>

<style>


</style>
