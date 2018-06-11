const {sum} = require('./sum');
const {expect} = require('./expect');
const {test} = require('./test');

test("두 개의 서로다른 양의 정수의 합이 올바르게 나온다", function() {
    //값을 설정하고,
    a = 10; b = 20;

    //sum을 실행하면,
    const result = sum(a, b);

    console.log(result);

    //그때 그 결과는 아래처럼.
    expect(30).toBe(result);
 });

test("양의 정수와 음의 정수의 합이 올바르게 나온다", function() {
    //값을 설정하고,
    a = 10; b = -10;

    //sum을 실행하면,
    const result = sum(a, b);

    //그때 그 결과는 아래처럼.
    expect(0).toBe(result);
 });

 test("양의 정수와 음의 정수의 합이 올바르게 나오지 않는다", function() {
    //값을 설정하고,
    a = 10; b = -10;

    //sum을 실행하면,
    const result = sum(a, b);

    //그때 그 결과는 아래처럼.
    expect(10).toBe(result);
 });