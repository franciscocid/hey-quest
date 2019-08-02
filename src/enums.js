const actions = {}

const action = name => actions[name] = {name}

action('EXISTS')
action('READ')
action('CREATE')
action('UPDATE')
action('DELETE')

const httpMethods = {}

const method = (name, action, hasBody) => {
	httpMethods[name] = {
		name,
		action,
		hasBody,
	}
}

method('HEAD', actions.EXISTS, false)
method('GET', actions.READ, false)
method('POST', actions.CREATE, true)
method('PUT', actions.UPDATE, true)
method('PATCH', actions.UPDATE, true)
method('DELETE', actions.DELETE, false)

module.exports = {
	actions,
	httpMethods,
}
