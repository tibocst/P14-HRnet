import { useState } from "react";
import DataTable from "react-data-table-component";
import "../../styles/List.css";
import { useSelector } from "react-redux";
import { getListEmployeeList } from "../../features/list";

function List() {
  const [input, setInput] = useState("");
  const employeeList = useSelector(getListEmployeeList);

  const columns = [
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (row) => row.startDate,
      sortable: true,
    },
    {
      name: "Department",
      selector: (row) => row.department,
      sortable: true,
    },
    {
      name: "Date of Birth",
      selector: (row) => row.birthDate,
      sortable: true,
    },
    {
      name: "Street",
      selector: (row) => row.street,
      sortable: true,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "State",
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: "Zip Code",
      selector: (row) => row.zipCode,
      sortable: true,
    },
  ];

  const data = employeeList;

  return (
    <div className="list">
      <h1>Current Employees</h1>
      <div className="table-search">
        <p>Search :</p>
        <input
          id="search"
          type="text"
          placeholder="Filter By Name"
          aria-label="Search Input"
          value={input}
          onInput={(e) => setInput(e.target.value)}
        />
      </div>
      <DataTable
        pagination
        columns={columns}
        data={data.filter((item) => {
          if (input === "") {
            return item;
          } else if (Object.values(item).some(elem => elem.includes(input))) {
            return item;
          }
          return null;
        })}
      />
    </div>
  );
}

export default List;
