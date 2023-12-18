function DeleteTodo2() {
  let var1 = "Go To College ";
  let var2 = "04/10/2023";
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6">{var1}</div>
        <div class="col-4">{var2}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteTodo2;
