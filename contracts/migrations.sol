// Migrations.sol
pragma solidity ^0.8.0;

contract Migrations {
  address public owner;
  uint public last_completed_migration;

  constructor() {
    owner = msg.sender;
  }

  function setCompleted(uint completed) public {
    require(msg.sender == owner, "Not authorized");
    last_completed_migration = completed;
  }
}
