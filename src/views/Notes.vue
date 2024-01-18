<template>
    <div class="notes">
        <div class="all-notes-container">
            <h3 class="note-title">Vos notes de frais</h3>
            <div class="note-container" v-if="notes.length" v-for="note in notes">
                <div class="note-body">
                    <img class="note-trash clickable" src="../assets/trash.png"/>
                    <div class="note-info">
                        <div class="note-header">
                            <span>{{ note.id }}</span>
                            <span>{{ note.status }}</span>
                        </div>
                        <span>{{ note.reason }}</span>
                        <span class="note-cout">{{ note.cost }} €</span>
                    </div>
                </div>
                <div class="separator"></div>
            </div>
            <div class="no-expense-container" v-else>
                <p>Aucune note de frais</p>
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

<script>
import budgetAxios from "../axios/budgetAxios.ts";

export default {
  data() {
    return {
      userId: 4,
      notes: []
    }
  },
  methods: {
    async getNotes() {
      try {
        const response = await budgetAxios.get(`/users/${this.userId}/expense_reports`);
        this.notes = response.data;
      } catch (error) {
        console.log(error);
      }
    }
  },
  beforeMount() {
    this.getNotes();
  }
}
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
        gap: 4px
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

    .no-expense-container {
        text-align: center;
    }

</style>