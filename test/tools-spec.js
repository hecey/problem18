var expect = require("chai").expect;
var tools = require("../libs/problem18.js");
var arr = [
[5],
[9, 4],
[1, 3, 5],
[7, 1, 6, 8]
];
describe("sumMaxPath()", function(){

  it("Should sum the max path", function(){
    var result = tools.sumMaxPath(arr);
    expect(result).to.equals(23);
  });

});
