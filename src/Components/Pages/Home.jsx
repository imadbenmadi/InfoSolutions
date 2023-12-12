import React from 'react'
import MenuBar from "../MenuBar";
import Header from '../Header';
export default function Home() {
    return (
        <>
            <div className="relative h-[100vh] max-h-[100vh] w-[100vw] overflow-hidden ">
                <MenuBar />
                <Header />
            </div>
        </>
    );
}
