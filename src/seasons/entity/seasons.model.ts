import { UUIDV4 } from "sequelize";
import { BeforeCreate, BelongsTo, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Episodes } from "src/episodes/entity/episodes.entity";
import { Scenario } from "src/scenario/entity/scenario.model";
import { Tvseries } from "src/tvseries/entity/tvseries.model";

@Table({timestamps: true})
export class Seasons extends Model<Seasons> {

    @PrimaryKey
    @Column({ type: DataType.STRING, defaultValue: DataType.UUIDV4 })
    id: string;

    @Column({type: DataType.TEXT})
    description: string;

    @Column
    seriesId: string;

    @Column
    seasonNumber: string;

    @Column
    coverPhoto: string;

    @HasMany(() => Episodes)
    episodes: Episodes[];

    @HasMany(() => Scenario)
    scenario: Scenario[];

    @ForeignKey(() => Tvseries)
    @Column
    tvseriesId: string;

    @BelongsTo(() => Tvseries)
    tvSery: Tvseries;

    @BeforeCreate
    static assignId(instance: Seasons) {
        instance.id = UUIDV4.toString(); // Generate a UUID
    }
}