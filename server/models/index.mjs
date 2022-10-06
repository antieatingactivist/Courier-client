import Driver from './Driver.mjs';
import Tag from './Tag.mjs';
import Client from './Client.mjs';

Driver.hasMany(Tag, {
    foreignKey: 'assignedTo'
})

export { Driver, Tag, Client }