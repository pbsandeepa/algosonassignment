import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    customers:sessionStorage.getItem('customers') ? JSON.parse(sessionStorage.getItem('customers')) : []
  },
  mutations: {
    SET_CUSTOMER(state, customers){
      state.customers = customers;
    },
  },
  actions: {
    applicationSubmit({commit, state}, This){
      
      state.customers.push({
        customerName:This.this.customerName,
        loanTerm:"Weekly",
        loanAmount: parseInt(This.this.loanAmount),
        loanDescription:This.this.loanDescription,
        Id:state.customers.length + 1,
        Approve:false,
        Balance:parseInt(This.this.loanAmount)
      })
      
      console.log("customers",state.customers)
      sessionStorage.setItem('customers',JSON.stringify(state.customers))

      This.this.customerName = ''
      This.this.loanAmount = ''
      This.this.loanDescription = ''

      setTimeout(()=>{
        This.this.$refs.customerName.resetValidation()
        This.this.$refs.loanAmount.resetValidation()
      },20)

    },
  },
  modules: {
  }
})
