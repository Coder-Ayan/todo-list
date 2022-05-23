if (!('TODOs' in localStorage)) {
    localStorage.setItem('TODOs', JSON.stringify([]));
}

showTODOs();

function addTODO() {
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let TODOs = JSON.parse(localStorage.getItem('TODOs'));

    let newTODO = [title, description];
    TODOs.push(newTODO);
    localStorage.TODOs = JSON.stringify(TODOs);

    showTODOs();
}

function showTODOs() {
    let TODOs = JSON.parse(localStorage.getItem('TODOs'));
    let TODOs_list_html = '';

    TODOs.forEach((TODO, index) => {
        let title = TODO[0];
        let description = TODO[1];

        let TODO_html = `
        <tr>
            <th scope="row">${index + 1}</th>
            <td class="text-break">${title}</td>
            <td class="text-break">${description}</td>
            <td>
                <button type="button" class="btn btn-danger btn-sm py-1 px-2" onclick="deleteTODO(${index})"><i
                        class="bi bi-trash3"></i></button>
            </td>
        </tr>
        `;

        TODOs_list_html += TODO_html;
    });

    document.getElementById('showTODOs').innerHTML = TODOs_list_html;
}

function clearList() {
    if (confirm("Do you want to clear the list?")) {
        localStorage.clear();
        localStorage.setItem('TODOs', JSON.stringify([]));
        showTODOs();
    }
}

function deleteTODO(TODOIndex) {
    let TODOs = JSON.parse(localStorage.getItem('TODOs'));
    TODOs.splice(TODOIndex, 1);

    localStorage.TODOs = JSON.stringify(TODOs);
    showTODOs();
}
