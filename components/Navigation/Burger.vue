<template>
   <div id="burger" @click="onClick" :class="{change: show}"> 
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
    </div>  
</template>
<script>
export default {
    data(){
        return{
            show: false
        }
    },
    methods:{
        onClick(){
            this.show = !this.show ;
            this.$emit('toggle');
        }
    }
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
