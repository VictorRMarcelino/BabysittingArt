var Babas = {
    onCickMaisInformacoes: function(event){
        new Janela({
            title: 'Visualizar Babá',
            campos: [{title: 'Nome', type: Campo.TEXTO}, {title: 'Preço', type: Campo.TEXTO}, {title: 'Disponibilidade', type: Campo.TEXTO}]
        });
    }
}