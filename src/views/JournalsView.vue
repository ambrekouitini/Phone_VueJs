<template lang="">

    <div class="main-container">
        <h1>Journal d'appels</h1>
        <div v-for="contact in journal" :key="contact.name" class="journal">
            <CardCall :contact="contact" /> 
        </div>
    </div>


</template>
<script>
import CardCall from '@/components/CardCall.vue'
export default {
    name: 'JournalsView',
    components: {
        CardCall
    },
    computed: {
		contacts() {
			return this.$store.state.contacts
		},
		journal() {
			return this.$store.state.journal
		}
	},
    methods: {
        callContact(contact) {
            let date = new Date();
            let newContact = { ...contact, date: date.toLocaleString('fr-FR'), id: Date.now() }
            this.$store.commit('callNumber', newContact)
        }
    },
}
</script>
<style scoped>
    .main-container {
        width: 100vw;
        height: 80vh;
        overflow: scroll;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 30px;
        gap: 13px;
    }
    .main-container h1 {
        font-size: 22px;
        padding-bottom: 20px;
    }
    .journal h2{
        color: #333;
        font-size: 20px;
        font-weight: 500;
    }
    .journal p {
        color: #999;
        font-size: 18px;
        font-weight: 300;
        letter-spacing: 1px;
    }
    
</style>