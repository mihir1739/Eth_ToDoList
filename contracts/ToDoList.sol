// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract ToDoList{
    uint public taskcount = 0;  //State Variable !
    struct Task {
        uint id;
        string content;
        bool completed;
    }

    mapping(uint => Task) public tasks;
    
    constructor() public {
        createTask("Nothing Here! Lol");
    }
    function createTask(string memory _content) public 
    {
        taskcount ++;
        tasks[taskcount] = Task(taskcount,_content,false);
    }
}

