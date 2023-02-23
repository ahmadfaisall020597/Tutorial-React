export default function Header() {
    function MainHeader() {
        return (
            <h1 className='heading1'>Tutorial React</h1>
        )
    }

    const subHeaderStyle = {
        color: "blueviolet",
        backgroundColor: "lightgray"
    }

    function SubHeader() {
        return (
            <p style={subHeaderStyle}>this will be an exciting course</p>
        )
    }

    return (
        <div>
            <MainHeader />
            <SubHeader />
        </div>
    )
}