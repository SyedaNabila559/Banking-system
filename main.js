#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
//Bank account class
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    //Debit Money
    BankAccount.prototype.withdraw = function (amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(chalk_1.default.green("Withdraw $".concat(amount, " successfully.\n Your remaining balance is $").concat(this.balance)));
        }
        else {
            console.log(chalk_1.default.red("Insufficient Balance Soory!"));
        }
    };
    // Deposit Money
    BankAccount.prototype.deposit = function (amount) {
        if (amount > 100) {
            amount -= 1; // if more tha 100$ deposit fee charged 1$
        }
        this.balance += amount;
        console.log(chalk_1.default.green("Deposit $".concat(amount, " successfully. \n Now your balance is: $").concat(this.balance)));
    };
    // Check Balance 
    BankAccount.prototype.checkBalance = function () {
        console.log(chalk_1.default.green("Current Balance is : $".concat(this.balance)));
    };
    return BankAccount;
}());
// customer class
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, gender, age, mobileNumber, account) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNumber = mobileNumber;
        this.account = account;
    }
    return Customer;
}());
// create bank account object
var accounts = [
    new BankAccount(1001, 500),
    new BankAccount(1002, 1000),
    new BankAccount(1003, 5000),
];
// create customer object
var customers = [
    new Customer("Ahmed", "Khan", "Male", 21, 3323819058, accounts[0]),
    new Customer("Muhammad", "Mustafa", "Male", 57, 3332503716, accounts[1]),
    new Customer("Amna", "Aiman", "Female", 26, 3272493931, accounts[2])
];
// Function to interact with bank account
function service() {
    return __awaiter(this, void 0, void 0, function () {
        var _loop_1, state_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _loop_1 = function () {
                        var accountNumberInput, customer, ans, _b, depositAmount, withdrawAmount;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0: return [4 /*yield*/, inquirer_1.default.prompt([{
                                            name: "accountNumber",
                                            type: "number",
                                            message: chalk_1.default.yellow("Enter your account number:")
                                        }])];
                                case 1:
                                    accountNumberInput = _c.sent();
                                    customer = customers.find(function (customer) { return customer.account.accountNumber === accountNumberInput.accountNumber; });
                                    if (!customer) return [3 /*break*/, 10];
                                    console.log(chalk_1.default.bold.italic.bgBlue("\n \t\t\t Welcome ".concat(customer.firstName, " ").concat(customer.lastName, "! \n")));
                                    return [4 /*yield*/, inquirer_1.default.prompt([{
                                                name: "select",
                                                type: "list",
                                                message: chalk_1.default.yellow("Select an operation"),
                                                choices: ["Deposit", "Withdraw", "Check Balance", "Exit"]
                                            }])];
                                case 2:
                                    ans = _c.sent();
                                    _b = ans.select;
                                    switch (_b) {
                                        case "Deposit": return [3 /*break*/, 3];
                                        case "Withdraw": return [3 /*break*/, 5];
                                        case "Check Balance": return [3 /*break*/, 7];
                                        case "Exit": return [3 /*break*/, 8];
                                    }
                                    return [3 /*break*/, 9];
                                case 3: return [4 /*yield*/, inquirer_1.default.prompt([{
                                            name: "amount",
                                            type: "number",
                                            message: chalk_1.default.yellow("Enter deposit amount:")
                                        }])];
                                case 4:
                                    depositAmount = _c.sent();
                                    customer.account.deposit(depositAmount.amount);
                                    return [3 /*break*/, 9];
                                case 5: return [4 /*yield*/, inquirer_1.default.prompt([{
                                            name: "amount",
                                            type: "number",
                                            message: chalk_1.default.yellow("Enter withdraw amount:")
                                        }])];
                                case 6:
                                    withdrawAmount = _c.sent();
                                    customer.account.withdraw(withdrawAmount.amount);
                                    return [3 /*break*/, 9];
                                case 7:
                                    customer.account.checkBalance();
                                    return [3 /*break*/, 9];
                                case 8:
                                    console.log(chalk_1.default.yellow("Exit Bank Account."));
                                    console.log(chalk_1.default.green("\n Thank.u for using our bank services. Have a great day!"));
                                    return [2 /*return*/, { value: void 0 }];
                                case 9: return [3 /*break*/, 11];
                                case 10:
                                    console.log(chalk_1.default.red("Invalid account number! Please Try again..!"));
                                    _c.label = 11;
                                case 11: return [2 /*return*/];
                            }
                        });
                    };
                    _a.label = 1;
                case 1: return [5 /*yield**/, _loop_1()];
                case 2:
                    state_1 = _a.sent();
                    if (typeof state_1 === "object")
                        return [2 /*return*/, state_1.value];
                    _a.label = 3;
                case 3:
                    if (true) return [3 /*break*/, 1];
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
service();
