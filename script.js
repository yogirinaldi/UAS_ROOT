const employeesList = document.getElementById('employeesList');
const formEmployee = document.getElementById('formEmployee');

let employeesHTML = '';
let employeesArr = [];


let firstNameValue;
let lastNameValue;
let emailValue;
let addressValue;
let phoneValue;


//GET ALL DATA
const renderData = (data) => {
    data.forEach((post) => {
        employeesHTML += `
            <tr id="${post._id}">   
                <td>
                  <div class="d-flex px-2 py-1">
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-0 text-xs"> ${post.firstName}</h6>
                    </div>
                  </div>
                  
                </td>
                <td>
                  <p class="text-xs font-weight-bold mb-0">${post.lastName}</p>
                </td>
                <td class="align-middle text-sm">
                  <p class="text-xs font-weight-bold mb-0">${post.email}</p>
                </td>
                <td class="align-middle">
                  <p class="text-xs font-weight-bold mb-0">${post.address}</p>
                </td>
                <td class="align-middle">
                  <p class="text-xs font-weight-bold mb-0">${post.phone}</p>
                </td>
                <td class="align-middle">
                  <a href="#" data-bs-toggle="modal" data-bs-target="#modal-preview"><i class="material-icons">visibility</i></a>
                  <a href="#" data-bs-toggle="modal" data-bs-target="#modal-add-edit"><i class="material-icons">edit</i></a>
                  <a href="#" data-bs-toggle="modal" data-bs-target="#modal-delete"><i class="material-icons">delete_forever</i></a>
                </td>
              </tr>`;
        
    });
    employeesList.innerHTML = employeesHTML;
};

fetch("https://untitled-etb861i34su6.runkit.sh/api/employees")
  .then((res) => res.json())
  .then((data) => {
    employeesArr = data;
    if (employeesArr.length > 0) {
      renderData(employeesArr);
    }
  });

