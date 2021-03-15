<template>
 <div class="q-pa-md absolute-center">
    <div class="q-gutter-y-md" style="max-width: 600px">
      <q-card inline style="width: 500px">
        <div class="greeting">
          <b><h5>Welcome,</h5></b>
          <h6>Register Here !!</h6>
        </div>
        <q-form class="form" bordered ref="signInForm">
        <q-input
          v-model="firstname"
          class="q-pa-md"
          outlined
          type="firstname"
          label="First Name"
          
        />
        <q-input
          v-model="lastname"
          class="q-pa-md"
          outlined
          type="lastname"
          label="Last Name"
          
        />
        <q-input
          v-model="email"
          class="q-pa-md"
          outlined
          type="email"
          label="Email"
        />
        <q-input
          v-model="password"
          class="q-pa-md"
          outlined
          type="password"
          label="Password"
        />
        <div class="submit-button q-pa-lg">
          <q-btn
            color="primary"
            @click="submitForm"   
            label="Register"       
            class="full-width"        
          />                                                  
        </div>
        </q-form>
      </q-card>
    </div>
  </div>

</template>
<script>
import { mapActions } from 'vuex'
export default {
    data(){
        return{
            firstname:'',
            lastname:'',
            email:'',
            password:'',
        }
    },
    methods:{
      ...mapActions(["signUp"]),
     //submit handler for user signup
      submitForm(){                               
          const form={
            email:this.email,
            password:this.password,
            name:this.firstName+this.lastName
          }
          this.signUp(form)          
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
