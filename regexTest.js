function case1() {
    let str = "Teste Teste jTeste"
    let n = str.search(/[j+]/i);
    return n
}
function case2() {
    let str = "Teste Teste jTeste"
    let regexp = new RegExp(/[j+]/i);
    let n = regexp.exec(str)
    return n
}
function case3() {
    let str = "Teste Teste jTeste"
    let n = str.replace(/[j+]/ig, "I");
    return n
}
function case4() {
    let str = "Teste Teste jTeste"
    let n = str.split(/[s\j+]/i);
    return n
}
function case5() {
    let str = "Teste Teste jTeste"
    let regexp = new RegExp(/[j]/i);
    let n = regexp.test(str)
    return n
}


console.log([case1()], [case2()], [case3()], [case4()], [case5()])
