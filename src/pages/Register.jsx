import { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  const [formData, setFormData] = useState({
    registration_number: "",
    password: "",
  });
  const { registration_number, password, confirm_password } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="max-w-md mx-auto mt-5">
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-control">
          <label className="label" htmlFor="registration_number">
            Registration Number
          </label>
          <input
            name="registration_number"
            id="registration_number"
            value={registration_number}
            onChange={(e) => onChange(e)}
            type="text"
            className="input input-bordered input-error"
          />
        </div>
        <div className="form-control">
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            name="password"
            value={password}
            id="password"
            onChange={(e) => onChange(e)}
            type="password"
            className="input input-bordered input-error"
          />
        </div>
        <div className="form-control">
          <label className="label" htmlFor="confirm_password">
            Confirm Password
          </label>
          <input
            name="confirm_password"
            id="confirm_password"
            value={confirm_password}
            onChange={(e) => onChange(e)}
            type="password"
            className="input input-bordered input-error"
          />
        </div>

        <button className="btn btn-outline btn-success btn-block my-4">
          SIGNUP
        </button>
        <p className="py-3 text-left">
          Already Have an Account?{" "}
          <Link className="text-teal-700" to="/login">
            SIGN IN
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
