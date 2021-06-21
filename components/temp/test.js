export function zip(s) {
    try {
        var dict = {}
        var data = (s + '').split('')
        var out = []
        var currChar
        var phrase = data[0]
        var code = 256
        for (var i = 1; i < data.length; i++) {
            currChar = data[i]
            if (dict[phrase + currChar] != null) {
                phrase += currChar
            } else {
                out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0))
                dict[phrase + currChar] = code
                code++
                phrase = currChar
            }
        }
        out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0))
        for (var j = 0; j < out.length; j++) {
            out[j] = String.fromCharCode(out[j])
        }
        return utoa(out.join(''))
    } catch (e) {
        console.log('Failed to zip string return empty string', e)
        return ''
    }
}