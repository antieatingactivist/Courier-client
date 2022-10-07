
import Sequelize from 'sequelize';


let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
sequelize = new Sequelize(
    "courier_db",
    "root",
    "password",
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    }
  );
}

export default sequelize;