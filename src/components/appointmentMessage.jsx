import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Table,
  Modal,
  Button,
  Form,
  Input,
  Label,
  ModalHeader,
  ModalBody,
  FormGroup,
} from "reactstrap";
import user1 from "../assets/images/users/user1.jpg";
import user2 from "../assets/images/users/user2.jpg";
import user3 from "../assets/images/users/user3.jpg";
import user4 from "../assets/images/users/user4.jpg";
import user5 from "../assets/images/users/user5.jpg";
import { useNavigate } from "react-router-dom";

const AppointmentMessage = () => {
  const [messages, setMessages] = useState([]);
  const [modal, setShowModel] = useState(false);
  const [decline, setDecline] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTMxOTgxYjhjYzVkN2FiZTA1M2MwNiIsImlhdCI6MTY3OTA0Mjc3MSwiZXhwIjoxNjgxNjM0NzcxfQ.0DAs5-rIqn-H4fh6Zw24mQLd1D8oN0Nv1k1S3-mWEcA`,
      },
    };
    axios
      .get(
        "https://health-savvy.onrender.com/api/doctor/dashboard/message",
        config
      )
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [buttonStyles, setButtonStyles] = useState({
    backgroundColor: "blue",
    color: "white",
  });
  const handleDecline = () => {
    setShowModel(true);
  };
  const handleSendDecline = () => {
    navigate("/dashboard/alerts");
    setDecline(true);
  };

  const handleClick = (id, name, email) => {
    const confirmed = window.confirm(
      `Are you sure you want to confirm ${name}?`
    );

    if (confirmed) {
      setButtonStyles({
        ...buttonStyles,
        [id]: {
          backgroundColor: "green",
          color: "white",
          borderRadius: "5px",
          height: "36px",
        },
      });
    }
  };

  return (
    <>
      <Modal isOpen={modal}>
        <ModalHeader>Enter reason for Decline</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="medicineName">Reason:</Label>
              <Input
                type="textarea"
                name="medicineName"
                id="medicineName"
                // value={currentMedicine.medicineName}
                // onChange={handleInputChange}
              />
            </FormGroup>
            <Button color="primary" type="submit" onClick={handleSendDecline}>
              Send
            </Button>
          </Form>
        </ModalBody>
      </Modal>

      <div>
        <Card>
          <CardBody>
            <CardTitle tag="h5">Up coming Appointments</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              List of patients for today
            </CardSubtitle>

            <Table className="no-wrap mt-3 align-middle" responsive borderless>
              <thead>
                <tr>
                  <th>Patients</th>
                  <th>Medical Condition</th>

                  <th>Action</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((item) => (
                  <tr className="border-top">
                    <td>
                      <div className="d-flex align-items-center p-2">
                        <img
                          src={user1}
                          className="rounded-circle"
                          alt="avatar"
                          width="45"
                          height="45"
                        />
                        <div className="ms-3">
                          <h6 className="mb-0">
                            {item.client.lastName + " " + item.client.firstName}{" "}
                          </h6>
                          <span className="text-muted">{item.phoneNumber}</span>
                        </div>
                      </div>
                    </td>
                    <td>{item.message}</td>
                    <td>
                      {" "}
                      <button
                        onClick={() =>
                          handleClick(
                            item._id,
                            item.client.lastName + " " + item.client.firstName
                          )
                        }
                        style={
                          buttonStyles[item._id] || {
                            backgroundColor: "dodgerblue",
                            borderRadius: "5px",
                            color: "white",
                            height: "36px",
                          }
                        }
                      >
                        {buttonStyles[item._id] ? "Confirmed" : "Confirm"}
                      </button>
                    </td>
                    <td>
                      <button
                        class="btn btn-danger"
                        onClick={() => handleDecline()}
                      >
                        Decline
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default AppointmentMessage;
