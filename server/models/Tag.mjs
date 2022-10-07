import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.mjs'

class Tag extends Model {
}

Tag.init(
    { 
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        level: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        recipientId: {
            type: DataTypes.INTEGER,
        },
        senderId: {
            type: DataTypes.INTEGER,
        },
        senderWindowStart: {
            type: DataTypes.DATE
        },
        senderWindowEnd: {
            type: DataTypes.DATE
        },
        recipientWindowStart: {
            type: DataTypes.DATE
        },
        recipientWindowEnd: {
            type: DataTypes.DATE
        },
        assignedTo: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: "driver",
                key: "id",
            }
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'tag',
    }
);

export default Tag;