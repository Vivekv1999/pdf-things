import { motion } from "framer-motion";
import { CheckCircle, Globe, Lock, Shield, Users, Zap, ZapIcon } from "lucide-react";
import { allTools } from "../Tools/AllTools";

const HomePage = () => {
    return (
        <>
            <section className="relative flex justify-center items-center px-4 min-h-[40vh] overflow-hidden text-center">
                <div className="-z-10 absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-fuchsia-500/10 to-transparent" />
                <div className="mx-auto max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600 font-extrabold text-transparent text-4xl sm:text-5xl lg:text-6xl tracking-tight"
                    >
                        Free Online PDF Tools
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.6 }}
                        className="mx-auto mt-6 max-w-2xl text-gray-600 text-lg sm:text-xl"
                    >
                        Merge, split, crop, compress and more — no sign-up, lightning-fast & 100% free.
                    </motion.p>
                </div>
            </section>
            <section className="mx-auto mt-5 md:mt-4 px-4 pb-20 max-w-7xl">
                <div className="gap-6 grid sm:grid-cols-2 lg:grid-cols-3">
                    {allTools.map(({ path, name, description, color, icon: Icon }) => (
                        <motion.div
                            key={path}
                            whileHover={{ y: -4 }}
                            className="group bg-white/70 shadow-sm hover:shadow-lg p-6 border rounded-2xl transition-all cursor-pointer"
                            onClick={() => (window.location.href = path)}
                        >
                            <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${color} text-white mb-4 shadow-lg`}>
                                <Icon className="w-6 h-6" />
                            </div>
                            <h2 className="font-semibold text-gray-900 text-xl group-hover:underline">
                                {name}
                            </h2>
                            <p className="mt-1 text-gray-600 text-sm line-clamp-2">
                                {description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-16">
                <div className="mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="mb-6 font-bold text-gray-900 text-3xl sm:text-4xl">
                            Everything Happens in Your Browser
                        </h2>
                        <p className="mb-8 text-gray-600 text-lg leading-relaxed">
                            Our advanced client-side technology means your sensitive documents never leave your computer. No servers,
                            no cloud storage, no privacy concerns. Just pure, secure PDF processing powered by modern web
                            technologies.
                        </p>

                        <div className="gap-6 grid sm:grid-cols-2 mt-12">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="bg-white shadow-sm p-6 rounded-xl"
                            >
                                <h3 className="mb-3 font-semibold text-gray-900 text-xl">🔒 Maximum Security</h3>
                                <p className="text-gray-600">
                                    Your files are processed entirely within your browser using WebAssembly and JavaScript. No data
                                    transmission, no server storage.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="bg-white shadow-sm p-6 rounded-xl"
                            >
                                <h3 className="mb-3 font-semibold text-gray-900 text-xl">⚡ Instant Processing</h3>
                                <p className="text-gray-600">
                                    No upload delays or queue waiting. Start processing immediately and get results in seconds, not
                                    minutes.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="px-4 py-16">
                <div className="mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-12 text-center"
                    >
                        <h2 className="mb-4 font-bold text-gray-900 text-3xl sm:text-4xl">
                            Why Choose Our PDF Tools?
                        </h2>
                        <p className="mx-auto max-w-2xl text-gray-600 text-lg">
                            Built for professionals, students, and anyone who works with PDFs regularly.
                        </p>
                    </motion.div>

                    <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                icon: Users,
                                title: "For Everyone",
                                description: "Perfect for students, professionals, and businesses of all sizes.",
                            },
                            {
                                icon: Globe,
                                title: "Works Everywhere",
                                description: "Compatible with all modern browsers on desktop and mobile devices.",
                            },
                            {
                                icon: CheckCircle,
                                title: "Always Free",
                                description: "No hidden costs, no premium features. Everything is completely free.",
                            },
                            {
                                icon: Zap,
                                title: "No Limits",
                                description: "Process as many PDFs as you want, whenever you want.",
                            },
                        ].map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="bg-white shadow-sm hover:shadow-md p-6 border border-gray-200 rounded-xl transition-shadow"
                            >
                                <feature.icon className="mb-4 w-10 h-10 text-indigo-600" />
                                <h3 className="mb-2 font-semibold text-gray-900 text-lg">{feature.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-16">
                <div className="mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-12 text-center"
                    >
                        <h2 className="mb-4 font-bold text-gray-900 text-3xl sm:text-4xl">
                            Your Privacy is Our Priority
                        </h2>
                        <p className="mx-auto max-w-2xl text-gray-600 text-lg">
                            Everything happens in your browser. No uploads, no servers, no data collection.
                        </p>
                    </motion.div>

                    <div className="gap-8 grid md:grid-cols-3">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="flex justify-center items-center bg-green-500 shadow-lg mx-auto mb-4 rounded-full w-16 h-16">
                                <Shield className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="mb-2 font-semibold text-gray-900 text-xl">100% Secure</h3>
                            <p className="text-gray-600">
                                All processing happens locally in your browser. Your files never leave your device.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="flex justify-center items-center bg-blue-500 shadow-lg mx-auto mb-4 rounded-full w-16 h-16">
                                <Lock className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="mb-2 font-semibold text-gray-900 text-xl">No Registration</h3>
                            <p className="text-gray-600">
                                Start using our tools immediately. No accounts, no passwords, no hassle.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="flex justify-center items-center bg-purple-500 shadow-lg mx-auto mb-4 rounded-full w-16 h-16">
                                <ZapIcon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="mb-2 font-semibold text-gray-900 text-xl">Lightning Fast</h3>
                            <p className="text-gray-600">
                                No waiting for uploads or downloads. Process your PDFs instantly.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>


            <section className="bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-16">
                <div className="mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="mb-6 font-bold text-white text-3xl sm:text-4xl">Ready to Get Started?</h2>
                        <p className="mb-8 text-indigo-100 text-xl leading-relaxed">
                            Choose any tool above and start processing your PDFs instantly. No registration required, completely free
                            forever.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white shadow-lg hover:shadow-xl px-8 py-4 rounded-xl font-semibold text-indigo-600 text-lg transition-all"
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        >
                            Explore Tools
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default HomePage
