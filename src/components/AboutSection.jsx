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
                            I'm a soon-to-be graduate from the University of California, San Diego, earning a degree in Mathematics with an emphasis in Computer Science. Originally from Santa Clarita, I’m driven by a passion for solving complex problems and developing innovative, user-focused solutions.

                            My background combines analytical thinking with a strong foundation in software development, allowing me to approach challenges from both a logical and creative perspective. Outside of tech, I enjoy staying active through soccer, exploring music on the piano, and spending time outdoors—activities that keep me balanced and energized.

                            As I look ahead to the next step in my professional journey, I'm excited to apply my skills in real-world settings, contribute to meaningful projects, and continue growing as a developer and problem solver.
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
                           I bring a strong foundation in both front-end and back-end development, with a focus on building scalable, user-centered web applications. On the front end, I specialize in creating responsive and dynamic interfaces using React, JavaScript, HTML, and CSS. I take pride in writing clean, maintainable code that enhances user experience and accessibility.

                            On the back end, I’m proficient in Python and its ecosystem of powerful libraries—including NumPy, Pandas, scikit-learn, and Matplotlib—which I use for data analysis, visualization, and developing machine learning models. I also have experience with C++, adding to my versatility across different technical stacks.

                            This diverse skill set enables me to contribute effectively to full-stack development projects, tackle complex problems, and deliver practical solutions across a range of domains.
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