import Link from "next/link"

export default function MealsPage() {
    return (
        <main>
            <h1>This is the meals page!</h1>
            <p><Link href="/community">Community</Link></p>
            <p><Link href="/meals/share">Share Meals</Link></p>
            <p><Link href="/meals/dynamic">Dynamic</Link></p>
        </main>
    )
}