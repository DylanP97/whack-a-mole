
squares.forEach(square => {
    let squareid = square.id
    square.addEventListener('mousedown' () => {
        if (squareid == hitPosition) {
        result++
        score.textContent = result
        hitPosition = null
        }
    })
})