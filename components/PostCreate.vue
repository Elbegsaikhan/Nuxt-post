<template>
    <app-modal @modalSubmitted="createPost">
      <template #actionButton>
        <a class="button is-danger is-block is-bold">
          <span class="compose">Create</span>
        </a>
      </template>
      <form class="post-form">
        <div class="field">
          <label class="label">Гарчиг</label>
          <div class="control">
            <input v-model="form.title" class="input" type="text" placeholder="гарчигааааа">
          </div>
        </div>
        <div class="field">
          <label class="label">Дэд Гарчиг</label>
          <div class="control">
            <input v-model="form.subtitle" class="input" type="text" placeholder="дэд гарчигааааа">
          </div>
        </div>
         <div class="field">
          <label class="label">Мэдээ</label>
          <div class="control">
            <input v-model="form.content" class="textarea" placeholder="мэдээ">
          </div>
        </div>
      </form>
      <div>
        {{ form   }}
      </div>
    </app-modal>
</template>

<script>
import Modal from '~/components/Shared/Modal'
export default {
  name: 'AppPostCreate',
  components: {
    AppModal: Modal
  },
  data () {
    return {
      form: {
        title: '',
        subtitle: '',
        content: ''
      }
    }
  },
  methods: {
    createPost () {
      this.$store.dispatch('post/createPost', this.form)
      console.log(this.form)
    }
  }
}
</script>

<style scoped>

</style>
