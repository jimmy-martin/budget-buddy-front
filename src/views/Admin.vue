<template>
    <div class="admin">
        <div class="table-container">
            <div class="table-header">
                <div class="table-header-button">
                    Note de frais
                </div>
                <div class="table-header-button">
                    Employe
                </div>
            </div>
            <div class="flex-for-table">
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
                            <td><img src="../assets/money.png"><img src="../assets/cancel.png"></td>
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
    }
    
    table, td, th {
        border: 1px solid #333;
        border-collapse: collapse;
    }

    .flex-for-table {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
</style>