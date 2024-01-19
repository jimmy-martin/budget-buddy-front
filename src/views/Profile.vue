<template>
    <div class="profile">
        <h2 class="profile-title">Informations du compte</h2>
        <div class="profile-body">
            <img class="profile-picture" src="../assets/profile.png">
            <div class="profile-info-container">
                <span>Nom complet : {{ user.fullname }}</span>
                <span>Email : {{ user.mail }}</span>
                <span v-if="user.phone">Telephone : {{ user.phone }}</span>
                <span v-if="user.iban">IBAN : {{ user.iban }}</span>
            </div>
        </div>
        <button class="btn" disabled>Modifier le mot de passe</button>
    </div>
</template>

<script lang="js">
import budgetAxios from "../axios/budgetAxios.ts";

export default {
  data() {
    return {
        id: window.localStorage.getItem('id'),
        user: {}
    }
  },
  methods: {
    async getProfile() {
      try {
        const response = await budgetAxios.get(`/users/${this.id}`);
        this.user = response.data;
      } catch (error) {
        console.log(error);
      }
    }
  },
  beforeMount() {
    this.id = window.localStorage.getItem('id')
    this.getProfile()
  }
}

</script>

<style scoped>
    .profile {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        flex-grow: 3;
        align-items: center;
        padding: 42px 0 128px 0;
    }

    .profile-info-container {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .profile-title {
        font-family: CrimsonText;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .profile-body {
        display: flex;
        align-items: center;
        text-align: left;
        gap: 40px;
    }

    .profile-picture {
        background-color: var(--color-primary);
        outline: 3px solid black;
        border-radius: 10%;
    }
</style>