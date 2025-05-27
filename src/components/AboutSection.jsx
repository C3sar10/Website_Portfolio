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
                            A little about me, I'm a soon-to-be graduate from the University of California San Diego with a degree in Mathematics with an emphasis in Computer Science. Originally from Santa Clrita, I'm passionate about leveraging my skills to solve complex problems and create innovative solutions. When I'm not immersed in code, you'll probably find me playing soccer, tinkering with the piano, or enjoying time outdoors. I love balancing my technical side with creativity and staying active. As I prepare to take the next step in my career, I'm excited to bring my background in math and CS into real-world applications, while continuing to learn and grow.
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
                            I have a strong foundation in both front-end and back-end development. On the front-end, I'm proficient in building dynamic and responsive web applications using React, JavaScript, HTML, and CSS. I enjoy crafting clean, user-friendly interfaces that provide an intuitive experience. On the back-end, I'm well-versed in Python and its powerful libraries like NumPy, Pandas, scikit-learn, and Matplotlib, which I use to analyze data and build machine learning models. I also have experience with C++. My diverse skill set enables me to take on full-stack development projects and solve complex challenges across various domains.
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