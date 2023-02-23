export default function Students() {
    const fullName = "Ahmad Faisal"
    const programmingExp = 3;
    return (
        <div className='container p-4'>
            <div className='row'>
                Students Enrolled
            </div>
            <div className='row border'>
                <div className='col-1'>
                    <img src={`https://ui-avatars.com/api/?name=${fullName}`}
                        className='w-100'>
                    </img>
                </div>
                <div className='col-10'>
                    {fullName}
                    <br />
                    Programming Experience {programmingExp} years
                </div>
            </div>
        </div>
    )
}