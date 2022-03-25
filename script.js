    const API = "https://chat.anitagudkova.repl.co"

    let zina = document.querySelector('.manaZina');
    let zinas = document.querySelector('.chataZinas');
    let vards = document.querySelector('.vards');

function sutitZinu(){

    console.log('sutitZini() darbojas');

    zinas.innerHTML = zinas.innerHTML + '<br />' + vards.value + ': ' + zina.value;

    fetch(API + '/sutit/' + vards.value + '/' + zina.value)

}
async function ieladetChataZinas(){

    let datiNoServera = await fetch(API + '/lasit');
    let dati = await datiNoServera.text();
    zinas.innerHTML = dati;
}


//setInterval( ieladetChataZinas, 1000 )

async function ieladetChataZinasJson(){

    let datiNoServera = await fetch(API + '/lasit');
    let dati = await datiNoServera.json();
    
    zinas.innerHTML = '';
    let i = 0;
    while( i < await dati.length ) {
        
        let laiks = '[ <i>' + '????? ' + '</i>] ';
        
        if ("laiks" in dati[i]) {
            laiks = '[ <i>' + dati[i]['laiks'] + '</i>] ';
        }            
         zinas.innerHTML = zinas.innerHTML + laiks + dati[i]['vards'] + ': ' + dati[i]['zina'] + '<br />';
        
            i++;
    }

    zinas.scrollTop = zinas.scrollHeight;

}

setInterval( ieladetChataZinasJson, 1000 )
