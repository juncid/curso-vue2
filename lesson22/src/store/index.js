let tasks = [
  {
    title: 'Aprender Vue.js',
    pending: true
  },
  {
    title: 'Subscribirse a Styde.net',
    pending: true
  },
  {
    title: 'Grabar lección de Vue',
    pending: false
  }
];

tasks.forEach((task, index) => {
  task.id = index + 1;

  task.description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
  ex ea commodo consequat.`

});

export default {
  state: {
    tasks
  },
  findTask(id) {
    return this.state.tasks.find(
      task => task.id == id)
  },
  createTask(task) {
    task.id =this.state.tasks.length +1;

    this.state.tasks.push(task);
  },
  toggleTask(task){
    task.pending = !task.pending;
  },
  updateTask(id, task) {
    let index = this.state.tasks.findIndex(task => task.id == id);
    this.state.tasks.splice(index, 1, task )
  },

  deleteTask(id) {
    let index = this.state.tasks.findIndex(task => task.id == id);

    this.state.tasks.splice(index, 1);
  }
}
