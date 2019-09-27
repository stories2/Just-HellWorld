'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

describe('helloWorld function test', () => {
    it('should return [No! This is hell world.]', () => {
        var result = index.helloWorld();
        expect(result).to.equal('No! This is hell world.');
    })
})