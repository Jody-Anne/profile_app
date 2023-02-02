import Link from 'next/link'
import Image from 'react-bootstrap/Image'
import HeaderComponent from './header';

export default () => (
    <div>
        <HeaderComponent></HeaderComponent>
        
            <h1>HyperionDev Projects</h1>
            <h2>HTML and CSS Projects</h2>
            <h3>Books and More</h3>
            <Link href={"https://github.com/Jody-Anne/BooksandMore"}>
            Books and More
            </Link>
            <p>Books and more was one of the first projects that I had to create,
                We created a website which functioned using HTML and CSS. 
            </p>
            
        <style jsx>{`
        div{
            background:alicewhite;
            text-align: center;
        }
        `}
        </style>
        <Image src="/static/Books.png" className='Nature' alt='Books And More' height={400} width={700}/>
    
            <h3>Crazy Potters</h3>
            <Link href={"https://github.com/Jody-Anne/Capstone-project"}>
            Crazy Potters
            </Link>
            <p> Crazy Potters was the second task that we created and more advanced because we 
                used HTMl, CSS and JavaScript to code the website and ensure that the website was
                fully functional.
            </p>
            <Image src="/static/Potters.png" alt='Potters' height={400} width={700}/>

            <h3>Portfolio</h3>
            <Link href={"https://github.com/Jody-Anne/Portfolio"}>
            Portfolio
            </Link>
            <p>In this project we had to create a portfolio using JQuery and JavaScript aswell as HTML. 
            </p>
            <Image src="/static/Portfolio.png" alt='Portfolio' height={400} width={700}/>

            <h2>React Apps</h2>
            <h3>Minesweeper</h3>
            <Link href={"https://github.com/Jody-Anne/minesweeper"}>
            Minesweeper
            </Link>
            <p>In this React task we were tasked to create Minesweeper the game with React
            </p>
            <Image src="/static/Minesweeper.png" alt='Minesweeper' height={400} width={700}/>
            <p>This app is also on Heroku please see link to it here underneath !</p>
    </div>
);
