"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
let SumInput = class SumInput {
};
__decorate([
    type_graphql_1.Field({ description: "An arbitrary integer." }),
    __metadata("design:type", Number)
], SumInput.prototype, "one", void 0);
__decorate([
    type_graphql_1.Field({ description: "An arbitrary integer." }),
    __metadata("design:type", Number)
], SumInput.prototype, "two", void 0);
__decorate([
    type_graphql_1.Field({ description: "An arbitrary integer." }),
    __metadata("design:type", Number)
], SumInput.prototype, "three", void 0);
SumInput = __decorate([
    type_graphql_1.InputType()
], SumInput);
exports.default = SumInput;
