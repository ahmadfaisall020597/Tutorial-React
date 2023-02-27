import logo from "../src/images/react.png";

export default function Header() {
    return (
        <div className="px-2 py-3" style={{borderBottom: "1px solid #777"}}>
            <img src={logo} alt="" style={{height: "35px", verticalAlign: "top"}} />
            <span className="h2 py-2 px-2 text-white-50">React Course - CountOPedia</span>
        </div>
    )
}