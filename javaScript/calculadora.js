var interior = 0;

function somar(somar) {

    //Tunagem
    var motor = document.getElementsByName("motor");
    var trans = document.getElementsByName("trans");
    var freio = document.getElementsByName("freio");
    var susp  = document.getElementsByName("susp");
    var blind = document.getElementsByName("blind");
    var turbo = document.getElementsByName("turbo");

    //Pintura
    var corPrimMet = document.getElementsByName("corPrimMet");
    var perolado   = document.getElementsByName("perolado");
    var cprPrim    = document.getElementsByName("cprPrim");
    var corSecu    = document.getElementsByName("corSecu");

    //Acessórios
    var adsiv  = document.getElementsByName("adsiv");
    var aerof  = document.getElementsByName("aerof");
    var pcD    = document.getElementsByName("pcD");
    var pcT    = document.getElementsByName("pcT");
    var paraL  = document.getElementsByName("paraL");
    var capo   = document.getElementsByName("capo");
    var grelha = document.getElementsByName("grelha");
    var gaiola = document.getElementsByName("gaiola");
    var escmnt = document.getElementsByName("escmnt");
    var saias  = document.getElementsByName("saias");
    var teto   = document.getElementsByName("teto");
    var vidro  = document.getElementsByName("vidro");
    var placa  = document.getElementsByName("placa");
    var buzina = document.getElementsByName("buzina");
    var inter  = document.getElementsByName("inter");
    var totalInte = document.getElementById("totalInte");

    //Rodas
    var impor    = document.getElementsByName("impor");
    var nacion   = document.getElementsByName("nacion");
    var pneuCust = document.getElementsByName("pneuCust");
    var corRoda  = document.getElementsByName("corRoda");
    var fumaca   = document.getElementsByName("fumaca");
    
    //Luzes
    var xenon   = document.getElementsByName("xenon");
    var neon    = document.getElementsByName("neon");
    var apnCorX = document.getElementsByName("apnCorX");
    var apnCorN = document.getElementsByName("apnCorN");

    //Helicóptero
    var heliCorP  = document.getElementsByName("heliCorP");
    var heliCorS  = document.getElementsByName("heliCorS");
    var heliTurbo = document.getElementsByName("heliTurbo");
    var heliMotor = document.getElementsByName("heliMotor");
    var heliBlind = document.getElementsByName("heliBlind");


    var total = document.getElementById("total");

    var total1 = 0;

    //Tunagem
    switch (true) {
        case motor[0].checked:
            total1 += parseInt(motor[0].value);
            break;
        case motor[1].checked:
            total1 += parseInt(motor[1].value);
            break;
        case motor[2].checked:
            total1 += parseInt(motor[2].value);
            break;
        case motor[3].checked:
            total1 += parseInt(motor[3].value);
            break;
    }

    switch (true) {
        case trans[0].checked:
            total1 += parseInt(trans[0].value);
            break;
        case trans[1].checked:
            total1 += parseInt(trans[1].value);
            break;
        case trans[2].checked:
            total1 += parseInt(trans[2].value);
            break;
        case trans[3].checked:
            total1 += parseInt(trans[3].value);
            break;
    }

    switch (true) {
        case freio[0].checked:
            total1 += parseInt(freio[0].value);
            break;
        case freio[1].checked:
            total1 += parseInt(freio[1].value);
            break;
        case freio[2].checked:
            total1 += parseInt(freio[2].value);
            break;
    }

    switch (true) {
        case susp[0].checked:
            total1 += parseInt(susp[0].value);
            break;
        case susp[1].checked:
            total1 += parseInt(susp[1].value);
            break;
        case susp[2].checked:
            total1 += parseInt(susp[2].value);
            break;
        case susp[3].checked:
            total1 += parseInt(susp[3].value);
            break;
        case susp[4].checked:
            total1 += parseInt(susp[4].value);
            break;
    }

    switch (true) {
        case blind[0].checked:
            total1 += parseInt(blind[0].value);
            break;
        case blind[1].checked:
            total1 += parseInt(blind[1].value);
            break;
        case blind[2].checked:
            total1 += parseInt(blind[2].value);
            break;
        case blind[3].checked:
            total1 += parseInt(blind[3].value);
            break;
        case blind[4].checked:
            total1 += parseInt(blind[4].value);
            break;
    }

    switch (true) {
        case turbo[0].checked:
            total1 += parseInt(turbo[0].value);
            break;
    }

    //Pintura
    if(corPrimMet[0].checked){total1 += parseInt(corPrimMet[0].value);}
    if(perolado[0].checked){total1 += parseInt(perolado[0].value);}
    if(cprPrim[0].checked){total1 += parseInt(cprPrim[0].value);}
    if(corSecu[0].checked){total1 += parseInt(corSecu[0].value);}

    //Acessorios
    if(adsiv[0].checked){total1 += parseInt(adsiv[0].value);}
    if(aerof[0].checked){total1 += parseInt(aerof[0].value);}
    if(pcD[0].checked){total1 += parseInt(pcD[0].value);}
    if(pcT[0].checked){total1 += parseInt(pcT[0].value);}
    if(paraL[0].checked){total1 += parseInt(paraL[0].value);}
    if(capo[0].checked){total1 += parseInt(capo[0].value);}
    if(grelha[0].checked){total1 += parseInt(grelha[0].value);}
    if(gaiola[0].checked){total1 += parseInt(gaiola[0].value);}
    if(escmnt[0].checked){total1 += parseInt(escmnt[0].value);}
    if(saias[0].checked){total1 += parseInt(saias[0].value);}
    if(teto[0].checked){total1 += parseInt(teto[0].value);}
    if(vidro[0].checked){total1 += parseInt(vidro[0].value);}
    if(placa[0].checked){total1 += parseInt(placa[0].value);}
    if(buzina[0].checked){total1 += parseInt(buzina[0].value);}

    if(somar == 1){
        interior = parseInt(inter[0].value) * 5;
    }else if(somar == 2){
        inter[0].value = "";
        totalInte.value = "";
        interior = 0;
    }

    if(interior){
        var totalInte2 = interior.toString() + ".000,00"
        totalInte.value = totalInte2;
        total1 += interior;
    }

    //Rodas
    if(impor[0].checked){total1 += parseInt(impor[0].value);}
    if(nacion[0].checked){total1 += parseInt(nacion[0].value);}
    if(pneuCust[0].checked){total1 += parseInt(pneuCust[0].value);}
    if(corRoda[0].checked){total1 += parseInt(corRoda[0].value);}
    if(fumaca[0].checked){total1 += parseInt(fumaca[0].value);}

    //Luzes
    if(xenon[0].checked){total1 += parseInt(xenon[0].value);}
    if(neon[0].checked){total1 += parseInt(neon[0].value);}
    if(apnCorX[0].checked){total1 += parseInt(apnCorX[0].value);}
    if(apnCorN[0].checked){total1 += parseInt(apnCorN[0].value);}

    //Helicópitero
    if(heliCorP[0].checked){total1 += parseInt(heliCorP[0].value);}
    if(heliCorS[0].checked){total1 += parseInt(heliCorS[0].value);}
    if(heliTurbo[0].checked){total1 += parseInt(heliTurbo[0].value);}
    if(heliMotor[0].checked){total1 += parseInt(heliMotor[0].value);}
    if(heliBlind[0].checked){total1 += parseInt(heliBlind[0].value);}

    if(total1 != 0){
        var total2 = total1.toString() + ".000,00"
        total.value = total2;
    }else{
        total.value = "";
    }
}

function limpar(limpar) {

    var form = document.getElementsByName("form");

    switch (limpar) {
        case 'motor':
            var motor = document.getElementsByName("motor");
            for(var i = 0; i <= 3; i++){
                motor[i].checked = false
            }
            break;
        case 'trans':
            var trans = document.getElementsByName("trans");
            for(var i = 0; i <= 3; i++){
                trans[i].checked = false
            }
            break;
        case 'freio':
            var freio = document.getElementsByName("freio");
            for(var i = 0; i <= 2; i++){
                freio[i].checked = false
            }
            break;
        case 'susp':
            var susp = document.getElementsByName("susp");
            for(var i = 0; i <= 4; i++){
                susp[i].checked = false
            }
            break;
        case 'blind':
            var blind = document.getElementsByName("blind");
            for(var i = 0; i <= 4; i++){
                blind[i].checked = false
            }
            break;
        case 'turbo':
            var turbo = document.getElementsByName("turbo");
            for(var i = 0; i <= 0; i++){
                turbo[i].checked = false
            }
            break;
    }

    somar();
}

function parceriaPolicia(){

    var valorPoli = document.getElementsByName("valorPoli");
    var totalPoli = document.getElementById("totalPoli");

    if(valorPoli[0].value){
        var valorAux    = valorPoli[0].value / 10;
        var valorAux2   = valorAux / 2;
        totalPoli.value = parseInt(valorPoli[0].value) + valorAux + valorAux2; 
    }

}