import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.mjs'

class Client extends Model {

}

Client.init(
    { 
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        zip: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        // assignedTo: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true,
        //     references: {
        //         model: "driver",
        //         key: "id",
        //     }
        // }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'client',
    }
);

export default Client;