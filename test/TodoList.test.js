const { assert } = require("chai")

const TodoList = artifacts.require('./ToDoList.sol')

contract('TodoList',(accounts) => {
    before(async () => {
        this.todolist = await TodoList.deployed()
    })
    it('deployed successfully',async () => {
        const address = await this.todolist.address
        assert.notEqual(address,0x0)
        assert.notEqual(address,'')
        assert.notEqual(address,null)
        assert.notEqual(address,undefined)
    })

    it('lists tasks',async() => {
        const taskCount = await this.todolist.taskcount()
        const task = await this.todolist.tasks(taskCount)
        assert.equal(task.id,taskCount.toNumber())
        assert.equal(task.completed,false)
        assert.equal(taskCount.toNumber(),1)
    })
    it('creates tasks',async() => {
        const result = await this.todolist.createTask('a new task')
        const taskCount = await this.todolist.taskcount()
        assert.equal(taskCount,2)
        console.log(result)
        const event = result.logs[0].args
        assert.equal(event.id.toNumber(),2)
        assert.equal(event.content,'a new task')
        assert.equal(event.completed,false)
    })

    it('toggles tasks completion',async() => {
        const result = await this.todolist.toggleCompleted(1)
        const task = await this.todolist.tasks(1)
        assert.equal(task.completed,true)
        console.log(result)
        const event = result.logs[0].args
        assert.equal(event.id.toNumber(),1)
        assert.equal(event.completed,true)
    })
})
