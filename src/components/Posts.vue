<template>
  <div class="q-pa-lg row">
    <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
      <q-btn label="Back" color="primary" no-caps to="/Users"></q-btn>
    </div>
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <div class="text-h4 q-mb-md" align="center">Posts</div>
      <q-card class="q-mb-md" v-for="post in userPosts" :key="post.id">
        <q-card-section class="text-h6">{{post.title}}</q-card-section>
        <q-separator />
        <q-card-section>{{post.body}}</q-card-section>
        <q-separator />
        <q-card-section align="right">
          <q-btn label="Details" color="primary" no-caps @click="postDetails(post)"></q-btn>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12"></div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  created(){
    this.getUserPosts();
  },
  computed:{
    ...mapState({
      userPosts:"userPosts"
    }),
  },
  methods:{
    getUserPosts(){
       this.$store.dispatch("getUserPosts")
    },
    postDetails(post){
      console.log("user",post)
      sessionStorage.setItem("postId",post.id)
      this.$router.push({ name: "PostDetails" });
    }
  }
}
</script>
<style lang="scss">

</style>