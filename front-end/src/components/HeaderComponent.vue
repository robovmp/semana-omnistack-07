<template> 
    <header id="main-header">
        <div class="header-content">
            <router-link to="/">
                <img v-bind:src="logo" alt="InstaRocket">
            </router-link>
            <router-link to="/new">
                <img v-bind:src="camera" alt="Enviar publicação">
            </router-link>
        </div>
    </header>
</template>

<script>
import logoInsta from '../assets/logo.svg'
import cameraInsta from '../assets/camera.svg'

export default {
    data(){
        return{
            logo: logoInsta,
            camera: cameraInsta
        }
    }
}
</script>

<style>
header#main-header{
    background: #fff;
    height: 72px;
    border-bottom: 1px solid #ddd;
}

header#main-header .header-content{
    width: 100%;
    max-width: 980px;
    margin:0 auto;
    height: 72px;
    padding: 0 30px;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

</style>