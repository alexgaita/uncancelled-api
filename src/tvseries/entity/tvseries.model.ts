import { UUIDV4 } from 'sequelize';
import { BeforeCreate, Column, DataType, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Seasons } from 'src/seasons/entity/seasons.model';
import { Tag } from 'src/tag/entity/tag.model';

@Table
export class Tvseries extends Model {
  @PrimaryKey
  @Column({ type: DataType.STRING, defaultValue: DataType.UUIDV4 })
  id: string;

  @Column
  name: string;
  
  @Column
  tvmovieid: string;

  @Column
  status: string;

  @Column({
    type: DataType.TEXT
  })
  description: string;

  @Column
  wallpaper: string;

  @Column
  userScore: string;

  @HasMany(() => Seasons)
   seasons: Seasons[];

    @HasMany(() => Tag)
    tags: Tag[];

    @BeforeCreate
    static assignId(instance: Tvseries) {
        instance.id = UUIDV4.toString(); // Generate a UUID
    }
}