
function regexVar(text) {
    let re = text.match(/^([aeiou]).*\1$/i);
    re === null ? console.log("false") : console.log("true");
    return re;
}

regexVar("asdasdasdasdasaa");

