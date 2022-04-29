var ToDoList = artifacts.require("TodoList");

module.exports = function(deployer) {
  deployer.deploy(ToDoList);
};