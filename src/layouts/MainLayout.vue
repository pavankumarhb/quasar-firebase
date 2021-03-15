<template>
 <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
    <div class="submit-button q-pa-lg">
          <q-btn
            inline style="width: 100px"
            color="primary"
            @click="signoutUser"
            label="LogOut"
            class="full-width"
          />
        </div>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import { mapActions } from 'vuex'
export default{
  data(){
    return{
       leftDrawerOpen: true,
    }
  },
   methods:{
      ...mapActions(["logoutForm"]),
      //submit handler for signout
        signoutUser(){
          this.logoutForm();     
    }
  }
}
</script>
