<template>
    <div class="admin">
        <div class="table-container">
            <div class="table-header">
                <div id="buttonNotes"
                     class="table-header-button"
                     :class="{ 'active': activeTable === 'notes' }"
                     @click="setActiveTable('notes')">
                    Note de frais
                </div>
                <div id="buttonEmployes"
                     class="table-header-button"
                     :class="{ 'active': activeTable === 'employes' }"
                     @click="setActiveTable('employes')">
                    Employés
                </div>
            </div>
            <div id="tableNotes"
                 class="flex-for-table"
                 :class="{ 'active': activeTable === 'notes' }">
                <table class="table-content">
                    <thead class="table-first-row">
                        <th>Identifiant</th>
                        <th>Employé</th>
                        <th>Raison</th>
                        <th>Coût</th>
                        <th>Statut</th>
                        <th>Actions</th>
                    </thead>
                    <tbody>
                        <tr v-for="note in notes" class="table-row">
                            <td>{{ note.id }}</td>
                            <td>{{ note.owner.fullname }}</td>
                            <td>{{ note.reason }}</td>
                            <td>{{ note.cost }}</td>
                            <td>{{ note.status }}</td>
                            <td>
                              <img
                                  class="table-icon clickable"
                                  src="../assets/money.png"
                                  @click="payNote(note.id)"/>
                              <img
                                  class="table-icon clickable"
                                  src="../assets/cancel.png"
                                  @click="refuseNote(note.id)"/>
                            </td>
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
            <div id="tableEmployes"
                 class="flex-for-table"
                 :class="{ 'active': activeTable === 'employes' }">
                <table class="table-content">
                    <thead class="table-first-row">
                        <th>Identifiant</th>
                        <th>Nom complet</th>
                        <th>Email</th>
                        <th>Téléphone</th>
                        <th>Actions</th>
                    </thead>
                    <tbody>
                        <tr v-for="employee in employees" class="table-row">
                            <td>{{ employee.id }}</td>
                            <td>{{ employee.fullname }}</td>
                            <td>{{ employee.mail }}</td>
                            <td>{{ employee.phone }}</td>
                            <td>
                              <img class="table-icon clickable" src="../assets/edit.png">
                              <img class="table-icon clickable"
                                   src="../assets/trash.png"
                                   @click="deleteEmployee(employee.id)"/>
                            </td>
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

<script>
import budgetAxios from '../axios/budgetAxios.ts';

export default {
  data() {
    return {
      notes : [],
      employees : [],
      activeTable : 'notes'
    }
  },
  methods: {
    async getNotes() {
      try {
        const response = await budgetAxios.get('/expense_reports?owner.role=2&owner.isDeleted=0');
        this.notes = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async payNote(noteId) {
      try {
        await budgetAxios.get(`/expense_reports/${noteId}/pay`);
        await this.getNotes();
      } catch (error) {
        console.log(error);
      }
    },
    async refuseNote(noteId) {
      try {
        await budgetAxios.get(`/expense_reports/${noteId}/refuse`);
        await this.getNotes();
      } catch (error) {
        console.log(error);
      }
    },
    setActiveTable(table) {
      this.activeTable = table;

      if (table === 'notes') {
        this.getNotes();
      } else {
        this.getEmployees();
      }
    },
    async getEmployees() {
      try {
        const response = await budgetAxios.get('/users?order[fullname]=asc&role=2&isDeleted=0');
        this.employees = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteEmployee(employeeId) {
      try {
        await budgetAxios.delete(`/users/${employeeId}`);
        await this.getEmployees();
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