const employee={
  nam:'sorour',
  streetAddress:'CITY 1200 BATNA',
}

// returns an employee with the original key value pairs and the new key value pair
function updateEmployeeWithKeyAndValue(employee, key, value) {

    const updatedEmployee = { ...employee };

    updatedEmployee[key] = value;

    return updatedEmployee;
  }
  
// test update
  const updatedEmployee1 = updateEmployeeWithKeyAndValue(employee, 'nam', 'Sam');

  const updatedEmployee2 = updateEmployeeWithKeyAndValue(updatedEmployee1, 'streetAddress', '11 Broadway');

  console.log(updatedEmployee2);

  console.log(employee)

// updates `employee` with the given `key` and `value` and returns the entire updated employee
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {

    employee[key] = value;

    return employee;
  }

// 'deletes `key` from a clone of employee and returns the new employee without modify the original employee
function deleteFromEmployeeByKey(employee, key) {
    
    const updatedEmployee = { ...employee };

    delete updatedEmployee[key];
  
    return updatedEmployee;
  }

// returns employee without the deleted key/value pair and modifies the original employee
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    
    delete employee[key];
  
    return employee;
  }

