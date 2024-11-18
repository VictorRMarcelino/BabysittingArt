var Campo = function(settings){
    this.options = $.extend({
        type: '',
        class: ''
    }, settings);

    this.validaTipoCampo = function(){
        if (emBranco(this.options.type)) {
            Mensagem.erro('Nenhum tipo de campo definido');
        }
    }

    this.criaCampo = function() {
        this.validaTipoCampo();
        this.obj = $(`<input type="${this.options.type}" class="${this.options.class}"></input>`);
    }

    this.criaCampo();
}

Campo.prototype = new Componente();
Campo.TEXTO    = 'text';
Campo.PASSWORD = 'passoword';