"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TvseriesModule = void 0;
const common_1 = require("@nestjs/common");
const tvseries_controller_1 = require("./tvseries.controller");
const tvseries_service_1 = require("./tvseries.service");
const tvseries_repository_1 = require("./tvseries.repository");
const database_module_1 = require("../shared/database.module");
const sequelize_1 = require("@nestjs/sequelize");
const tvseries_model_1 = require("./entity/tvseries.model");
const seasons_module_1 = require("../seasons/seasons.module");
let TvseriesModule = class TvseriesModule {
};
TvseriesModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, sequelize_1.SequelizeModule.forFeature([tvseries_model_1.Tvseries]), seasons_module_1.SeasonsModule],
        controllers: [tvseries_controller_1.TvseriesController],
        providers: [tvseries_service_1.TvseriesService, tvseries_repository_1.TvseriesRepository]
    })
], TvseriesModule);
exports.TvseriesModule = TvseriesModule;
//# sourceMappingURL=tvseries.module.js.map