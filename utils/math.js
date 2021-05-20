function rand(min, max) {
    return min + Math.floor(Math.random() * (max + 1 -min))
}

function randf(min, max) {
    return min + Math.random() * (max-min)
}

export default {
    rand,
    randf
}