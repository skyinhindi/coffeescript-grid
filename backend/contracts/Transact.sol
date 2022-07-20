// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Transact{
    uint counter = 0;

    function increment() public{
        counter += 1;
    }
}