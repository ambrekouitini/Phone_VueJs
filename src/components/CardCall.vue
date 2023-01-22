<template lang="">

    <div class="container">
        <div class="info-container">
            <div class="info">
                <h2>{{ contact.name }}</h2>
                <p>{{ contact.number }}</p>
            </div>
            <p>{{ contact.date }}</p>
        </div>
        <button @click="callContact(contact)"><img src="../assets/call.png" alt=""></button>
    </div>

</template>
<script>

export default {
    name: 'CardCall',

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
        gap: 50px;
        border-radius: 10px;
        padding: 15px;
        border: 1px solid rgb(157, 185, 223)
    }

    .info-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 50px;
    }

    .info{
        display: flex;
        flex-direction: column;
        gap: 5px;
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
