import Link from 'next/link'
import HeaderComponent from './header';

export default () => (
    <div>
        <HeaderComponent></HeaderComponent>

        <h2>As a Web developer...</h2>
        <h3>Personal Qualities</h3>
        <p>I am a hard working, I am very loyal and work driven.
           I enjoy a work enviroment that challenges me and gives me the opportunity 
           to grow and learn within the company. I enjoy the out doors aswell as staying indoors
           while reading a good novel. My animals are my pride and joy and I treat them like the prince and 
           princesses they are. I enjoy working with others and find it intriging to figure out how to handle people
           and their personality types and how they fit into the work enviroment. I dont like conflict but handle it very well
           and resolve it as needed.
        </p>
        <h3>My passion in Life...</h3>
        <p>Theres nothing more im passionate about then animals and books. Theres just something about snuggling with your pets while
            reading a romance novel. Books have always drawn me in since I was little, even in high school I seemed to be more in the library then
            I was any where else. I reached my goal of becoming deputy Head of the library, this achievement was something that I had wanted since I 
            started high school. I also thought that one day I would become a novelist but seeing as that Im better at reading them than I am at writting 
            I stick to collecting books for my own home library then I do trying to write them. 
        </p>
        <h3>Education Background</h3>
        <p>HyperionDev: Certificate in Full Stack web development.</p>
        <ul>Languages we learned:
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>React</li>
            <li>MongoDB</li>
            <li>Express</li>
            <li>Node.js</li>
            <li>Next.js</li>
        </ul>
        <p>High School: Lyttelton Manor - Bachelors Matric Certificate.</p>
        <h3>Work Experience:</h3>
        <p>I have 5 years working experience, working as an admin at medical companies.</p>
        <ul>
            Lancet Laboratories - 2018 - 2020 Senior Admin:
            <li>Deligated duties to Staff members</li>
            <li>Set up meetings and appointments for staff and clients</li>
            <li>Working on staff files and updating them</li>
            <li>Ensuring that clients are helped and that complaints are dealt with</li>
            <li>Submitting staffs hours monthly for payroll</li>
            <li>Assisting with Audits and sorting out Audit findings</li>
        </ul>
        <ul> 
            Vermaak - 2020 - 2021 Laboratory Assistant:
            <li>Assisting patients to make payments</li>
            <li>Sending samples to other labs</li>
            <li>Handling of samples and processing them</li>
            <li>Delivering results to Doctors rooms</li>
            <li>Ensuring that results are on time</li>
        </ul>
        <ul>
            Lancet Laboratories 2021 - current Admin Clerk:
            <li>Assisting staff with tests</li>
            <li>Training staff with new application</li>
            <li>Answering calls and assisting Drs with queries</li>
            <li>Processing patient information and ensuring that all details are correct</li>
            <li>Working a app that helps with checking of the work that was processed and ensuring that it 
                was done correctly
            </li>
            <li>Correcting errors and training staff correctly</li>
        </ul>
        <style jsx>{`
        ul{
            text-align:left
        }
        div{
            display: inline;
            background:;
            text-align: center;
            margin: 50px;
        }
        `}
        </style>
        <Link href="/">
        Home
        </Link>
    </div>
);
