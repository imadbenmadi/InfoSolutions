import { Field, Form, Formik } from "formik";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import * as Yup from "yup";

function Feedback() {
  const validationSchema = Yup.object({
    firstName: Yup.string().min(3).required("First Name is required"),
    lastName: Yup.string().min(3).required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    Feedback: Yup.string().required("Feedback is required"),
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className=" w-full  md:px-20 ">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          Feedback: "",
        }}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "hidden" : "visible"}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <motion.div variants={itemVariants}>
              <label htmlFor="firstName">First Name</label>
              <Field
                id="firstName"
                name="firstName"
                type="text"
                className={`block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 ${
                  errors.firstName && touched.firstName ? "border-red-500" : ""
                }`}
                placeholder="Jane"
              />
              {errors.firstName && touched.firstName && (
                <div className="text-red-500">{errors.firstName}</div>
              )}
            </motion.div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <Field
                id="lastName"
                name="lastName"
                type="text"
                className={`block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 ${
                  errors.lastName && touched.lastName ? "border-red-500" : ""
                }`}
                placeholder="Doe"
              />
              {errors.lastName && touched.lastName && (
                <div className="text-red-500">{errors.lastName}</div>
              )}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                className={`block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 ${
                  errors.email && touched.email ? "border-red-500" : ""
                }`}
                placeholder="jane@acme.com"
              />
              {errors.email && touched.email && (
                <div className="text-red-500">{errors.email}</div>
              )}
            </div>
            <div>
              <label htmlFor="Feedback">Feedback</label>
              <Field
                as="textarea"
                id="Feedback"
                name="Feedback"
                className={`block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 ${
                  errors.Feedback && touched.Feedback ? "border-red-500" : ""
                }`}
                placeholder="Give me your Feedback"
              />
              {errors.Feedback && touched.Feedback && (
                <div className="text-red-500">{errors.Feedback}</div>
              )}
            </div>
            <div className="w-full my-5  flex justify-center ">
              <button
                type="submit"
                className="bg-blue-500  mx-auto w-fit  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                {" "}
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Feedback;
