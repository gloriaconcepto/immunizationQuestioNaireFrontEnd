import React, { memo, useState } from "react";
import { Button, Form, FormGroup, FormFeedback, Input } from "reactstrap";
import { validateEmail, validatePhoneNumber } from "../../utilities/funct";
const ParentForm = memo(({ addkidsRegisterForm }) => {
    const [firstName, setFirstName] = useState("");
    const [otherName, setOtherName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [kidNo, setKidNo] = useState("1");
    //error message
    const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");
    const [otherNameErrorMessage, setOtherNameErrorMessage] = useState("");
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [phoneErrorMessage, setPhoneErrorMessage] = useState("");
    const [kidNoErrorMessage, setKidNoErrorMessage] = useState("");
    //invalid
    const [firstNameInValid, setFirstNameInValid] = useState(false);
    const [otherNameInValid, setOtherNameInValid] = useState(false);
    const [emailInValid, setEmailInValid] = useState(false);
    const [phoneInValid, setPhoneInValid] = useState(false);
    const [kidNoInValid, setKidNoInValid] = useState(false);
    //valid
    const [firstNameValid, setFirstNameValid] = useState(false);
    const [otherNameValid, setOtherNameValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [phoneValid, setPhoneValid] = useState(false);
    const [kidNoValid, setKidNoValid] = useState(false);

    //disable button
    const [disableButton, setDisableButton] = useState(true);
    const onFieldChange = (e) => {
        console.log(e.target.id);
        if (e && e.target.id === "firstName") {
            setFirstName(e.target.value);

            if (e.target.value.length === 0) {
                setFirstNameErrorMessage("First Name Cannot be empty");
                setFirstNameInValid(true);
                setFirstNameValid(false);
                setDisableButton(true);
                console.log(e.target.value);
            } else {
                setFirstNameValid(true);
                setFirstNameInValid(false);
                setFirstNameErrorMessage("");
                setDisableButton(false);
            }
        }
        if (e && e.target.id === "otherName") {
            setOtherName(e.target.value);
            if (e.target.value.length === 0) {
                setOtherNameErrorMessage("Other Name Cannot be empty");
                setOtherNameInValid(true);
                setOtherNameValid(false);
                setDisableButton(true);
            } else {
                setOtherNameValid(true);
                setOtherNameErrorMessage("");
                setOtherNameInValid(false);
                setDisableButton(false);
            }
        }
        if (e && e.target.id === "email") {
            console.log(validateEmail(e.target.value));
            setEmail(e.target.value);
            if (e.target.value.length === 0) {
                setEmailErrorMessage("Email Cannot be empty");
                setEmailInValid(true);
                setEmailValid(false);
                setDisableButton(true);
            } else {
                if (!validateEmail(e.target.value)) {
                    setEmailErrorMessage("Wrong email format");
                    setEmailInValid(true);
                    setEmailValid(false);
                    setDisableButton(true);
                } else {
                    setEmailErrorMessage("");
                    setEmailInValid(false);
                    setEmailValid(true);
                    setDisableButton(false);
                }
            }
        }

        if (e && e.target.id === "phone") {
            setPhone(e.target.value);
            if (e.target.value.length === 0) {
                setPhoneErrorMessage("Phone Number Cannot be empty");
                setPhoneInValid(true);
                setPhoneValid(false);
                setDisableButton(true);
            } else {
                if (!validatePhoneNumber(e.target.value)) {
                    setPhoneErrorMessage("Wrong Phone number format");
                    setPhoneInValid(true);
                    setPhoneValid(false);
                    setDisableButton(true);
                } else {
                    setEmailErrorMessage("");
                    setPhoneInValid(false);
                    setPhoneValid(true);
                    setDisableButton(false);
                }
            }
        }

        if (e && e.target.id === "kidNo") {
            setKidNo(e.target.value);
            console.log(typeof e.target.value);

            if (e.target.value.length === 0) {
                setKidNoErrorMessage("Please enter number of kids");
                setKidNoInValid(true);
                setKidNoValid(false);
                setDisableButton(true);
                console.log(e.target.value);
            } else if (parseInt(e.target.value) <= 0) {
                if (parseInt(e.target.value) === 0) {
                    setKidNoErrorMessage("Please you can't have  zero kids");
                    setDisableButton(true);
                } else {
                    setKidNoErrorMessage("Please you can't enter a negative number");
                    setDisableButton(true);
                }

                setKidNoInValid(true);
                setKidNoValid(false);
            } else {
                setKidNoValid(true);
                setKidNoInValid(false);
                setKidNoErrorMessage("");
                setDisableButton(false);
            }
        }

        // if (firstNameErrorMessage.length > 0 || otherNameErrorMessage.length > 0 || emailErrorMessage.length > 0 || phoneErrorMessage.length > 0 || kidNoErrorMessage.length > 0) {
        //     console.log("hello meme");
        //     setDisableButton(true);
        // } else {
        //     setDisableButton(false);
        // }
    };
    const addkidsForm = () => {
        let formatKidNo = parseInt(kidNo);
        console.log(formatKidNo);
        let formaParentData={
            firstName,
            otherName,
            email,
            phone,
            kidNo:formatKidNo,
        }
        addkidsRegisterForm(formaParentData)
    };
    return (
        <div>
            <Form inline>
                <FormGroup className="mb-4">
                    <Input
                        type="text"
                        name=""
                        id="firstName"
                        placeholder="first name"
                        className="formInput"
                        style={{ borderTop: "none", borderRadius: "0rem", borderLeft: "none", borderRight: "none" }}
                        onChange={(e) => onFieldChange(e)}
                        value={firstName}
                        valid={firstNameValid}
                        invalid={firstNameInValid}
                        onFocus={(e) => onFieldChange(e)}
                    />
                    <FormFeedback style={{ fontSize: "11PX", marginRight: "7rem" }}>{firstNameErrorMessage}</FormFeedback>
                </FormGroup>
                <FormGroup className="mb-4">
                    <Input
                        type="text"
                        name=""
                        id="otherName"
                        placeholder="other names"
                        className="formInput"
                        style={{ borderTop: "none", borderRadius: "0rem", borderLeft: "none", borderRight: "none" }}
                        onChange={(e) => onFieldChange(e)}
                        value={otherName}
                        valid={otherNameValid}
                        invalid={otherNameInValid}
                        onFocus={(e) => onFieldChange(e)}
                    />
                    <FormFeedback style={{ fontSize: "11PX", marginRight: "7rem" }}>{otherNameErrorMessage}</FormFeedback>
                </FormGroup>
                <FormGroup className="mb-4">
                    <Input
                        type="text"
                        name=""
                        id="email"
                        placeholder="email"
                        className="formInput"
                        style={{ borderTop: "none", borderRadius: "0rem", borderLeft: "none", borderRight: "none" }}
                        onChange={(e) => onFieldChange(e)}
                        value={email}
                        valid={emailValid}
                        invalid={emailInValid}
                        onFocus={(e) => onFieldChange(e)}
                    />
                    <FormFeedback style={{ fontSize: "11PX", marginRight: "7rem" }}>{emailErrorMessage}</FormFeedback>
                </FormGroup>
                <FormGroup className="mb-4">
                    <Input
                        type="text"
                        name=""
                        id="phone"
                        placeholder="phone number(eg 080)"
                        className="formInput"
                        style={{ borderTop: "none", borderRadius: "0rem", borderLeft: "none", borderRight: "none" }}
                        onChange={(e) => onFieldChange(e)}
                        value={phone}
                        valid={phoneValid}
                        invalid={phoneInValid}
                        onFocus={(e) => onFieldChange(e)}
                    />
                    <FormFeedback style={{ fontSize: "11PX", marginRight: "7rem" }}>{phoneErrorMessage}</FormFeedback>
                </FormGroup>
                <FormGroup className="mb-4">
                    <Input
                        type="number"
                        name=""
                        id="kidNo"
                        placeholder="number of kids"
                        className="formInput"
                        style={{ borderTop: "none", borderRadius: "0rem", borderLeft: "none", borderRight: "none" }}
                        onChange={(e) => onFieldChange(e)}
                        value={kidNo}
                        valid={kidNoValid}
                        invalid={kidNoInValid}
                        onFocus={(e) => onFieldChange(e)}
                    />
                    <FormFeedback style={{ fontSize: "11PX", marginRight: "7rem" }}>{kidNoErrorMessage}</FormFeedback>
                </FormGroup>
                <Button style={{ backgroundColor: "#35384F", marginLeft: "13rem" }} disabled={false} onClick={() => addkidsForm()}>
                    next
                </Button>{" "}
            </Form>
        </div>
    );
});

export default ParentForm;
