export const validateEmail = (str) => {
    if(str.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){
        return true
    }
    return false
}