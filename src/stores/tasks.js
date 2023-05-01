import { defineStore } from 'pinia'
import supabase from '@/supabase/index.js'

export default defineStore('tasks', {
  state() {
    return {
      tasksList: [],
      completedTaskList: [],
    }
  },
  actions: {
    async _fetchAllTasks() {
      const { data, error } = await supabase
      .from('tasks')
      .select()

      if (error) throw error;
      console.log(data)
      this.tasksList = data
    },
    async _addNewTask({ title, user_id }) {
      const { data, error } = await supabase
        .from('tasks')
        .insert({ title, user_id })
        .select();

        if (error) throw error;
        this.tasksList.push(...data)
    },
    async _editTask({ title, id }){
      const { data, error } = await supabase
        .from('tasks')
        .update({ title })
        .eq('id', id)
        .select()

      if (error) throw error;

      const [task] = data;
      this.tasksList.forEach(todo => {
        if (todo.id === task.id) {
          todo.title = task.title;
        }
      })
    },
    async _completeTask(task) {
      const { data, error} = await supabase
        .from('tasks')
        .update({ is_complete: true })
        .eq('id', task.id)
        .select()

        if (error) throw error;

        const [updatedTask] = data;
        task.is_complete = updatedTask.is_complete;
        this.tasksList = this.tasksList.filter(todo => todo.id !== task.id);

    },
    async _incompleteTask({ id }) {
      const { data, error } = await supabase
        .from('tasks')
        .update({ is_complete: false })
        .eq('id', id)
        .select()
    
      if (error) throw error;
    
      const [task] = data;
      const index = this.completedTaskList.findIndex(todo => todo.id === task.id)
      if (index !== -1) {
        this.completedTaskList.splice(index, 1)
        this.tasksList.push(task)
      }
    },
    async _eraseTask(id) {
        const { error } = await supabase
          .from('tasks')
          .delete()
          .eq('id', id)
        
        if (error) throw error;
    },
    async _fetchTasks() {
      try {
          const { data: tasks, error } = await supabase
              .from('tasks')
              .select()
              .order('inserted_at', { ascending: false });
          if (error) throw error;
          this.tasksList = tasks.filter(todo => !todo.is_complete);
          this.completedTaskList = tasks.filter(todo => todo.is_complete);
      } catch (err) {
          console.error(err);
      }
    }

  },
})



