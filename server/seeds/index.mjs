import sequelize from '../config/connection.mjs';
import { Driver, Tag, Client } from '../models/index.mjs';
import driverData from './driver-seeds.json' assert { type: 'json' };
import tagData from './tag-seeds.json' assert { type: 'json' };
import clientData from './client-seeds.json' assert { type: 'json' };

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await Driver.bulkCreate(driverData, {
        individualHooks: true,
        returning: true,
    });

    await Tag.bulkCreate(tagData, {
        individualHooks: true,
        returning: true,
    });

    await Client.bulkCreate(clientData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
}

seedDatabase();