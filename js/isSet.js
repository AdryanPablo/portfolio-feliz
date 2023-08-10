export default function isSet(element) {

    let content = element.value

    if (content != '' && content != null && content != undefined) return true
    else return false

}