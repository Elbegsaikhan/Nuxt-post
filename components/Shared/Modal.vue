<template>
  <div>
    <h1>95 aas ehlene</h1>
    <div @click="isActive = true">
      <slot name="actionButton">
      </slot>
    </div>
    <div :class="{ 'is-active': isActive}" class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal Title</p>
          <button @click="isActive = false" class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <slot></slot>
        </section>
        <footer class="modal-card-foot">
          <button @click="emitModalSubmit" class="button is-success">Save changes</button>
          <button @click="isActive = false" class="button">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'appModal',
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    emitModalSubmit () {
      console.log('Calling emitModalSubmit')
      this.$emit('modalSubmitted', this.closeModal)
    },
    closeModal () {
      this.isActive = false
    }
  }
}
</script>

<style scoped></style>
