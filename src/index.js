
// Create a const enum for actions
// ??? Should i separate UPDATE and MINOR_UPDATE? As patch is only for simple
// updates while PUT is for big ones
const httpMethods = {}

const method = (name, action, hasBody) => {
	httpMethods[name] = {
		name,
		action,
		hasBody,
	}
}

method('HEAD', 'EXISTS', false)
method('GET', 'READ', false)
method('POST', 'CREATE', true)
method('PUT', 'UPDATE', true)
method('PATCH', 'UPDATE', true)
method('DELETE', 'DELETE', false)

// Make it better and prettier
const fetch = require('node-fetch')

class Hey{

	constructor(url, fetch){
		this.url = url
		this.method = httpMethods.GET
		this.headers = {}
		this.body = this.method.hasBody ? {} : null
		this.response = null
	}

	post(){ 
		this.method = httpMethods.POST	
		return this
	}

	get(){
		this.method = httpMethods.GET		
		return this
	}

	async res(){
		if(this.response)
			return await this.response
		Hey.error('Ńo response.')
	}

	async do(){
		console.log(`The method ${this.method.name} was called on url: ${this.url}`)
		try{
			this.response = fetch(this.url, this.config())
		}catch(err){
			Hey.error('Faied to fetch. :/', err)
		}
		return this
	}

	config(){
		const options = {}
		const headers = this.headers
		const body = this.body
		const { name: method, hasBody } = this.method

		options.method = method
		options.headers = headers

		if (hasBody)
			options.body = JSON.stringify(body)
		else if (!hasBody && body)
			Hey.error(`The method ${method} doesn't allow a body. :/`)

	}

	static error(msg, err=null){
		// Logger in the future
		console.error(msg)
		console.error(err)
	}

}

function hey(url){
	return new Hey(url)
}

async function example(){
	try{
		const test = await (await (await hey('https://jsonplaceholder.typicode.com/todos/1').get().do()).res()).json()
		console.log(test)
	}catch(e){
		console.error(e)
	}
}
example()
