<template>
  <div>
    <Header/>
    <nav>
      <NavBox :show="$store.state.isBurgerClicked" />
    </nav>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/Navigation/Header.vue';
import NavBox from '~/components/Navigation/NavBox.vue';
import Footer from '~/components/Navigation/Footer.vue';
import { mapState } from 'vuex'

export default {
  components:{
    Header,
    NavBox,
    Footer
  },
}
</script>

<style lang="scss">
$bgColor: rgba(36, 123, 160, 1);
$color2: rgba(112, 193, 179, 1);
$color3: rgba(178, 219, 191, 1);
$color4: rgba(243, 255, 189, 1);
$color5: rgba(255, 22, 84, 1);

html
{
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: $bgColor;
  color: $color5;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
.button--green
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}
.button--green:hover
{
  color: #fff;
  background-color: #3b8070;
}
.button--grey
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.button--grey:hover
{
  color: #fff;
  background-color: #35495e;
}
</style>
