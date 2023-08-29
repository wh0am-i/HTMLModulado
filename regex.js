function Regex() {
    let regexInp = document.querySelector('#regexInp')

    let validar = {
        verificaT: document.querySelector('.verifica .verificaT'),
        caracterB: document.querySelector('.verifica .caracterB')
    }
    regexInp.addEventListener("keyup", function () {
        patternTest(pattern.verificaT(), validar.verificaT);
        patternTest(pattern.caracterB(), validar.caracterB);

        if (
            hasClass(validar.verificaT, "valid") &&
            hasClass(validar.caracterB, "valid")
        ) {
            addClass(regexInp.parentElement, "valid")
        } else
            removeClass(regexInp.parentElement, "valid")
    })
}
let pattern = {
    verificaT: function () {
        let regexT = /[t]/i

        if (regexT.test(regexInp.value)) {
            regexInp.value = regexInp.value.replace(regexT, "7")
        }
    },
    caracterB: function() {
        const regexInpTemp = regexInp.value.slice(-1); 
        const regex = regexInp.value.slice(0, -1);
        let regexTemp;
        let regexPtt;
    
        const regexPatterns = [
            /[a-z]/,
            /[A-Z]/,
            /[0-9\W]/
        ];
        for (const pattern of regexPatterns) {
            if (pattern.test(regexInpTemp)) {
                regexTemp = pattern;
            }
            if (pattern.test(regex)) {
                regexPtt = pattern;
            }
        }
        if (regexTemp !== regexPtt && regex !== "") {
            regexInp.value = regexInp.value.replace(regexTemp, "");
        }
        if (regexInp.value !== "") {
            return true;
        }
    }    
};
function removeClass(el, className) {
    if (el.classList) el.classList.remove(className)
    else
        el.className = el.className.replace(
            new RegExp(
                "(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"
            ),
            " "
        );
}

function hasClass(el, className) {
    if (el.classList) {
        //console.log(el.classList)
        return el.classList.contains(className)
    } else {
        new RegExp("(^| )" + className + "( |$)", "gi").test(el.className)
    }
}

function patternTest(pattern, response) {
    if (pattern) {
        addClass(response, "valid")
    } else {
        removeClass(response, "valid")
    }
}

function addClass(el, className) {
    if (el.classList) {
        el.classList.add(className)
    } else {
        el.className += " " + className
    }
}

function buscaPalavra() {   
    let buscaInp = document.querySelector('#buscaInp');
    let regex = new RegExp(buscaInp.value, "g"); // "g" para busca global
    let matches = []; //lista de index encontrados
    let match;

    while ((match = regex.exec(regexInp.value)) !== null) { //enquanto
        matches.push(match.index);
    }

    if (matches.length > 0) {
        alert("Index: " + matches.join(", "));
    } else {
        alert("Nenhuma palavra encontrada.");
    }
}

function duvida(){
    alert("O primeiro caracter digitado bloqueia os posteriores, sendo os critérios: LowerCase, UpperCase e Special")
}