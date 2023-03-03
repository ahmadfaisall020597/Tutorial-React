export default function Contact(props) {
    return (
        <div>
            <button className="btn btn-secondary form-control">
                {props.contact.name}
            </button>
        </div>
    )
}