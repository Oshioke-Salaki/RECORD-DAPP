// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract Lock {
    enum Role{Admin, User}
    mapping(address => Role) public userRoles;
    uint totalEmployees;
    uint totalStock;

    constructor(){
        userRoles[0x129091d855B4754bAB8FAd6345d9B32795639d35] = Role.Admin;
        for(uint i=0; i<10; i++){

        if(msg.sender != 0x129091d855B4754bAB8FAd6345d9B32795639d35) {
            userRoles[msg.sender] = Role.User;
        }
        }
        totalEmployees = 20;
        totalStock = 20;
    }


    function getTotalEmployees() public view returns(uint){
        return totalEmployees;
    }

    function getTotalStock() public view returns(uint){
        return totalStock;
    }

    function reduceTotalEmployees() public{
        require(userRoles[msg.sender] == Role.Admin, "Only authorized users can call this function");
        totalEmployees = totalEmployees - 1;
    }
    function increaseTotalEmployees() public {
         require(userRoles[msg.sender] == Role.Admin, "Only authorized users can call this function");
        totalEmployees = totalEmployees + 1;
    }

    function increaseTotalStock() public{
         require(userRoles[msg.sender] == Role.Admin, "Only authorized users can call this function");
        totalStock = totalStock + 1;
    }
    function decreaseTotalStock() public{
         require(userRoles[msg.sender] == Role.Admin, "Only authorized users can call this function");
        totalStock = totalStock + 1;
    }
}
