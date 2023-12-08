const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");

const generateTemplate = (todo) => {
  const html = `<li
          class="list-group-item d-flex justify-content-between align-items-center mb-2">
          <span>${todo}</span>
           <i class="delete">X</i>
        </li>`;
  list.innerHTML += html;
};

//Ekleme İşlemi
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();

  if (todo.length) {
    generateTemplate(todo);
    addForm.reset(); //Form Gönderildikten sonra temizler
  }
});

//Kaldırma İşlemi
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

//Filtreleme İşlemi
const search = document.querySelector(".search input"); //search class'ı altındaki inputu seçtik.

const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();

  filterTodos(term);
});
