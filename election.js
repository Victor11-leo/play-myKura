const lists = document.querySelectorAll('.election-list')


const removeTicks = () => {
    lists.forEach((d) => {
        const tick = d.children[1].children[0]
        tick.style.display='none'
    })
}

removeTicks()

lists.forEach((d) => {
    const tick = d.children[1].children[0]
    d.addEventListener(('click'), (e) => {
        removeTicks()
        tick.style.display = 'block'
    })
})