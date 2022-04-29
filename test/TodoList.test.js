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
})