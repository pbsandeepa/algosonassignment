<template>
  <div class="q-pa-lg">
    <div align="right" class="q-py-md" v-if="customers.length > 0">
      <q-btn label="Clear All" no-caps color="as-blue" @click="clearAll()"></q-btn>
    </div>
    <q-card class="q-mb-md row" v-for="(customer,index) in customers" :key="index">
      <q-card-section class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <div class="text-h6">{{customer.customerName}}</div>
      </q-card-section>
      <q-card-section class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <b>Loan Term:</b> {{customer.loanTerm}}
      </q-card-section>
      <q-card-section class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <b>Loan Amount:</b> $ {{customer.loanAmount}}
      </q-card-section>
      <q-card-section class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <b>Description:</b> {{customer.loanDescription}}
      </q-card-section>
      <q-card-section class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <b>Balance:</b> $ {{customer.Balance}}
      </q-card-section>
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md" align="center" v-if="!customer.Approve">
        <q-btn label="Approve" no-caps color="as-green" @click="Approve(customer)"></q-btn>
      </div>
    </q-card>
    <div class="text-h5 text-red" align="center" v-if="customers.length == 0"> 
      No Requests!
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed:{
    ...mapState({
      customers:"customers"
    }),
  },
  methods:{
    Approve(customer){
      customer.Approve = true
      console.log("customers",this.customers)
      sessionStorage.setItem('customers',JSON.stringify(this.customers))
    },
    clearAll(){
      this.$store.commit('SET_CUSTOMER',[])
      sessionStorage.clear()
    }
  }
}
</script>
<style lang="scss">

</style>