import React, { useState } from "react";
import Instructor from "./Instructor";
import { getRandomUser } from "./Utility/Api";

const CyclPediaFuncPage = () => {
    const [state, setState] = useState(() => {
        return {
            instructor: undefined,
            studentList: [],
            studentCount: 0,
            hideInstructor: false,
            inputName: "",
            inputFeedback: "",
        };
    });

    const [inputName, setInputName] = useState(() => {
        return "";
    });
    const [inputFeedback, setInputFeedback] = useState(() => {
        return "";
    });

    const handleAddStudent = () => {
        setState((prevState) => {
            return {
                ...prevState,
                studentCount: 0,
            };
        });
    };

    const handleRemoveAllStudent = () => {
        setState((prevState) => {
            return {
                ...prevState,
                studentCount: 0,
            };
        });
    };

    const handletoggleInstructor = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                hideInstructor: !prevState.hideInstructor,
            };
        });
    };

    return (
        <div>
            <div className="p-3">
                <span className="h4 text-success">Instructor &nbsp;</span>
                <i
                    className={` bi ${state.hideInstructor ? "bi-toggle-off" : "bi-toggle-on"
                        } btn btn-success btn-sm`}
                    onClick={handletoggleInstructor}
                ></i>
                {!state.hideInstructor && state.instructor ? (
                    <Instructor instructor={state.instructor} />
                ) : null}
            </div>
            <div className="p-3">
                <span className="h4 text-success">Feedback</span>
                <br />
                <input
                    type="text"
                    value={inputName}
                    placeholder="Name.."
                    onChange={(e) => {
                        setInputName(e.target.value);
                    }}
                ></input>{" "}
                Value : {inputName}
                <br />
                <textarea
                    value={inputFeedback}
                    onChange={(e) => {
                        setInputFeedback(e.target.value);
                    }}
                    placeholder="Feedback..."
                ></textarea> {" "}
                Value : {inputFeedback}
            </div>
            <div className="p-3">
                <span className="h4 text-success">Students</span> <br />
                <div>Student Count : {state.studentCount}</div>
                <button className="btn btn-success btn-sm" onClick={handleAddStudent}>
                    Add Student
                </button>
                &nbsp;
                <button
                    className="btn btn-danger btn-sm"
                    onClick={handleRemoveAllStudent}
                >
                    Remove All Students
                </button>
                {state.studentList.map((student, index) => {
                    return (
                        <div className="text-white" key={index}>
                            - {student.name}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CyclPediaFuncPage;
