<template>
  <div class="new">
    <form id="new-post" enctype="multipart/form-data">
      <input type="file"
        name="image"
        @change="setImage($event)"
      />
      <input 
        type="text"
        name="author"
        placeholder="Autor do post"
        v-model="author"
      />

      <input 
        type="text"
        name="place"
        placeholder="Local do post"
        v-model="place"
      />

      <input 
        type="text"
        name="description"
        placeholder="Descrição do post"
        v-model="description"
      />

      <input 
        type="text"
        name="hashtags"
        placeholder="Hashtags do post"
        v-model="hashtags"
      />
     
     <button type="submit" v-on:click.prevent="postar">Enviar</button>
     
    </form>
  </div>
</template>
<script>
export default {
  data(){
    return{
      image: null,
      author: '',
      place:'',
      description:'',
      hashtags:''
    }
  },
  
  methods: {
    setImage(e){
      this.image = e.target.files[0]
      console.log("entrou")
    },
    async postar(){
      const formData = new FormData();

      formData.append('image', this.image )
      formData.append('author', this.author )
      formData.append('place', this.place )
      formData.append('description', this.description )
      formData.append('hashtags', this.hashtags )

      await this.$http.post('posts', formData)   

      this.$router.push('/')

    }
  }
}
</script>
<style>

form#new-post {
  width: 100%;
  max-width: 580px;
  margin: 30px auto 0;
  padding: 30px;
  background: #fff;
  border: 1px solid #ddd;

  display: flex;
  flex-direction: column;
}

form#new-post input {
  margin-bottom: 10px;
}

form#new-post input[type=text] {
  height: 38px;
  border-radius: 4px;
  border: 1px solid #ddd;
  padding: 0 20px;
  font-size: 14px;
}

form#new-post button {
  padding: 10px 20px;
  border-radius: 4px;
  border: 0;
  background: #7159c1;
  color: #FFF;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
}
</style>