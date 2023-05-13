import { Table, Model, HasMany, Column, PrimaryKey, AutoIncrement, DataType, BeforeCreate } from 'sequelize-typescript';
import { Seasons } from '../../scenario/entities/seasons.entity';
import { Tags } from '../../scenario/entities/tags.entity';
import { UUID, UUIDV1, UUIDV4 } from 'sequelize';

@Table
export class Tvsery extends Model<Tvsery> {
    @PrimaryKey
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
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
    tags: Tags[];

    @BeforeCreate
    static assignId(instance: Tvsery) {
      instance.id = UUIDV4.toString(); // Generate a UUID
    }

}
