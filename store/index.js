export const state = () => ({
	cartItems: 0
})

export const mutations = {
	add(state) {
		state.cartItems++
	},
	update(state, num) {
		state.cartItems = num
	}
}