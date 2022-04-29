// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract TodoList{
    uint public taskcount = 0;  //State Variable !
    struct Task {
        uint id;
        string content;
        bool completed;
    }

    mapping(uint => Task) public tasks;

    event TaskCreated(
        uint id,
        string content,
        bool completed
    );
    
    event TaskCompleted(
        uint id,
        bool completed
    );

    constructor() public {
        createTask("Nothing Here! Lol");
    }
    function createTask(string memory _content) public 
    {
        taskcount ++;
        tasks[taskcount] = Task(taskcount,_content,false);
        emit TaskCreated(taskcount, _content, false);
    }

    function toggleCompleted(uint _id) public 
    {
        Task memory _task = tasks[_id];
        _task.completed = !_task.completed;
        tasks[_id] = _task;
        emit TaskCompleted(_id, _task.completed);
    }
}

