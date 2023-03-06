import React from "react";
import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";
import AddContact from "./AddContact";
import AddRandomContact from "./AddRandomContact";
import FavoriteContacts from "./FavoriteContact";
import GeneralContacts from "./GeneralContact";
import RemoveAllContact from "./RemoveAllContact";

class ContactIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactList: [
                {
                    id: 1,
                    name: "Faisal",
                    phone: "081383422xxx",
                    email: "faisal@gmail.com",
                    isFavorite: false,
                },
                {
                    id: 2,
                    name: "Ahmad",
                    phone: "08134268xxx",
                    email: "ahmad@gmail.com",
                    isFavorite: true,
                },
                {
                    id: 3,
                    name: "Raisa",
                    phone: "081327826xxx",
                    email: "raisa@gmail.com",
                    isFavorite: true,
                },
            ],
        };
    }

    handleAddContact = (newContact) => {
        const newFinalContact = {
            ...newContact,
            id: this.state.contactList[this.state.contactList.length - 1].id + 1,
            isFavorite: false,
        };
        this.setState((prevState) => {
            return {
                contactList: prevState.contactList.concat([newFinalContact]),
            };
        });
        alert("hello");
    };
    
    render() {
        return (
            <div>
                <Header />
                <div className="container" style={{ minHeight: "85vh" }}>
                    <div className="row py-3">
                        <div className="col-4 offset-2">
                            <AddRandomContact />
                        </div>
                        <div className="col-4">
                            <RemoveAllContact />
                        </div>
                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                                <AddContact />
                            </div>
                        </div>
                        <div className="row py-2">
                            <FavoriteContacts
                                contacts={this.state.contactList.filter(
                                    (u) => u.isFavorite === true
                                )}
                            />
                        </div>
                        <div className="row py-2">
                            <GeneralContacts
                                contacts={this.state.contactList.filter(
                                    (u) => u.isFavorite === false
                                )}
                            />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ContactIndex;