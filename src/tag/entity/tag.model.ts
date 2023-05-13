import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Tvseries } from "src/tvseries/entity/tvseries.model";

@Table
export class Tag extends Model<Tag> {

    @Column({primaryKey: true})
    id: string;

    @Column
    name: string;

    @ForeignKey(() => Tvseries)
    @Column
    tvSeriesId: string;

    @BelongsTo(() => Tvseries)
    tvSeries: Tvseries;
}