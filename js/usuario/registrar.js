var Registrar = {
    
    onClickConfirmar: function(){
        Mensagem.info('Usuário cadastrado com sucesso!', function(){
            window.location.href = window.location.origin + '/html/usuario/login.html';
        })
    }
}