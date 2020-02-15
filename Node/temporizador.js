const schedule = require("node-schedule");

const tarefa1 = schedule.scheduleJob('*/5 * 16 * * 6', function() {
  console.log("Executando Tarefa 1", new Date().getSeconds());
}); /* 
    executa de 5 em 5 segundos;
    Sintaxe ' vai executar a cada 5 segundos === *\5, ²* para executar em qualquer minuto, recorrente
    as 16 horas em ³* qualquer dia do mês, => 
    * qualquer mês numa quinta feira '4' => 4º dia da semana.
    */

setTimeout(() => {
  tarefa1.cancel() // metodo para cancelar um scheduleJob
  console.log('Cancelando')
}, 20000)

const regra = new schedule.RecurrenceRule()  // para ficar executando de forma recorrente uma determinada regra

regra.dayOfWeek = [new schedule.Range(1, 6)]
regra.hour = 16 // hora
regra.second = 30 // sempre no segundo 30

const tarefa2 = schedule.scheduleJob(regra, function(){
  console.log('Executando no segundo 30', new Date().getSeconds())
})

