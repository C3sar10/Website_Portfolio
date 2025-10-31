export const AboutSection = () => {
    return(
        <section id="about" className="py-24 px-4 relative">    
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="underline text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items center">
                    <div className="flex flex-col justify-between card-hover px-8 py-6 rounded-xl bg-primary/10">
                        <div className="flex flex-col gap-4 mb-2">
                            <h3 className="text-2xl font-semibold underline">Personal</h3>
                            <p className="text-muted-foreground text-left">
                                I’m a recent graduate from the University of California, San Diego, with a B.S. in Mathematics–Computer Science. Originally from Santa Clarita, I’m passionate about building modern, responsive web applications that connect design and functionality in meaningful ways.
                                <br></br>
                                <br></br>
                                My background combines analytical problem-solving with hands-on full-stack development experience. At Vistora Technologies, I worked on end-to-end web solutions—building interfaces with React and Next.js, integrating APIs, and managing backend data using cloud platforms like Firebase and Google Cloud.
                                <br></br>
                                <br></br>
                                Outside of coding, I stay active through soccer, explore music on the piano, and enjoy time outdoors—activities that keep me creative and balanced. I’m always eager to take on new challenges, contribute to impactful projects, and continue growing as a full-stack web developer.
                            </p>
                        </div>
                         <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>
                        </div>

                    </div>
                    <div className="flex flex-col justify-between card-hover px-8 py-6 rounded-xl bg-primary/10">
                        <div className="flex flex-col gap-4 mb-2">
                            <h3 className="text-2xl font-semibold underline">Skills</h3>
                            <p className="text-muted-foreground text-left">
                            I bring a strong foundation in both front-end and back-end development, with a focus on building scalable, user-centered web applications.
                                <br></br>
                                <br></br>
                                On the front end, I create responsive, dynamic interfaces using React, Next.js, Tailwind CSS, JavaScript, HTML, and CSS — always writing clean, maintainable code that enhances performance, accessibility, and overall user experience.
                                <br></br>
                                <br></br>
                                On the back end, I work with Node.js, Express.js, REST APIs, Firebase, and Google Cloud Platform for server-side logic, database management, and deployment. I also have experience integrating CMS platforms such as Strapi, and I’m currently expanding my knowledge of WordPress for content-driven development.
                                <br></br>
                                <br></br>
                                Beyond web development, I’m proficient in Python for data analysis, visualization, and machine learning, and experienced in C++ for lower-level programming. This versatility allows me to contribute across the full stack, bridging design and functionality to deliver efficient, real-world solutions.
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