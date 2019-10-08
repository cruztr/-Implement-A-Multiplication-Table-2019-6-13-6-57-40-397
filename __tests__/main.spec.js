const functionMap = require('../main');
const isStartNumSmallerThanEndNum = functionMap.isStartNumSmallerThanEndNum;
const isInRange = functionMap.isInRange;
const formatMultiplyTable = functionMap.formatMultiplyTable;
const generateMultiplyTable = functionMap.generateMultiplyTable;

it ('should return true if startNum is smaller than endNum', () => {
	const startNum = 2;
	const endNum = 4;

    expect(isStartNumSmallerThanEndNum(startNum, endNum)).toBe(true);
});

it ('should return false if startNum is NOT smaller than endNum', () => {
	const startNum = 25;
	const endNum = 7;

    expect(isStartNumSmallerThanEndNum(startNum, endNum)).toBe(false);
});




it ('should return true if numbers are in given range', () => {
	const startNum = 25;
	const endNum = 7;

    expect(isInRange(startNum, endNum)).toBe(true);
});

it ('should return false if numbers are NOT in given range', () => {
	const startNum = 1001;
	const endNum = 7;

    expect(isInRange(startNum, endNum)).toBe(false);
});

it ('should return false if numbers are NOT in given range', () => {
	const startNum = 420;
	const endNum = 0;

    expect(isInRange(startNum, endNum)).toBe(false);
});




it ('should return multiply table string given input', () => {
	const startNum = 2;
	const endNum = 4;
	const expectedOutput = 
		'2x2=4\n' +
		'2x3=6 3x3=9\n' +
		'2x4=8 3x4=12 4x4=16\n';

    expect(formatMultiplyTable(startNum, endNum)).toBe(expectedOutput);
});

it ('should return multiply table string given input', () => {
	const startNum = 1;
	const endNum = 4;
	const expectedOutput = 
		'1x1=1\n' +
		'1x2=2 2x2=4\n' +
		'1x3=3 2x3=6 3x3=9\n' +
		'1x4=4 2x4=8 3x4=12 4x4=16\n';

    expect(formatMultiplyTable(startNum, endNum)).toBe(expectedOutput);
});




it ('should return null given startNum larger than endNum', () => {
	const startNum = 150;
	const endNum = 10;

    expect(generateMultiplyTable(startNum, endNum)).toBe(null);
});

it ('should return null when input not in range', () => {
	const startNum = 1001;
	const endNum = 10;

    expect(generateMultiplyTable(startNum, endNum)).toBe(null);
});

it ('should return null when input not in range', () => {
	const startNum = 101;
	const endNum = 0;

    expect(generateMultiplyTable(startNum, endNum)).toBe(null);
});

it ('should return multiply table string given valid input', () => {
	const startNum = 1;
	const endNum = 4;
	const expectedOutput = 
		'1x1=1\n' +
		'1x2=2 2x2=4\n' +
		'1x3=3 2x3=6 3x3=9\n' +
		'1x4=4 2x4=8 3x4=12 4x4=16\n';

    expect(generateMultiplyTable(startNum, endNum)).toBe(expectedOutput);
});