import { BelongsTo, Column, ForeignKey, HasOne, Model, Table } from "sequelize-typescript";
import { Scenario } from "src/scenario/entity/scenario.model";
import { Art } from "./art.model";
import { Audio } from "./audio.entity";

@Table
export class Paragraph extends Model<Paragraph> {
    @Column({primaryKey: true})
    id: string;

    @ForeignKey(() => Scenario)
    @Column
    scenarioId: string;

    @BelongsTo(() => Scenario)
    scenario: Scenario;

    @HasOne(() => Art)
    art: Art;

    @HasOne(() => Audio)
    audio: Audio;
}