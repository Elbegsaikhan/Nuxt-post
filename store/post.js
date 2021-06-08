

import { INITIAL_DATA } from '/store/index'

function fetchPostsAPI () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(INITIAL_DATA.posts)
    }, 1000)
  })
}

export const state = () => {
  return {
    items: []
  }
}
// Very good spot to send a request
export const actions = {
  fetchPosts ({ commit }) {
    return fetchPostsAPI().then((posts) => {
      commit('setPosts', INITIAL_DATA.posts)
    })
  }
}
// Mutations are simple functions
export const mutations = {
  setPosts (state, posts) {
    state.items = posts
  }
}
