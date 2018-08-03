import Link from 'next/link';
import Layout from '../components/MyLayout';

const Index = () => (
    <Layout>
        <p>Hello Next.js</p>
        <div>
            <Link href="/about" replace>
                <button>About Page Link with replace</button>
            </Link>
        </div>
        <div>
            <h2>Link Works With Anything</h2>
            <p>
                Just like a button, you can place any of your custom React components or even a div within a Link.
            </p>
            <p>
                The only requirement for components placed inside a Link is they should accept an onClick prop.
            </p>
        </div>
    </Layout>
);

export default Index;