<template>
    <div class="navbar">
        <router-link class="clickable" :to="homePath" style="display:flex;">
          <img class="navbar-logo" src="../assets/logo.png">
        </router-link>
        <router-link v-if="admin === 'true'" class="clickable add-employe" to="/add_employe">
          Ajouter employe <img class="navbar-icon" src="../assets/add.png">
        </router-link>
        <div v-if="login === 'true'" class="navbar-account-controls">
          <router-link class="clickable" to="/profile">
            <img class="navbar-icon" src="../assets/profile.png">
          </router-link>
          <a class="clickable" tabindex="0" @click="disconnect">
            <img class="navbar-icon" src="../assets/logout.png">
          </a>
        </div>
    </div>
</template>

<script lang="js">
export default {
  data() {
    return {
        homePath: "",
        id: window.localStorage.getItem('id'),
        login: window.localStorage.getItem('login'),
        admin: window.localStorage.getItem('admin')
    }
  },
  methods: {
    disconnect(){
      window.localStorage.removeItem('id')
      window.localStorage.removeItem('admin')
      window.localStorage.removeItem('login')
      window.location.replace('/')
    }
  },
  beforeMount() {
    let admin = window.localStorage.getItem('admin')
    let login = window.localStorage.getItem('login')

    //Redirect to pages if admin or logged in

    if(admin === "true" && login === "true"){
        this.homePath = '/admin'
    }
    else if(login === "true") {
      this.homePath = '/notes'
    }
    else {
      this.homePath = '/'
    }
  }
}

</script>

<style scoped>
  .navbar {
    display: flex;
    padding: 12px 24px;
    height: 64px;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-primary);
  }

  .navbar-account-controls {
    display: flex;
    gap: 24px;
  }

  .navbar-logo {
    width: 64px;
    height: 64px;
  }

  .navbar-icon {
    width: 42px;
    height: 42px;
  }

  .add-employe {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #000;
    font-family: CrimsonText;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media screen  and (max-width: 600px) {
    .navbar-logo {
        width: 32px;
        height: 32px;
    }

    .navbar-icon {
        width: 21px;
        height: 21px;
    }

    .navbar {
        height: 32px;
    }
  }
</style>