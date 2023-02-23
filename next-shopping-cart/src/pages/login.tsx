import LoginForm from "@/modules/forms/login";
import Head from "next/head";

const Login = () => {
  return (
    <>
      <Head>Login to Shopping Cart</Head>;
      <section className="vh-100" style={{ backgroundColor: "#508bfc;" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1rem;" }}
              >
                <div className="card-body p-5 text-center">
                  <LoginForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
