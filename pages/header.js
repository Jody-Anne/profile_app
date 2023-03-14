import Link from "next/link"

function HeaderComponent() {    
    return (      
        <div>
        <Link href="/contact">
        Contact.
        </Link>
        <Link href="/projects">Projects.</Link>
        </div>    
    )
}
export default HeaderComponent
