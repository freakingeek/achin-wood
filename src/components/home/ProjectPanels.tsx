import type { CSSProperties } from "react";
import type { HomeProject } from "@/data/projects";

type ProjectPanelsProps = {
  project: HomeProject;
  direction: 1 | -1;
};

type PanelStyle = CSSProperties & {
  "--project-base": string;
  "--project-accent": string;
  "--project-deep": string;
  "--project-soft": string;
};

export default function ProjectPanels({ project, direction }: ProjectPanelsProps) {
  const panelStyle: PanelStyle = {
    "--project-base": project.palette.base,
    "--project-accent": project.palette.accent,
    "--project-deep": project.palette.deep,
    "--project-soft": project.palette.soft,
  };

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 grid md:grid-cols-2"
      style={panelStyle}
    >
      <div className="panel-half panel-half-left relative min-h-[50dvh] overflow-hidden md:min-h-dvh">
        <div
          className="project-panel project-panel-left absolute inset-0"
          data-direction={direction === 1 ? "next" : "prev"}
          key={`left-${project.id}`}
        >
          <ArchitecturalSurface side="left" title={project.title} />
        </div>
      </div>

      <div className="panel-half panel-half-right relative min-h-[50dvh] overflow-hidden md:min-h-dvh">
        <div
          className="project-panel project-panel-right absolute inset-0"
          data-direction={direction === 1 ? "next" : "prev"}
          key={`right-${project.id}`}
        >
          <ArchitecturalSurface side="right" title={project.title} />
        </div>
      </div>
    </div>
  );
}

function ArchitecturalSurface({ side, title }: { side: "left" | "right"; title: string }) {
  return (
    <div className={`architectural-surface architectural-surface-${side}`}>
      <div className="surface-vignette" />
      <div className="surface-grid" />
      <div className="wood-slab wood-slab-a" />
      <div className="wood-slab wood-slab-b" />
      <div className="wood-slab wood-slab-c" />
      <div className="joinery-line joinery-line-a" />
      <div className="joinery-line joinery-line-b" />
      <div className="joinery-line joinery-line-c" />
      <div className="surface-label">{title}</div>
    </div>
  );
}
