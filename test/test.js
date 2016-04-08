/**
 * Created by Enrikerf on 15/02/2016.
 */

var DB = require('../models/db');
var myDB = new DB();
var assert = require('assert');

describe('DATA BASE MODULE TEST',function(){
    it('Config must be set up',function(){
        assert.strictEqual(myDB.getConfig().Host,'localhost');
        assert.strictEqual(myDB.getConfig().User,'root');
        assert.strictEqual(myDB.getConfig().Password,'f');
        assert.strictEqual(myDB.getConfig().Schema,'restnode');
    })
    it('make a query',function(){
        console.log(myDB.dbQuery('SELECT * FROM users ORDER BY id'));
    })


})

