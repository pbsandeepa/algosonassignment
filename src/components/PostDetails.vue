<template>
  <div class="q-pa-lg row">
    <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
      <q-btn label="Back" color="primary" no-caps to="/Posts"></q-btn>
    </div>
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <div class="text-h4 q-mb-md" align="center">Post Details</div>
      <q-card class="q-mb-md" >
        <q-card-section class="text-h6">{{postDetails.title}}</q-card-section>
        <q-separator />
        <q-card-section>{{postDetails.body}}</q-card-section>
      </q-card>
    </div>
    <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12"></div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  created(){
    this.getPostDetails();
  },
  computed:{
    ...mapState({
      postDetails:"postDetails"
    }),
  },
  data(){
    return{
    }
  },
  methods:{
    getPostDetails(){
       this.$store.dispatch("getPostDetails")
    },
  }
}
</script>
<style lang="scss">

</style>