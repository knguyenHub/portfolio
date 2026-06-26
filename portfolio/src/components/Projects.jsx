const projectList = [
    {id: 1, title: "Coyote Howls Website", desc: "Managed project", link: "#"},
    {id: 2, title: "SEQUoIA", desc: "Mathematical Phylogenetic Biology Research project conducted with R and Julia", link: "#"},
];

export default function Projects() {
    return (
        <section id="projects">
            <h2>My Projects</h2>
            {projectList.map((project) => (
            <div key={project.id} className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-cyan-400 transition">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <a href={project.link}>View Live Demo →</a>
            </div>
          ))}
        </section>
    );
}