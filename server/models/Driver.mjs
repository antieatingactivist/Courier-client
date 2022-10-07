import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.mjs'

class Driver extends Model {
}

Driver.init(
    { 
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: false
        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'driver',
    }
);

export default Driver;