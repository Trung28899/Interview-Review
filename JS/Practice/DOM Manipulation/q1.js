function addRow() {
  var tableContent = document.querySelector("#sampleTable tbody");
  var insertValue = "<tr><td>Row3 cell1</td><td>Row3 cell2</td></tr>";
  tableContent.innerHTML += insertValue;
}

document.querySelector("input").addEventListener("click", addRow);
