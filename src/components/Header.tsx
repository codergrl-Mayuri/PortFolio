import { LuDot } from "react-icons/lu";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-2xl bg-slate-100 border-b border-gray-200">
            <nav className="flex justify-center items-center pr-6 pl-6 p-5 max-w-screen-xl mx-auto">
                <ul className="flex justify-between w-full text-md text-gray-600 px-6">
                    <li className="flex items-center">
                        <a className="hover:text-gray-500">Home</a>
                    </li>
                    <li className="flex items-center">
                        <LuDot className="text-gray-600 mx-2" />
                    </li>
                    <li className="flex items-center">
                        <a className="hover:text-gray-500">About</a>
                    </li>
                    <li className="flex items-center">
                        <LuDot className="text-gray-600 mx-2" />
                    </li>
                    <li className="flex items-center">
                        <a className="hover:text-gray-500">&lt;mayuri/&gt;</a>
                    </li>
                    <li className="flex items-center">
                        <LuDot className="text-gray-600 mx-2" />
                    </li>
                    <li className="flex items-center">
                        <a className="hover:text-gray-500">Works</a>
                    </li>
                    <li className="flex items-center">
                        <LuDot className="text-gray-600 mx-2" />
                    </li>
                    <li className="flex items-center">
                        <a className="hover:text-gray-500">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
