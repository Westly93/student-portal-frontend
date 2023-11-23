import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({
    registration_number: "",
    password: "",
  });
  const { registration_number, password } = formData;
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
            value={registration_number}
            onChange={(e) => onChange(e)}
            id="registration_number"
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
            type="password"
            onChange={(e) => onChange(e)}
            className="input input-bordered input-error"
          />
        </div>
        <p className="text-teal-700 cursor-pointer text-left py-3">
          Forgot Your password?
        </p>
        <button className="btn btn-outline btn-success btn-block my-4">
          LOGIN
        </button>
        <p className="py-3 text-left">
          Don't Have an Account?{" "}
          <Link className="text-teal-700" to="/register">
            Create an Account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
