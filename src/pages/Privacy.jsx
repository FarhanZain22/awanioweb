import React from 'react';

// Komponen untuk menampilkan Kebijakan Privasi
export default function PrivacyPolicy() {
    return (
        <div className="bg-gray-900 min-h-screen text-gray-100 p-8 md:p-16 lg:p-20 font-sans">
            <div className="max-w-4xl mx-auto">
                {/* Judul Utama */}
                <h1 className="text-3xl md:text-4xl font-light tracking-widest uppercase mb-2">
                    Privacy Policy
                </h1>
                <p className="text-sm font-semibold text-blue-400 uppercase mb-12">
                    Our personal statement, cookies, third-parties
                </p>

                {/* Konten Kebijakan Privasi */}
                <div className="space-y-12">
                    {/* Personal Statement */}
                    <div className="flex flex-col md:flex-row border-b border-gray-700 pb-6">
                        <h2 className="text-lg font-semibold w-full md:w-1/3 flex-shrink-0 text-white mb-2 md:mb-0">
                            Personal Statement
                        </h2>
                        <div className="w-full md:w-2/3 text-sm text-gray-400 space-y-4">
                            <p>
                                We are committed to creating a **secure and user friendly experience** for every customer to achieve this, we aim to be as clear as possible about our all our policies. It is evident by our **transparent Terms and Conditions**.
                            </p>
                            <p>
                                When you visit our site, skillsfilms.com, some of your personal information supplied during your order or by means of our cookies policy may be gathered.
                            </p>
                        </div>
                    </div>

                    {/* What are 'cookies'? */}
                    <div className="flex flex-col md:flex-row border-b border-gray-700 pb-6">
                        <h2 className="text-lg font-semibold w-full md:w-1/3 flex-shrink-0 text-white mb-2 md:mb-0">
                            What are 'cookies'?
                        </h2>
                        <div className="w-full md:w-2/3 text-sm text-gray-400">
                            <p>
                                Cookies are tiny text files that are stored within your browsers cache. First and third-party cookies are used on this site for functionality, analytics, and advertising.
                            </p>
                        </div>
                    </div>

                    {/* Why do we use cookies? */}
                    <div className="flex flex-col md:flex-row border-b border-gray-700 pb-6">
                        <h2 className="text-lg font-semibold w-full md:w-1/3 flex-shrink-0 text-white mb-2 md:mb-0">
                            Why do we use cookies?
                        </h2>
                        <div className="w-full md:w-2/3 text-sm text-gray-400">
                            <p>
                                There are specific cookies necessary for a website to function properly. Cookies is what keep track of settings, thus allowing your shopping experience to be tailored to you (by remembering your preference or settings).
                            </p>
                            <p className="mt-4">
                                Cookies also gathers data, for example, for the time of a session, viewed pages or just general demographic information. We sign and generate the information that's gathered can then be used for analytical pursuits, allowing us to generate customized shopping experiences for our users. We do not use cookies that will track or identify you.
                            </p>
                        </div>
                    </div>

                    {/* What information do we gather specifically? */}
                    <div className="flex flex-col md:flex-row border-b border-gray-700 pb-6">
                        <h2 className="text-lg font-semibold w-full md:w-1/3 flex-shrink-0 text-white mb-2 md:mb-0">
                            What information do we gather specifically?
                        </h2>
                        <div className="w-full md:w-2/3 text-sm text-gray-400">
                            <p>
                                The information we gather is what you supply us with when signing up for a newsletter or making a purchase. This is usually demographic information like name, address, or general contact information. Cookies will also gather session information like the pages viewed, the amount of time spent, previous transactions, and any other general demographic information (login, gender, age).
                            </p>
                        </div>
                    </div>

                    {/* What third-parties do we share your information with? */}
                    <div className="flex flex-col md:flex-row border-b border-gray-700 pb-6">
                        <h2 className="text-lg font-semibold w-full md:w-1/3 flex-shrink-0 text-white mb-2 md:mb-0">
                            What third-parties do we share your information with?
                        </h2>
                        <div className="w-full md:w-2/3 text-sm text-gray-400">
                            <p>
                                Any information we gather is only stored with our affiliate partners for analytical reasons. We will not share your personal information past our brand and trusted brand partners.
                            </p>
                        </div>
                    </div>

                    {/* Website Media */}
                    <div className="flex flex-col md:flex-row border-b border-gray-700 pb-6">
                        <h2 className="text-lg font-semibold w-full md:w-1/3 flex-shrink-0 text-white mb-2 md:mb-0">
                            Website Media
                        </h2>
                        <div className="w-full md:w-2/3 text-sm text-gray-400">
                            <p>
                                We (skillsfilms.com) own all media that is on this website, unless stated otherwise. All photography work is done by Dev Deykun (devdeyukun.com).
                            </p>
                        </div>
                    </div>

                    {/* Disclosure of Your Information */}
                    <div className="flex flex-col md:flex-row border-b border-gray-700 pb-6">
                        <h2 className="text-lg font-semibold w-full md:w-1/3 flex-shrink-0 text-white mb-2 md:mb-0">
                            Disclosure of Your Information
                        </h2>
                        <div className="w-full md:w-2/3 text-sm text-gray-400">
                            <p>
                                You have the right to request your data. If something is incorrect, you can have it altered or removed.
                            </p>
                            <p className="mt-4">
                                You can also disable cookies on your device by changing your browser’s settings. You have the option to use opt-out programs like NAI’s Consumer opt-out or Google Analytics opt-out browser add-on. Those prevent cookies from being used in your browser. Know that if you do this, our site may not function properly.
                            </p>
                        </div>
                    </div>

                    {/* Updates */}
                    <div className="flex flex-col md:flex-row">
                        <h2 className="text-lg font-semibold w-full md:w-1/3 flex-shrink-0 text-white mb-2 md:mb-0">
                            Updates
                        </h2>
                        <div className="w-full md:w-2/3 text-sm text-gray-400">
                            <p>
                                Our privacy policies are subject to change. All updates will appear on this page.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}