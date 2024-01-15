import Link from "next/link"
import { notFound } from 'next/navigation'
import Image from "next/image"
import classes from './page.module.css'
import { getMeal } from "@/lib/meals"

export default function MealDetailsPage({ params }) {
    const meal = getMeal(params.mealSlug)

    if (!meal) {
        notFound();
    }

    meal.instructions = meal.instructions.replace(/\n/g, '<br />')

    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={`https://adala-foodies-app-image.s3.amazonaws.com/${meal.image}`} alt={meal.title} fill></Image>
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${meal.creator_email}`}>NAME</a>
                    </p>
                    <p className={classes.summary}>
                        {meal.summary}
                    </p>
                </div>
            </header>
            <main>
                <p className={classes.instructions} dangerouslySetInnerHTML={{__html: meal.instructions}}>
    
                </p>
            </main>
        </>
  )
}