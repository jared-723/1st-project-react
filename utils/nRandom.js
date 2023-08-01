
export const randomGen = (list) => {
    let randomN = Math.floor(Math.random()*list.length)
    return list[randomN]
}