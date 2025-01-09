import Link from "next/link"
import { SearchForm } from "@/components/search-form"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

const buttonStyle: React.CSSProperties = {
    padding: '5px 10px',
    fontSize: '1rem',
    backgroundColor: 'grey',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
};
  

export default function Page() {
  return (
    <SidebarProvider>
        <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 border-b">
                    <div className="flex items-center gap-2 px-3">
                        <SearchForm />
                        <div>
                            <Link href="/login" passHref>
                                <button style={buttonStyle}>LogIn</button>
                            </Link>

                            <Link href="/signin" passHref>
                                <button style={buttonStyle}>Sign Up</button>
                            </Link>
                        </div>
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="aspect-video rounded-xl bg-muted/60" />
                    <div className="aspect-video rounded-xl bg-muted/60" />
                    <div className="aspect-video rounded-xl bg-muted/60" />
                </div>
                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/60 md:min-h-min" />
                </div>
        </SidebarInset>
    </SidebarProvider> 

  )
}
                
           