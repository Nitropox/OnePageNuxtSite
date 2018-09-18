<template>
    <button @click="$emit('button-clicked')">
        {{color}}
        <slot></slot>
    </button>
</template>
<script>
export default {
  
   props:{
       color: {
           type: String,
           default: 'red'
       }
   } 
}
</script>
