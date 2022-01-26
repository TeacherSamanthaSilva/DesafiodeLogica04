function olaMundo() {
    console.log("Olá Mundo");
}
olaMundo();

function funcaocomNome(nome) {
    console.log(`Olá ${nome}`);
}
funcaocomNome("Samantha"); 
 
//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function spotify(nome, idade, estiloMusical) {
    console.log(`Olá ${nome}, sua idade é  ${idade} e seu estilo musical favorito é ${estiloMusical}`);
}
spotify("Samantha", "28", "rock");

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function cinema(filme, musica) {
    console.log(`O melhor filme do ano é  ${filme}, e a melhor música é  ${musica} `);
}
cinema("Homem Aranha sem volta para casa", "my universe");