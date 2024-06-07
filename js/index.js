function ajouterTache() {
const task = document.getElementById('task');
if (task.value) {
const taskList = document.getElementById('taskList');
const taskListDone = document.getElementById('taskListDone');
const newItem = document.createElement('li');
newItem.innerHTML = task.value;

$(newItem).on('swiper', function () {
if (parentList === taskList) {
taskListDone.appendChild(this);
} else {
taskList.appendChild(this);
}
$(taskList).listview('refresh');
$(taskListDone).listview('refresh');
});



}
}

function reinitialiser() {
const task = document.getElementById('task');
const taskList = document.getElementById('taskList');
const taskListDone = document.getElementById('taskListDone');
taskList.innerHTML = '';
taskListDone.innerHTML = '';
task.value = '';
task.focus();
}

