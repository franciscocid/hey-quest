const hey = require('./hey')

async function example(){
	try{
		const res = await hey('https://jsonplaceholder.typicode.com/todos/1').do()
		const json = await res.json()
		console.log(json)
	}catch(e){
		console.error(e)
	}
}
example()
