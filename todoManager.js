const readlineSync = require('readline-sync');
const menu = ["1 - Adicionar tarefa", "2 - Remover tarefa", "3 - Buscar tarefa", "4 - Listar tarefas", "5 - Sair"];
let tasks = [];
let continueRunning = true;

while (continueRunning) {
    console.log("\n - - - MENU - - - ");
    console.log(menu.join('\n'));
    let selectionMenu = readlineSync.question("Escolha uma opção de 1-5: ");
    
    if (selectionMenu === "1") {
        let createTask = readlineSync.question("Qual tarefa você quer adicionar: ");
        tasks.push(createTask);
        console.log("✅ Tarefa adicionada!");
        
    } else if (selectionMenu === "2") {
        if (tasks.length === 0) {
            console.log("❌ Nenhuma tarefa para remover!");
        } else {
            let removeTask = readlineSync.question("Qual tarefa você quer remover: ");
            let index = tasks.indexOf(removeTask);
            if (index !== -1) {
                tasks.splice(index, 1);
                console.log("✅ Tarefa removida!");
            } else {
                console.log("❌ Tarefa não encontrada!");
            }
        }
        
    } else if (selectionMenu === "3") {
        let searchTask = readlineSync.question("Escreva o que você quer buscar: ");
        let found = tasks.filter(task => task.includes(searchTask));
        if (found.length > 0) {
            console.log("🔍 Tarefas encontradas:", found);
        } else {
            console.log("❌ Nenhuma tarefa encontrada!");
        }
        
    } else if (selectionMenu === "4") {
        if (tasks.length === 0) {
            console.log("📋 Nenhuma tarefa cadastrada!");
        } else {
            console.log("📋 Suas tarefas:");
            tasks.forEach((task, index) => console.log(`${index + 1}. ${task}`));
        }
        
    } else if (selectionMenu === "5") {
        console.log("👋 Até logo!");
        continueRunning = false;
        
    } else {
        console.log("❌ Número inexistente, escreva um número de 1-5!");
    }
}
