// let ans=document.getElementById("ans");
// for(i=0;i<=5;i++){
	// let ans=document.getElementById("ans");
	// ans.innerHTML+=i
	
// 



//ES6 class 


class Parent{
	constructor(no){
		this.num=no;
	}
	div(){
		if(this.num%2==0){
			console.log("Even")
		}
		else{
			console.log("odd")
		}
	}
}
class Child extends Parent{
	constructor(num){
		super()
		this.num=num;
	}
	
}
let child=new Child(16);
child.div();