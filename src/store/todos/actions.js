import axios from 'axios'

async function getAllTodos( { commit }){
    const todoResponse=await axios.get("https://jsonplaceholder.typicode.com/todos");
    if(!todoResponse){
        return;
    }
    //console.log("todo List",todoResponse);
    commit("FETCH_TODOS",todoResponse.data);
}
export{
    getAllTodos
}

