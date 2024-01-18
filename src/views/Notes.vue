<template>
    <div class="notes">
        <div class="all-notes-container">
            <h3 class="note-title">Vos notes de frais</h3>
            <div class="note-container" v-for="note in notes">
                <div class="note-body">
                    <img class="note-trash clickable" src="../assets/trash.png">
                    <div class="note-info">
                        <div class="note-header">
                            <span>{{ note.id }}</span>
                            <span>{{ note.status }}</span>
                        </div>
                        <span>{{ note.raison }}</span>
                        <span class="note-cout">{{ note.cout }} €</span>
                    </div>
                </div>
                <div class="separator"></div>
            </div>
        </div>
        <div class="create-note-container">
            <h2>Creer une note nouvelle note de frais</h2>
            <form class="form-container" action="" @submit.prevent="">
                
                <div class="input-field">
                    <label>Raison</label>
                    <div class="form-control">
                        <textarea class=""></textarea>
                    </div>
                </div>
                <div class="input-field">
                    <label>Cout</label>
                    <div class="form-control">
                        <input type="text">
                    </div>
                </div>
                <input class="submit-btn" type="submit" value="Creer">    
            </form>       
        </div>
    </div>
</template>

<script setup lang="js">
import { onMounted } from 'vue';

var note = {
    id : "1",
    status : "Acceptee",
    raison : "Achat d'un chargeur casse",
    cout : "20"
}

var notes = [
    {
        id : "1",
        status : "Acceptee",
        raison : "Achat d'un chargeur casse",
        cout : "40"
    },
    {
        id : "2",
        status : "Refusee",
        raison : "Stylo casse",
        cout : "6"
    },
    {
        id : "3",
        status : "En attente",
        raison : "Abonnement mobile Telephone professionel",
        cout : "80"
    }/* ,
    {
        id : "4",
        status : "En attente",
        raison : "Chaise de bureau",
        cout : "120"
    } */
]

onMounted(() => {
    
})

</script>

<style scoped>

    .notes {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-grow: 3;
        align-items: center;
    }

    .all-notes-container {
        background-color: var(--color-primary);
        padding: 20px;
        overflow-y: auto;
        display: flex;
        gap: 30px;
        flex-direction: column;
        text-align: left;
        max-height: 80%;
    }

    .all-notes-container::-webkit-scrollbar {
        width: 14px;
    }

    .all-notes-container::-webkit-scrollbar-thumb {
        background-clip: padding-box;
        background-color: var(--color-gray);
        border: 4px solid rgba(0, 0, 0, 0); 
    }

    .note-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .note-container:last-child .separator {
            display: none;
        }

    .note-title {
        text-align: center;
        text-align: center;
        font-family: CrimsonText;
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .note-body {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
    }

    .note-info {
        display: flex;
        flex-direction: column;
        flex-grow: 3;
    }

    .note-header {
        display: flex;
        justify-content: space-between;
    }

    .separator {
        width: 100%;
        height: 2px;
        background-image: var(--gradient);
    }

    .note-cout {
        align-self: flex-end;
    }

    .note-trash {
        width: 35px;
    }

    .create-note-container {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }


</style>