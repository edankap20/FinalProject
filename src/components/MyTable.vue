<template>
    <div class="main-container">

        <div v-if="!updatingTask" id="new-task">
            <div class="input-group mb-3 input-group-lg shadow">
                <input type="text" class="form-control" placeholder="Any new task?" aria-label="Recipient's username"
                    aria-describedby="button-addon2" v-model="newTaskTitle">
                <button @click="_handleNewTask" class="btn btn-primary" type="button" id="button-addon2">Add</button>
            </div>
        </div>
        <div v-else id="new-task">
            <div class="input-group mb-3 input-group-lg">
                <input type="text" class="form-control" placeholder="Any new task?" aria-label="Recipient's username"
                    aria-describedby="button-addon2" v-model="updateTaskTitle">
                <button @click="_handleUpdateTask" class="btn btn-primary" type="button" id="button-addon2">Update</button>
            </div>
        </div>


        <div class="table-task">
            <h1>Tasks</h1>
            <div class="table-container shadow-lg p-3 mb-5 bg-body rounded">
                <table>
                    <thead>
                        <tr>
                            <th>Todos</th>
                            <th>State</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="todo in uncompletedTaskList" :key="todo.id">
                            <td>{{ todo.title }}</td>
                            <td>{{ '❌' }}</td>
                            <td>
                                <button class="action-button" @click="_handleCompleteTask(todo)">✅</button>
                                <button class="action-button" @click="_handleEditTask(todo)">📝</button>
                                <button class="action-button" @click="_handleEraseTask(todo)">🚮</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>



        <div class="table-Complete-Task">
            <h1>Completed Tasks</h1>
            <div class="table-container shadow-lg p-3 mb-5 bg-body rounded">
                <table>
                    <thead>
                        <tr>
                            <th>Todos</th>
                            <th>State</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="todo in completedTaskList" :key="todo.id">
                            <td>{{ todo.title }}</td>
                            <td>{{ '✅' }}</td>
                            <td>
                                <button class="action-button" @click="_handleIncompleteTask(todo)">🔄</button>
                                <button class="action-button" @click="_handleEraseTask(todo)">🚮</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import TodoStore from '@/stores/tasks.js';
import UserStore from '@/stores/user.js';

export default {
    name: 'MyTable',
    data() {
        return {
            newTaskTitle: '',
            updateTaskTitle: '',
            updatingTask: null,
        }
    },
    computed: {
        ...mapState(TodoStore, ['tasksList']),
        ...mapState(UserStore, ['user']),
        completedTaskList() {
            return this.tasksList.filter(task => task.is_complete);
        },
        uncompletedTaskList() {
            return this.tasksList.filter(task => !task.is_complete);
        },
    },
    methods: {
        ...mapActions(TodoStore, ['_fetchAllTasks', '_addNewTask', '_editTask', '_completeTask', '_incompleteTask', '_eraseTask', '_fetchTasks']),
        async _handleNewTask() {
            try {
                await this._addNewTask({ title: this.newTaskTitle, user_id: this.user.id })
                this.newTaskTitle = ''
            } catch (err) {
                console.error(err)
            }
        },
        _handleEditTask(todo) {
            this.updatingTask = todo;
            this.updateTaskTitle = this.updatingTask.title;
        },
        async _handleUpdateTask() {
            try {
                await this._editTask({ title: this.updateTaskTitle, id: this.updatingTask.id })

                this.updatingTask = null;
                this.updateTaskTitle = '';
            } catch (err) {
                console.error(err)
            }
        },
        async _handleCompleteTask(todo) {
            try {
                await this._completeTask({ id: todo.id })
                todo.is_complete = true;
            } catch (err) {
                console.error(err)
            }
        },
        async _handleIncompleteTask(todo) {
            try {
                await this._incompleteTask({ id: todo.id })
            } catch (err) {
                console.error(err)
            }
        },
        async _handleEraseTask(todo) {
            try {
                await this._eraseTask(todo.id);
            } catch (err) {
                console.error(err)
            }
        },


    },
    created() {
        this._fetchAllTasks()
    },
}
</script>


<style scoped>
@media (max-width: 425px) {
    #new-task {
        margin: 0rem 1rem 3rem;
    }

    h1 {
        text-align: center;
    }

    .table-task {
        margin-top: 2rem;
    }

    .table-Complete-Task {
        margin-top: 4rem;
        margin-bottom: 3rem;
    }

    .table-container {
        display: flex;
        justify-content: center;
        margin-top: rem;

    }

    .action-button {
        margin-right: 0.5rem;
        font-size: small;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        text-align: center;
        table-layout: fixed;
        background-color: white;
    }

    th,
    td {
        padding: 10px;
        text-align: center;
        border-bottom: 1px solid #ddd;
    }

    th {
        background-color: #f2f2f2;
        font-weight: bold;
    }
}
@media (min-width: 426px) {
    #new-task {
        margin: 0rem 1rem 3rem;
    }

    h1 {
        text-align: center;
    }

    .table-task {
        margin-top: 2rem;
    }

    .table-Complete-Task {
        margin-top: 4rem;
        margin-bottom: 3rem;
    }

    .table-container {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
    }

    .action-button {
        margin-right: 1rem;
        font-size: large;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        text-align: center;
        table-layout: fixed;
        background-color: white;
    }

    th,
    td {
        padding: 10px;
        text-align: center;
        border-bottom: 1px solid #ddd;
    }

    th {
        background-color: #f2f2f2;
        font-weight: bold;
    }
}
@media (min-width: 992) {
    #new-task {
        margin: 0rem 1rem 3rem;
    }

    h1 {
        text-align: center;
    }

    .table-task {
        margin-top: 2rem;
    }

    .table-Complete-Task {
        margin-top: 4rem;
        margin-bottom: 3rem;
    }

    .table-container {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
    }

    .action-button {
        margin-right: 1rem;
        font-size: large;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        text-align: center;
        table-layout: fixed;
        background-color: white;
    }

    th,
    td {
        padding: 10px;
        text-align: center;
        border-bottom: 1px solid #ddd;
    }

    th {
        background-color: #f2f2f2;
        font-weight: bold;
    }
}

</style>