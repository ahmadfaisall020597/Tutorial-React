import Student from "./Student";
import StudentReview from "./StudentReview";

export default function MainBody() {
    const whatWeWillLearn = "React JS";
    const lectureCount = 3;

    return (
        <div style={{ minHeight: "70vh" }}>
            <h3>In this, we will learn {whatWeWillLearn} by building faisal</h3>
            <p>Total Lecture = {lectureCount}</p>
            <ul>
                <li>Basic Foundation</li>
                <li>Functional and Class Components</li>
            </ul>
            {/* <div>
                Enter Task : {" "}
                <input maxLength={8} readOnly={false} placeholder="Enter your input"></input>
            </div> */}
            <div className='container row'>Students Enrolled</div>
            <Student experience={2} name="Ahmad Faisal" headshot="https://api.lorem.space/image/face?w=150&h=150">
                <StudentReview />
            </Student>
            <Student experience={5} name="T. Muller" headshot="https://api.lorem.space/image/face?w=150&h=151">
                <StudentReview />
            </Student>
            <Student experience={7} name="Neuer" headshot="https://api.lorem.space/image/face?w=150&h=152">
                <StudentReview />
            </Student>
        </div>
    )
}