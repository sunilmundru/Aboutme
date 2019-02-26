
QUnit.test('Testing area function', function (assert) {
    assert.equal(findarea(6,3), 9, 'values within range');
    assert.equal(findarea(-3,4), 0, 'with negative base');
    assert.equal(findarea(6,-3), 0, 'with negative height');
    assert.equal(findarea(), 0, 'with no paramaters');
    assert.equal(findarea(0,8), 0, 'With base zero');
    assert.equal(findarea(7,0), 0, 'With height zero');
});






