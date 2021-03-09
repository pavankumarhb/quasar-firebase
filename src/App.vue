<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import firebase from "firebase"
export default {
  name: 'App',
  methods:{
  initFireBase(){
    console.log(firebase,"firebase")
  }
},
mounted(){
  this.initFireBase()
}

}

</script>
