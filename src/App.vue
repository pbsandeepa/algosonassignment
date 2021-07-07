<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header> -->

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      bordered
      class="bg-as-grey text-white"
      content-class="bg-as-grey"
      :width="260"
    >
      <q-list>
        
        
        <q-item clickable tag="a" to="/Customer" active-class="text-as-green">
          <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Customer</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="/Admin" active-class="text-as-green">
          <q-item-section avatar>
            <q-icon name="admin_panel_settings" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Admin</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="/Repay" active-class="text-as-green">
          <q-item-section avatar>
            <q-icon name="credit_card" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Repay</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'LayoutDefault',

  components: {
    HelloWorld
  },

  data () {
    return {
      leftDrawerOpen: true
    }
  }
}
</script>
<style lang="scss">

$grey-color:#0C365A;
$green-color:#01D167;

.text-as-green {
  color: $green-color !important;
}
.bg-as-green {
  background: $green-color !important;
}

.text-as-grey {
  color: $grey-color !important;
}
.bg-as-grey {
  background: $grey-color !important;
}



</style>
