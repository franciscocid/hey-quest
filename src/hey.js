const fetch = require('node-fetch')
const { httpMethods } = require('./enums')

class Hey{

	constructor(url){
		this.url = url
		this.method = httpMethods.GET
		this.headers = {}
		this.body = this.method.hasBody ? {} : null
		this.response = null
	}
	
	// Append to header (Note: if you want to replace headers, use forceHeaders
	headers(newHeaders){
		this.headers = {...this.headers, ...newHeaders}
		return this
	}

	// Append to body (Note: if you want to replace body, use forceBody
	body(newBody){
		this.body = {...this.body, ...newBody}
		return this
	}

	// Set properties directly	
	url(to){
		this.url = to
		return this
	}
	uri(to){
		return this.url(to)
	}

	method(m){
		this.method = m
		return this
	}

	// Force properties
	forceHeaders(headers){
		this.headers = headers
		return this
	}

	forceBody(body){
		this.body = body
		return this
	}

	// Clear properties
	// MAYBE it should clear everything, TODO: Thinkg 'bout it
	clear(){
		this.headers = {}
		this.body = null
		this.response = null
		return this
	}

	clearHeaders(){
		this.headers = {}
		return this
	}

	clearBody(){
		this.body = this.method.hasBody ? {} : null
		return this
	}

	clearResponse(){
		this.response = null
		return this
	}

	// HTTP Methods
	head(){
		this.method = httpMethods.HEAD
		return this
	}

	get(){
		this.method = httpMethods.GET		
		return this
	}

	post(){
		this.method = httpMethods.POST
		return this
	}

	put(){
		this.method = httpMethods.PUT
		return this
	}

	patch(){
		this.method = httpMethods.PATCH
		return this
	}

	delete(){
		this.method = httpMethods.DELETE
		return this
	}

	// Useful Headers shortcuts
	// ...
	// ... contentType
	// ... auth
	// ... acceptedType
	// ...
	// ...

	// Get response from last search
	res(){
		if(this.response)
			return this.response
		Hey.error('Ńo response.')
		return this
	}

	// Format configuration and execute request
	async do(){
		console.log(`The method ${this.method.name} was called on url: ${this.url}`)
		try{
			this.response = fetch(this.url, this.config())
		}catch(err){
			Hey.error('Faied to fetch. :/', err)
		}
		return this
	}

	// Format configuration
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
	
	// Call error logger
	static error(msg, err=null){
		// Logger in the future
		console.error(msg)
		console.error(err)
	}

}

function hey(url){
	return new Hey(url)
}

module.exports = hey
