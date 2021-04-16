

    const contador = 5;
    const btn = document.getElementById('s1');
    const element = document.getElementById('ulCart');
    const nameProduct ='pirulito';
    const unds= '5' ;
    const cost ='10000';
    function add() {
        element.insertAdjacentHTML('beforeend', `
            <li>
                <div class="d-flex justify-content-between ">
                    <img class="imgCartShop" src="https://via.placeholder.com/80x50" alt="" srcset="">
                        <label for="">${nameProduct}</label>
                        <label for="">${unds}</label>
                        <label for="">${cost}</label>
                        <a href="#"><i class="far fa-trash-alt btnEliminar"></i></a>
                </div>
            </li>

        `);

    }
    btn.onclick = add;
