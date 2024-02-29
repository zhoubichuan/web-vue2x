export default {
    bind() { },
    inserted: function (el) {
        let flags = false
        el.ontouchstart = function (e) {
            e.preventDefault()
            flags = true
            el.style.position = "fixed"
            let touch = e.touches[0]
            let x = touch.clientX - el.offsetLeft
            let y = touch.clientY - el.offsetTop
            let screenWidth = window.screen.width
            let screenHeight = window.screen.height
            let maxX = screenWidth - el.offsetWidth
            let maxY = screenHeight - el.offsetHeight
            document.ontouchmove = function (e) {
                e.preventDefault()
                if (flags) {
                    let touch = e.touches[0]
                    let left = touch.clientX - x
                    let top = touch.clientY - y
                    if (left <= 0) {
                        left = 0
                    } else if (left >= maxX) {
                        left = maxX
                    }
                    if (top <= 0) {
                        top = 0
                    } else if (top >= maxY) {
                        top = maxY
                    }
                    el.style.left = left + "px"
                    el.style.top = top + "px"
                }
            }
            document.ontouchend = function () {
                flags = false
            }
        }
    },
}