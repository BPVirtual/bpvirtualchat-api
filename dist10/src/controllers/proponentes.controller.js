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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProponentesController = class ProponentesController {
    constructor(proponentesRepository) {
        this.proponentesRepository = proponentesRepository;
    }
    async create(proponentes) {
        return await this.proponentesRepository.create(proponentes);
    }
    async count(where) {
        return await this.proponentesRepository.count(where);
    }
    async find(filter) {
        return await this.proponentesRepository.find(filter);
    }
    async updateAll(proponentes, where) {
        return await this.proponentesRepository.updateAll(proponentes, where);
    }
    async findById(id) {
        return await this.proponentesRepository.findById(id);
    }
    async updateById(id, proponentes) {
        await this.proponentesRepository.updateById(id, proponentes);
    }
    async deleteById(id) {
        await this.proponentesRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/proponentes', {
        responses: {
            '200': {
                description: 'Proponentes model instance',
                content: { 'application/json': { 'x-ts-type': models_1.Proponentes } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Proponentes]),
    __metadata("design:returntype", Promise)
], ProponentesController.prototype, "create", null);
__decorate([
    rest_1.get('/proponentes/count', {
        responses: {
            '200': {
                description: 'Proponentes model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Proponentes))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProponentesController.prototype, "count", null);
__decorate([
    rest_1.get('/proponentes', {
        responses: {
            '200': {
                description: 'Array of Proponentes model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Proponentes } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Proponentes))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProponentesController.prototype, "find", null);
__decorate([
    rest_1.patch('/proponentes', {
        responses: {
            '200': {
                description: 'Proponentes PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Proponentes))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Proponentes, Object]),
    __metadata("design:returntype", Promise)
], ProponentesController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/proponentes/{id}', {
        responses: {
            '200': {
                description: 'Proponentes model instance',
                content: { 'application/json': { 'x-ts-type': models_1.Proponentes } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProponentesController.prototype, "findById", null);
__decorate([
    rest_1.patch('/proponentes/{id}', {
        responses: {
            '204': {
                description: 'Proponentes PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Proponentes]),
    __metadata("design:returntype", Promise)
], ProponentesController.prototype, "updateById", null);
__decorate([
    rest_1.del('/proponentes/{id}', {
        responses: {
            '204': {
                description: 'Proponentes DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProponentesController.prototype, "deleteById", null);
ProponentesController = __decorate([
    __param(0, repository_1.repository(repositories_1.ProponentesRepository)),
    __metadata("design:paramtypes", [repositories_1.ProponentesRepository])
], ProponentesController);
exports.ProponentesController = ProponentesController;
//# sourceMappingURL=proponentes.controller.js.map