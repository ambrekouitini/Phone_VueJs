<template lang="">
    
    <div class="main-container">
        <div class="title">
            <h1>Liste de contact</h1>
            <button><router-link to="/form">Ajouter un contact</router-link></button>
        </div>

        <div v-for="contact in contacts" :key="contact.name" class="contacts">
            <CardContact :contact="contact" />
        </div>
    </div>


</template>
<script>
import CardContact from '@/components/CardContact.vue'
export default {
    name: 'ContactView',
    components: {
        CardContact
    },
    computed: {
        contacts() {
            return this.$store.state.contacts
        },
        journal() {
            return this.$store.state.journal
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
    }
    .title {
        display: flex;
        align-items: center;
        gap: 60px;
        gap: 60px;
        padding-bottom: 20px;
    }
    .title h1 {
        font-size: 22px;

    }
    .title button {
        background-color: #9e9e9e2e;
        border: 1px solid #9e9e9e;
        border-radius: 30px;
        padding: 10px 30px;
        cursor: pointer;
    }
    .title button:hover {
        background-color: #9e9e9edc;
        color: #fff;
    }
    .contacts {
        gap: 5px;
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
    }
    
</style>
