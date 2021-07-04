<template>
  <div class="q-pa-lg">
    <div class="text-h4" align="center">Loan Application</div>
    <div class="q-pa-md q-px-xl">
      <q-form @submit="applicationSubmit()">
        <q-input 
          outlined 
          dense 
          label="Applicant Name"
          v-model="customerName"
          :rules="[ val => val && val.length > 0 || 'Required!']"
          ref="customerName"
        />
        <q-input 
          outlined 
          dense 
          label="Loan Term" 
          v-model="loanTerm" 
          disable
          :rules="[ val => val && val.length > 0 || 'Required!']"
        />
        <q-input 
          outlined 
          dense 
          label="Loan Amount" 
          type="number" 
          v-model="loanAmount"
          :rules="[ val => val && val.length > 0 || 'Required!']"
          prefix="$"
          ref="loanAmount"
        />
        <q-input 
          outlined 
          dense 
          label="Description" 
          type="textarea" 
          v-model="loanDescription"
        />
        <div class="q-mt-md" align="center">
          <q-btn label="Submit" no-caps color="as-blue" type="submit"></q-btn>
        </div>

      </q-form>
    </div>
  </div>
</template>
<script>
export default {

  data(){
    return{
      customerName:"",
      loanTerm:"Weekly",
      loanAmount:"",
      loanDescription:""
    }
  },
  methods:{
    applicationSubmit(){
       this.$store.dispatch("applicationSubmit", {this:this})
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