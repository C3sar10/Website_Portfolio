import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Trilogy Portal",
        description: "Production client portal built with Next.js, Supabase, and PostgreSQL to manage 50+ active players, authenticated dashboards, relational player data, and operational workflows for real clients.",
        image: "/projects/trilogy-portal.jpg",
        demoURL: "https://portal.trilogysoccer.com/",
        gitHub: "https://github.com/C3sar10/Trilogy-Portal"
    },
    {
        id: 2,
        title: "Gridlock Duel",
        description: "Real-time TypeScript board game using React, Express, Socket.io, shared validation, room codes, live game state, turn-based movement, wall placement rules, and reconnect-aware multiplayer sessions.",
        image: "/projects/gridlock-duel.svg",
        demoURL: "https://gridlock-duel-client.vercel.app/",
        gitHub: "https://github.com/C3sar10/gridlock-duel"
    },
    {
        id: 3,
        title: "LASC Soccer Club Website",
        description: "Responsive club website built with Next.js, Strapi CMS, and Cloudinary media workflows so staff can manage teams, events, announcements, and news without code changes.",
        image: "/projects/project3.png",
        demoURL: "https://lasc-website.vercel.app",
        gitHub: "https://github.com/fperezfrancisco/lasc-website"
    },
]

export const ProjectsSection = () => {
    return(
        <section id="projects" className="py-12 px-4 relative"> 
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white underline"> Featured <span className="text-primary"> Projects </span></h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    A few of the full-stack projects I have built recently, including production client work and real-time application architecture.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-between">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card/15 rounded-xl overflow-hidden shadow-xs card-hover">
                             
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-101 hover:cursor-pointer"/>
                            </div>
                            <div className="p-4 flex flex-col min-h-[260px]">
                                <h3 className="text-xl font-semibold mb-4 underline text-left">{project.title}</h3>
                                <p className="text-left text-muted-foreground text-sm mb-4 grow">{project.description}</p>
                                <div className="flex justify-between items-center mt-auto">
                                    <div className="flex space-x-3">
                                        {project.demoURL && (
                                            <a href={project.demoURL} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`} className="text-foreground/80 hover:text-primary transition-colors duration-300"> <ExternalLink size={20}/></a>
                                        )}
                                        <a href={project.gitHub} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub repository`} className="text-foreground/80 hover:text-primary transition-colors duration-300"> <Github size={20}/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 "> 
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/C3sar10" target="_blank" rel="noreferrer">
                        Github Account <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    );
}
