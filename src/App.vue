<template>
  <div class="app">
    <transition name="main" mode="out-in">
        <router-view></router-view>
    </transition>
    <div class="based-on-vue">
      <span>Based On</span>
      <a href="http://ru.vuejs.org"><img src="dist/logo.png" alt="vueJS"></a>
    </div>
    <div class="fork-me">
      <a href="http://github.com/RomanChasovitin/"><img src="https://s3.amazonaws.com/github/ribbons/forkme_right_white_ffffff.png" alt=""></a>
    </div>
    
  </div>
</template>

<script>


export default {
  name: 'app',
  data () {
    return {
      state: 'start'
    }
  },
  methods:{
    goTo(link){
      
      this.state = link;
    }
  },

}
</script>

<style lang="scss" scoped>
@import './assets/scss/vars.scss';

  .based-on-vue{
    
    position: fixed;
    bottom: 10px;
    right: 10px;
    z-index: 10;
    span{
      font-size: 12px;
      color: $light;
    }
    img{
      margin: 0 auto;
      display: block;
      width: 25px;
      height: 25px;
      color: $greenvue;
    }
  }
  .app{
    overflow: hidden;
  }

  .fork-me{
    z-index: 10;
    position: absolute;
    top: 0;
    right: 0;
  }
</style>
