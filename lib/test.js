document.addEventListener('DOMContentLoaded', function() {

	let ab = start('https://teste-a-b-b076a.firebaseio.com/')

	let element = document.querySelector('.continue')

	element.addEventListener('click', function() {
		ab.finish()
	})

	let as = document.querySelectorAll('a')

	for(let a of as) {
		a.addEventListener('click', function(event) {
			event.preventDefault()
			setTimeout(function() {
				window.location.assign(a.href)
			}, 5000)
		})
	}
})
