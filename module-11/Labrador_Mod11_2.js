var entries = [];

    function addEntry() {
      var textBox = document.getElementById('entryText');
      var entry = textBox.value;
      entries.push(entry);
      alert("Added: " + entry);
      textBox.value = '';
    }

 function deleteEntry() {
  var indexToDelete = prompt("Enter the index of the entry to delete:");
  var index = parseInt(indexToDelete, 10);
  if (isNaN(index) || index < 1 || index > entries.length) {
    alert("Invalid index. Please enter a valid index.");
    return;
  }

  var deletedEntry = entries.splice(index - 1, 1)[0];
  alert("Deleted: " + deletedEntry);
}

function deleteLastEntry() {
  if (entries.length > 0) {
    deleteEntry();
  } else {
    alert("No entries to delete.");
  }
}

    function displayEntries() {
      var display = '';
      for (var i = 0; i < entries.length; i++) {
        display += (i + 1) + '. ' + entries[i] + '\n';
      }
      alert(display);
	document.getElementById('displayArea').textContent = display;
    }