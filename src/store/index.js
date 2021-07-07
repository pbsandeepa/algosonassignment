import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)
const apiUrl = 'https://jsonplaceholder.typicode.com'
export default new Vuex.Store({
  state: {
    users:[],
    userPosts:[],
    postDetails:{}
  },
  mutations: {
    SET_USERS(state, users){
      state.users = users
    },
    SET_USER_POSTS(state, userPosts){
      state.userPosts = userPosts
    },
    SET_POST_DETAILS(state, postDetails){
      state.postDetails = postDetails
    }
  },
  actions: {
    getUsers({ commit, state }){
      axios.get(apiUrl+"/users")
        .then(({ data }) => {
          console.log("USERS", data);
          data.sort(function(a,b){
            return a.name.localeCompare(b.name);
          })
          commit("SET_USERS", data);
          
        }).catch(error => {
          console.log('Error', error);
        });
    },
    getUserPosts({ commit, state }){
      axios.get(apiUrl+"/posts?userId="+sessionStorage.getItem("userId"))
        .then(({ data }) => {
          console.log("POSTS", data);
          commit("SET_USER_POSTS", data);
          
        }).catch(error => {
          console.log('Error', error);
        });
    },
    getPostDetails({ commit, state }){
      axios.get(apiUrl+"/posts/"+sessionStorage.getItem("postId"))
        .then(({ data }) => {
          console.log("POST_DETAILS", data);
          commit("SET_POST_DETAILS", data);
          
        }).catch(error => {
          console.log('Error', error);
        });
    },
  },
  modules: {
  }
})
