<template>
  <div class="q-pa-lg">
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 row">
        <q-input outlined dense v-model="customerName" label="Customer Name" class="col-8"/>
        <q-btn class="col-3 q-ml-sm" color="as-blue" label="Check Status" no-caps @click="checkCustomer"></q-btn>
      </div>

    </div>
    <div class="text-h6 q-mt-md text-orange" v-if="customer.Id && !customer.Approve">
      Loan not approved yet!
    </div>
    <div class="text-h6 q-mt-md text-as-green" v-if="customer.Id && customer.Approve && (customer.Balance == 0)">
      Repayment completed!
    </div>
    <q-form @submit="repay()">
      <div class="row q-mt-lg"  v-if="customer.Id && customer.Approve && (customer.Balance != 0)">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 row">
          <div class="col-12 q-mb-sm"><b>Balance:</b> $ {{customer.Balance}}</div>
          <q-input 
            outlined 
            dense 
            v-model="repayAmount" 
            ref="repayAmount" 
            prefix="$" 
            type="number" 
            label="Repay Amount" 
            class="col-8"
            :rules="[ val => val && val.length > 0 || 'Required!',
            val => (val && parseInt(val) <= (customer.Balance)) || 'Repay amount should be less than or qual to balance amount!']"
          />
          <div class="col-3 q-ml-sm">
            <q-btn  color="as-blue" label="Repay" no-caps type="submit"></q-btn>
          </div>
        </div>
      </div>
    </q-form>
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
  data(){
    return{
      customerName:"",
      repayAmount:'',
      customer:{}
    }
  },
  methods:{
    checkCustomer(){
      const that = this
      const customer = that.customers.find(obj=>{
        return obj.customerName == that.customerName
      })
      this.customer = customer ? customer : {}
      console.log("customer",this.customer)
    },
    repay(){
      const that = this
      const updatedCutomers = this.customers.map(obj=>{
        if(obj.Id == that.customer.Id){
          obj.Balance = obj.Balance - parseInt(that.repayAmount)
          console.log("OBJ",obj)
        }
        return obj
      })
      this.$store.commit('SET_CUSTOMER',updatedCutomers)
      sessionStorage.setItem('customers',JSON.stringify(updatedCutomers))
      
      this.repayAmount = ''
      setTimeout(()=>{
        this.$refs.repayAmount.resetValidation()
      },20)
    }
  }
}
</script>
<style lang="scss">

</style>