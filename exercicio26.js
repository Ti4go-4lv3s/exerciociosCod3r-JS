function numerosPares1A100 () {
    let num = 1

    while (num <= 100) {
        if (num % 2 == 0) {
            console.log(num)
        }
        num++
    }
}
numerosPares1A100()