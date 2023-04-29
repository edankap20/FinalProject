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
    },
    methods: {
        ...mapActions(TodoStore, ['_fetchAllTasks', '_addNewTask', '_editTask']),
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
        }
    },
    created() {
        console.log('created en MyTable')
        this._fetchAllTasks()
    },
}
</script>

<template>
    <div>
        <h1>Esta es la tabla</h1>
        <div v-for="todo in tasksList" :key="todo.id">
            <p>{{ todo.title }}</p>
            <span>{{ todo.is_complete ? '✅' : '❌' }}</span>
            <button @click="_handleCompleteTask(todo)">Complete!</button>
            <button @click="_handleEditTask(todo)">Update</button>
        </div>
        <div v-if="!updatingTask">
            <input type="text" v-model="newTaskTitle">
            <button @click="_handleNewTask">Añadir Tarea</button>
        </div>
        <div v-else>
            <input type="text" v-model="updateTaskTitle">
            <button @click="_handleUpdateTask">Actualizar Tarea</button>
        </div>



        <table>
            <thead>
                <tr>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>