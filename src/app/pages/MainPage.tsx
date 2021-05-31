import {Popover} from '@headlessui/react'
import image1 from '../images/1.png'

export default function MainPage() {
    return (
        <div className="bg-white">
            <div className="relative overflow-hidden">
                <Popover as="header" className="relative">
                    <>
                        <div className="bg-gray-900 pt-6">
                            <nav
                                className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
                                aria-label="Global"
                            >
                                <div className="flex items-center flex-1">
                                    <div className="flex items-center justify-between w-full md:w-auto">
                                        <a href="#">
                                            <span
                                                className="h-8 w-auto sm:h-10"
                                            >
                                                <p className="text-2xl font-medium text-white font-semibold subpixel-antialiased">
                                                    🍲 HuoguoML
                                                </p>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div className="md:flex md:items-center md:space-x-6">
                                    <a
                                        href="https://github.com/huoguoml/huoguoml"
                                        target="_blank" rel="noopener noreferrer"
                                        className="inline-flex items-center px-4 py-2 text-white "
                                    >
                                        <div className="h-10 w-10">
                                            <svg fill="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>

                                    </a>
                                </div>
                            </nav>
                        </div>
                    </>
                </Popover>
                <main>
                    <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
                        <div className="mx-auto max-w-7xl lg:px-8">
                            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                                <div
                                    className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                                    <div className="lg:py-24">
                                        <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                            <span className="block">A better way to </span>
                                            <span
                                                className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5">
                        build your machine learning application
                      </span>
                                        </h1>
                                        <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                                            Start using HuoguoML, the only machine learning model management and
                                            deployment platform you and your data science team need.
                                        </p>
                                        <div className="mt-10 sm:mt-12">
                                            <div className="sm:max-w-xl sm:mx-auto lg:mx-0">
                                                <div className="sm:flex">
                                                    <div className="min-w-0">
                                                        <a
                                                            href="https://github.com/huoguoml/huoguoml"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <button
                                                                type="submit"
                                                                className="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                                                            >
                                                                VISIT REPO
                                                            </button>
                                                        </a>
                                                    </div>
                                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                                        <a
                                                            href="https://steven-mi.gitbook.io/huoguoml/"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <button
                                                                className="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                                                            >
                                                                VISIT DOCS
                                                            </button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                                        {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                                        <img
                                            className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                            src={image1}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}