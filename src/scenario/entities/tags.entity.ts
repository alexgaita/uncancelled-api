import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Tvsery } from "../../tvseries/entities/tvsery.entity";

@Table
export class Tags extends Model<Tags> {

    @Column({primaryKey: true})
    id: string;

    @Column
    name: string;

    @ForeignKey(() => Tvsery)
    @Column
    tvSeryId: string;

    @BelongsTo(() => Tvsery)
    tvSery: Tvsery;
}