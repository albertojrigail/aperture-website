import Link from "next/link"
import Image from "next/image"

function Header() {
    return (
        <div className="fixed top-0 z-50 px-4 bg-white w-full">
            <div className="flex justify-between items-center border-b-2 w-full py-6 md:space-x-10 mx-auto">
                <div className="inline">
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            width={24}
                            height={24}
                            alt="logo"
                            className="rounded-full"
                        />
                    </Link>

                    <Link href="/">
                        <a className="text-3xl font-medium text-center tracking-wide text-gray-800 pl-2">
                            APERTURE SCIENCE
                        </a>
                    </Link>
                </div>

                <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0 space-x-10 tracking-wider items-center">
                    <Link href="/products">
                        <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                            PRODUCTS
                        </a>
                    </Link>

                    <Link href="/investment">
                        <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                            INVESTMENT
                        </a>
                    </Link>

                    <Link href="/contact">
                        <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                            CONTACT
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
