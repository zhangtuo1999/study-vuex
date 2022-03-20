import Vue from 'vue'
import Vuex from 'vuex'
import countAbout from "@/store/modules/countAbout";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        countAbout
    }
})