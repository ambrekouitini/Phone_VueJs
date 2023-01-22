<template>
    <div class="container">
        <h2>Ajout d'un contact</h2>
        <form @submit.prevent="addContact">
            <div class="name-container">
                <label for="name">Nom</label>
                <input type="text" id="name" name="name" placeholder="ex : ouistiti..." v-model="formContact.name">
            </div>
            <div class="number-container">
                <label for="number">Numéro</label>
                <input type="text" id="number" name="number" placeholder="ex : 06 03 ..." v-model="formContact.number">
            </div>
            <button type="submit">Ajouter</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'FormContact',

    props: [
        'contacts'
    ],

    data() {
        return {
            error: false,

            formContact: {
                name: '',
                number: ''
            }
        }
    },

    methods: {
        addContact() {
            if(this.formContact.name == "" || this.formContact.number == "") return

            if(this.contacts.find(contact => contact.name == this.formContact.name)) return

            this.$store.commit('addContact', this.formContact)

            this.formContact = {
                name: '',
                number: ''
            }
        },
    }

}
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
        padding: 25px;
        border: 1px solid #ccc;
        border-radius: 15px;
        background-color: rgb(214, 224, 238);
        box-shadow: rgba(51, 51, 51, 0.145) 0px 0px 10px;
    }

    h2 {
        text-align: center;
        color: #333;
        font-size: 20px;
        font-weight: 500;
    }


    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
        padding: 25px;

    }

    form > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 100%;
        margin-bottom: 20px;
    }

    form > div > label {
        font-size: 18px;
        font-weight: 500;
        color: #333;
        margin-bottom: 5px;
    }

    form > div > input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #fff;
        font-size: 14px;
        font-weight: 500;
        color: #333;
    }

    form > div > input::placeholder {
        color: #ccc;
    }

    form > button {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 30px;
        background-color: #fff;
        font-size: 16px;
        font-weight: 500;
        color: #333;
        cursor: pointer;
    }

    form > button:hover {
        background-color: #ccc;
    }

    form > button:active {
        background-color: #aaa;
    }
    

</style>