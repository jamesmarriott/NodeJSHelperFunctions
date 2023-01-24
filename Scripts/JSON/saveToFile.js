const sortedData = {};

fs.writeFile('../json/replacementComplete.json', JSON.stringify(sortedData, null, 2), (err) => {
    if (err) throw err;
    console.log('File successfully saved');
});
