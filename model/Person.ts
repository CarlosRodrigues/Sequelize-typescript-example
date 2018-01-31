import { PrimaryKey, Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Item } from './Item';

@Table({
    timestamps: false
})
export class Person extends Model<Person> {
    /**
     *
     */
    constructor(values?: any, options?: any) {
        super(values, options);
    }


    @PrimaryKey
    @Column
    id: string;

    @Column
    name: string;

    @Column
    age: number;

    @HasMany(() => Item)
    items: Item[];

}