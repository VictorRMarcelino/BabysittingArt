var Janela = function(settings){

    this.options = $.extend({
        title: 'Janela',
        rotina: 1,
        acao: 1,
        campos: [],
        dados: []
    }, settings);

    this.getId = function(){
        return 'janela_' + this.options.rotina + '_' + this.options.acao;
    }

    this.criaJanela = function(){
        let oModal = $(`<div class="janela" id=${this.getId()}></div>`);
        oModal.append(this.criaHeaderJanela());
        oModal.append(this.criaContentJanela());
        oModal.append(this.criaFooterJanela());
        $('[name=estrutura_janelas]').append($('<div class="area_janela" name="area_janela"></div>').append(oModal));
    }

    this.criaHeaderJanela = function(){
        let oHeader = $('<div class="janela_header"></div>');
        oHeader.append($("<span class='janela_header_title'>" + this.options.title + "</span>"));
        oHeader.append($('<aside class="janela_header_aside"></aside>').append(this.criaCloseButton()));

        return oHeader;
    }

    this.criaCloseButton = function(){
        let oClose = $(`<span class="janela_header_aside_close_btn" janela=${this}></span>`);
        oClose[0].onclick = function closeJanela() {$('[name=area_janela]').remove()};
        return oClose;
    }

    this.criaContentJanela = function(){
        let oContent = $('<div class="janela_content"></div>');
        let oTableContent = $('<table class="janela_content_table"></table>');
        let iCampos = this.options.campos.length;

        for (let i = 0; i < iCampos; i++) {
            let oLinhaCampo = $('<tr></tr>');
            oLinhaCampo.append($('<td class="janela_content_table_item_title"></td>').append(`<label>${this.options.campos[i]['title']}:</label>`));
            oLinhaCampo.append($('<td></td>').append(new Campo({type: this.options.campos[i]['type'], class: "janela_content_table_input"}).obj));
            oTableContent.append(oLinhaCampo);
        }

        oContent.append(oTableContent);
        return oContent;
    }

    this.criaFooterJanela = function(){
         let oFooter = $('<div div class="janela_footer"></div>');

         return oFooter;
    }

    this.criaJanela();
}