import { getRandomUser } from "../../Utility/api"

const getRandomContact = async () => {
    const responseFromAPI = await getRandomUser();
    console.log(responseFromAPI);
}

export default function AddRandomContact() {
    return (
        <div>
            <button
                className="btn btn-success form-control"
                onClick={() => getRandomContact()}
            >
                Add Random Contact
            </button>
        </div>
    )
}