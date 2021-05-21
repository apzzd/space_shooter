function randf(min, max) {
    if (max == null) {
        max = min || 1
        min = 0
    }
    return min + Math.random() * (max-min)
}

function rand(min, max) {
    return Math.floor(randf(min, max))
}

function randOneIn(max = 2) {
    return rand(0, max) === 0
}

function randOneFrom(items) {
    return items[rand(items.length)]
}

export default {
    rand,
    randf, 
    randOneIn,
    randOneFrom
}