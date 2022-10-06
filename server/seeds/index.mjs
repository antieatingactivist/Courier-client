import sequelize from '../config/connection.mjs';
import { Driver } from '../models/index.mjs';
import driverData from './driver-seeds.json' assert { type: 'json' };


const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await Driver.bulkCreate(driverData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
}

seedDatabase();