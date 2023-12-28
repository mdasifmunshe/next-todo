import Link from 'next/link'
import { Bell, Home, Plus } from 'lucide-react'
import { Input } from '@/components/ui/input'
import DropdownNav from './NavDropdown'
import UserDropdownMenu from './UserDropdownMenu'

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
          <div className="flex h-full flex-grow items-center justify-center px-4">
            <div className="flex h-10 w-full items-center justify-center rounded-full border">
              <Input
                type="text"
                placeholder="Search"
                className="rounded-full focus-visible:border focus-visible:border-[#0079D3] focus-visible:bg-[#F6F7F8] focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex h-full items-center justify-end">
          <div className="flex h-full items-center justify-center gap-4">
            <button className="flex h-8 w-8 items-center justify-center rounded-sm hover:bg-[#1a1a1b1a]">
              <Bell className="h-5 w-5" strokeWidth={1.3} />
            </button>
            <Link
              href={'/create'}
              className="flex h-8 w-8 items-center justify-center rounded-sm hover:bg-[#1a1a1b1a]"
            >
              <Plus className="h-6 w-6" strokeWidth={1.3} />
            </Link>
          </div>
          <UserDropdownMenu />
        </div>
      </div>
    </header>
  )
}

export default Header
