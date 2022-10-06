import Driver from './Driver.mjs';
import Tag from './Tag.mjs';
import Client from './Client.mjs';

Driver.hasMany(Tag, {
    foreignKey: 'assignedTo'
});
Tag.hasOne(Client, {
    foreignKey: 'id'
});







export { Driver, Tag, Client }