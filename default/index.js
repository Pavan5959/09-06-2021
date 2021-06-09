/*import { keyValue as value, test } from './components/variables';

import ab from './components/variables';

console.log(value);
test();
console.log(value);

console.log(ab);*/

/*other way*/
/*import a, { keyValue as value, test } from './components/variables';

console.log(value);
test();
console.log(value);

console.log(a);*/

/*other way*/
import * as data from './components/variables';

console.log(data.keyValue);

console.log(data.test());
console.log(data.keyValue);
