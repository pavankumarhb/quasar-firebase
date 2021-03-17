import Vue from 'vue';
import { Notify } from 'quasar';

let config={
  position: 'top',
  timeout: 2500,
  textColor: 'black',
  color: 'red'
}
let notifyInstance=(obj)=>{
   let notifyOptions=Object.assign({},config,obj);
   return Notify.create(notifyOptions);
}
export default({ Vue })=>{
  Vue.prototype.$notify=notifyInstance;
}
export { notifyInstance as Notify }
