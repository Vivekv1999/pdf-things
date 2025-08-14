import { motion } from "framer-motion";

const About = () => {
    return (

        <section id="about" className="px-4 py-16">
            <div className="mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="mb-6 font-bold text-gray-900 dark:text-gray-100 text-3xl sm:text-4xl">About PDFTools</h2>
                    <p className="mb-8 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                        PDFTools is a lightweight, fast and privacy-focused toolkit built for eCommerce sellers, freelancers and
                        students. Our mission is to provide professional-grade PDF processing tools that respect your privacy and
                        work seamlessly across all devices.
                    </p>

                    <div className="gap-8 grid sm:grid-cols-3 mt-12">
                        <div className="text-center">
                            <div className="mb-2 font-bold text-indigo-600 dark:text-indigo-400 text-3xl">100%</div>
                            <div className="text-gray-600 dark:text-gray-400">Browser-based</div>
                        </div>
                        <div className="text-center">
                            <div className="mb-2 font-bold text-indigo-600 dark:text-indigo-400 text-3xl">0</div>
                            <div className="text-gray-600 dark:text-gray-400">Data collected</div>
                        </div>
                        <div className="text-center">
                            <div className="mb-2 font-bold text-indigo-600 dark:text-indigo-400 text-3xl">∞</div>
                            <div className="text-gray-600 dark:text-gray-400">Free usage</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
