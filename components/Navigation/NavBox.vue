<template>
    <transition name="slide-down">
    <div v-if="show" class="navBox">
        <ul class="nav-list" @click="closeNav">
            <li class="nav-item"><a href="#" v-scroll-to="'#section1'">Link 1</a></li>
            <li class="nav-item"><a href="#" v-scroll-to="'#section2'">Link 2</a></li>
            <li class="nav-item"><a href="#" v-scroll-to="'#section3'">Link 3</a></li>
            <li class="nav-item"><a href="#" v-scroll-to="'#section4'">Link 4</a></li>
            <li class="nav-item"><a href="#" v-scroll-to="'#section5'">Link 5</a></li>
            <li class="nav-item"><a href="#" v-scroll-to="'#section6'">Link 6</a></li>
        </ul>
    </div>
    </transition>
</template>
<script>
export default {
    name: 'NavBox',
    props:{
        show: false
    },
    data(){
        return{
        
        }
    },
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
        if(this.windowWidth < 768) {
            this.$emit('close');
        }else{
           this.$emit('dontClose');
        }
      },
    closeNav(){
        this.windowWidth = document.documentElement.clientWidth;
        if(this.windowWidth < 768) {
            this.$emit('close');
        }else{
          this.$emit('dontClose');
        }
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth);
  },
}
</script>

<style scoped lang="scss">
$navBoxColorMobile: rgba(178, 219, 191, 1);
$navBoxColorDesktop: rgba(112, 193, 179, 1);
$textColor: rgba(255, 22, 84, 1);
.navBox{
    width: 100%;
    height: auto;
    background-color: $navBoxColorMobile;
    position: fixed;
    z-index: 98;
    top: 60px;
    box-sizing: border-box;
}
 

.slide-down-enter-active,
.slide-down-leave-active {
  transition:  all 0.3s cubic-bezier(0.94, 0.07, 0.22, 0.88);
}
.slide-down-enter,
.slide-down-leave-to {
  transform: translateY(-100%);
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;

}

.nav-item {
  margin: 20px 20px;
}

.nav-item a {
  text-decoration: none;
  color: $textColor;
  font-size: 1.5rem;
}

.nav-item a:hover,
.nav-item a:active {
  color: red;
}

@media screen and (min-width: 768px){
    .nav-list{
        display: flex;
        flex-direction: row;
        width: auto;
    }
    .navBox{
        top: 0px;
        right: 0px;
        height: 60px;
        z-index: 100;
        width:auto;
        background-color: $navBoxColorDesktop;
    }
    
    .slide-down-enter,
.slide-down-leave-to {
  transform: none;
}
}
</style>


