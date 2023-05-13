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
exports.Tvseries = void 0;
const sequelize_1 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const seasons_model_1 = require("../../seasons/entity/seasons.model");
const tag_model_1 = require("../../tag/entity/tag.model");
let Tvseries = class Tvseries extends sequelize_typescript_1.Model {
    static assignId(instance) {
        instance.id = sequelize_1.UUIDV4.toString();
    }
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, defaultValue: sequelize_typescript_1.DataType.UUIDV4 }),
    __metadata("design:type", String)
], Tvseries.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Tvseries.prototype, "tvmovieid", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Tvseries.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Tvseries.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Tvseries.prototype, "wallpaper", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Tvseries.prototype, "userScore", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => seasons_model_1.Seasons),
    __metadata("design:type", Array)
], Tvseries.prototype, "seasons", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => tag_model_1.Tag),
    __metadata("design:type", Array)
], Tvseries.prototype, "tags", void 0);
__decorate([
    sequelize_typescript_1.BeforeCreate,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Tvseries]),
    __metadata("design:returntype", void 0)
], Tvseries, "assignId", null);
Tvseries = __decorate([
    sequelize_typescript_1.Table
], Tvseries);
exports.Tvseries = Tvseries;
//# sourceMappingURL=tvseries.model.js.map