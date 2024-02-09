import { useState } from "react";
import "../App.css";

function RegisterForm() {
  const [validSuccess, setvalidSuccess] = useState(false);
  const [FirstNameerror, setFirstNameerror] = useState(false);
  const [LastNameerror, setLastNameerror] = useState(false);
  const [EmailError, setEmailError] = useState(false);
  const [PhoneError, setPhoneError] = useState(false);
  const [MasterError, setMasterError] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleSetState = (e) => {
    const value = e.target.value;
    const InputFeildName = e.target.name;

    setData({ ...data, [InputFeildName]: value });
    // console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone } = data;
    if (email == "" || phone == "" || email.includes(" ")) {
      setMasterError(true);
      return;
    }
    if (firstName == "") {
      return setFirstNameerror(true);
    }
    if (lastName == "") {
      return setLastNameerror(true);
    }
    if (phone.length !== 10) {
      return setPhoneError(true);
    }
    if (!email.includes("@gmail.com")) {
      return setEmailError(true);
    }
    let symobols = "./,<>:;[]{}-=+*!@#$%^&*()|~Ee";

    for (let i = 0; i < 10; i++) {
      if (symobols.includes(phone[i])) {
        return setPhoneError(true);
      }
    }

    let checkingEmail = email.split("@")[0];

    let smalLetters = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < checkingEmail.length; i++) {
      if (!smalLetters.includes(checkingEmail[i])) {
        return setEmailError(true);
      }
    }
    setvalidSuccess(true);
    console.log(data);
  };
  return (
    <div>
      <div className="container">
        <div className="child-container">
          <div>
            {validSuccess == true ? (
              <div className="banner">
                <p>Registration Successfull</p>
              </div>
            ) : (
              " "
            )}
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <label htmlFor="firstName"></label>
              </div>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                onChange={handleSetState}
                value={data.firstName}
              />
              {FirstNameerror == true ? (
                <p className="errorMessage">Do not keep input feild empty </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="label">
                <label htmlFor="lastName"></label>
              </div>
              <input
                name="lastName"
                type="text"
                id="lastName"
                placeholder="Last Name"
                onChange={handleSetState}
                value={data.lastName}
              />
              {LastNameerror == true ? (
                <p className="errorMessage">Do not keep input feild empty </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="label">
                <label htmlFor="email"></label>
              </div>
              <input
                name="email"
                type="email"
                id="email"
                placeholder=".com"
                onChange={handleSetState}
                value={data.email}
              />
              {EmailError == true ? (
                <p className="errorMessage">Enter correct format for email</p>
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="label">
                <label htmlFor="contact"></label>
              </div>
              <input
                name="phone"
                type="number"
                id="contact"
                placeholder="Contact"
                onChange={handleSetState}
                value={data.phone}
                maxLength={10}
              />
              {PhoneError == true ? (
                <p className="errorMessage">Enter correct format for phone</p>
              ) : (
                ""
              )}
            </div>
            <div>
              {MasterError == true ? (
                <p className="errorMessage">Please enter the input feild as expected</p>
              ) : (
                ""
              )}
            </div>
            <div><input type="submit" value={"Sign up"} /></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
