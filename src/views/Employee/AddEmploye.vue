<template>
    <div class="addEmploye">
        <h1 class="login-title gradient-text">Ajouter un employé</h1>
        <form class="form-container-add" action="" @submit.prevent>
            <div class="input-field">
                <label>Nom*</label>
                <div class="width form-control">
                    <input type="text" name="nom" v-model="employeeForm.firstname">
                </div>
            </div>
            <div class="input-field">
                <label>Prénom*</label>
                <div class="width form-control">
                    <input type="text" name="prenom" v-model="employeeForm.lastname">
                </div>
            </div>
            <div class="input-field">
                <label>E-mail*</label>
                <div class="width form-control">
                    <input type="text" name="email" v-model="employee.mail">
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
                    <input name="mdp" class="mdp-input" type="password" v-model="employee.password">
                    <img class="input-icon" src="../../assets/eyecross.png" @click="showMdp">
                </div>
            </div>
            <div class="input-field">
                <label>IBAN*</label>
                <div class="form-control width">
                    <input name="iban" type="text">
                </div>
            </div>
            <br />
            <div class="flex">
                <input class="submit-btn width_sur_2" type="submit" value="Ajouter" @click="addEmployee">
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
        password: "",
        mail: "",
        phone: "",
        fullname: "",
        role: "/api/roles/2"
      },
      employeeForm: {
        firstname: "",
        lastname: ""
      }
    }
  },
  methods: {
    showMdp(event) {
      let target = event.currentTarget;
      let mdpInputElement = target.parentElement.querySelector(".mdp-input");
      mdpInputElement.type = mdpInputElement.type === "password" ? "text" : "password";
    },
    goBack(event) {
      location.href = "/admin";
    },
    async addEmployee() {
      this.employee.fullname = `${this.employeeForm.firstname} ${this.employeeForm.lastname}`;

      try {
        await budgetAxios.post('/users', this.employee);

        this.$router.push({path: '/admin#employes'});
      } catch (error) {
        console.log(error);
      }
    }
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