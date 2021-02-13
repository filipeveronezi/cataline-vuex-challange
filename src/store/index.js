import { createStore } from 'vuex'
import { faqCategories } from '../data/db.json'

export default createStore({
  state: {
    faqCategories: [],
    faqs: [],
    faq: [],
    transition: '',
    depth: 0
  },
  mutations: {
    SET_FAQCATEGORIES(state, payload) {
      state.faqCategories = payload
    },
    SET_FAQS(state, payload) {
      state.faqs = payload
    },
    SET_FAQ(state, payload) {
      state.faq = payload
    },
    SET_TRANSITION(state, payload) {
      state.transition = payload
    },
    SET_DEPTH(state, payload) {
      state.depth = payload
    }
  },
  actions: {
    fetchFaqCategories(context) {
      const faqCat = faqCategories
      context.commit('SET_FAQCATEGORIES', faqCat)
    },
    fetchFaqs(context, id) {
      const faqs = faqCategories.filter((faq) => faq.id == id)
      context.commit('SET_FAQS', faqs)
    },
    fetchFaq(context, id) {
      const faq = context.getters.$allFaqs[0].questions.filter(
        (faq) => faq.id == id
      )
      context.commit('SET_FAQ', faq)
    },
    setTransition(context, transition) {
      context.commit('SET_TRANSITION', transition)
    },
    setDepth(context, value) {
      context.commit('SET_DEPTH', value)
    }
  },
  getters: {
    $allFaqCategories(state) {
      return state.faqCategories
    },
    $allFaqs(state) {
      return state.faqs
    },
    $faq(state) {
      return state.faq
    },
    $transition(state) {
      return state.transition
    },
    $depth(state) {
      return state.depth
    }
  }
})
