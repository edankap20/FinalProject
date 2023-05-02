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

<template>
    <div>

        <div v-if="!updatingTask">
            <input type="text" v-model="newTaskTitle">
            <button @click="_handleNewTask">Add new task</button>
        </div>
        <div v-else>
            <input type="text" v-model="updateTaskTitle">
            <button @click="_handleUpdateTask">Actualizar Tarea</button>
        </div>
        <h1>Tasks</h1>
        <table>
            <thead>
                <tr>
                    <th>Todos</th>
                    <th>State</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="todo in uncompletedTaskList" :key="todo.id">
                    <td>{{ todo.title }}</td>
                    <td>{{ '❌' }}</td>
                    <td>
                        <button @click="_handleCompleteTask(todo)">Complete!</button>
                        <button @click="_handleEditTask(todo)">Update</button>
                        <button @click="_handleEraseTask(todo)">Erase</button>
                    </td>
                </tr>
            </tbody>
        </table>



            <div>
                <h1>Completed Tasks</h1>
                <table>
                    <thead>
                        <tr>
                            <th>DoneTasks</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="todo in completedTaskList" :key="todo.id">
                            <td>{{ todo.title }}</td>
                            <td>{{ '✅' }}</td>
                            <td>
                                <button @click="_handleIncompleteTask(todo)">Incomplete</button>
                                <button @click="_handleEraseTask(todo)">Erase</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
    


    </div>
</template>