let employeeList = [];
let x = 1;

function createEmployee()
{
    let employeeNum = x.toString().padStart(4, 0);

    let fullName = null;
    while (fullName == null || fullName.trim() === "") {
        fullName = window.prompt("What is the employee's full name:");
    }

    let age = null;
    while (age == null || age.trim() === "") {
        age = window.prompt("What is the employee's age:");
    }

    let status = null;
    while (status == null || status.trim() === "") {
        status = window.prompt("What is the employee's job title/hired status:");
    }

   let emp = [employeeNum, fullName, age, status];
   addEmployee(emp);

    function addEmployee(emp)
    {
        employeeList.push(emp);
        x++; 
        const newLi = document.createElement("li");
        newLi.textContent = `ID: ${emp[0]} / Name: ${emp[1]} / Age: ${emp[2]} / Position: ${emp[3]}`;
        document.getElementById("employeeList").append(newLi);

        console.log(employeeList);
    }

}

function removeEmployee(){
    num = window.prompt("Please type the Employees ID: ");
    let found = false;

    for(let y = 0; y < employeeList.length; y++)
    {
        if(employeeList[y][0] == num)
        {
            employeeList.splice(y, 1);
            document.getElementById("employeeList").children[y].remove();
            found = true;
            break;
        }
    }   

    if(!found)
    {
        window.alert("Employee not found. Please check ID and try again!");
    }
}