var table, rows = [], cells = 0, row, cell;

function create_table() {
	if (table == null){	
		table = document.createElement('table');
		table.setAttribute("width","100%");
		table.setAttribute("height","20");
		table.setAttribute("border","1");
        add_row();
        add_column();
        document.body.appendChild(table);
	}
}

function add_row() {   
	var i;
	row = table.insertRow(-1);
	row.setAttribute("height", "20");
	row.setAttribute("border", "1");
    for(i = 0; i < cells; i++){
        cell = row.insertCell(-1);
        cell.setAttribute("contentEditable",true);
    }
    rows.push(row);
	document.body.appendChild(table);
}

function add_column() {
	var i;
    for (i = 0; i < rows.length; i++){
        cell = rows[i].insertCell(-1);
        cell.setAttribute("contentEditable",true);
    }
    cells++;
    document.body.appendChild(table);
}
