var ObjLan = {};
var misionesRally = []

function loadIdiomas(id) {
  let urlJson = 'shared/js/json/idioma.json'
  $.ajax({
    url: urlJson,
    data: {},
    dataType: "json",
    success: (res) => {
      ObjLan = res;
      localStorage.setItem('lan', JSON.stringify(ObjLan[id]))
      localStorage.setItem('lanId', id)
      console.log(id);
      let misiones = []
      misionesRally = ObjLan[id].misiones
      misionesRally.sort(()=> Math.random() - 0.5);
      localStorage.setItem('misiones', JSON.stringify(misionesRally))

      for(let i = 0; i < misionesRally.length; i++ ){
        misiones.push(misionesRally[i].id);
      }
      console.log(misiones);
      localStorage.setItem('rally', JSON.stringify(misiones));

    }
    
  });

}

var btnGroup = $('.btnGroup')
var logoSales = $('.logoSales')

btnGroup.on('click', function( e ) {

  loadIdiomas(e.target.id)
  $("#root").load('shared/views/Modelo.html');

})