import { defineStore } from 'pinia'
import supabase from '@/supabase/index.js'

export default defineStore('tasks', {
  state() {
    return {
      tasksList: [],
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
      const { error} = await supabase
        .from('tasks')
        .update({ is_complete: true })
        .eq('id', task.id);

        if (error) throw error;

        const index = this.tasksList.findIndex(todo => todo.id === task.id)
        if (index !== -1) {
          this.tasksList[index].is_complete = true;
        }
    },
    async _incompleteTask({ id }) {
      const { error } = await supabase
        .from('tasks')
        .update({ is_complete: false })
        .eq('id', id);
    
      if (error) throw error;

      const index = this.tasksList.findIndex(todo => todo.id === id)
      if (index !== -1) {
        this.tasksList[index].is_complete = false;
      }
    },
    async _eraseTask(id) {
        const { error } = await supabase
          .from('tasks')
          .delete()
          .eq('id', id)
        
        if (error) throw error;
        this.tasksList = this.tasksList.filter(task => task.id !== id);
    },
    async _fetchTasks() {
      try {
          const { data: tasks, error } = await supabase
              .from('tasks')
              .select()
              .order('inserted_at', { ascending: false });
          if (error) throw error;
          this.tasksList = tasks;
      } catch (err) {
          console.error(err);
      }
    }

  },
})



