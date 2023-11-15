import InputForm from "../../components/InputForm";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import '../../styles/Create.css'
import { useDispatch } from "react-redux";
import { createEmployee } from "../../features/list";
import { Modale } from "project-14-hrnet-modale/dist/Modale.js";
import close from "../../assets/window-close-solid.svg";

function Create() {
  const [startDate, setStartDate] = useState(null);
  const [birthDate, setBirthDate] = useState(null);
  const [selectState, setSelectState] = useState(null);
  const [selectDepartment, setSelectDepartment] = useState(null);
  const [displayModale, setDisplayModale] = useState(false);
  const dispatch = useDispatch()

  const handleSubmitCreate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    var options = {year: "numeric", month: "numeric", day: "numeric"};
    formJson.startDate = startDate.toLocaleDateString("en-US", options)
    formJson.birthDate = birthDate.toLocaleDateString("en-US", options)
    formJson.state = selectState
    formJson.department = selectDepartment
    setDisplayModale(true)
    dispatch(createEmployee(formJson))
  };

  const states = [
    {
      value: "alabama",
      label: "Alabama",
    },
    {
      value: "alaska",
      label: "Alaska",
    },
    {
      value: "american samoa",
      label: "American Samoa",
    },
    {
      value: "arizona",
      label: "Arizona",
    },
    {
      value: "arkansas",
      label: "Arkansas",
    },
    {
      value: "california",
      label: "California",
    },
    {
      value: "colorado",
      label: "Colorado",
    },
    {
      value: "connecticut",
      label: "Connecticut",
    },
    {
      value: "delaware",
      label: "Delaware",
    },
    {
      value: "district of columbia",
      label: "District Of Columbia",
    },
    {
      value: "federated states of micronesia",
      label: "Federated States Of Micronesia",
    },
    {
      value: "florida",
      label: "Florida",
    },
    {
      value: "georgia",
      label: "Georgia",
    },
    {
      value: "guam",
      label: "Guam",
    },
    {
      value: "hawaii",
      label: "Hawaii",
    },
    {
      value: "idaho",
      label: "Idaho",
    },
    {
      value: "illinois",
      label: "Illinois",
    },
    {
      value: "indiana",
      label: "Indiana",
    },
    {
      value: "iowa",
      label: "Iowa",
    },
    {
      value: "kansas",
      label: "Kansas",
    },
    {
      value: "kentucky",
      label: "Kentucky",
    },
    {
      value: "louisiana",
      label: "Louisiana",
    },
    {
      value: "maine",
      label: "Maine",
    },
    {
      value: "marshall islands",
      label: "Marshall Islands",
    },
    {
      value: "maryland",
      label: "Maryland",
    },
    {
      value: "massachusetts",
      label: "Massachusetts",
    },
    {
      value: "michigan",
      label: "Michigan",
    },
    {
      value: "minnesota",
      label: "Minnesota",
    },
    {
      value: "mississippi",
      label: "Mississippi",
    },
    {
      value: "missouri",
      label: "Missouri",
    },
    {
      value: "montana",
      label: "Montana",
    },
    {
      value: "nebraska",
      label: "Nebraska",
    },
    {
      value: "nevada",
      label: "Nevada",
    },
    {
      value: "new hampshire",
      label: "New Hampshire",
    },
    {
      value: "new jersey",
      label: "New Jersey",
    },
    {
      value: "new mexico",
      label: "New Mexico",
    },
    {
      value: "new york",
      label: "New York",
    },
    {
      value: "north carolina",
      label: "North Carolina",
    },
    {
      value: "north dakota",
      label: "North Dakota",
    },
    {
      value: "northern mariana islands",
      label: "Northern Mariana Islands",
    },
    {
      value: "ohio",
      label: "Ohio",
    },
    {
      value: "oklahoma",
      label: "Oklahoma",
    },
    {
      value: "oregon",
      label: "Oregon",
    },
    {
      value: "palau",
      label: "Palau",
    },
    {
      value: "pennsylvania",
      label: "Pennsylvania",
    },
    {
      value: "puerto rico",
      label: "Puerto Rico",
    },
    {
      value: "rhode island",
      label: "Rhode Island",
    },
    {
      value: "south carolina",
      label: "South Carolina",
    },
    {
      value: "south dakota",
      label: "South Dakota",
    },
    {
      value: "tennessee",
      label: "Tennessee",
    },
    {
      value: "texas",
      label: "Texas",
    },
    {
      value: "utah",
      label: "Utah",
    },
    {
      value: "vermont",
      label: "Vermont",
    },
    {
      value: "virgin islands",
      label: "Virgin Islands",
    },
    {
      value: "virginia",
      label: "Virginia",
    },
    {
      value: "washington",
      label: "Washington",
    },
    {
      value: "west virginia",
      label: "West Virginia",
    },
    {
      value: "wisconsin",
      label: "Wisconsin",
    },
    {
      value: "wyoming",
      label: "Wyoming",
    },
  ];

  const departments = [
    {
      value: "sales",
      label: "Sales",
    },
    {
      value: "marketing",
      label: "Marketing",
    },
    {
      value: "engineering",
      label: "Engineering",
    },
    {
      value: "human ressources",
      label: "Human Ressources",
    },
    {
      value: "legal",
      label: "Legal",
    },
  ];

  return (
    <div className="create">
      <h1>Create Employee</h1>
      {displayModale ? <Modale src={close} onClick={()=> setDisplayModale(false)}/> : null}
      <form onSubmit={handleSubmitCreate}>
        <InputForm
          description="FirstName"
          type="text"
          name="firstName"
          id="firstName"
          required={true}
          errorDescription="Please enter valid firstname (no number)"
        />
        <InputForm
          description="LastName"
          type="text"
          name="lastName"
          id="lastName"
          required={true}
          errorDescription="Please enter valid lastname (no number)"
        />
        <div>
          <p>Date of Birth</p>
          <DatePicker selected={birthDate} onChange={(date) => setBirthDate(date)} />
        </div>
        <div>
          <p>Start Date</p>
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
        
        <fieldset className="address">
          <legend>Address</legend>
          <InputForm
            description="Street"
            type="text"
            name="street"
            id="street"
            required={true}
            errorDescription="Please enter valid adress"
          />
          <InputForm
            description="City"
            type="text"
            name="city"
            id="city"
            required={true}
            errorDescription="Please enter valid City"
          />
          <div className="form-select">
            <p>State</p>
            <Select options={states} onChange={(e) => {setSelectState(e.value)}} />
          </div>

          <InputForm
            description="Zip Code"
            type="number"
            name="zipCode"
            id="zipCode"
            required={true}
            errorDescription="Please enter valid Zip Code"
          />
        </fieldset>
        <div className="form-select">
          <p>Department</p>
          <Select options={departments} onChange={(e) => {setSelectDepartment(e.value)}} />
        </div>

        <button type="submit" className="save-button">
          Save
        </button>
      </form>
    </div>
  );
}

export default Create;
