import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      isBurgerClicked: false
    },
    mutations:{
      flipBurgerState: state => {
        state.isBurgerClicked = !state.isBurgerClicked
      }
    },
    actions: {
      clickBurger({commit}){
        commit('flipBurgerState');
      }
    }
  })
}

export default createStore