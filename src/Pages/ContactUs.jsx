
const ContactUs = () => {
    return (
        <div className="mx-auto p-6 max-w-4xl">
            <h1 className="mb-4 font-bold text-3xl">Contact Us</h1>
            <p className="mb-8 text-gray-600">
                Got questions or feedback? We’d love to hear from you!
            </p>

            <form className="gap-4 grid bg-white shadow-md p-6 rounded-lg">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <textarea
                    placeholder="Your Message"
                    className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px]"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
                >
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default ContactUs
