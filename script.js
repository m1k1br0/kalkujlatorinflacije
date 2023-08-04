function inflacija(){
    let stopa_inflacije = document.querySelector('#stopa_inflacije');
    let novac = document.querySelector('#novac');
    let godine = document.querySelector('#godine');
    stopa_inflacije = parseFloat(stopa_inflacije.value)
    novac = parseFloat(novac.value)
    godine = parseFloat(godine.value)

    let vrednost = novac + novac * ( stopa_inflacije / 100);
    
    for( let i = 1 ; i < godine ; i++ ){
        vrednost += vrednost * ( stopa_inflacije / 100);
    }

    vrednost = vrednost.toFixed(2);

    let newElement = document.createElement('div')

    newElement.className = 'nov_element'

    newElement.innerText = `Danasnjih ${novac} eura vredi isto kao ${vrednost} eura za ${godine} godina.`

    document.querySelector('.polja_za_unosenje').appendChild(newElement);

    console.log(vrednost)
}