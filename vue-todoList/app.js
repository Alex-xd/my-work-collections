var todolist = new Vue({
    el: '#todolist',
    data: {
        newTodo: {
            name: '',
            deadline: ''
        },
        todos: [],
        tips: ''
    },
    methods: {
        addTodo: function() {
            this.tips = '';
            if (this.newTodo.name) {
                this.todos.push(this.newTodo);
                this.newTodo = {
                    name: '',
                    deadline: ''
                }

            } else {
                this.tips = 'please enter something~';
            }

            if (!this.deadline) {
                this.newTodo.deadline = '∞';
            }
        },
        removeTodo: function(index) {
            this.todos.splice(index, 1);
        }
    }
});
