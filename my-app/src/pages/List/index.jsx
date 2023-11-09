import { useState } from "react";
import DataTable from "react-data-table-component";
import '../../styles/List.css'

function List() {
  const [input, setInput] = useState("");

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
      selector: (row) => row.dateOfBirth,
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

  const data = [
    {
      id: 1,
      firstName: "ouinon",
      lastName: "ouioui",
      startDate: "10/80/7520",
      department: "ouais",
      dateOfBirth: "11/05/2015",
      street: "115 Test of test",
      city: "Test",
      state: "Minesota",
      zipCode: 45,
    },
    {
      id: 2,
      firstName: "nonoui",
      lastName: "ouioui",
      startDate: "12/48/4521",
      department: "ddddd",
      dateOfBirth: "10/42/1041",
      street: "dfgdfgdfgdg",
      city: "Test",
      state: "dgdgdvvvvvvvvvvv",
      zipCode: 75,
    },
  ];

  return (
    <div className="list">
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
          } else if (
            item.firstName.toLowerCase().includes(input.toLowerCase())
          ) {
            return item;
          }
          return null;
        })}
      />
    </div>
  );
}

export default List;
