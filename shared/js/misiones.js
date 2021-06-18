$(document).ready(function () {
    /* var games = $.parseJSON(localStorage.getItem('GamesToPlay')) 
    if(games === null){
        alert('fin del juego')
    }
    */
   var menuLat = $('.wrapperMenu')
    var notification = document.querySelector('.notification')
    var missioneActual;
    var btnSig = $('.btnSig')
    var lanSelec = localStorage.getItem('lan')
    var rallyIndex = ''

    if (lanSelec != undefined) {
        LanObj = $.parseJSON(lanSelec);
    }
    var indexMisiones = {}
    var misionSelect = localStorage.getItem('misiones')
    
    var rally = localStorage.getItem('rally')
    if (misionSelect != undefined) {
        missioneActual = $.parseJSON(misionSelect);
        console.log(missioneActual);
    }

    for (let i = 0; i < missioneActual.length; i++) {
        
        Object.defineProperty(indexMisiones, missioneActual[i].id, {
            value: i,
            writable: false
          });
    }

    console.log(indexMisiones);

    if (rally != undefined) {
        rallyIndex = $.parseJSON(rally);
        console.log(rallyIndex);
    }

    
    var indexMision = indexMisiones[rallyIndex[0]]
   
    $('#numMision').text(LanObj.ui.nummision + ':' + ' ' + rallyIndex[0])
    $('#titleMision').text(LanObj.ui.objetotxt)
    $('#misionTxt').text(missioneActual[indexMision].frase)
    $('#btnSig').text(LanObj.ui.btnsig)

    
    var urlIcon = 'shared/img/ui/' + rallyIndex[0] + '.svg'

    btnSig.on('click', () => {
        
        $('.wrapperModales').fadeOut()
        $('.uiModel').css('pointer-events', 'auto' )
        $('.overay').css('display', 'none' )
        menuLat.css('display', 'none' )
        openNotification()
        console.log('entra sieuiente');
        CargarMision(rallyIndex[0])
        $('#txtNotification').text(missioneActual[indexMision].bullet)
        $('#txtNotificationComplete').text(missioneActual[indexMision].bullet)
        $("#iconNotification").attr("src", urlIcon);
        $("#iconNotificationComplete").attr("src", urlIcon);
        var currents = localStorage.getItem('currentMission')
        if(currents === null){
            localStorage.setItem('currentMission', '[]')
        }
        
    })

function openNotification() {

    anime({
        targets: notification,
        translateX: 320,
        easing: 'easeInOutQuad',
        duration: 2000,
    })
    
    setTimeout(() => {
        anime({
            targets: notification,
            translateX: 0,
            easing: 'easeInOutQuad',
            duration: 2000,
        })
    }, 8000)
}

});




