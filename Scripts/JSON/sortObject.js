function sortObject(obj) {
    let sorted = {};
    Object.keys(obj).sort().forEach(function (key) {
        if (typeof obj[key] === 'object') {
            sorted[key] = sortObject(obj[key]);
        } else {
            sorted[key] = obj[key];
        }
    });
    return sorted;
}

const sortedData = sortObject(data);