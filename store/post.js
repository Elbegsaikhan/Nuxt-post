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
  }
}
// Mutations are simple functions
export const mutations = {
  setPosts (state, posts) {
    state.items = posts
  }
}
