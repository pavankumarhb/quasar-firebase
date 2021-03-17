import firebase from 'firebase'
import { firebaseAuth } from '../../boot/firebase'
import { Notify } from '../../boot/notify-defaults'

 async function signUp( { dispatch },payload) {
    console.log(payload)
    firebaseAuth.createUserWithEmailAndPassword(payload.email,payload.password).then(data =>{
      data.user.updateProfile({
          displayName:this.firstname+this.lastname
      }).then(()=>{ 
          alert("created login form successfully:"+payload.email);

      }).catch((error)=>{
          console.log("error",error);
          
      })
  })
  }
  async function loginUser({ dispatch },payload){
    firebaseAuth.signInWithEmailAndPassword(payload.email,payload.password).then(data =>{
        console.log("working",this.$router);
      this.$router.push({
          path:"todo"
      })
  }).catch(error=>{
      console.log("hi",Notify);
      Notify({
          type:'warning',
          message:'Invalid Email and Password',
          position: 'top',
          timeout: 2000,    
      })
  })
  }
  async function logoutForm({ dispatch },payload){
    firebaseAuth.signOut().then(() => {
      this.$router.push({
          path:"login"
      })
}).catch(error=>{
    alert("Please login");
});
} 
export {
    signUp,
    loginUser,
    logoutForm
}
