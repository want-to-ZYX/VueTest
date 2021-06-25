import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)
const store = new vuex.Store({
	state:{
		username: 'ZYX',
		token: '123456'
	}
})

export default store