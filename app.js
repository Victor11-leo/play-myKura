const lists = document.querySelectorAll('.list')
const select = document.querySelector('.select input')
const options = document.querySelectorAll('option')
const cards = document.querySelectorAll('.card')

lists.forEach((d) => {
    const value = d.children[1].innerText
    const progress = d.children[1].children[1].children[0]
    progress.style.width= value
})

console.log(select)
select.value= options[0].innerText


options.forEach((d) => {
    d.addEventListener('click',(e) => {
        const value = e.target.innerText
        select.value = value
        carousel()
    })
})

const carousel = () => {
    cards.forEach((d,i) => {
        d.style.display = 'none'
        d.style.accessKey = i
        const value = d.children[0].innerHTML
        if (value == select.value)
        {
            // console.log(d)
            d.style.display = 'block'
        }
    })
}

carousel()

// console.log(value)
// console.log(progress)

