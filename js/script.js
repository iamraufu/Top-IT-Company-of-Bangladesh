const loadData = () => {
    fetch('js/data.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('table_body').innerHTML = data.map(item => {
                return `<tr class='mt-2'>
                            <td class=''>${item.Name}</td>
                            <td class=''><a href=${item.Website} target="blank" class='text-secondary'>${item.Website}</a></td>
                        </tr>`
            }).join('');
        });
}

const toggle = () => {
    document.body.classList.toggle("colored");
    // document.getElementsByTagName("BODY")[0].backgroundColor === 'lightgray' ? document.getElementsByTagName("BODY")[0].backgroundColor = '#090a27' : document.getElementsByTagName("BODY")[0].backgroundColor = 'lightgray';
    // document.getElementsByTagName("BODY")[0].style.backgroundColor = '#090a27';
    // document.getElementsByTagName("BODY")[0].style.color = 'white';
}