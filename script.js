let colors = ['#02B3E4','#FFAE0C', '#15C26B' , '#A951ED']
let cards = document.querySelectorAll('.card-border');
const arr = [];
cards.forEach(e =>{
	let rnd = Math.round(Math.random()*3);
	arr.push(rnd);
})

let newArr = [];

function check(){
	let newSet = new Set(arr)
	newArr = [...newSet].splice(0,3);
	if(newArr.length<3){
		let no = Math.round(Math.random()*newArr.length);
		arr.push(no)
		check()
	}else{
	    newArr = [...newSet].splice(0,3);
	}
}
check();	

// console.log(newArr)

let i=0;
cards.forEach(card => {
	card.style.borderTop = `4px solid ${colors[newArr[i]]}`;
	i++;
	if(i==4){
		i=0;
		card.style.borderTop = `4px solid ${colors[newArr[i]]}`;
		i++;
	}
})
