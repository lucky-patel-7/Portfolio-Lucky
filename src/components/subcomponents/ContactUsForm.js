// import React from "react";
// import { Form, FormGroup, Label, Input, Button } from "reactstrap";

// const ContactUsForm = () => {
//   return (
//     <Form className="contact-form">
//       <FormGroup className="form-group">
//         <Label for="name">Name</Label>
//         <Input
//           type="text"
//           name="name"
//           id="name"
//           placeholder="Enter your name"
//         />
//       </FormGroup>
//       <FormGroup className="form-group">
//         <Label for="email">Email</Label>
//         <Input
//           type="email"
//           name="email"
//           id="email"
//           placeholder="Enter your email"
//         />
//       </FormGroup>
//       <FormGroup className="form-group">
//         <Label for="message">Message</Label>
//         <Input
//           type="textarea"
//           name="message"
//           id="message"
//           placeholder="Enter your message"
//         />
//       </FormGroup>
//       <Button className="contact-btn" color="primary">
//         Submit
//       </Button>
//     </Form>
//   );
// };

// export default ContactUsForm;

import React from "react";
const ContactUsForm = () => {
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    <div
      className="container mt-5 pb-5"
      data-aos="flip-down"
      data-aos-duration="1000"
      data-aos-mirror="true"
    >
      <h2 className="mb-3">Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  );
};
export default ContactUsForm;
