<template>
    <div class="admin">
        <div class="table-container">
            <div class="table-header">
                <div id="buttonNotes" class="table-header-button active" @click="switchToNotes">
                    Note de frais
                </div>
                <div id="buttonEmployes" class="table-header-button" @click="switchToEmployes">
                    Employe
                </div>
            </div>
            <div id="tableNotes" class="flex-for-table active">
                <table class="table-content">
                    <thead class="table-first-row">
                        <th>Identifiant</th>
                        <th>Employe</th>
                        <th>Raison</th>
                        <th>Cout</th>
                        <th>Statut</th>
                        <th>Actions</th>
                    </thead>
                    <tbody>
                        <tr v-for="note in notes" class="table-row">
                            <td>{{ note.id }}</td>
                            <td>{{ note.nom }}</td>
                            <td>{{ note.raison }}</td>
                            <td>{{ note.cout }}</td>
                            <td>{{ note.statut }}</td>
                            <td><img class="table-icon" src="../assets/money.png"><img class="table-icon" src="../assets/cancel.png"></td>
                        </tr>
                    </tbody>
                </table>
                <div class="extend-table-footer">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div id="tableEmployes" class="flex-for-table">
                <table class="table-content">
                    <thead class="table-first-row">
                        <th>Identifiant</th>
                        <th>Nom complet</th>
                        <th>Email</th>
                        <th>Telephone</th>
                        <th>Actions</th>
                    </thead>
                    <tbody>
                        <tr v-for="note in notes" class="table-row">
                            <td>{{ note.id }}</td>
                            <td>{{ note.name }}</td>
                            <td>{{ note.email }}</td>
                            <td>{{ note.phone }}</td>
                            <td><img class="table-icon" src="../assets/edit.png"><img class="table-icon" src="../assets/trash.png"></td>
                        </tr>
                    </tbody>
                </table>
                <div class="extend-table-footer">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="js">
import { onMounted } from 'vue';

var notes = [
    {
        id : "1",
        nom: "Philipe",
        status : "Acceptee",
        raison : "Achat d'un chargeur casse",
        cout : "40"
    },
    {
        id : "2",
        nom: "Stanislas",
        status : "Refusee",
        raison : "Stylo casse",
        cout : "6"
    },
    {
        id : "3",
        nom: "Julie",
        status : "En attente",
        raison : "Abonnement mobile Telephone professionel",
        cout : "80"
    },
    {
        id : "4",
        nom: "Martine",
        status : "En attente",
        raison : "Chaise de bureau",
        cout : "120"
    },
    {
        id : "5",
        nom: "Jean",
        status : "Refuse",
        raison : "Nouveau PC",
        cout : "500"
    }
]

function switchToEmployes(event) {
    let target = event.currentTarget
    let mainDiv = target.parentElement.parentElement
    /* mainDiv.querySelector('buttonEmploye').classList.add('active')
    mainDiv.querySelector('buttonNotes').classList.remove('active')
    mainDiv.querySelector('tableEmployes').classList.add('active')
    mainDiv.querySelector('tableNotes').classList.remove('active') */
}

function switchToNotes(event) {
    let target = event.currentTarget
    let mainDiv = target.parentElement.parentElement
    /* mainDiv.querySelector('buttonEmploye').classList.remove('active')
    mainDiv.querySelector('buttonNotes').classList.add('active')
    mainDiv.querySelector('tableEmployes').classList.remove('active')
    mainDiv.querySelector('tableNotes').classList.add('active') */
}

onMounted(() => {
    
})

</script>

<style scoped>

    .admin {
        display: flex;
        flex-direction: column;
        flex-grow: 3;
        padding: 10px;
    }

    .table-container {
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        height: 100%;
    }

    .table-header {
        display: flex;
    }

    .table-header-button {
        flex-grow: 3;
        cursor: pointer;
        text-align: left;
        padding: 6px 12px;
        background-color: var(--color-primary);
    }

    .table-header-button.active {
        background-color: var(--color-active);
    }
    
    table, td, th {
        border: 1px solid #333;
        border-collapse: collapse;
    }

    .flex-for-table {
        display: none;
        flex-direction: column;
        height: 100%;
    }

    .flex-for-table.active {
        display: flex;
    }

    .table-icon {
        width: 40px
    }
</style>