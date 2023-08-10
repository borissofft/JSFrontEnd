import { createElement, useState } from "react"

import UserTitle from "./UserTitle";
import ValidationButton from "./Button";

function Heading({ children }) {
  return <h4>{children}</h4>;
}

function App() {

  // Variant 1

  // return createElement(
  //   'ul',
  //   { className: 'workshop-list' },
  //   createElement(
  //     'li',
  //     { className: 'workshop-item' },
  //     createElement('a', { id: 'link', onClick: () => alert("Hello!") }, 'First item')
  //   ),
  //   createElement('li', { className: 'workshop-item' }, 'Second item'),
  //   createElement('li', { className: 'workshop-item' }, 'Third item'),
  // );

  // Variant 2

  // return (
  //   <ul>
  //     <li className="" id="" onClick={() => alert("hello!")}>First item</li>
  //     <li>Second item</li>
  //     <li>Third item</li>
  //   </ul>
  // );

  // Demo 1, variant 1:

  const user = {
    firstName: 'Alex',
    lastName: 'Kondov',
    age: 29,
    address: "",
    courses: ['JS', 'React', 'CSS'],
    grades: [],
  };

  const [isValid, setIsValid] = useState(false); // Here we have to use State to have dinamic changes of the variable. Can't use: let isValid = false
  // let isValid = false;

  // return (
  //   <div className="card">
  //     <h3>{`${user.firstName} ${user.lastName}`}</h3>
  //     <h4>General info</h4>
  //     <div>Age: {user.age}</div>
  //     <ul>
  //       {user.courses.map(course =>
  //         <li key={course}>{course}</li>
  //       )}
  //     </ul>
  //   </div>
  // );

  // Demo 1, variant 2:
  return (
    <div className="card">
      <UserTitle user={user} />
      <Heading>General info</Heading>
      <div>Age: {user.age}</div>
      <div>Is validated: {isValid ? "true" : "false"}</div>
      <ul>
        {user.courses.map(course =>
          <li key={course}>{course}</li>
        )}
      </ul>
      <ValidationButton isValid={isValid} onClick={() => setIsValid(true)} />
    </div>
  );

}

export default App
