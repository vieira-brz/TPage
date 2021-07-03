// CALL FUNCTIONS ONLOAD ONLY TO TEST
window.onload = function() {
    console.log('Project in work!');

    document.querySelectorAll('simple-button').forEach(el => { 
        el.setAttribute('type','button');
        el.style.cursor = 'pointer';
    });
    
    // SIMPLE PAGINATION EXAMPLE
        // associative - necessary string(assoc:) before 
        // var arrayObject = loadLocalJson_Assoc();
        // let keys = 'assoc:id,author,project,description'; // listar todas as chaves do array, numa versão futura essas chaves poderão ser selecionadas

        // indexes - necessary string(index:) before 
        // var arrayObject = loadLocalJson_Default();
        // let keys = 'index:4'; // prefixo index seguido do numero de chaves no array
        
        // spage(array or object variable, initial position, final position, interval value, keys of array);
        // spage(arrayObject, 0, 3, 3, keys);
    

    // SIMPLE SELECT PAGINATION EXAMPLE
        // associative - necessary string(assoc:) before
        // var arrayObject = loadLocalJson_Assoc();
        // let keys = 'assoc:id,author,project,description'; // listar todas as chaves do array, numa versão futura essas chaves poderão ser selecionadas

        // indexes - necessary string(index:) before 
        // var arrayObject = loadLocalJson_Default();
        // let keys = 'index:4';

        // spage(array or object variable, interval value of select options, final default value (ser o mesmo valor de interval), max options in select, keys of array);
        // sspage(arrayObject, 2, 2, 10, keys);
}

// LOCAL FUNCTIONS , EVENTS AND DEMONSTRATIONS
function loadLocalJson_Assoc() {
    let jList = JSON.parse(data);
    return jList;
}

function loadLocalJson_Default() {
    let jList = JSON.parse(data);
    return jList;
}

// TABLES
// SIMPLE PAGINATION
function spage(array, initial, final, interval, keys) {

    document.querySelectorAll('#tpage-simple > tbody > tr').forEach(element => {
        element.remove();
    });

    initial == 0 ? document.querySelector('simple-pagination > simple-button[name="previous"]').style.display = 'none' :  document.querySelector('simple-pagination > simple-button[name="previous"]').style.display = 'inline-block';
    final == (array.length - 1) ? document.querySelector('simple-pagination > simple-button[name="next"]').style.display = 'none' : document.querySelector('simple-pagination > simple-button[name="next"]').style.display = 'inline-block';

    for (let i = initial; i < final; i++) {
        let tbody = document.querySelector('#tpage-simple > tbody');

        let html = '';
        let indexType = keys.split(':');

        if (indexType[0] == 'assoc') {
            let indexKeys = indexType[1].split(',');

            for (let assocs in indexKeys) {
                let values = assocs;
                let newColumn = '<td>'+ array[i][values] +'</td>';
                html = html.concat(newColumn);
            }
        } else {
            let indexKeys = indexType[1];

            for (let j = 0; j < indexKeys; j++) {
                let newColumn = '<td>'+ array[i][j] +'</td>';
                html = html.concat(newColumn);   
            }
        }

        tbody.insertAdjacentHTML('beforeend', html);
    }

    document.querySelector('simple-text-pagination').innerHTML = 'Items '+ (initial + 1) +' to '+ final +' of '+ array.length +' items';

    document.querySelector('simple-pagination > simple-button[name="previous"]').addEventListener('click', function(e) {
        e.preventDefault();

        if (initial == 0) {
            document.querySelector('simple-pagination > simple-button[name="previous"]').style.display = 'none';
        } else {
            document.querySelector('simple-pagination > simple-button[name="previous"]').style.display = 'block';

            initial -= interval;
            final -= interval;
            spage(array, initial, final, interval, keys) 
        }

        e.stopImmediatePropagation();
    });

    document.querySelector('simple-pagination > simple-button[name="next"]').addEventListener('click', function(e) {
        e.preventDefault();

        if (final == array.length - 1) {
            document.querySelector('simple-pagination > simple-button[name="next"]').style.display = 'none';
        } else {
            document.querySelector('simple-pagination > simple-button[name="next"]').style.display = 'block';

            initial += interval;
            final += interval;
            spage(array, initial, final, interval, keys) 
        }

        e.stopImmediatePropagation();
    });
}

// SELECTED PAGINATION
function sspage(array, interval, final, maxoptions, keys) {
    
    document.querySelectorAll('#tpage-select-simple > tbody > tr').forEach(element => {
        element.remove();
    });

    document.querySelectorAll('select[name="pagination"] > option').forEach(element => {
        element.remove();
    });

    let select = document.querySelector('select[name="pagination"]');

    let html = '';
    for (let i = 1; i < maxoptions; i++) {
        let newOption = '';

        if ((i * interval) > array.length) {
            newOption = '<option id="removeDom"></option>';
        } else if (final == (i * interval)) {
            newOption = '<option value="'+ (i - 1) +'" selected>'+ (i * interval) +'</option>';
        } else {
            newOption = '<option value="'+ (i - 1) +'">'+ (i * interval) +'</option>';
        }

        html = html.concat(newOption);
    }
    select.insertAdjacentHTML('beforeend', html);

    for (let i = 0; i < final; i++) {
        let tbody = document.querySelector('#tpage-select-simple > tbody');

        let html = '';
        let indexType = keys.split(':');

        if (indexType[0] == 'assoc') {
            let indexKeys = indexType[1].split(',');

            for (let assocs in indexKeys) {
                let values = assocs;
                let newColumn = '<td>'+ array[i][values] +'</td>';
                html = html.concat(newColumn);
            }
        } else {
            let indexKeys = indexType[1];

            for (let j = 0; j < indexKeys; j++) {
                let newColumn = '<td>'+ array[i][j] +'</td>';
                html = html.concat(newColumn);   
            }
        }

        tbody.insertAdjacentHTML('beforeend', html);
    }

    document.querySelectorAll('#removeDom').forEach(element => {
        element.remove();
    });
    
    select.addEventListener('change', function(e) {
        e.preventDefault();
        
        let selected = select.selectedIndex;
        let option = document.querySelector('option[value="'+ selected +'"]').text;

        sspage(array, interval, option, maxoptions, keys);

        e.stopImmediatePropagation();
    });
}
