var Mensagem = {
    show: function(sTitle, sIcon, sText, fnOk = false, fnCancel = false){
        Swal.fire({
            title: sTitle,
            icon : sIcon,
            text : sText
        }).then(function (oResult) {
            if (oResult.isConfirmed && fnOk != false){
                fnOk.apply(this);
            }
        });
    },

    erro: function(sMensagem) {
        Mensagem.show('Erro', 'error', sMensagem);
    },

    info: function(sMensagem, fnOk = false) {
        Mensagem.show('Informação', 'info', sMensagem, fnOk);
    }
}