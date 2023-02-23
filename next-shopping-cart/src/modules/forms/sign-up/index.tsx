import { useRouter } from "next/router";
import { FaSignInAlt } from "react-icons/fa";
const SignUpForm = () => {
  let router = useRouter();
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
          <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
            Sign up
          </p>

          <form action="" className="mx-1 mx-md-4">
            <div className="d-flex flex-row align-items-center mb-4">
              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
                <label htmlFor="" className="form-label">
                  Username
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
                <label htmlFor="" className="form-label">
                  Email
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
                <label htmlFor="" className="form-label">
                  Password
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
              <button className="btn btn-primary btn-lg">
                <FaSignInAlt />
              </button>
            </div>
          </form>
          <hr className="my-4" />
          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
            <button
              className="btn btn-lg btn-block btn-primary"
              style={{ backgroundColor: "#dd4b39;" }}
              type="button"
              onClick={() => router.push("/login")}
            >
              <i className="fab fa-google me-2"></i> Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
