import Link from "next/link"

export default function DynamicPage({ params }) {
    return (
        <main>
            <h1>This is a dynamically routed page!</h1>
            <p>It is called {params.slug}</p>
            <p><Link href="/meals">Meals</Link></p>
        </main>
    )
}