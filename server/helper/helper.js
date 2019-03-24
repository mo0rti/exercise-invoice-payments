const random4digit = () => {
    return Math.floor(1000 + Math.random() * 9000)
}
const random5digit = () => {
    return Math.floor(10000 + Math.random() * 90000)
}
const createIBAN = () => {
    return `DE-01-${random4digit()}-${random4digit()}-${random5digit()}-10`
}

module.exports = {
    createIBAN
}
