"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const tvseries_module_1 = require("./tvseries/tvseries.module");
const seasons_module_1 = require("./seasons/seasons.module");
const chatgpt_module_1 = require("./chatgpt/chatgpt.module");
const episodes_module_1 = require("./episodes/episodes.module");
const scenario_module_1 = require("./scenario/scenario.module");
const tag_module_1 = require("./tag/tag.module");
const paragraph_module_1 = require("./paragraph/paragraph.module");
const init_service_1 = require("./init.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [tvseries_module_1.TvseriesModule, seasons_module_1.SeasonsModule, chatgpt_module_1.ChatgptModule, episodes_module_1.EpisodesModule, scenario_module_1.ScenarioModule, tag_module_1.TagModule, paragraph_module_1.ParagraphModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, init_service_1.InitService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map