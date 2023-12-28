import Link from 'next/link'
import { Home } from 'lucide-react'
import DropdownNav from './DropdownNav'

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-[80] inline-flex h-12 w-full flex-row items-center bg-white text-[#1c1c1c]">
      <div className="box-border inline-flex h-full flex-grow flex-row items-center border-b border-b-[#EDEFF1] px-5">
        {/* Left */}
        <div className="inline-flex h-full flex-grow flex-row items-center">
          <Link href="/" className="inline-flex h-full flex-row items-center">
            <div className="py-2 pr-2">
              <Home className="h-8 w-8" />
            </div>
            <div className="mr-4 hidden h-[22px] w-auto lg:block">
              <span className="text-lg font-bold leading-5 text-blue-600">
                TODO
              </span>
            </div>
          </Link>

          <DropdownNav />
          <div>Search</div>
        </div>

        {/* Right */}
        <div className="inline-flex flex-grow-0 flex-row items-center">
          Right
        </div>
      </div>
    </header>
  )
}

export default Header
