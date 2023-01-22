<template lang="">
    <body>
        <FormContact :contacts="contacts"/>
    </body>

</template>

<script>
import FormContact from '../components/FormContact.vue'

export default {
    name: 'FormView',
    components: {
        FormContact
    },

    computed: {
        contacts() {
            return this.$store.state.contacts
        },
    }

}
</script>
<style scoped>
    body {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-bottom: 50px;
    }

</style>
