<template>
  <div>
    <nav class="navbar has-shadow">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="../">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Lal">
          </a>
          <div class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div @click="toggleIsActive" id="navMenu" class="navbar-menu">
          <div class="navbar-end">
            <div
              :class="{'is-active': isActive }"
              class="navbar-item has-dropdown ">
              <a class="navbar-link">Menu</a>
              <div class="navbar-dropdown">
                <nuxt-link to="/" class="navbar-item">Home</nuxt-link>
                <nuxt-linnk to="/manage" class="navbar-item">Manage</nuxt-linnk>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    toggleIsActive () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>
