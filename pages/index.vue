<template>
  <div>
    <navbar />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css"
    >
    <div class="blogs-page">
      <div class="main-content">
        <div class="container">
          <div class="columns is-mobile">
            <div class="column is-8 is-offset-2">
              <div class="section">
                <div class="title">
                  <h1>Шинэ мэдээ</h1>
                  <hr>
                </div>
                <post-item
                  v-for="post in posts"
                  :key="post._id"
                  :title="post.title"
                  :subtitle="post.subtitle"
                  :date="post.createdAt"
                  :is-read="post.isRead"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <form>
        <input v-model="form.title" type="text">
        <input v-model="form.subtitle" type="text">
      </form>
      {{ isFormValid }}
    </div>
  </div>
</template>

<script>
// import { fetchPostsAPI} from '~/store/post'

export default {
  data () {
    return {
      title: ' Миний гарчиг',
      form: {
        title: 'some title',
        subtitle: 'subtitle'
      }
    }
  },
  fetch ({ store }) {
    if (store.getters['post/hasEmptyItems']) {
      console.log('fetching data index page')
      return store.dispatch('post/fetchPosts')
    }
  },
  // async asyncData () {
  //   const posts = await fetchPostsAPI();
  //   return { posts }
  // }
  computed: {
    posts () {
      return this.$store.state.post.items
    },
    isFormValid () {
      // console.log('isForm valid has been called')
      if (this.title) {
        return true
      } else {
        return false
      }
    }
  }
  // mounted () {
  //   this.$store.dispatch('post/fetchPosts')
  // }
}
</script>

<style scoped>
</style>
