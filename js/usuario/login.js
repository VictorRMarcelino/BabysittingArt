var Login = {
    onClickConfirmar: function(){
        Mensagem.info('Usuário logado com sucesso', function(){
            window.location.href = window.location.origin + '/html/babas/babas.html' 
        });
    }
}