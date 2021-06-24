import { useState } from "react";
import { Link } from "react-router-dom";

const Register = (props) => {
  const [formData, setFormData] = useState({
		username: '',
    email: '',
		password: '',
	});
	const { username, email, password } = formData;
	const { handleRegister } = props;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};


  return (
    <div className="register-container">

    <form className="register-form"
    onSubmit={(e) => {
      e.preventDefault();
      handleRegister(formData);
    }}
  >
    <h3>Register</h3>
    <label>
      Username:
      <input
        type='text'
        name='username'
        value={username}
        onChange={handleChange}
      />
    </label>
    <br />
    <label>
      Email:
      <input
        type='text'
        name='email'
        value={email}
        onChange={handleChange}
      />
    </label>
    <br />
    <label>
      Password:
      <input
        type='password'
        name='password'
        value={password}
        onChange={handleChange}
      />
     </label>
        <br />
        <Link to="/trips">
          <button>Submit</button>
          </Link>
      </form>
      </div>
  )
}

export default Register