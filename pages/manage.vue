<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css"
    />
    <navbar />
    <div class="manage-page">
      <div class="columns mail-app">
        <aside class="column is-2 aside hero">
          <app-post-create/>
        </aside>
        <div class="column is-4 messages hero is-fullheight" id="message-feed">
          <div class="inbox-messages" id="inbox-messages">
            <!--            Card start-->
            <div v-for="post in posts" :key="post._id" class="card">
              <div class="card-content">
                <div class="msg-header">
                  <span class="msg-from"><small>From filip jerga</small></span>
                  <span class="msg-timestamp"></span>
                  <span class="msg-attachment"><i class="fa fa-paperclip"></i></span>
                </div>
                <div class="msg-subject">
                  <span class="msg-subject"><strong id="fake-subject-1">{{ post.title }}</strong></span>
                </div>
                <div class="msg-snippet">
                  <p id="fake-snippet-1">{{ post.subtitle}}</p>
                </div>
              </div>
            </div>
            <!--            Card end -->
          </div>
        </div>
        <div
          class="column ig-6 message hero is-fullheight"
          id="message-pane"
        >
          <div class="box message-preview">
            <form class="post-form">
              <div class="field">
                <label class="label">Гарчиг</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Гайхалтай гарчиг">
                </div>
              </div>
              <div class="field">
                <label class="label">Дэд гарчиг</label>
                <div class="control">
                  <input class="input" type="email" placeholder="Гайхалтай дэд гарчиг">
                </div>
              </div>
              <div class="field">
                <label class="label">Content</label>
                <div class="control">
                  <textarea class="textarea" placeholder="Гайхалтай нийтлэл"></textarea>
                </div>
              </div>
              <button class="button is-primary">Шинэчлэх</button>
            </form>
          </div>
        </div>
      </div>
      <footer class="footer">
        <div class="container">
          <div class="content has-text-center">
            <p>
              <strong>Bulma templates</strong> by
              <a href="">Danie dsad lasd</a>. The source code is licensed
              <a href="">MIT</a>
            </p>
            <p>
              <a class="icon" href=""></a>
              <i class="fa fa-github"></i>
            </p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppPostCreate from '~/components/PostCreate'
export default {
  components: { AppPostCreate },
  data () {
    return {
    }
  },
  fetch ({ store }) {
    if (store.getters['post/hasEmptyItems']) {
      console.log('fetching data manage page')
      return store.dispatch('post/fetchPosts')
    }
  },
  computed: {
    ...mapState({
      posts: state => state.post.items
    })
  }
}
</script>

<style scoped>
.manage-page {
  padding: 30px;
}
.card {
  margin-bottom: 10px;
}
.card:hover {
  cursor: pointer;
  background-color: #eeeeee;
}
.post-form{
  text-align: left;
}
</style>
