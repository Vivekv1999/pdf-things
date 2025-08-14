import { FileText } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-900 px-4 sm:px-6 lg:px-8 py-6 text-white">
                <div className="mx-auto max-w-7xl">
                    <div className="gap-8 grid grid-cols-1 md:grid-cols-4">
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center space-x-2 mb-4">
                                <FileText className="w-8 h-8 text-blue-400" />
                                <span className="font-bold text-xl">PDFTools</span>
                            </div>
                            <p className="mb-6 max-w-md text-gray-400">
                                Professional PDF editing tools that work entirely in your browser. Fast, secure, and completely free to
                                use.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-4 font-semibold text-lg">PDF Tools</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <Link href="/merge" className="hover:text-white transition-colors">
                                        PDF Merge
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/split" className="hover:text-white transition-colors">
                                        PDF Split
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/compress" className="hover:text-white transition-colors">
                                        PDF Compress
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/crop" className="hover:text-white transition-colors">
                                        PDF Crop
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-4 font-semibold text-lg">Company</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <Link to="/about" className="hover:text-white transition-colors">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact-us" className="hover:text-white transition-colors">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-4 pt-4 border-gray-800 border-t text-gray-400 text-center">
                        <p>&copy; 2025 PDFTools. All rights reserved. Built with ❤️ for better PDF editing.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer
