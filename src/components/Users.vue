<template>
  <div class="q-pa-lg row">
    <div class="col-lg-3 col-md-3 "></div>
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <div class="text-h4 q-mb-md" align="center">Users</div>
      <q-card class="q-mb-md row" v-for="user in users" :key="user.id">
        <q-card-section class="col-lg-6 col-md-6 col-sm-12 col-xs-12"><b>Full Name:</b> {{user.name}}</q-card-section>
        <q-card-section class="col-lg-6 col-md-6 col-sm-12 col-xs-12"><b>User Name:</b> {{user.username}}</q-card-section>
        <q-card-section class="col-lg-6 col-md-6 col-sm-12 col-xs-12"><b>Email:</b> {{user.email}}</q-card-section>
        <q-card-section class="col-lg-6 col-md-6 col-sm-12 col-xs-12"><b>Phone:</b> {{user.phone}}</q-card-section>
        
        <q-card-section class="col-lg-12 col-md-12 col-sm-12 col-xs-12" align="right">
          <q-btn label="Details" color="primary" no-caps @click="userDetails(user)"></q-btn>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-lg-3 col-md-3 "></div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  created(){
    this.getUsers();
  },
  computed:{
		...mapState({
      users: "users",
		}),
	},
  data(){
    return{
      
    }
  },
  methods:{
    getUsers(){
       this.$store.dispatch("getUsers")
    },
    userDetails(user){
      console.log("user",user)
      sessionStorage.setItem("userId",user.id)
      this.$router.push({ name: "Posts" });
    }
  }
  
}
</script>
<style lang="scss">

$blue-color:#325BAF;

.text-as-blue {
  color: $blue-color !important;;
}
.bg-as-blue {
  background: $blue-color !important;;
}

</style>