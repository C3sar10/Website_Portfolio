import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                        <h1 className="underline text-4xl md:text-6xl font-bold tracking-tight">
                            <span className="opacity-0 animate-fade-in">Hi I'm </span>
                            <span className="text-primary opacity-0 animate-fade-in-delay-1"> {" "}Cesar </span>
                            <span className="text-gradient opacity-0 animate-fade-in-delay-2"> {" "}Perez </span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                            I'm a front-end developer with a passion for creating responsive web applications using modern technologies. I enjoy building sophisticated and enjoyable user experiences that make a real impact in everyday life.
                        </p>

                        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                            <a href="#projects" className="cosmic-button">
                                View my Projects
                            </a>
                        </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer">
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary"/>
            </div>
        </section>
    ); 
}