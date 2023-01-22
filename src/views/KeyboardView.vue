<template>
    <div class="main-container">
        <div class="input-container">
            <input v-model="inputValue" @input="getMatchingContact()" type="text" />
            <button @click="delNumber()"><img class="btndel" src="../assets/delnum.png" alt="" srcset=""></button>
        </div>
        <div v-if="getMatchingContact()">{{ matchingContact.name }} | {{ matchingContact.number }} </div>
        <div class="keypad-container">
            <div class="keypad">
                <div class="keypad-row">
                    <button class="btnnum" @click="addNumber(1)">1</button>
                    <button class="btnnum" @click="addNumber(2)">2</button>
                    <button class="btnnum" @click="addNumber(3)">3</button>
                </div>
                    <div class="keypad-row">
                    <button class="btnnum" @click="addNumber(4)">4</button>
                    <button class="btnnum" @click="addNumber(5)">5</button>
                    <button class="btnnum" @click="addNumber(6)">6</button>
                </div>
                <div class="keypad-row">
                    <button class="btnnum" @click="addNumber(7)">7</button>
                    <button class="btnnum" @click="addNumber(8)">8</button>
                    <button class="btnnum" @click="addNumber(9)">9</button>
                </div>
                <div class="keypad-row">
                    <button class="btnnum" @click="addNumber('*')">*</button>
                    <button class="btnnum" @click="addNumber(0)">0</button>
                    <button class="btnnum" @click="addNumber('#')">#</button>
                </div>
            </div>
            <button @click="callNumber"><img class="w-16 h-16" src="../assets/greencall.png" alt="appel"></button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'KeyboardView',
    data() {
        return {
            inputValue: '',
            matchingContact: null
        }
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
        addNumber(num) {
            this.inputValue += num;
        },

        delNumber() {
            this.inputValue = this.inputValue.slice(0, -1);
        },

        getMatchingContact() {
            if(!this.inputValue) {
                this.matchingContact = null;
            }else{
                this.matchingContact = this.contacts.find(contact => contact.number === this.inputValue);
                return this.matchingContact = this.contacts.find(contact => contact.number === this.inputValue);
            }
        },

        callNumber() {
            if (this.matchingContact) {
                this.matchingContact.date = new Date().toLocaleString('fr-FR');
                this.$store.commit('callContact', this.matchingContact);
            } else {
                let contact = { name: "inconnu", number: this.inputValue, date: new Date().toLocaleString('fr-FR') };
                this.$store.commit('callNumber', contact);
            }
        },
    }   
}

</script>
<style scoped>

    .main-container{
        width: 100%;
        height: 100vh;
        background-color: #f5f5f5;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 15px;
    }
    .input-container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 10px;
        background-color: #f5f5f5;
    }
    input{
        border-radius: 15px;
        background-color: lightgray;
        padding: 5px;
    }

    .btndel{
        width: 50px;
        height: 50px;
    }
    .keypad-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap : 20px;
    }

    .btnnum{
        width: 70px;
        height: 70px;
        margin: 6px;
        border-radius: 50%;
        color: white;
        font-size: 28px;
        background-color: lightgray;
        border: solid 1px grey;
    }
    @keyframes buttonPress{
        0%, 100%{
            background-color: transparent;
        }
        70%{
            background-color: rgba(255,255,255,0.5);
        }
    }
    button:active{
        animation: buttonPress 0.2s;
    }

</style>