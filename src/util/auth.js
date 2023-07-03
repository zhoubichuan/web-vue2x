export const getToken = () => {
    let result = ''
    try {
        // result = localStorage.getItem('token')
    } catch (e) {
        console.log(e)
    }
    return result
}
