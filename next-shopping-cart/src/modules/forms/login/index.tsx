import { useRouter } from "next/router";
import { FaSignInAlt } from "react-icons/fa";

const LoginForm = () => {
  let router = useRouter();
  return (
    <div>
      <h3 className="mb-5">Sign in</h3>

      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="typeEmailX-2">
          Email
        </label>
        <input
          type="email"
          id="typeEmailX-2"
          className="form-control form-control-lg"
        />
      </div>

      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="typePasswordX-2">
          Password
        </label>
        <input
          type="password"
          id="typePasswordX-2"
          className="form-control form-control-lg"
        />
      </div>

      <div className="form-check d-flex justify-content-start mb-4">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="form1Example3"
        />
        <label className="form-check-label" htmlFor="form1Example3">
          &nbsp;Remember password{" "}
        </label>
      </div>

      <button className="btn btn-primary btn-lg btn-block" type="button">
        <FaSignInAlt />
      </button>

      <hr className="my-4" />

      <button
        className="btn btn-lg btn-block btn-primary"
        style={{ backgroundColor: "#dd4b39;" }}
        type="button"
        onClick={() => router.push("/")}
      >
        <i className="fab fa-google me-2"></i> Sign Up
      </button>
    </div>
  );
};

export default LoginForm;
