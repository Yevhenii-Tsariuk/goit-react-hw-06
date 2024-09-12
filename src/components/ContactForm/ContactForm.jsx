import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from 'nanoid';
import * as Yup from "yup";


export default function ContactForm({ onAdd }) {

   const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string().min(3, "Too Short!").required("Required"),
  });
  

  const handleSubmit = (values, {resetForm}) => {
   
   onAdd({
    id: nanoid(),
    name: values.name,
    number: values.number 
   });
    resetForm();
  };

  const initialValues = {
    name: '',
    number: '',
  };

  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactFormSchema}
        
      >
        <Form className={css.container}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} className={css.input} />
          <ErrorMessage name="name" component="span" />
          <label htmlFor={numberFieldId}>Number</label>
          <Field type="phone" name="number" id={numberFieldId} className={css.input} />
          <ErrorMessage name="number" component="span" />
          <button type="submit" className={css.button}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
