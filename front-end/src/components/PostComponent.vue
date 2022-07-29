<template>
    <div id="postComp">
        <section id="post-list">
          <article v-for="(post, id) in $store.getters.retornaPost" :key="id">
              <header>
              <div class="user-info">
                  <span>{{post.author}}</span>
                  <span class="place">{{post.place}}</span>
              </div>
              <img v-bind:src="more" alt="mais">
              </header>
              <img v-bind:src="'http://localhost:3333/files/' + post.image" alt="">
              <footer>
              <div class="actions">
                <button type="button" @click="likePost(post._id)">
                  <img v-bind:src="like" alt="">
                </button>
                <img v-bind:src="comment" alt="">
                <img v-bind:src="send" alt="">
              </div>

              <strong>{{post.likes}} curtidas</strong>

              <p>
                  {{post.description}}
                  <span>{{post.hashtags}}</span>
              </p>
              </footer>
          </article>
        </section>
    </div>

</template>
<script>

import more from '../assets/more.svg'
import like from '../assets/like.svg'
import comment from '../assets/comment.svg'
import send from '../assets/send.svg'

export default {
  data(){
    return{
      more: more,
      like: like,
      comment: comment,
      send: send,
      
    }
  },
  methods:{
    likePost(id){
      this.$http.post(`posts/${id}/like`);
    }
  }
 
  
}
</script>
<style>
section#post-list{
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
  padding: 0 30px;
}

section#post-list article{
  background: #fff;
  border: 1px solid #ddd;
  margin-top: 30px;
}

section#post-list article header{
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

section#post-list article header .user-info{
  display: flex;
  flex-direction: column;
}

section#post-list article header .user-info span{
  font-size: 13px;
}

section#post-list article header .user-info span.place{
  font-size: 11px;
  color: #666;
  margin-top: 3px;
}

section#post-list article > img{
  width: 100%;
}

section#post-list article footer{
  padding: 20px;
}

section#post-list article footer .actions{
  margin-bottom: 10px;
}

section#post-list article footer .actions button{
  background: transparent;
  border: 0;

  cursor: pointer;
}

section#post-list article footer .actions img {
  height: 20px;
  margin-right: 10px;
}

section#post-list article footer p{
  font-size: 13px;
  margin-top: 2px;
  line-height: 18px;
}

section#post-list article footer p span{
  color: #7159c1;
  display: block;
}
</style>