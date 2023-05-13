import { BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Tvseries } from "src/tvseries/entity/tvseries.model";

@Table({timestamps: true})
export class Seasons extends Model<Seasons> {

    @PrimaryKey
    @Column({ type: DataType.STRING })
    id: string;

    @Column
    seriesId: string;

    @Column
    seasonNumber: string;

    @Column
    coverPhoto: string;

    // @HasMany(() => Episodes)
    // episodes: Episodes[];

    // @HasMany(() => Scenario)
    // scenario: Scenario[];

    @ForeignKey(() => Tvseries)
    @Column
    tvseriesId: string;

    @BelongsTo(() => Tvseries)
    tvSery: Tvseries;
}