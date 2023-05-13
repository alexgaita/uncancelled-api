"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const episodes_entity_1 = require("../episodes/entity/episodes.entity");
const art_model_1 = require("../paragraph/entity/art.model");
const audio_entity_1 = require("../paragraph/entity/audio.entity");
const paragraph_model_1 = require("../paragraph/entity/paragraph.model");
const scenario_model_1 = require("../scenario/entity/scenario.model");
const seasons_model_1 = require("../seasons/entity/seasons.model");
const tag_model_1 = require("../tag/entity/tag.model");
const tvseries_model_1 = require("../tvseries/entity/tvseries.model");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forRoot({
                database: 'uncancelled',
                username: 'root',
                password: '123',
                host: 'localhost',
                port: 3306,
                dialect: 'mysql',
                synchronize: true,
                autoLoadModels: true,
                models: [tvseries_model_1.Tvseries, seasons_model_1.Seasons, episodes_entity_1.Episodes, scenario_model_1.Scenario, tag_model_1.Tag, paragraph_model_1.Paragraph, art_model_1.Art, audio_entity_1.Audio]
            })]
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map