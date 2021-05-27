// RETOUR HTML
let body = document.body;
let script_insert_before = document.querySelectorAll('script')[0];

// INPUT
let input_valider = document.querySelector('#input').querySelector('input');
let button_valider = document.querySelector('#input').querySelector('button');

console.log(button_valider);



// AJOUTER UNE TACHE
let container = document.querySelector('.container');

function ajouter() {
    // DIV TASK
    let tache = document.createElement('div');
    tache.className = "task_visible";
    container.appendChild(tache);


    // DIV PARA TASK
    let temp = input_valider.value;
    let div_p_task = document.createElement('div');
    div_p_task.className = "title";
    tache.appendChild(div_p_task);


    // PARA TASK
    let p_task = document.createElement('p');
    p_task.innerHTML = temp;
    div_p_task.appendChild(p_task);


    // BUTTON TASK
    let div_button_task = document.createElement('div');
    div_button_task.className = "button_container";
    tache.appendChild(div_button_task);


        // button valider
    let button_finish = document.createElement('button');
    button_finish.innerHTML = '<i class="far fa-check-circle"></i>';
    
    button_finish.addEventListener('click', () => {
        if (tache.className == "task_fini_visible") {
            tache.className = "task_visible"
            button_finish.innerHTML = '<i class="far fa-check-circle"></i>';

        } else {
            tache.className = "task_fini_visible";
            button_finish.innerHTML = '<i class="fas fa-check-circle"></i>';
        }
    });

    div_button_task.appendChild(button_finish);


        // button modifier
    let button_edit = document.createElement('button');
    button_edit.innerHTML = '<i class="fas fa-edit"></i>';

    button_edit.addEventListener('click', () => {
        let temp_2 = div_p_task.getElementsByTagName('p')[0].innerHTML;

        let input_edit = document.createElement('input');
        input_edit.type = "text";
        input_edit.value = temp_2;
        div_p_task.removeChild(div_p_task.getElementsByTagName('p')[0]);
        div_p_task.appendChild(input_edit)

            // button modifier ok
        let button_edit_valide = document.createElement('button')
        button_edit_valide.innerHTML = "ok";
        button_edit_valide.className = "ok";
        
        button_edit_valide.addEventListener('click', () => {

            if (input_edit.value != "") {
                let value = input_edit.value;

                let p_task = document.createElement('p');
                p_task.innerHTML = value;
                div_p_task.appendChild(p_task);

                div_p_task.removeChild(input_edit);
                div_p_task.removeChild(button_edit_valide);
            }
        });

        div_p_task.appendChild(button_edit_valide);
    });
    div_button_task.appendChild(button_edit);


        // button poubelle
    let button_trash = document.createElement('button');
    button_trash.className = "button_trash_visible";
    button_trash.innerHTML = '<i class="fas fa-trash"></i>';

    button_trash.addEventListener('click', () => {
        button_oui_trash.className = "oui_trash_visible";
        button_non_trash.className = "non_trash_visible";
        button_trash.className = "button_trash_invisible";
    });
    div_button_task.appendChild(button_trash);

        // button oui-trash
    let button_oui_trash = document.createElement('button');
    button_oui_trash.className = "oui_trash_invisible";
    button_oui_trash.innerHTML = "oui";

    button_oui_trash.addEventListener('click', () => {
        container.removeChild(tache)
    });
    div_button_task.appendChild(button_oui_trash);

        // button non-trash
    let button_non_trash = document.createElement('button');
    button_non_trash.className = "non_trash_invisible";
    button_non_trash.innerHTML = "non";

    button_non_trash.addEventListener('click', () => {
        button_oui_trash.className = "oui_trash_invisible";
        button_non_trash.className = "non_trash_invisible";
        button_trash.className = "button_trash_visible";
    });
    div_button_task.appendChild(button_non_trash);



    // REMETTRE VALEUR NUL POUR LA PROCHAINE TACHE
    input_valider.value = "";



        // BUTTON FILTRE
    let tous_tache = document.querySelector('#button').querySelector('#tous_tache');
    let tache_fini = document.querySelector('#button').querySelector('#tache_fini');
    let tache_non_fini = document.querySelector('#button').querySelector('#tache_non_fini');

    // filtre tous
    tous_tache.addEventListener('click', () => {
        if (tache.className == "task_invisible") {
            tache.className = "task_visible";

        } else if (tache.className == "task_fini_invisible") {
            tache.className = "task_fini_visible";
        }
    });

    // filtre fini
    tache_fini.addEventListener('click', () => {
        if (tache.className == "task_invisible") {
            tache.className = "task_visible";

        } else if (tache.className == "task_fini_visible") {
            tache.className = "task_fini_invisible";
        }
    });

    // filtre non-fini
    tache_non_fini.addEventListener('click', () => {
        if (tache.className == "task_visible") {
            tache.className = "task_invisible";

        } else if (tache.className == "task_fini_invisible") {
            tache.className = "task_fini_visible";
        }      
    });
}


// CLICK AJOUTER
button_valider.addEventListener('click', () => {
    if (input_valider.value != "") {
        ajouter();
    }
});

// KEYDOWN AJOUTER
window.addEventListener('keydown', (e) => {
    if (e.key == "Enter" && input_valider.value != "") {
        ajouter();
    }
});