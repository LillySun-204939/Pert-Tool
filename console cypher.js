console.log('*************** R E S U L T *************');
console.log(result);
console.log('///// RECORDS ////');
console.log(result.records);
console.log('---- result 1 ------');
console.log(result.records[0]);
console.log('---- USER ------');
console.log(result.records[0]._fields[0]);
console.log('---- TEST USER ------');
console.log(result.records[0].get('u').properties.username);
console.log('---- PROJECTS ------');
console.log(result.records[0].get('collect(p)'));

console.log('*************** R E S U L T *************');
console.log(result);
console.log('///// RECORDS ////');
console.log(result.records);
console.log('---- result 1 ------');
console.log(result.records[0]);
console.log('---- fields ------');
console.log(result.records[0]._fields[0]);
console.log('---- PROJECT ------');
console.log(result.records[0].get('p'));
console.log(result.records[0].get('p').properties.name);