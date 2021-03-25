const toggleNav = document.getElementById('toggle-nav')
const nav = document.getElementById('nav')

console.log(toggleNav)

toggleNav.addEventListener('click', () => {
	nav.classList.toggle('active')
})
