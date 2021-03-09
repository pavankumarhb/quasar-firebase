<template>
 <div class="q-pa-md absolute-center">
    <div class="q-gutter-y-md" style="max-width: 600px">
      <q-card inline style="width: 500px">

        <div class="greeting">
          <b><h5>Welcome,</h5></b>
          <h6>Login to continue !!</h6>
        </div>
        <q-form class="form" bordered ref="logInForm">
        
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
            @click="loginUser"
            color="primary"
            label="Login"
            class="full-width"
          />
        </div>
        </q-form>
      </q-card>
    </div>
  </div>  
</template>
<script>
 export default {
    data(){
        return{
            email:'',
            password:'',
         }
    },
    methods:{
        loginUser(){
            this.$Auth().signInWithEmailAndPassword(this.email,this.password).then(data=>{
                this.$router.push({
                    path:"user"
                })
            }).catch(error=>{
                alert("Invalid Email and Password");
            })

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
</style>