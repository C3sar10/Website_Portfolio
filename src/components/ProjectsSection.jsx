import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Landing Page",
        description: "A nice and sleek landing page made from a design of a template I found.",
        image: "/projects/project3.png",
        demoURL: "https://c3sar10.github.io/clever-hero-practice/",
        gitHub: "https://github.com/C3sar10/clever-hero-practice"
    },
    {
        id: 2,
        title: "Wordle Clone",
        description: "A fun make on the popular word game 'Wordle' from the New York Times.",
        image: "/projects/project2.png",
        demoURL: "https://c3sar10.github.io/Wordle_Game_Clone/",
        gitHub: "https://github.com/C3sar10/Wordle_Game_Clone"
    },
    {
        id: 3,
        title: "Omelete Recipe Page",
        description: "A responsive omelete recipe page made from a design of a template I found.",
        image: "/projects/project1.png",
        demoURL: "https://c3sar10.github.io/Omelet_Recipe/",
        gitHub: "https://github.com/C3sar10/Omelet_Recipe"
    }
]

export const ProjectsSection = () => {
    return(
        <section id="projects" className="py-24 px-4 relative"> 
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center underline"> Featured <span className="text-primary"> Projects </span></h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects I have done for you to take a look at: 
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card/15 rounded-xl overflow-hidden shadow-xs card-hover">
                             
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 hover:cursor-pointer"/>
                            </div>
                            <div className="p-2">
                                <h3 className="text-xl font-semibold py-10 underline">{project.title}</h3>
                                <p className="text-left text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.demoURL} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"> <ExternalLink size={20}/></a>
                                        <a href={project.gitHub} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"> <Github size={20}/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 "> 
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/C3sar10" target="_blank">
                        Github Account <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    );
}