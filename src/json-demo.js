const jsonData = require('./output.json');

// Get classes
console.log("classes: ", jsonData.classes);

// Duyet qua tung phan tu trong array classes
const classes = jsonData.classes;
// cach 1
// for(let i = 0; i<classes.length; i++) {
//     console.log(`index: ${i} => class detail: ${JSON.stringify(classes[i])}`);
// }

// cach 2
console.log("============== Cach 2===============")
classes.map(e => {
    console.log(e);
})

// Duyet cac field trong 1 object
console.log("================= Duyet cac field trong 1 object =================")
for(const [key, value] of Object.entries(classes[0])) {
    console.log(`key: ${key} ===> value: ${value}`)
}