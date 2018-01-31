import { PrimaryKey, Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Person } from './Person';

@Table({
    timestamps: true
})
export class Item extends Model<Item> {

    constructor(values?: any, options?: any) {
        super(values, options)
    }

    @PrimaryKey    /**
    *
    */
    @Column
    id: string;

    @Column
    itemName: string;

    @Column
    itemType: string;

    @ForeignKey(() => Person)
    @Column
    personId: string;

    @BelongsTo(() => Person)
    owner: Person;
}