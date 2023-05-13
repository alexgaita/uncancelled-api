import { BelongsTo, Column, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Seasons } from "./seasons.entity";
import { Paragraph } from "./paragraph.entity";

@Table
export class Scenario extends Model<Scenario> {

    @Column({primaryKey: true})
    id: string;

    @Column
    storyName: string;

    @HasMany(() => Paragraph)
    paragraph: Paragraph[];

    @ForeignKey(() => Seasons)
    @Column
    seasonId: string;

    @BelongsTo(() => Seasons)
    seasons: Seasons;

}
