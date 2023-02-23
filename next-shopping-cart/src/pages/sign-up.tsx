import SignUpForm from "@/modules/forms/sign-up";
import Head from "next/head";

const SignUp = () => {
  return (
    <>
      <Head>
        <title>Welcome to Shopping Cart</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section className="vh-100" style={{ backgroundColor: "#eee;" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div
                className="card text-black"
                style={{ borderRadius: "25px;" }}
              >
                <SignUpForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
