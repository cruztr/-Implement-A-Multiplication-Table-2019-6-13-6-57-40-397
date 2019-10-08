function isStartNumSmallerThanEndNum (startNum, endNum) {
    return startNum < endNum ? true : false;
}

function isInRange(startNum, endNum) {
	return isNumberInRange(startNum) && isNumberInRange(endNum);
}

function isNumberInRange(number) {
	return number>0 && number<=1000;
}

function formatMultiplyTable(startNum, endNum) {
	var multiplyTableString = '';

	for(i=startNum; i<=endNum; i++) {    
        for(j=startNum; j<=i; j++) {  
            multiplyTableString += createMultiplyEquation(j,i);
        }  
        multiplyTableString += '\n';
    } 

	return multiplyTableString;
}

function createMultiplyEquation(numberA, numberB) {
	const product = numberA * numberB;
	let equation = numberA+'x'+numberB+'='+product;

	if(numberA != numberB)
		return equation += ' ';

	return equation;
}

function generateMultiplyTable(startNum, endNum) {
	if(!isInputValid(startNum, endNum)){
		return null;
	}

	return formatMultiplyTable(startNum, endNum);
}

function isInputValid(startNum, endNum) {
	return isStartNumSmallerThanEndNum(startNum, endNum) && isInRange(startNum, endNum);
}

module.exports = {
	isStartNumSmallerThanEndNum : isStartNumSmallerThanEndNum,
	isInRange : isInRange,
	formatMultiplyTable : formatMultiplyTable,
	generateMultiplyTable : generateMultiplyTable

}