function pessoa() {
    this.idade = 0;
        const self = this // usando uma constante para forçar o this a não variar
    setInterval(function(){
        self.idade++;
        console.log(self.idade)
    }.bind(this), 1000) // ou usando bind para amarrar o this a essa função
}
new pessoa

