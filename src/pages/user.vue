<template>
   <div class="q-pa-md absolute-center">
    <div class="q-gutter-y-md" style="max-width: 600px">
         <q-card inline style="width: 500px">
        <div class="greeting">
          <b><h5>Welcome,</h5></b>
          <h6>Successfully loggedIn!!</h6>
        </div>
        <div class="submit-button q-pa-lg">
          <q-btn
            inline style="width: 100px"
            color="primary"
            @click="signoutUser"
            label="LogOut"
            class="full-width"
          />
        </div>

         </q-card> 
    </div>
   </div>
</template>
<script>
import { mapActions } from 'vuex'
export default{
    data(){
        return{}
    },
    methods:{
      ...mapActions(["logoutForm"]),
        signoutUser(){                     //submit handler for user logout//
          this.logoutForm()     
    }
}
}
</script>
<style scoped>
.greeting{
  text-align: center;
  margin: 0px;
  }
 .greeting h5{
   margin: 0px;
 } 
 .greeting h6{
   margin: 0px;
 } 
</style>
