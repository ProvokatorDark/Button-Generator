
(function(){
    var app ={

            var borderRad=this.create.css('border-radius'),
                bgcolor=this.create.css('background-color'),
                brcolor=this.create.css('border-color'),
                codeResultArea=$('#code-result');


            codeResultArea.text(
                '-moz-border-radius:'+ borderRad+';\n'+
                '-webkit-border-radius:'+ borderRad+';\n'+
                'border-radius:'+ borderRad+';\n'+
                'border-color:'+ brcolor+';\n'+
                'background-color:'+bgcolor+';'
            );
        }

    }
    app.initialize();
}());