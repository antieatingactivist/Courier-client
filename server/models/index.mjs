import Driver from './Driver.mjs';
import Tag from './Tag.mjs';
import Client from './Client.mjs';

Driver.hasMany(Tag, {
    foreignKey: 'assignedTo',
    constraints: false,
});

Client.belongsTo(Tag, {
    foreignKey: 'id',
    constraints: false,
});

Tag.hasOne(Client, {
    as: 'sender',
    sourceKey: 'senderId', 
    foreignKey: 'id',
    constraints: false,
});

Tag.hasOne(Client, {
    as: 'recipient',
    sourceKey: 'recipientId', 
    foreignKey: 'id',
    constraints: false,
});




export { Driver, Tag, Client }