const Table = () => {
  let btnAdd = document.querySelector("button");
  let table = document.querySelector("table");

  let nameInput = document.querySelector("#name");
  let languageInput = document.querySelector("#language");
  let courseInput = document.querySelector("#course");

  btnAdd.addEventListener("click", () => {
    let name = nameInput.value;
    let age = languageInput.value;
    let course = courseInput.value;

    let tem = `
  <tr>
  <td>${name}</td>
  <td>${age}</td>
  <td>${course}</td>
  </tr>
  `;
    table.innerHTML += tem;
  });

  return (
    <>
      <div className="border border-5 m-2 p-5">
        <div className="row" id="data">
          <div className="col-3">
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="col-3">
            <input
              type="text"
              id="language"
              className="form-control"
              placeholder="Language"
            />
          </div>
          <div className="col-3">
            <input
              type="text"
              id="course"
              className="form-control"
              placeholder="Course"
            />
          </div>
          <div className="col-1">
            <button className="btn btn-primary btn-sm me-1">Add</button>
          </div>
          <div className="col-2">
            <button className="btn btn-danger btn-sm ms-1">Delete</button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Language</th>
              <th>Course</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Akash</td>
              <td>Javascript</td>
              <td>BCA</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Table;
