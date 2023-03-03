import Contact from "./Contact";

export default function FavoriteContact(props) {
    return (
        <div>
            {props.contacts.map((contact, index) => (
                <Contact contact={contact} key={index}></Contact>
            ))}
        </div>
    )
}