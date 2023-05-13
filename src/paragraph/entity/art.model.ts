import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Paragraph } from "./paragraph.model";

@Table
export class Art extends Model<Art> {

    @Column({primaryKey: true})
    id: string;

    @Column
    content: string;

    @Column
    myPrompt: string;

    @ForeignKey(() => Paragraph)
    @Column
    paragraphId: string;

    @BelongsTo(() => Paragraph)
    paragraph: Paragraph;
}