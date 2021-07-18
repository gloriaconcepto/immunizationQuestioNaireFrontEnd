import React, { memo, useState } from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import ParentForm from "./ImmunisationForm/ParentForm";
import ChildForm from "./ImmunisationForm/ChildForm";
const Registration = memo(() => {
    const [subTitle, setSubTitle] = useState("Parent/Guardian Details");
    const [formSetting, setFormSetting] = useState(1);
    const [parentDataBase, setParentDataBase] = useState([]);
    const [kidsArry, setKidsArry] = useState([]);
    const [kidActiveForm, setKidActiveForm] = useState(0);

    const showKidsForm = (data) => {
        //save the parent details

        setParentDataBase((arr) => [...arr, data]);
        //setting of the kidsArry form
        if (data && data.kidNo) {
            let cloneArr = [];
            for (let i = 0; i <= data.kidNo - 1; i++) {
                cloneArr.push(i);
            }
            setKidsArry(cloneArr);
        }

        //change the form setting to 2
        setFormSetting(2);
        setSubTitle(`Kid ${kidsArry + 1} Details Form`);
        //populated the kids array form counting from 1 to the exact amount.
        //mapping showing only the active kids form

        //next button should only set the active number
    };
    const nextStep = (no) => {
        //check if it is the last step
        if (kidsArry[no + 1] === undefined) {
            //show submit form
            setFormSetting(3);
        } else {
            //set the active form
            setKidActiveForm(no + 1);
        
            if (no === 0) {
                setSubTitle(`Kid 2 Details Form`);
            } else {
                setSubTitle(`Kid ${no + 2} Details Form`);
            }

            //save the previous kids data form

            // let cloneArr = JSON.parse(JSON.stringify(kidsArry));
            // console.log({ cloneArr });
            // //removed that element from the array..
            // for (let i = 0; i < cloneArr.length; i++) {
            //     if (cloneArr[i] === no) {
            //         console.log("hey am gotten remove you");
            //         cloneArr.splice(i, 1);
            //     }
            // }
            // console.log(cloneArr);
        }
    };
    return (
        <div style={{ color: "#35384F" }}>
            {console.log(kidsArry)}
            <Card>
                <CardBody>
                    <CardTitle tag="h5">IMMUNIZATION QUESTIONAIRE</CardTitle>
                    {formSetting != 3 && (
                        <CardSubtitle tag="h6" className="mb-2 text-muted" style={{ marginTop: "1rem", paddingRight: "7rem" }}>
                            {subTitle}
                        </CardSubtitle>
                    )}
                    <CardBody>
                        {formSetting === 1 && <ParentForm addkidsRegisterForm={showKidsForm} />}

                        {formSetting === 2 && kidsArry.map((key, index) => <div key={index}>{kidActiveForm === key && <ChildForm kidNo={key} nextStep={nextStep} />}</div>)}

                        {formSetting === 3 && <div>Submit form layout</div>}
                    </CardBody>
                </CardBody>
            </Card>
        </div>
    );
});

export default Registration;
