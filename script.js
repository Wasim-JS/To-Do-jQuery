let Id;
function edit(id) {
  let txt = $(`.list-item[data-id=${id}] >.text`).text();
  //   alert(txt);
  Id = id;
  $(`input[name='task']`).val(txt);
  $("#add-btn").text("save");
}

function del(id) {
  $(`.list-item[data-id=${id}]`).remove();
}
jQuery(document).ready(function () {
  $("#add-btn").click(function () {
    if ($("#add-btn").text() === "save") {
      let t = $(`input[name='task']`).val();
      $(`.list-item[data-id=${Id}] >.text`).text(t);
      $("#add-btn").text("Add");
      $(`input[name='task']`).val("");
      return;
    }

    let task = $(`input[name='task']`).val();
    console.log("task ", task);

    var newDiv = $("<div></div>");
    newDiv.addClass("list-item");
    newDiv.css("margin", 10);
    let id = new Date().getTime().toString();
    newDiv.attr("data-id", id);

    let html = `<div class="text">${task}</div>

            <div class="list-btns">
              <button onclick="edit('${id}')">Edit</button>
              <button onclick="del('${id}')" >Delete</button>
            </div>`;

    newDiv.html(html);

    newDiv.appendTo("#todo-list");

    $(`input[name='task']`).val("");
  });
});
