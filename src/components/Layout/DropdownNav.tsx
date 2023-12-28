import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDown, Home } from 'lucide-react'
import Link from 'next/link'

const DropdownNav = () => {
  return (
    <div className="relative box-border h-9 min-w-[72px] lg:w-[270px]">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex h-full w-full justify-between rounded py-0 text-left focus-visible:shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <div className="flex justify-start">
              <Home className="mr-2 h-5 w-5" />
              <span>Home</span>
            </div>
            <ChevronDown className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-[72px] overflow-x-hidden overflow-y-scroll p-0 lg:w-[270px]">
          <DropdownMenuGroup>
            <DropdownMenuItem className="p-0">
              <Link href="/" className="w-full px-6 py-2 hover:bg-accent">
                <span>Home</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default DropdownNav
