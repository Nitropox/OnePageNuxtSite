<template>
    <div class="header">
        <a id="logo" href="#" v-scroll-to="'#logo'"><div class="logo">LOGO</div></a>
        <Burger/>
    </div>
</template>

<script>
import Burger from '~/components/Navigation/Burger.vue';

export default {
    components:{
        Burger,
    },
}
</script>
<style  lang="scss">

$headerColor: rgba(112, 193, 179, 1);
.header{
    height: 60px;
    position: fixed;
    width: 100%;
    top: 0;
    left:0;
    z-index: 99;
    background-color: $headerColor;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

}
#logo{
    text-decoration: none;
    color: rgba(255, 22, 84, 1);
}
.logo{
    margin-left: 15px;
}
</style>
