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
          />
         </q-card> 
    </div>
   </div>
</template>
<script>
export default{
    data(){
        return{
          colmns:[
                { name:"id", align:"center", label:"id", field:"id" },
                { name:"title", align:"center", label:"title", field:"title" },   
            ],todos:[]
        }
    },
    methods:{
   async getTodos(){
            const todoResponse=await this.$axios.get("https://jsonplaceholder.typicode.com/todos");
            if(!todoResponse){
                return;
            }
            console.log("todo List",todoResponse);
            this.todos=todoResponse.data;
        }
},//life Cycle Hooks to call getTodos
  mounted(){
    this.getTodos()
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

