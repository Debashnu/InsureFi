pragma solidity ^0.8.0;

contract InsurancePolicy {
    address public insurer;
    address public insured;
    uint public premium;
    uint public payout;
    bool public active;

    constructor(address _insured, uint _premium, uint _payout) {
        insurer = msg.sender;
        insured = _insured;
        premium = _premium;
        payout = _payout;
        active = true;
    }

    function payPremium() external payable {
        require(msg.sender == insured, "Only the insured can pay the premium");
        require(msg.value == premium, "Incorrect premium amount");
    }

    function claimPayout() external {
        require(msg.sender == insured, "Only the insured can claim the payout");
        require(active, "Policy is not active");
        active = false;
        payable(insured).transfer(payout);
    }

    function cancelPolicy() external {
        require(msg.sender == insurer, "Only the insurer can cancel the policy");
        active = false;
    }
}
