function avaliandoStrings(str1, str2) {
    let contem = true;

    for (i = 0 ; i < str1.length ; i++) {
        let letra = str1.charAt(i).toLowerCase()
        for (j = 0 ; j < str2.length ; j++) {
            let letra1 = str2.charAt(j).toLowerCase()
            if (letra == letra1) {
                contem = true
                break
            }
            else {
                contem = false
            }
        }
        if (!contem) {
            return contem
        }
    }
    return contem
}
 

console.log(avaliandoStrings('macaxeira', 'xeiramaca'))