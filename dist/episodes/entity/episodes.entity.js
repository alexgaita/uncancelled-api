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
exports.Episodes = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const seasons_model_1 = require("../../seasons/entity/seasons.model");
let Episodes = class Episodes extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true }),
    __metadata("design:type", String)
], Episodes.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Episodes.prototype, "episodeNumber", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Episodes.prototype, "episodeName", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Episodes.prototype, "episodeDescription", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Episodes.prototype, "thumbnail", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => seasons_model_1.Seasons),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Episodes.prototype, "seasonsId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => seasons_model_1.Seasons),
    __metadata("design:type", seasons_model_1.Seasons)
], Episodes.prototype, "seasons", void 0);
Episodes = __decorate([
    (0, sequelize_typescript_1.Table)({ timestamps: true })
], Episodes);
exports.Episodes = Episodes;
//# sourceMappingURL=episodes.entity.js.map