import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren<{}>) {
    return <main className="min-h-screen w-screen font-sans flex flex-col">{children}</main>
}
