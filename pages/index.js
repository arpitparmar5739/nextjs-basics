import Link from 'next/link';

const Index = () => (
    <div>
        <div>
            <Link href="/about">
                <a style={{ fontSize: 30 }}>About Page</a>
            </Link>
        </div>
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
    </div>
);

export default Index;