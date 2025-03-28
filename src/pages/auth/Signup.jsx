import { Formik } from "formik";
import React from "react";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import logo from "../../assets/images/dealdeck-logo-trademark.png";
import { useDispatch } from "react-redux";
import { login, signup } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleFormSubmit = (values) => {
      console.log(values)
        dispatch(signup(values, navigate));
    };
    return (
        <section className="bg-grey-50">
            <div className="container">
                <div className="flex flex-col justify-center items-center min-h-[100dvh]">
                    <div className="bg-white shadow-elevationMiddle max-w-[414px] w-full py-9 px-6 mb-[64px]">
                        <div className="border-b border-grey-100 pb-4">
                            <img src={logo} alt="logo" srcset="" className="max-w-[125px] w-full" />
                        </div>
                        <h3 className="text-[32px] font-semibold mt-8 mb-7">Create an Account</h3>
                        <Formik
                            initialValues={{ email: "", phone: "", password: "" }}
                            validate={(values) => {
                                const errors = {};
                                if (!values.email) {
                                    errors.email = "Required";
                                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                    errors.email = "Invalid email address";
                                }
                                if (!values.phone) {
                                    errors.phone = "Required";
                                }
                                if (!values.password) {
                                    errors.password = "Required";
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                handleFormSubmit(values);
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                /* and other goodies */
                            }) => (
                                <form className="flex flex-col" onSubmit={handleSubmit}>
                                    <div className="mb-6">
                                        <Input type="email" label="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                                        <span className="text-[13px] text-red-500">{errors.email && touched.email && errors.email}</span>
                                    </div>
                                    <div className="mb-6">
                                        <Input type="number" label="phone number" name="phone" onChange={handleChange} onBlur={handleBlur} value={values.phone} />
                                        <span className="text-[13px] text-red-500">{errors.phone && touched.phone && errors.phone}</span>
                                    </div>
                                    <div className="mb-6">
                                        <Input type="password" label="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
                                        <span className="text-[13px] text-red-500">{errors.password && touched.password && errors.password}</span>
                                    </div>
                                    <Button variant={"primary"} size={"large"} title={"Submit"} disabled={isSubmitting} trailingIcon={<i className="ri-arrow-right-fill"></i>} type={"submit"} />
                                </form>
                            )}
                        </Formik>
                        <Button className={"mt-8 mb-5"} title="Forgot Password" leadingIcon={<i className="ri-question-fill font-normal text-[18px]"></i>} />
                        <p className="inline-flex whitespace-pre mb-4">
                            Already have an Account ? <Button onClick={() => navigate("/login")} title={"Signin"} />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;
