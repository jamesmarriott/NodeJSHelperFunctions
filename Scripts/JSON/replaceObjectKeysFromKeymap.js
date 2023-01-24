const data = require('./originalComplete.json');
const fs = require('fs');

// Replaces the keys in the object with the new keys

const keymap = {
    'id': 'ID',
    'MY_NAme': 'Name',
    'THISDescription': 'thisDescription',
    // ...
  
}

// Recursively replace keys

function updateKey(obj) {
    for (let key in obj) {
        if (keymap[key]) {
            obj[keymap[key]] = obj[key];
            delete obj[key];
        }
        if (typeof obj[keymap[key] || key] === 'object') {
            updateKey(obj[keymap[key] || key]);
        }
    }
}

updateKey(data);
