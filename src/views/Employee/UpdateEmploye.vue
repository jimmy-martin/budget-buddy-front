<template>
    <div class="addEmploye">
        <h1 class="login-title gradient-text">Modifier un employé</h1>
        <form class="form-container-add" action="" @submit.prevent="updateEmployee">
            <div class="input-field">
                <label>Nom*</label>
                <div class="width form-control">
                    <input type="text" name="nom" v-model="employee.firstname">
                </div>
            </div>
            <div class="input-field">
                <label>Prénom*</label>
                <div class="width form-control">
                    <input type="text" name="prenom" v-model="employee.lastname">
                </div>
            </div>
            <div class="input-field">
                <label>E-mail*</label>
                <div class="width form-control">
                    <input type="text" name="email" v-model="employee.email">
                </div>
            </div>
            <div class="input-field">
                <label>Téléphone</label>
                <div class="width form-control">
                    <input name="tel" type="text" v-model="employee.phone">
                </div>
            </div>
            <div class="input-field">
                <label>Mot de passe*</label>
                <div class="form-control mdp-container width">
                    <input name="mdp" class="mdp-input" type="password" v-model="employee.password" disabled>
                    <img class="input-icon" src="../../assets/eyecross.png" @click="showMdp">
                </div>
            </div>
            <div class="input-field">
                <label>IBAN*</label>
                <div class="form-control width">
                    <input name="iban" type="text" v-model="employee.iban" disabled>
                </div>
            </div>
            <br />
            <div class="flex">
                <input class="submit-btn width_sur_2" type="submit" value="Modifier">
                <button class="submit-btn width_sur_2" @click="goBack">Annuler</button>
            </div>
        </form>
        <br /><br />
    </div>
</template>

<script>
import budgetAxios from "../../axios/budgetAxios.ts";

export default {
  data() {
    return {
      employee: {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        password: "",
        iban: ""
      }
    }
  },
  methods: {
    async loadEmployee() {
      const employeeId = this.$route.params.id

      try {
        const response = await budgetAxios.get(`/users/${employeeId}`)

        const fullname = response.data.fullname.split(" ");
        this.employee.firstname = fullname[0];
        this.employee.lastname = fullname[1];
        this.employee.email = response.data.mail;
        this.employee.phone = response.data.phone;
        this.employee.password = this.generateRandomPassword();
        this.employee.iban = this.generateRandomIban();
      } catch (error) {
        console.log(error)
      }
    },
    async updateEmployee() {
      const employeeId = this.$route.params.id

      try {
        await budgetAxios.patch(`/users/${employeeId}`, {
          fullname: `${this.employee.firstname} ${this.employee.lastname}`,
          mail: this.employee.email,
          phone: this.employee.phone,
        });

        this.$router.push('/admin');
      } catch (error) {
        console.log(error);
      }
    },
    showMdp(event) {
      let target = event.currentTarget
      let mdpInputElement = target.parentElement.querySelector('.mdp-input')
      mdpInputElement.type = mdpInputElement.type === 'password' ? 'text' : 'password'
    },
    goBack(event) {
      this.$router.push('/admin');
    },
    generateRandomIban() {
      const countryCode = 'FR'; // Utilisez le code de pays souhaité
      const controlCode = Math.floor(Math.random() * 100).toString().padStart(2, '0');

      // Générer une suite alphanumérique pour le numéro de compte (exemple pour la France)
      let accountNumber = '';
      for (let i = 0; i < 23; i++) { // La longueur varie selon le pays
        const randomChar = Math.random() < 0.5
            ? String.fromCharCode(Math.floor(Math.random() * 10) + 48) // Chiffre
            : String.fromCharCode(Math.floor(Math.random() * 26) + 65); // Lettre majuscule
        accountNumber += randomChar;
      }

      return countryCode + controlCode + accountNumber;
    },
    generateRandomPassword() {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

      let password = '';

      for (let i = 0; i < 10; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
      }

      return password;
    }
  },
  mounted() {
    this.loadEmployee();
  }
}
</script>

<style scoped>

    .addEmploye {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        flex-grow: 3;
        align-items: center;
        padding: 42px 0 128px 0;
    }

    .flex {
        display: flex;
    }

    .width {
        width: 600px;
    }

    .width_sur_2 {
        width: 300px;
    }
</style>