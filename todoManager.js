// 📦 IMPORTS E CONSTANTES
const readlineSync = require('readline-sync');

// 🛠️ FUNÇÕES UTILITÁRIAS
function mostrarMenu() {
    const menu = ["1 - Adicionar tarefa", "2 - Remover tarefa", "3 - Buscar tarefa", "4 - Listar tarefas", "5 - Sair"];
    console.log("\n - - - MENU - - - ");
    console.log(menu.join('\n'));
}

// 📝 FUNÇÕES DO CRUD
function adicionar(tasks, novaTarefa) {
    if (novaTarefa.trim() === "") {
        console.log("❌ Tarefa não pode estar vazia!");
        return false;
    } else {
        tasks.push(novaTarefa.trim());
        console.log("✅ Tarefa adicionada!");
        return true;
    }
}

function remover(tasks) {
    if (tasks.length === 0) {
        console.log("❌ Nenhuma tarefa para remover!");
        return false;
    }
    
    // Mostrar todas as tarefas numeradas
    console.log("\n📋 Tarefas disponíveis:");
    tasks.forEach((task, index) => console.log(`${index + 1}. ${task}`));
    
    // Pedir o número da tarefa
    let numeroTarefa = readlineSync.question("\nDigite o número da tarefa que deseja remover: ");
    
    // Validar se é um número válido
    let index = parseInt(numeroTarefa) - 1; // Converter para índice (base 0)
    
    if (isNaN(parseInt(numeroTarefa)) || index < 0 || index >= tasks.length) {
        console.log("❌ Número inválido! Digite um número da lista.");
        return false;
    }
    
    // Confirmar remoção
    let tarefaRemovida = tasks[index];
    tasks.splice(index, 1);
    console.log(`✅ Tarefa "${tarefaRemovida}" foi removida!`);
    return true;
}

function buscar(tasks, termoBusca) {
    if (termoBusca.trim() === "") {
        console.log("❌ Termo de busca não pode estar vazio!");
        return false;
    }
    
    let encontradas = tasks.filter(task => task.includes(termoBusca.trim()));
    
    if (encontradas.length > 0) {
        console.log("🔍 Tarefas encontradas:");
        encontradas.forEach((task, index) => console.log(`${index + 1}. ${task}`));
        return true;
    } else {
        console.log("❌ Nenhuma tarefa encontrada!");
        return false;
    }
}

function listar(tasks) {
    if (tasks.length === 0) {
        console.log("📋 Nenhuma tarefa cadastrada!");
        return false;
    } else {
        console.log("📋 Suas tarefas:");
        tasks.forEach((task, index) => console.log(`${index + 1}. ${task}`));
        return true;
    }
}

// 🎯 VARIÁVEIS GLOBAIS
let tasks = [];
let continueRunning = true;

// 🔄 LOOP PRINCIPAL
while (continueRunning) {
    mostrarMenu();
    let selectionMenu = readlineSync.question("Escolha uma opção de 1-5: ");
    
    if (selectionMenu === "1") {
        let createTask = readlineSync.question("Qual tarefa você quer adicionar: ");
        adicionar(tasks, createTask);
        
    } else if (selectionMenu === "2") {
        remover(tasks); // ✅ Agora não precisa de parâmetro!
        
    } else if (selectionMenu === "3") {
        let searchTask = readlineSync.question("Escreva o que você quer buscar: ");
        buscar(tasks, searchTask);
        
    } else if (selectionMenu === "4") {
        listar(tasks);
        
    } else if (selectionMenu === "5") {
        console.log("👋 Até logo!");
        continueRunning = false;
        
    } else {
        console.log("❌ Número inexistente, escreva um número de 1-5!");
    }
}



//Implementar busca por status
//Validação de entrada do menu (aceitar só 1-5)
//Salvar/carregar tarefas em arquivo
//Adicionar cores no terminal
//Função para editar tarefas
//Sistema de prioridades