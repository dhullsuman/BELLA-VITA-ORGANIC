import { createContext, useState } from "react";
export const Account = createContext();

export const AccountProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [islogin, setLogin] = useState(false);
  function SetData(newdata) {
    let s = userData.filter((elem) => {
      return elem.email === newdata.email;
    });
    s.length > 0 ? alert("Already Have an account") : adddata(newdata);
  }
  function adddata(newdata) {
    alert("Signup Sucessfully");
    setUserData([...userData, newdata]);
  }
  function showdetail() {
    setLogin(true);
    alert("Login Sucessfully");
  }
  function checkdata(newdata) {
    let s = userData.filter((elem) => {
      return elem.email === newdata.email && elem.password === newdata.password;
    });
    s.length > 0 ? showdetail() : alert("Wrong Detail");
    console.log(userData, s.length);
  }
  return (
    <Account.Provider value={{ userData, SetData, checkdata, islogin }}>
      {children}
    </Account.Provider>
  );
};
