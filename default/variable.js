/* To export in other way */
let keyValue = 1000;

function test()
{
    keyValue = 2000;
    console.log('tested');
}

let ab = 10;

export {keyValue, test};

export default ab;
