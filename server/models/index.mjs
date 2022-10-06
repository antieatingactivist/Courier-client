import Driver from './Driver.mjs';
import Tag from './Tag.mjs';
import Client from './Client.mjs';

Driver.hasMany(Tag, {
    foreignKey: 'assignedTo'
});

Client.belongsTo(Tag, {
    as: 'sender',
    foreignKey: 'id'
});

Tag.hasOne(Client, {
    as: 'sender',
    sourceKey: 'senderId', 
    foreignKey: 'id'
});

Tag.hasOne(Client, {
    as: 'recipient',
    sourceKey: 'recipientId', 
    foreignKey: 'id'
});




export { Driver, Tag, Client }