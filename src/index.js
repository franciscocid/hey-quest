const { httpMethods } = require('./enums')
const hey = require('./hey')

async function example(){
	try{
		const req = await hey('https://jsonplaceholder.typicode.com/todos/1').do()
		const res = await req.res()
		const json = await res.json()
		console.log(json)
	}catch(e){
		console.error(e)
	}
}
example()
