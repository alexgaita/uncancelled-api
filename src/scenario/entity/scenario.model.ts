import { BelongsTo, Column, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Paragraph } from "src/paragraph/entity/paragraph.model";
import { Seasons } from "src/seasons/entity/seasons.model";

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