<template lang="">

    <div class="container">
        <div class="info">
            <h2>{{ contact.name }}</h2>
            <p>{{ contact.number }}</p>
        </div>
        <button @click="callContact(contact)"><img src="../assets/call.png" alt=""></button>
    </div>

</template>
<script>

export default {
    name: 'CardContact',

    props: [
        'contact'
    ],

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
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 35px;
        background-color: rgb(203, 217, 236);
        border-radius: 10px;
        padding: 10px;
        margin: 10px 0;
    }

    .info {
        display: flex;
        flex-direction: column;
    }

    .info h2{
        color: #333;
        font-size: 20px;
        font-weight: 500;
    }

    .info p {
        color: #999;
        font-size: 18px;
        font-weight: 300;
        letter-spacing: 1px;
    }

    button img {
        width: 40px;
        height: 40px;
    }
    
</style>
