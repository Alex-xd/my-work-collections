Vue.component('todo-item',{
    template:`
        <tr>
            <td>{{todo.name}}</td>
            <td>{{todo.deadline}}</td>
            <td class="text-center">
                <button @click="removeTodo(index)">Done</button>
            </td>
        </tr>
    `,
    props:['todo','index'],
    methods:{//TODO:这里直接引用了todolist实例，不能良好解耦，再想想
        removeTodo: function(index) {
            todolist.todos.splice(index, 1);
        }
    }
});
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
        }
    }
});
