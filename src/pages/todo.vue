<template>
   <div class="q-pa-md absolute-center">
    <div class="q-gutter-y-md" style="max-width: 600px">
         <q-card inline style="width: 500px">
           <div class="greeting">
          <b><h5>Welcome,</h5></b>
          <h6>Successfully loggedIn!!</h6>
        </div>
            <q-table
            :data="todos"
            title="Todo List"
            :columns="colmns"
            row-key="name"
            :separator="separator"
          />
         </q-card> 
    </div>
   </div>
</template>
<script>
import { mapActions } from 'vuex'
export default{
    data(){
        return{
          separator: 'vertical',
          colmns:[
                { name:"id", align:"center", label:"id", field:"id" },
                { name:"title", align:"center", label:"title", field:"title" },   
            ],todos:[]
        }
    },
    methods:{
      ...mapActions(["getAllTodos"]),
   async getTodos(){
      this.todos= this.$store.state.todos.todos;
        }
},
async created(){
    await this.$store.dispatch("getAllTodos");
    this.getTodos();
},
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
