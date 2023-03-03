import React from "react";
import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";
import AddContact from "./AddContact";
import AddRandomContact from "./AddRandomContact";
import FavoriteContacts from "./FavoriteContact";
import GeneralContacts from "./GeneralContact";
import RemoveAllContact from "./RemoveAllContact";

export default function ContactIndex() {
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
                        <AddContact />
                    </div>
                    <div className="row py-2">
                        <FavoriteContacts />
                    </div>
                    <div className="row py-2">
                        <GeneralContacts />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}