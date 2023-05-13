import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Paragraph } from "src/paragraph/entity/paragraph.model";
import { Seasons } from "src/seasons/entity/seasons.model";

@Table
export class Scenario extends Model<Scenario> {

    @Column({primaryKey: true})
    id: string;

    @Column
    storyName: string;

    @Column
    like: number;

    @Column
    dislike: number;

    @Column
    violence: number;

    @Column
    romance: number;

    @Column
    funny: number;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    isInstructional: boolean;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    isPixelart: boolean;

    @Column
    language: string;

    @Column({
        type: DataType.STRING,
        defaultValue: "BRITISH"
    })
    style: string;

    @HasMany(() => Paragraph)
    paragraph: Paragraph[];

    @ForeignKey(() => Seasons)
    @Column
    seasonId: string;

    @BelongsTo(() => Seasons)
    seasons: Seasons;

}