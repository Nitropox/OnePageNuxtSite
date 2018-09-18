<template>
   <div id="burger" @click="clickBurger" :class="{change: $store.state.isBurgerClicked}"> 
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
        
    </div>  
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
    mounted() {
        this.$nextTick(function() {
        window.addEventListener('resize', this.getWindowWidth);
            //Init
        this.getWindowWidth()
    })},
    methods:{
    //needed for responsive navbar
    getWindowWidth(event) {
        this.windowWidth = document.documentElement.clientWidth;
        if(this.windowWidth >= 768) {
           this.clickBurger();
        }
      },
       ...mapActions(['clickBurger'])
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth);
  },
}
</script>

<style scoped lang="scss">
$burgerColor: rgba(255, 22, 84, 1);

  #burger {
	margin: 15px;
	cursor: pointer;
    width: auto;
    z-index: 100;
  }
  
  .bar1, .bar2, .bar3 {
	width: 32px;
	height: 4px;
	background-color:$burgerColor;
	margin: 4px 0;
	transition: all 0.4s cubic-bezier(0.94, 0.07, 0.22, 0.88);
  }
  
  .change .bar1 {
    transform: rotate(-45deg) translate(-2px, 9px);
  }
  
  .change .bar2 {
	opacity: 0;
  }
  
  .change .bar3 {
    transform: rotate(45deg) translate(-2px, -9px);
}
@media (min-width: 768px) {
  #burger {
    display: none;
  }
}
</style>
