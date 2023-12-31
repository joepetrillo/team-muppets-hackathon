import * as React from 'react'
import Link from 'next/link'
import { auth } from '@/auth'
import { Button } from '@/components/ui/button'
import { UserMenu } from '@/components/user-menu'

export async function Header() {
  const session = await auth()
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <h1 className="font-bold">Muppets Bank Chatbot</h1>
      {session?.user ? (
        <UserMenu user={session.user} />
      ) : (
        <Button variant="link" asChild className="-ml-2">
          <Link href="/sign-in">Login</Link>
        </Button>
      )}
    </header>
  )
}

// import { Sidebar } from '@/components/sidebar'
// import { SidebarList } from '@/components/sidebar-list'
// import { IconNextChat } from '@/components/ui/icons'
// import { SidebarFooter } from '@/components/sidebar-footer'
// import { ThemeToggle } from '@/components/theme-toggle'
// import { ClearHistory } from '@/components/clear-history'
// import { clearChats } from '@/app/actions'
// {session?.user ? (
//   <Sidebar>
//     <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
//       {/* @ts-ignore */}
//       <SidebarList userId={session?.user?.id} />
//     </React.Suspense>
//     <SidebarFooter>
//       <ThemeToggle />
//       <ClearHistory clearChats={clearChats} />
//     </SidebarFooter>
//   </Sidebar>
// ) : (
//   <Link href="/">
//     <IconNextChat className="w-6 h-6 mr-2 dark:hidden" inverted />
//     <IconNextChat className="hidden w-6 h-6 mr-2 dark:block" />
//   </Link>
// )}
