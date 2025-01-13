// change color of circle
const circleColor = document.querySelectorAll('.circle-color')
const circleColorSpan = document.querySelectorAll('.circle-color>span')

circleColor.forEach((circle, i) => {
    circle.addEventListener('click', () => {
        circleColorSpan.forEach((span, index) => {
            if (i != index) {
                span.innerHTML = ''
            }
        })
        circle.children[0].innerHTML = '&check;'
    })
})
// change color of circle


// counter count
const counter = document.querySelectorAll('.counter')
let flag = 0

counter.forEach(c => {
    c.addEventListener('click', () => {
        if (c.innerHTML == '-') {
            flag--
            if (flag < 1) {
                flag = 1
            }
            c.nextElementSibling.innerHTML = flag + ' Qty'
        } else if (c.innerHTML == '+') {
            flag++
            c.previousElementSibling.innerHTML = flag + ' Qty'
        }
    })
})
// counter count


// change product img
const imgProduct = document.querySelectorAll('.img-product>img')
const changeImg = document.querySelector('#change-img')

imgProduct.forEach(img => {
    img.addEventListener('click', () => {
        const getSrc = img.getAttribute('src')
        changeImg.setAttribute('src', getSrc)
    })
})
// change product img


// zoom in img
const figureZoom = document.querySelector('.figure-zoom')
let zoomFactor = 1.5

figureZoom.addEventListener('mousemove', (e) => {
    let x = e.offsetX
    let y = e.offsetY
    changeImg.style.transformOrigin = `${x}px ${y}px`
    changeImg.style.transform = `scale(${zoomFactor})`
})

figureZoom.addEventListener('mouseleave', () => {
    changeImg.style.transformOrigin = 'center'
    changeImg.style.transform = 'scale(1)'
})
// zoom in img