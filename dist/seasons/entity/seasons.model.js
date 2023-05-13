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
exports.Seasons = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const episodes_entity_1 = require("../../episodes/entity/episodes.entity");
const scenario_model_1 = require("../../scenario/entity/scenario.model");
const tvseries_model_1 = require("../../tvseries/entity/tvseries.model");
let Seasons = class Seasons extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Seasons.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Seasons.prototype, "seriesId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Seasons.prototype, "seasonNumber", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Seasons.prototype, "coverPhoto", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => episodes_entity_1.Episodes),
    __metadata("design:type", Array)
], Seasons.prototype, "episodes", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => scenario_model_1.Scenario),
    __metadata("design:type", Array)
], Seasons.prototype, "scenario", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => tvseries_model_1.Tvseries),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Seasons.prototype, "tvseriesId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => tvseries_model_1.Tvseries),
    __metadata("design:type", tvseries_model_1.Tvseries)
], Seasons.prototype, "tvSery", void 0);
Seasons = __decorate([
    (0, sequelize_typescript_1.Table)({ timestamps: true })
], Seasons);
exports.Seasons = Seasons;
//# sourceMappingURL=seasons.model.js.map