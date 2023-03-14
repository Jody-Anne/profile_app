import Link from 'next/link'
import HeaderComponent from './header';

export default () => (
    <div>
        <HeaderComponent></HeaderComponent>
        <Link href="/">
        Home
        </Link>
    </div>
);
