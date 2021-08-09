import * as Yup from "yup";
const NewBookingValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Please Provide the booking name."),
  noOfPeople: Yup.string()
    // .email('Invalid email')
    .required("Number of people is required"),
  contactNumber: Yup.string()
    .required("Please provide your contact information.")
    .min(10, "Valid Number")
    .max(10, "Valid Muber"),

  date: Yup.string().required("Please provide Date and time."),
});
export default NewBookingValidationSchema;
