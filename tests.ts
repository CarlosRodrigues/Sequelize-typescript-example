import { Sequelize } from 'sequelize-typescript';
import { Person } from './model/Person'
import { Item } from './model/Item';
import { map } from 'bluebird';
import { Op } from 'sequelize';


const sequelize = new Sequelize({
    database: 'sequelizetests',
    dialect: 'mysql',
    username: 'root',
    password: '###',
    host: 'localhost',
    port: 3306,
    modelPaths: [__dirname + '/model/*'],    
    operatorsAliases: false
});

(async () => {


    //uncomment any of the following blocks 
    
    ////generate db schema without drop. force: true-> drops existing tables
    //await sequelize.sync({ force: false }); 

    ////seed
    // for (var i = 0; i < 1000; i++) {
    //     let p = new Person({ id: i });
    //     p.name = 'Person ' + i;
    //     p.age = i;

    //     await p.save();
    //     console.log("saved person" + i);
    // }


    ////filtering 
    // let allMajor = await Person.findAll({
    //     where: {
    //         age: {
    //             [Op.gte]: 18
    //         }
    //     },
    //     order: [['age', 'ASC']]
    // });

    // console.log(allMajor[0].name)



    //// update
    let p100 = await Person.findOne({
        where: {
            age: 100
        }
    });

    p100.name = 'new name for this guy';    
    await p100.save();

    let p100_new = await Person.findOne({
        where: {
            age: 100
        }
    });

    console.log(p100_new.name);



    //insert nested
    // let person = await Person.findOne({ include: [Item] });
    // console.log(person.toJSON());

    // let item = new Item({
    //     id: '12321',
    //     itemName: 'test',
    //     itemType: 'test',
    //     personId: person.id
    // }, null);


    // await item.save();

    //retrieve nested
    // let items = await Item.findAll({ include: [Person] })
    // items.map((i) => console.log(i.toJSON()))


})();
