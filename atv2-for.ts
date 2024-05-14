/*2- Exibir os números pares de 0 a 60, fazer uso do laço
de repetição for.
Tiago Daniel de Sousa Filho*/

console.clear();

for(let par: number = 0; par <= 60; par++){
    if(par % 2 == 0){
        console.log(`O número ${par} é par!`); 
    }
}