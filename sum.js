function sum(...arg){
	var tempSum = arg.reduce((sum, el)=>{
		return sum+=el;
	},0)
	return tempSum;
}

module.exports = sum;