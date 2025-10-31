import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "LASC Soccer Club Website",
        description: "Responsive club website built with Next.js and Strapi CMS, allowing easy content management and optimized community engagement.",
        image: "/projects/project3.png",
        demoURL: "https://lasc-website.vercel.app",
        gitHub: "https://github.com/fperezfrancisco/lasc-website"
    },
    {
        id: 2,
        title: "Fit Forge",
        description: 'Full-stack fitness app built with Next.js, TypeScript, and Firebase, featuring workout tracking, progress dashboards, and responsive design. (Use "test@gmail.com" for email and "test123" as password for demo).',
        image: "/projects/project2.png",
        demoURL: "https://fit-forge-drab.vercel.app/auth",
        gitHub: "https://github.com/C3sar10/FIT-FORGE"
    },
    {
        id: 3,
        title: "Youtube Clone",
        description: "Full-stack video platform built with Next.js, TypeScript, and Firebase, featuring GCP integration, authentication, and responsive UI. (Not hosted yet, coming soon!)",
        image: "/projects/project4.png",
        // demoURL: "",
        gitHub: "https://github.com/C3sar10/Youtube-Clone"
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-between">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card/15 rounded-xl overflow-hidden shadow-xs card-hover">
                             
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-fit transition-transform duration-500 group-hover:scale-101 hover:cursor-pointer"/>
                            </div>
                            <div className="p-2 flex flex-col">
                                <h3 className="text-xl font-semibold py-10 underline">{project.title}</h3>
                                <p className="text-left text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        {project.demoURL ? (
                                        <>
                                            <a href={project.demoURL} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"> <ExternalLink size={20}/></a>
                                            <a href={project.gitHub} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"> <Github size={20}/></a>
                                        </>
                                        ) : (
                                            <a href={project.gitHub} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"> <Github size={20}/></a>
                                        )}
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