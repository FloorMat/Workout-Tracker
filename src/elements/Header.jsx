import React from "react";
import { Link } from "react-router-dom";
import { getFormattedDate } from "./utils";

export default function Header(){

    return <header>
        <Link className="title" to="/">
            <h1 className="home">Workout Tracker</h1>
        </Link>
        <Link className="new-entry" to="newEntry">Add New Entry</Link>
        <h2 className="date">Date: {getFormattedDate()} </h2>
    </header>
}