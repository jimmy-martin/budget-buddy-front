<template>
    <div class="home">
        <img class="home-image" src="../assets/home.png">
        <div class="login-container">
            <h1 class="login-title gradient-text">Budget Buddy</h1>
            <form class="form-container" action="" @submit.prevent="tryLogin">
                <div class="input-field">
                    <label>E-mail</label>
                    <div class="form-control">
                        <input v-model="login.email" name="email" type="email">
                    </div>
                </div>
                <div class="input-field">
                    <label>Mot de passe</label>
                    <div class="form-control mdp-container">
                        <input v-model="login.password" class="mdp-input" name="password" type="password">
                        <img class="input-icon" src="../assets/eyecross.png" @click="showMdp">
                    </div>
                </div>
                
                <a>
                    <input class="submit-btn" type="submit" value="Connexion">
                </a>
            </form>
        </div>
    </div>
</template>

<script lang="js">

export default {
  data() {
    return {
        login: {
            email: "",
            password: ""
        },      
        users: [
            {
                id: 2,
                email: "terry.weber@gmail.com",
                password: "TerryWeber"
            },
            {
                id: 3,
                email: "veronica.batz@gmail.com",
                password: "veronicaBatz"
            },
            {
                id: 4,
                email: "kirk.schiller@gmail.com",
                password: "KirkSchiller"
            }
        ],
        defaultAdmin: {
            id: 1,
            email: "valentin.borer@gmail.com",
            password: "admin"
        },
        exists: false
    }
  },
  methods: {
    tryLogin(){
        let exists = false
        //Search for existing user
        this.users.forEach(user => {
            if(
                this.login.email === user.email && 
                this.login.password === user.password
            ){
                exists = true
                this.id = user.id
            } 
        });

        //Logic if user exists as an admin,as a user or doesn't exist
        if(
            this.login.email === this.defaultAdmin.email && 
            this.login.password === this.defaultAdmin.password
        ) {
            this.loginAsAdmin(this.defaultAdmin.id)
        }
        else if(exists === true) {
            this.loginNormal(this.id)
        }
        else {
            console.log("Denied")
        }
    },
    loginAsAdmin(id){
        window.localStorage.setItem('id', id);
        window.localStorage.setItem('login', true);
        window.localStorage.setItem('admin', true);

        window.location.replace("/admin");
    },
    loginNormal(id){
        window.localStorage.setItem('id', id);
        window.localStorage.setItem('login', true);
        window.localStorage.setItem('admin', false);

        window.location.replace("/notes");
    },
    showMdp(event) {
        let target = event.currentTarget
        let mdpInputElement = target.parentElement.querySelector('.mdp-input')
        mdpInputElement.type = mdpInputElement.type === 'password' ? 'text' : 'password' 
    }
  },
  beforeMount() {
    let admin = window.localStorage.getItem('admin')
    let login = window.localStorage.getItem('login')

    //Redirect to pages if admin or logged in

    if(admin === "true" && login === "true"){
        window.location.replace("/admin");
    }
    else if(login === "true") {
        window.location.replace("/notes");
    }
    else {
        console.log("Not logged in")
    }
  }
}
</script>

<style scoped>
.home {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    flex-grow: 3;
    align-items: center;
}

.home-image {
    width: 40%;
}

.login-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.login-title {
    text-align: center;
    font-family: Artifika;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

</style>