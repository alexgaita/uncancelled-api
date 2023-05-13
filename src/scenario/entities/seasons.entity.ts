import { Table, Model, ForeignKey, Column, BelongsTo, HasMany, PrimaryKey, DataType } from 'sequelize-typescript';
import { Tvsery } from '../../tvseries/entities/tvsery.entity';
import { Episodes } from './episodes.entity';
import { Scenario } from './scenario.entity';

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

    @HasMany(() => Episodes)
    episodes: Episodes[];

    @HasMany(() => Scenario)
    scenario: Scenario[];

    @ForeignKey(() => Tvsery)
    @Column
    tvSeryId: string;

    @BelongsTo(() => Tvsery)
    tvSery: Tvsery;
}