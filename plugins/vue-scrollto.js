import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'



Vue.use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: [0.94, 0.07, 0.22, 0.88],
    offset: -60,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})

