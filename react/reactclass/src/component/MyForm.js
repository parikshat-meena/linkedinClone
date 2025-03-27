import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function MyForm() {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form Data: ", values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("invalid email")
          .required("Email is Required"),
        password: Yup.string()
          .min(6, "Must be at least 6 characters")
          .required("Password is must"),
      })}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="m-2">
          <div>
            <label>Email : </label>
            <Field type="email" name="email" className="m-2"></Field>
            <ErrorMessage
              name="email"
              component={"div"}
              className="text-danger"
            />
          </div>
          <div>
            <label>Password : </label>
            <Field type="password" name="password"></Field>
            <ErrorMessage
              name="password"
              component={"div"}
              className="text-danger"
            />
          </div>
          <button
            type="submit"
            className="m-2 btn btn-info"
            disabled={isSubmitting}
          >
            submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default MyForm;
