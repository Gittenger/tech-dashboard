const toggleNav = document.getElementById('toggle-nav')
const toggleSearch = document.getElementById('toggle-search')
const nav = document.getElementById('nav')
const search = document.getElementById('header-search')

toggleNav.addEventListener('click', () => {
	nav.classList.toggle('active')
})

toggleSearch.addEventListener('click', () => {
	search.classList.toggle('active')
})
