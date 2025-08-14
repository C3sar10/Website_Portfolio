export const AboutSection = () => {
    return(
        <section id="about" className="py-24 px-4 relative">    
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="underline text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items center">
                    <div className="space-y-6 card-hover px-8 py-6 rounded-xl bg-primary/10">
                        <h3 className="text-2xl font-semibold underline">Personal</h3>
                        <p className="text-muted-foreground text-left">
                            I&apos;m a recent graduate from the University of California, San Diego, with a B.S. in Mathematics–Computer Science. Originally from Santa Clarita, I&apos;m driven by a passion for solving complex problems and developing innovative, user-focused solutions. My background combines analytical thinking with a strong foundation in software development, allowing me to approach challenges from both a logical and creative perspective.
                            <br></br>
                            <br></br>
                            Currently, I&apos;m gaining hands-on experience at Vistora Technologies, where I work on full-stack applications that solve real-world business needs in the health industry. Outside of tech, I stay active through soccer, explore music on the piano, and enjoy time outdoors—activities that keep me balanced and energized. I&apos;m eager to continue building impactful digital solutions and growing as a full-stack developer.
                        </p>
                         <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>
                        </div>

                    </div>
                    <div className="space-y-6 card-hover px-8 py-6 rounded-xl bg-primary/10">
                        <h3 className="text-2xl font-semibold underline">Skills</h3>
                        <p className="text-muted-foreground text-left">
                           I bring a strong foundation in both front-end and back-end development, with a focus on building scalable, user-centered web applications. On the front end, I specialize in creating responsive, dynamic interfaces using React, Next.js, Tailwind CSS, JavaScript, HTML, and CSS, always aiming for clean, maintainable code that enhances user experience and accessibility to real world problems.
                            <br></br>
                            <br></br>
                            On the back end, I work with Node.js, Express.js, REST APIs, Firebase, and Google Cloud Platform for database, application deployment, and server creation. I&apos;m also proficient in Python for data analysis, visualization, and machine learning, and have experience with C++ for low-level programming. This versatility allows me to contribute effectively to full-stack projects and deliver impactful, real-world solutions.
                        </p>
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