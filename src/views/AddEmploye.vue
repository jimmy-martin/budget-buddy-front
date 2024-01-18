<template>
    <div class="addEmploye">
        <h1 class="login-title gradient-text">Ajouter un employé</h1>
        <form class="form-container-add" action="">
            <div class="input-field">
                <label>Nom*</label>
                <div class="widthe form-control">
                    <input type="text" name="nom">
                </div>
            </div>
            <div class="input-field">
                <label>Prénom*</label>
                <div class="widthe form-control">
                    <input type="text" name="prenom">
                </div>
            </div>
            <div class="input-field">
                <label>E-mail*</label>
                <div class="widthe form-control">
                    <input type="text" name="email">
                </div>
            </div>
            <div class="input-field">
                <label>Téléphone</label>
                <div class="widthe form-control">
                    <input name="tel" type="text">
                </div>
            </div>
            <div class="input-field">
                <label>Mot de passe*</label>
                <div class="form-control mdp-container widthe">
                    <input name="mdp" class="mdp-input" type="password">
                    <img class="input-icon" src="../assets/eyecross.png" @click="showMdp">
                </div>
            </div>
            <div class="input-field">
                <label>IBAN*</label>
                <div class="form-control widthe">
                    <input name="iban" type="text">
                </div>
            </div>
            <br />
            <div class="flex">
                <input class="submit-btn widthe_sur_2" type="submit" value="Ajouter">
                <button class="submit-btn widthe_sur_2" type="button" @Click="connect"> Annuler</button>
            </div>
        </form>
        <br /><br />
    </div>
</template>

<script setup lang="js">
    function showMdp(event) {
        let target = event.currentTarget
        let mdpInputElement = target.parentElement.querySelector('.mdp-input')
        mdpInputElement.type = mdpInputElement.type === 'password' ? 'text' : 'password' 
    }
    function connect(event) {
        let target = event.currentTarget
        location.href="/"
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

    .widthe{
        width: 600px;
    }

    .widthe_sur_2{
        width: 300px;
    }
</style>