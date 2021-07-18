import React, { memo, useState } from "react";
import { Button, Form, FormGroup, FormFeedback, Input } from "reactstrap";

const ChildForm = memo(({ kidNo, nextStep }) => {
    const [kidName, setKidName] = useState("");
    const [kidsex, setKidsex] = useState("");
    const [hasKidImmu, setHasKidImmu] = useState("");
    const [noImmu, setNoImmu] = useState(" ");
    const [kidNameErrorMessage, setKidNameErrorMessage] = useState("");
    const [kidNameInValid, setKidNameInValid] = useState(false);
    const [kidNameValid, setKidNameValid] = useState(false);
    const [kidSexErrorMessage, setKidSexErrorMessage] = useState("");
    const [kidSexInValid, setKidSexInValid] = useState(false);
    const [kidSexValid, setKidSexValid] = useState(false);
    const [haskidImmuErrorMessage, setHasKidImmuErrorMessage] = useState("");
    const [hasKidImmuInValid, setHasKidImmuInValid] = useState(false);
    const [haskidImmuValid, setHasKidImmuValid] = useState(false);
    const [disableButton, setDisableButton] = useState(true);
    const [showImmuTime, setShowImmuTime] = useState(false);
    const [noImmuErrorMessage, setNoImmuErrorMessage] = useState("");
    const [noImmuInValid, setNoImmuInValid] = useState(false);
    const [noImmuValid, setNoImmuValid] = useState(false);
    const nextkidsForm = () => {
        nextStep(kidNo);
    };
    const onFieldChange = (e) => {
        if (e && e.target.id === "kidName") {
            setKidName(e.target.value);
            if (e.target.value.length === 0) {
                setKidNameErrorMessage("Kid Name Cannot be empty");
                setKidNameInValid(true);
                setKidNameValid(false);
                setDisableButton(true);
            } else {
                setKidNameValid(true);
                setKidNameInValid(false);
                setKidNameErrorMessage("");
                setDisableButton(false);
            }
        }
        if (e && e.target.id === "kidSex") {
            setKidsex(e.target.value);
            if (e.target.value === "invalid") {
                setKidSexValid(false);
                setKidSexInValid(true);
                setKidSexErrorMessage("Please select the kid gender");
                setDisableButton(true);
            } else {
                setKidSexValid(true);
                setKidSexInValid(false);
                setKidSexErrorMessage("");
                setDisableButton(false);
            }
        }
        if (e && e.target.id === "hasImmun") {
            setHasKidImmu(e.target.value);

            if (e.target.value === "invalid") {
                setHasKidImmuValid(false);
                setHasKidImmuInValid(true);
                setHasKidImmuErrorMessage("Please select if the kid has been immunised");
                setDisableButton(true);
            } else {
                setHasKidImmuValid(true);
                setHasKidImmuInValid(false);
                setHasKidImmuErrorMessage("");
                setDisableButton(false);
                if (e.target.value === "Yes") {
                    setShowImmuTime(true);
                } else {
                    setShowImmuTime(false);
                    setNoImmuValid(false);
                    setNoImmuInValid(false);
                    setNoImmuErrorMessage("");
                    setNoImmu("");
                }
            }
        }
        if (e && e.target.id === "noImmun") {
            console.log(e.target.value);
            setNoImmu(e.target.value);

            if (e.target.value === "invalid") {
                setNoImmuValid(false);
                setNoImmuInValid(true);
                setNoImmuErrorMessage("Please select number of times the kid has been immunised");
                setDisableButton(true);
            } else {
                setNoImmuValid(true);
                setNoImmuInValid(false);
                setNoImmuErrorMessage("");
                setDisableButton(false);
            }
        }
    };
    return (
        <div>
            <Form inline>
                <FormGroup className="mb-4">
                    <Input
                        type="text"
                        name=""
                        id="kidName"
                        placeholder="kid name"
                        className="formInput"
                        style={{ borderTop: "none", borderRadius: "0rem", borderLeft: "none", borderRight: "none" }}
                        onChange={(e) => onFieldChange(e)}
                        value={kidName}
                        valid={kidNameValid}
                        invalid={kidNameInValid}
                        onFocus={(e) => onFieldChange(e)}
                    />
                    <FormFeedback style={{ fontSize: "11PX", marginRight: "7rem" }}>{kidNameErrorMessage}</FormFeedback>
                </FormGroup>
                <FormGroup className="mb-4">
                    <Input
                        type="select"
                        name=""
                        id="kidSex"
                        placeholder="kid Sex"
                        className="formInput"
                        style={{ borderTop: "none", borderRadius: "0rem", borderLeft: "none", borderRight: "none" }}
                        onChange={(e) => onFieldChange(e)}
                        value={kidsex}
                        valid={kidSexValid}
                        invalid={kidSexInValid}
                        onFocus={(e) => onFieldChange(e)}
                    >
                        <option value="invalid">Select Kid Sex</option>
                        <option value={"Male"}>Male</option>
                        <option value={"Female"}>Female</option>
                    </Input>
                    <FormFeedback style={{ fontSize: "11PX", marginRight: "7rem" }}>{kidSexErrorMessage}</FormFeedback>
                </FormGroup>
                <FormGroup className="mb-4">
                    <Input
                        type="select"
                        name=""
                        id="hasImmun"
                        className="formInput"
                        style={{ borderTop: "none", borderRadius: "0rem", borderLeft: "none", borderRight: "none" }}
                        onChange={(e) => onFieldChange(e)}
                        value={hasKidImmu}
                        valid={haskidImmuValid}
                        invalid={hasKidImmuInValid}
                        onFocus={(e) => onFieldChange(e)}
                    >
                        <option value="invalid">Has the child been immunised ?</option>
                        <option value={"Yes"}>Yes</option>
                        <option value={"No"}>No</option>
                    </Input>
                    <FormFeedback style={{ fontSize: "11PX", marginRight: "7rem" }}>{haskidImmuErrorMessage}</FormFeedback>
                </FormGroup>
                {showImmuTime && (
                    <FormGroup className="mb-4">
                        <Input
                            type="select"
                            name=""
                            id="noImmun"
                            className="formInput"
                            style={{ borderTop: "none", borderRadius: "0rem", borderLeft: "none", borderRight: "none" }}
                            onChange={(e) => onFieldChange(e)}
                            value={noImmu}
                            valid={noImmuValid}
                            invalid={noImmuInValid}
                            onFocus={(e) => onFieldChange(e)}
                        >
                            <option value="invalid">How many the kid has been immunised?</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </Input>
                        <FormFeedback style={{ fontSize: "11PX", marginRight: "7rem" }}>{noImmuErrorMessage}</FormFeedback>
                    </FormGroup>
                )}
                <Button style={{ backgroundColor: "#35384F", marginLeft: "13rem" }} disabled={disableButton} onClick={() => nextkidsForm()}>
                    next
                </Button>{" "}
            </Form>
        </div>
    );
});

export default ChildForm;
