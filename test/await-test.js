const assert = require('assert')

const hello = require('../hello')

describe('#hello.js', () => {

    describe('#sum()', () => {

        it('#async function', async () => {
            let r = await hello();
            assert.strictEqual(r, 15);
        });

    })
})
