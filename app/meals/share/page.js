import Link from "next/link"

export default function ShareMealsPage() {
    return (
        <main>
            <h1>This is the share meals page!</h1>
            <p><Link href="../meals">Meals</Link></p>
        </main>
    )
}