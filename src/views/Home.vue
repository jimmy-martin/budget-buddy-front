<template>
    <div class="home">
        <img class="home-image" src="../assets/home.png">
        <div class="login-container">
            <h1 class="login-title gradient-text">Budget Buddy</h1>
            <form class="form-container" action="" @submit.prevent="">
                <div class="input-field">
                    <label>E-mail</label>
                    <div class="form-control">
                        <input type="email">
                    </div>
                </div>
                <div class="input-field">
                    <label>Mot de passe</label>
                    <div class="form-control mdp-container">
                        <input class="mdp-input" type="password">
                        <img class="input-icon" src="../assets/eyecross.png" @click="showMdp">
                    </div>
                </div>
                
                <router-link class="clickable" to="/notes">
                    <input class="submit-btn" type="submit" value="Connexion">
                </router-link>
            </form>
        </div>
    </div>
</template>

<script setup lang="js">

function showMdp(event) {
    let target = event.currentTarget
    let mdpInputElement = target.parentElement.querySelector('.mdp-input')
    mdpInputElement.type = mdpInputElement.type === 'password' ? 'text' : 'password' 
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