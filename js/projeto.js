//alerta de boas-vindas 
//var alerta = alert("Boas-vindas ao Mundo Pet");

//função do filhote
function racao_filhote(){
    var meses_v = document.getElementById('meses');
    var peso_f_v = document.getElementById('peso_f');
    var resultado_f_v = document.getElementById('resultado_f');

    if (2<meses_v<=3){
        resultado_f_v.innerHTML ="Seu pet é um filhote. O indicado é 40 à 50 gramas por dia."
    }else if(3<meses_v<=4){
        resultado_f_v.innerHTML ="Seu pet é um filhote. O indicado é 50 à 60 gramas por dia."
    }else if(4<meses_v<=6){
        resultado_f_v.innerHTML ="Seu pet é um filhote. O indicado é 60 à 70 gramas por dia."
    }else if(6<meses_v<=12){
        resultado_f_v.innerHTML ="Seu pet é um filhote. O indicado é 70 à 80 gramas por dia."
    }else{
        resultado_f_v.innerHTML = 'Mês inválido.'
    } 
}

//função dos gatos maiores
function racao_maior(){
    var ano_v = document.getElementById('ano');
    var peso_m_v = document.getElementById('peso_m');
    var resultado_m_v = document.getElementById('resultado_m');

    if(1<ano_v<3 && 3<=peso_m_v<=4){
        resultado_m_v.innerHTML = "Seu pet é um jovem adulto. O indicado é 40 à 55 gramas por dia."
 
    }else if(3<ano_v<7 && 5<=peso_m_v<=6){
        resultado_m_v.innerHTML = "Seu pet é um adulto. O indicado é 55 à 75 gramas por dia."

    }else if(7<ano_v && 3<=peso_m_v<=4){
        resultado_m_v.innerHTML = "Seu pet é um idoso. O indicado é 45 à 60 gramas por dia."

    }else if(7<ano_v && 5<=peso_m_v<=6){
        resultado_m_v.innerHTML = "Seu pet é um idoso. O indicado é 60 à 75 gramas por dia."

    }else{
        resultado_m_v.innerHTML = 'Inválido.'
    }
}
