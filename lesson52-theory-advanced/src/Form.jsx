import { useRef, useState } from "react";

import "./App.css";

function App() {
  // const nameRef = useRef("");
  // const emailRef = useRef("");
  const aRef = useRef(new Date());
  const a = new Date();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  console.log("App component rendered");

  // TODO: consider about using a single state object
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  // });

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(aRef.current, a);

    // console.log({ name: nameRef.current, email: emailRef.current });
  };

  return (
    <form onSubmit={submitHandler}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          value={name}
          onChange={({ target: { value } }) => setName(value)}
          type="text"
          id="name"
          name="name"
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
          type="text"
          id="email"
          name="email"
        />
      </div>

      <button style={{ marginTop: "20px" }} type="submit">
        submit
      </button>
    </form>
  );
}

export default App;
