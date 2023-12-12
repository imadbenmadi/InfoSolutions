import React from 'react'
import MenuBar from "../MenuBar";
import Header from '../Header';
export default function Home() {
    return (
        <>
            <div className="relative h-fit ">
                <MenuBar />
                <Header />
            </div>
        </>
    );
}
