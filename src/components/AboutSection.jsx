export const AboutSection = () => {
    return(
        <section id="about" className="py-12 px-4 relative">    
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="underline text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
                    <div className="flex flex-col justify-between card-hover px-8 py-6 rounded-xl bg-blue-950/20">
                        <div className="flex flex-col gap-4 mb-2">
                            <h3 className="text-2xl font-semibold underline">Who I Am</h3>
                            <p className="text-muted-foreground text-left">
                                I am a full-stack software developer with a B.S. in Mathematics and Computer Science from the University of California, San Diego. My work focuses on building practical software platforms that connect user-facing interfaces, APIs, relational databases, cloud storage, authentication, and real client workflows.
                                <br></br>
                                <br></br>
                                Recently, I have been building systems such as Trilogy Portal, a client-facing soccer operations platform used to manage 50+ active players, and Gridlock Duel, a real-time multiplayer project built around Socket.io, shared TypeScript rules, room state, and server-driven game logic.
                                <br></br>
                                <br></br>
                                I bring a mix of software engineering fundamentals, data-analysis training, and hands-on product building. I am especially interested in roles where I can work across product architecture, backend services, SQL data models, and interfaces that make complex workflows easier to manage.
                            </p>
                        </div>
                         <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>
                        </div>

                    </div>
                    <div className="flex flex-col justify-between card-hover px-8 py-6 rounded-xl bg-blue-950/20">
                        <div className="flex flex-col gap-4 mb-2">
                            <h3 className="text-2xl font-semibold underline">What I Work With</h3>
                            <p className="text-muted-foreground text-left">
                                I work across the pieces that make a full-stack system useful: data models, API routes, authentication, dashboard workflows, real-time events, file/media handling, and responsive interfaces that people can actually use.
                                <br></br>
                                <br></br>
                                My current stack includes React, Next.js, TypeScript, Tailwind CSS, Node.js, Express, REST APIs, Supabase, PostgreSQL, MongoDB, Firebase, Google Cloud Platform, Cloudinary, Strapi, and Socket.io. I am also growing into Docker, Redis, BullMQ, and NestJS for more scalable backend architecture.
                                <br></br>
                                <br></br>
                                My UCSD background gives me strong fundamentals in algorithms, probability, optimization, numerical linear algebra, machine learning, and data analysis with Python, Pandas, NumPy, scikit-learn, and PyTorch.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#projects" className="cosmic-button">
                                {" "}
                                Projects
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
