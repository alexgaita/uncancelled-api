import { Table, Model, HasMany, Column } from 'sequelize-typescript';
import { Seasons } from '../../scenario/entities/seasons.entity';
import { Tags } from '../../scenario/entities/tags.entity';

@Table
export class Tvsery extends Model<Tvsery> {
    @Column({ primaryKey: true })
    id: string;
    
    @Column
    tvmovieid: string;
    
    @Column
    status: string;
    
    @Column
    description: string;
    
    @Column
    pozaAfis: string;
    
    @Column
    userScore: string;

    @HasMany(() => Seasons)
    seasons: Seasons[];

    @HasMany(() => Tags)
    tags: Tags;

}
