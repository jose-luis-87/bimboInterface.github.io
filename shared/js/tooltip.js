$(document).ready(function () {

  var toolTip = document.querySelector('.toolTip')
  var iconNav = document.querySelector('.iconNav')
  var iconPointer = document.querySelector('.iconPointer')
  var iconNavB = document.querySelector('.iconNav2')
  var iconPointerB = document.querySelector('.iconPointer2')
  var txtCardTool = document.querySelector('.cardTool p')
  var toolTipLat = document.querySelector('.toolTipLat')
  var txtBullet = document.querySelector('.containerBullet p')
  var btnClose = document.querySelector('.btnXtool')
  var btnCloseLeft = document.querySelectorAll('.btnXLeft')
  btnCloseLeft[0].addEventListener('click', () => {

    console.log('2do OpenM');
    openMisiones()
    console.log('entra x left');
  })



  btnClose.addEventListener('click', () => {

    openMisiones()
    console.log('3er OpenM');
  })

  loadToolTip()
  var lanSelec = localStorage.getItem('lan')
  if (lanSelec != undefined) {
    LanObj = $.parseJSON(lanSelec);
  }

  $('#txtTool').text(LanObj.tooltip.nav.drag)
  $('#txtToolLat').text(LanObj.tooltip.lat.ayuda)
  //var hotSpot = LanObj.tooltip.nav.hotspot
  console.log(LanObj);

  function loadToolTip() {
    anime({
      targets: iconPointer,
      translateX: 120,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutQuad',
      duration: 2000,
    })
    anime({
      targets: iconNav,
      translateX: 120,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutQuad',
      duration: 2000,
    })
    setTimeout(() => {
      iconNav.style.display = 'none'
      iconPointer.style.display = 'none'
      iconNavB.style.display = 'block'
      iconPointerB.style.display = 'block'
      txtCardTool.textContent = LanObj.tooltip.nav.hotspot
      anime({
        targets: iconPointerB,
        scale: .8,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutQuad',
        duration: 2000,
      })
      anime({
        targets: iconNavB,
        scale: .8,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutQuad',
        duration: 2000,
      })
      setTimeout(() => {
        toolTip.style.display = 'none'
        toolTipLat.style.display = 'block'

        setTimeout(() => {
          txtBullet.textContent = LanObj.tooltip.lat.guardar
          anime({
            targets: toolTipLat,
            translateY: 100,
            easing: 'linear',
          })
          setTimeout(() => {
            txtBullet.textContent = LanObj.tooltip.lat.misiones
            anime({
              targets: toolTipLat,
              translateY: 180,
              easing: 'linear',
            })

            setTimeout(() => {
              console.log('1er OpenM');
              openMisiones()
            }, 4000)
          }, 4000)
        }, 4000)
      }, 5000)
    }, 4000)


  }


});

function openMisiones() {

  var uiUser = document.querySelector('.uiUser')
  var overlay = document.querySelector('.overlay')
  $('.wrapperModales').empty()
  $('.wrapperModales').load('./shared/views/Misiones.html')
  uiUser.style.opacity = 1
  uiUser.style.display = 'block'
  
}