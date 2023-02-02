import Link from 'next/link'
import HeaderComponent
 from './header'

export default () => (
    <div>
        <HeaderComponent></HeaderComponent>
        <style jsx>{`
        div{
            text-align: center;
        }
        `}
        </style>
        <h1>Hi There ! Please feel Free to Contact me Anytime !</h1>
        <h2>Email Address:</h2>
        <Link href={"mailto:jodybremner@gmail.com"}>jodybremner@gmail.com</Link>
        <h2>Cellphone Number: 0637928337</h2>
    </div>
)