<template>
  <nav class="w-full fixed bottom-0 flex flex-row justify-around items-center bg-stone-300 p-6">
    <div class="flex flex-col items-center">
      <router-link to="/journals"><img src="./assets/call.png" alt=""></router-link>
      <span>Appels</span>
    </div>
    <div class="flex flex-col items-center">
      <router-link to="/contact"><img src="./assets/contact.png" alt=""></router-link>
      <span>Contacts</span>
    </div>
    <div class="flex flex-col items-center">
      <router-link to="/keyboard"><img src="./assets/keypad.png" alt=""></router-link>
      <span>Clavier</span>
    </div>
  </nav>
  <router-view/>
</template>

<script>
	export default {
		name: 'App',
		computed: {
			contacts() {
				return this.$store.state.contacts
			},
			journal() {
				return this.$store.state.journal
			}
		},
		methods: {
			ajoutPanier(contact) {
				this.$store.commit('ajoutPanier', contact)
			}
		}
	}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

img {
  width: 40px;
  height: 40px;
}
</style>
