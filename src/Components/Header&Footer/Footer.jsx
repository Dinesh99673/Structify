import React from "react"

function Footer(){
    return (
        <footer className="mt-20 p-5 w-full bg-gray-800 text-center text-cyan-300 z-10 bottom-0">
            <p>&copy; {new Date().getFullYear()} Structify.</p>
        </footer>
    );
}

export default Footer;