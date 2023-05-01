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
        ...mapState(TodoStore, ['completedTaskList']),
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
                todo.is_complete = true
                this.completedTaskList.push(todo);
            } catch (err) {
                console.error(err)
            }
            /*             this._fetchAllTasks() */
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
                await this._eraseTask(todo.id)
                await this._fetchTasks();
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
        <!--         <h1>Lista de tareas</h1>
        <div v-for="todo in tasksList" :key="todo.id">
            <p>{{ todo.title }}</p>
            <span>{{ todo.is_complete ? '✅' : '❌' }}</span>
            <button @click="_handleCompleteTask(todo)">Complete!</button>
            <button @click="_handleEditTask(todo)">Update</button>
            <button @click="_handleEraseTask(todo)">Erase</button>
        </div> -->

        <h1>-----------------------</h1>
<!--         <h1>Completed Tasks</h1>
        <div v-for="todo in completedTaskList" :key="todo.id">
            <p>{{ todo.title }}</p>
            <span>{{ todo.is_complete ? '✅' : '❌' }}</span>
            <button @click="_handleIncompleteTask(todo)">Incomplete</button>
            <button @click="_handleEraseTask(todo)">Erase</button>
        </div> -->
        <h1>----------------------</h1>
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
                <tr v-for="todo in tasksList" :key="todo.id">
                    <td>{{ todo.title }}</td>
                    <td>{{ todo.is_complete ? '✅' : '❌' }}</td>
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
                            <th>Todos</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="todo in completedTaskList" :key="todo.id">
                            <td>{{ todo.title }}</td>
                            <td>{{ todo.is_complete ? '✅' : '❌' }}</td>
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