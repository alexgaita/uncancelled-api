import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Seasons } from "src/seasons/entity/seasons.model";

@Table({timestamps: true})
export class Episodes extends Model<Episodes> {
   
    @Column({primaryKey: true})
    id: string;

    @Column
    episodeNumber: number;

    @Column 
    episodeName: string;

    @Column
    episodeDescription: string;

    @Column
    thumbnail: string;

    @ForeignKey(() => Seasons)
    @Column
    seasonsId: string;

    @BelongsTo(() => Seasons)
    seasons: Seasons;
}