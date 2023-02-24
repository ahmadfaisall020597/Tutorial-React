import logo from '../Images/logo192.png';

export default function Header() {
    function MainHeader() {
        return (
            <div className='py-2 px-2' style={{backgroundColor:'black'}}>
                <img src={logo} style={{height:'50px', verticalAlign:'top'}}></img>
                <span className='h2 px-3 py-2 text-white-50'>
                    Tutorial React JS
                </span>
            </div>
        )
    }

    const subHeaderStyle = {
        color: "blueviolet",
        backgroundColor: "lightgray"
    }

    function SubHeader() {
        return (
            <p style={subHeaderStyle} className="text-center">this will be an exciting course</p>
        )
    }

    return (
        <div>
            <MainHeader />
            <SubHeader />
        </div>
    )
}