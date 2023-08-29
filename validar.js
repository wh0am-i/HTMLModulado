function keyUp() {
    let password = document.querySelector('#password')

    let validar = {
        charLength: document.querySelector('.verifica .length'),
        lowercase: document.querySelector('.verifica .lowercase'),
        upercase: document.querySelector('.verifica .upercase'),
        special: document.querySelector('.verifica .special')
    }

    password.addEventListener("keyup", function () {
        patternTest(pattern.charLength(), validar.charLength);

        patternTest(pattern.lowercase(), validar.lowercase);

        patternTest(pattern.upercase(), validar.upercase);

        patternTest(pattern.special(), validar.special);

        if (
            hasClass(validar.charLength, "valid") &&
            hasClass(validar.lowercase, "valid") &&
            hasClass(validar.upercase, "valid") &&
            hasClass(validar.special, "valid")
        ) {
            addClass(password.parentElement, "valid")
        } else
            removeClass(password.parentElement, "valid")

    })

    let pattern = {
        charLength: function () {
            if (password.value.length >= 8) {
                return true;
            }
        },
        lowercase: function () {
            let regex = /^(?=.*[a-z]).+$/

            if (regex.test(password.value)) {
                return true;
            }
        },
        upercase: function () {
            let regex = /^(?=.*[A-Z]).+$/

            if (regex.test(password.value)) {
                return true;
            }
        },
        special: function () {
            let regex = /^(?=.*[0-9\W]).+$/

            if (regex.test(password.value)) {
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
            console.log(el.classList)
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
}