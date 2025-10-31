import './app.css'
import React from 'react'

const CopyBlock = () => (
    <div className="max-w-3xl mx-auto text-center space-y-8 font-serif">
        <img src="/assets/logo.png" alt="5parkplug"
             className="w-full max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto"/>
        <div className="w-full max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                <div className="space-y-4">
                    <p className="text-base md:text-lg text-neutral-200 leading-relaxed text-left font-serif">
                        Hello there. Welcome.
                        <br/>
                        As you can see, there's nothing here. We have decided to set up shop within the lively street of
                        Instagram.
                    </p>

                    <p className="text-base md:text-lg text-neutral-200 leading-relaxed text-left font-serif">
                        As you can see, there's nothing here. We have decided to set up shop within the lively street of
                        Instagram.
                    </p>

                    <p className="text-base md:text-lg text-neutral-200 leading-relaxed text-left font-serif">
                        At 5parkplug, we are a creative ensemble that's as
                        budget-friendly as your favourite workshop, and we believe in the uniqueness of every project –
                        just like the distinctive blend of your five senses.
                    </p>

                    <p className="text-base md:text-lg text-neutral-200 leading-relaxed text-left font-serif">
                        We are small, precise, and utterly unique. Think of us as the finely tuned gears in a watch,
                        each component working in harmony. We assemble a team tailored to your needs. With decades of
                        industry experience and the fresh enthusiasm of the youngest minds, we're like the perfectly
                        balanced cocktail of innovation.
                    </p>
                </div>
                <div className="space-y-4">
                    <p className="text-base md:text-lg text-neutral-200 leading-relaxed text-left font-serif">
                        We specialize in crafting brand and product identities, devising advertising and marketing
                        strategies, and delivering various forms of visual communication.
                    </p>

                    <p className="text-base md:text-lg text-neutral-200 leading-relaxed text-left font-serif">
                        Follow us at <a href="https://www.instagram.com/5parkplug.turns.you.on/" target="_blank" rel="noopener noreferrer" className="font-bold">5parkplug.turns.you.on</a> for
                        an immersive experience, discover and interact with our mechanics. Engage with us. We would
                        absolutely love to hear your thoughts on our posts. See you there!!
                    </p>
                    <p className="text-base md:text-lg text-neutral-200 leading-relaxed text-left font-serif" style={{ marginTop: '2rem' }}>
                        Warmest regards,</p>

                    <div className="relative flex items-left">
                        <img src="/assets/signoff-star.png" alt="" className="w-40 h-auto opacity-95"/>
                    </div>
                </div>
            </div>
        </div>

    </div>
)

export default function App() {
    return (
        <main
            className="min-h-screen text-white bg-radial-mask flex items-center justify-center px-6 py-20 relative overflow-hidden font-serif">
            <div className="bg-star" aria-hidden="true"/>
            <div className="layer w-full">
                <CopyBlock/>
            </div>
        </main>
    )
}
