function introduction(name) {
    return `Hi, my name is ${name}.`;
} introduction(`Josh`)

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

function introductionWithLanguageOptional(name, language = `JavaScript`) {
    console.log(`JavaScript`)
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
} 

function sayHelloTo(firstName= "User") {
    console.log(`Hello, ${firstName}!`);
  }

