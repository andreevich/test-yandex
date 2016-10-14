function sum(...arg){
	var tempSum = arg.reduce((sum, el)=>{
		return sum+=el;
	},0)
	


function tempSum_(el){
	
	tempSum+=el;

	return tempSum;
}

tempSum_.valueOf = function (){
		return tempSum;
	}

return tempSum_;

}


//console.log(+sum(1,2,3)(4));
// fun = sum(1,2,3)
// fun.
module.exports = sum;