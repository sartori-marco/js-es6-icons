$(document).ready(function(){

  // 16 ICONE
  const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    }
  ];

  // 3 COLORI
  const colors = [
    'blue',
    'orange',
    'purple'
  ];

  // CICLO, USO INCLUDES E CREO UN ARRAY CON 3 ELEMENTI
  // const types = [];
  //
  // icons.forEach((element) => {
    //   if (!types.includes(element.type)) {
      //     types.push(element.type);
      //   }
      // });

  // CON FUNZIONE
  const types = getTypes(icons);




  //MAPPO E AGGIUNGO I COLORI CON INDEXOF
  //METTO IL COLORE IN BASE ALL'INDICE 0 1 2
  const iconsColor = icons.map((element) => {
    const indexType = types.indexOf(element.type);
    console.log(indexType);
    return {
      ...element,
      color: colors[indexType]
    }
  });
  console.log(iconsColor);

  //RICHIAMO FUNZIONE STAMPA ICONE
  const container = $('.icons')
  stampaIcons(iconsColor,container);

  //SELECT CHE CAMBIA
  const select = $('.type')
  option(types,select);

  select.change(function(){
    const selected = $(this).val();

    const filterIcon = filterChange(iconsColor,selected);

    stampaIcons(filterIcon,container);
  });




});
//END DOCUMENT READY


////////////////FUNZIONI/////////////////////////

// FUNZIONE PER FILTRARE GLI ELEMENTI/ICONE
function filterChange(array, type){
  const filterIcons = array.filter((element)=>{
    return element.type == type;
  });

  // IF PER VERIFICARE L'OPZIONE ALL
  if (filterIcons.length > 0) {
    return filterIcons;
  }

  else {
    return array;
  }


}


//FUNZIONE STAMPA ICONE
function stampaIcons(array,container){
  container.html(' ');
  array.forEach((element) => {
    // DESTRUCTURING
    const {name, family, prefix, type, color} = element;

    container.append(
      `
        <div class="box">
          <i class="${family} ${prefix}${name}" style="color:${color}"></i>
          <div class="title">${name}</div>
      `
    );

  });

}


// FUNZIONE OPZIONE SULLA SELECT
function option(array,select) {
  array.forEach((element) => {
    select.append(
      `
      <option value="${element}">${element}</option>
      `);
  });

}


function getTypes(array){
  const types = [];

  array.forEach((element) => {
    if (!types.includes(element.type)) {
      types.push(element.type);
    }
  });
  return types;
}





//
