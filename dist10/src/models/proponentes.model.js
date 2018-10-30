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
const repository_1 = require("@loopback/repository");
let Proponentes = class Proponentes extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
__decorate([
    repository_1.property({
        type: 'number',
        id: true,
        generated: true,
    }),
    __metadata("design:type", Number)
], Proponentes.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Proponentes.prototype, "nome", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Proponentes.prototype, "sobrenome", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Proponentes.prototype, "cpf", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Proponentes.prototype, "nacionalidade", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Proponentes.prototype, "dataNascimento", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Proponentes.prototype, "sexo", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Proponentes.prototype, "estadoCivil", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Proponentes.prototype, "profissao", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Proponentes.prototype, "cargo", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Proponentes.prototype, "dataAdmissao", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Proponentes.prototype, "salario", void 0);
__decorate([
    repository_1.property({
        type: 'Object',
    }),
    __metadata("design:type", Object)
], Proponentes.prototype, "endereco", void 0);
__decorate([
    repository_1.property({
        type: 'Object',
    }),
    __metadata("design:type", Object)
], Proponentes.prototype, "empresa", void 0);
__decorate([
    repository_1.property({
        type: 'Object',
    }),
    __metadata("design:type", Object)
], Proponentes.prototype, "consultor", void 0);
Proponentes = __decorate([
    repository_1.model(),
    __metadata("design:paramtypes", [Object])
], Proponentes);
exports.Proponentes = Proponentes;
//# sourceMappingURL=proponentes.model.js.map