import Vue from 'vue'
import { INITIAL_DATA } from './index'

export function fetchPostsAPI () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(INITIAL_DATA.posts)
    }, 200)
  })
}

export const state = () => {
  return {
    items: []
  }
}

export const getters = {
  hasEmptyItems (state) {
    return state.items.length === 0
  }
}

// Very good spot to send a request
export const actions = {
  fetchPosts ({ commit }) {
    return fetchPostsAPI().then((posts) => {
      commit('setPosts', INITIAL_DATA.posts)
    })
  },
  createPost ({ commit }, postData) {
    // create post on server, pr perssist data in some way
    postData._id = Math.random().toString(36).substr(2, 7)
    postData.createdAt = new Date()
    console.log('Created Post :' + postData)
    commit('addPost', postData)
  },
  updatePost ({ commit, state }, postData) {
    const postIndex = state.items.findIndex((post) => {
      return post._id === postData._id
    })
    commit('replacePost', { post: postData, index: postIndex })
  }
}
// Mutations are simple functions
export const mutations = {
  setPosts (state, posts) {
    state.items = posts
  },
  addPost (state, post) {
    console.log(post)
    state.items.push(post)
  },
  replacePost (state, { post, index }) {
    Vue.set(state.items, index, post)
  }
}
