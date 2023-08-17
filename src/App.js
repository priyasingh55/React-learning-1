//  {} curly braces import me tab lagate h jab hum sirf export kiye rhte h


// import {hello,data} from './sell.js';
// hello();
// console.log(data);


// or
import * as bundle from './sell.js';

bundle.hello();
console.log(bundle.data);

// direct object/array /function ka naam import krenge jab export default use kiye ho to.
// customer.js

import person from './customer.js';
console.log(person);