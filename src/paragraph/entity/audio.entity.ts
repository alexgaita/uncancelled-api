import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Paragraph } from "./paragraph.model";

@Table
export class Audio extends Model {
    @Column({primaryKey: true})
    id: string;

    @Column
    content: string;

    @Column
    duration: string;

    @ForeignKey(() => Paragraph)
    @Column
    paragraphId: string;

    @BelongsTo(() => Paragraph)
    paragraph: Paragraph;
}