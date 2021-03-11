import firebase from 'firebase'
import { firebaseAuth } from '../../boot/firebase'

function signUp( { dispatch },payload) {
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
function loginUser({ dispatch },payload){
    firebaseAuth.signInWithEmailAndPassword(payload.email,payload.password).then(data =>{
      this.$router.push({
          path:"user"
      })
  }).catch(error=>{
      alert("Invalid Email and Password");
  })
  }
 function logoutForm({ dispatch },payload){
    firebaseAuth.signOut().then(() => {
      this.$router.push({
          path:"login"
      })
   }).catch((error) => {
       console.log("error",error)
});
} 
export {
    signUp,
    loginUser,
    logoutForm
}