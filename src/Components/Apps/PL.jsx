import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const PL = () => {
    const formik = useFormik({
        initialValues: {
            objective: "min",
        },
        validationSchema: Yup.object({
            objective: Yup.string().required("Please select an objective"),
        }),
        onSubmit: (values) => {
            // Handle form submission if needed
            console.log(values);
        },
    });

    return (
        <div>
            <div className="text-Blue font-bold text-2xl underline mb-4">
                Programation Lineer
            </div>
            <select name="" id="">
                <option value="">imad</option>
                <option value="">imad</option>
                <option value="">imad</option>
            </select>
            <form onSubmit={formik.handleSubmit}>
                <div className="text-xl">Function Objectif :</div>

                <div>
                    <select
                        name="objective"
                        // value={formik.values.objective}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    >
                        <option value="min">Min</option>
                        <option value="max">Max</option>
                    </select>
                    {formik.touched.objective && formik.errors.objective ? (
                        <div className="text-red-500">
                            {formik.errors.objective}
                        </div>
                    ) : null}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PL;
