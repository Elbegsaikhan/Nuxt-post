<template>
  <form class="post-form">
    <div class="field">
      <label class="label">Гарчиг</label>
      <div class="control">
        <input v-model="post.title" class="input" type="text" placeholder="Гайхалтай гарчиг" >
      </div>
    </div>
    <div class="field">
      <label class="label">Дэд гарчиг</label>
      <div class="control">
        <input v-model="post.subtitle" class="input" type="text" placeholder="Гайхалтай дэд гарчиг">
      </div>
    </div>
    <div class="field">
      <label class="label">Content</label>
      <div class="control">
        <textarea v-model="post.content" class="textarea" placeholder="Гайхалтай нийтлэл"></textarea>
      </div>
    </div>
    <button @click="updatePost" type="button" class="button is-primary">Шинэчлэх</button>
  </form>
</template>

<script>
export default {
  name: 'PostManage',
  props: ['postData'],
  data () {
    return {
      post: { ...this.postData }
    }
  },
  watch: {
    postData (data) {
      debugger
      this.post = { ...data }
    }
  },
  methods: {
    updatePost () {
      this.$store.dispatch('post/updatePost', { ...this.post })
    }
  }
}
</script>

<style scoped>
/*//dasas*/
</style>
