import { useEffect } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Moxi Studio",
    category: "Creative Agency Website",
    tools: "React, Three.js, GSAP, WebGL",
    image: "/images/project1.png",
  },
  {
    title: "Veloce Audio",
    category: "E-Commerce Experience",
    tools: "Next.js, Tailwind CSS, Stripe, Framer Motion",
    image: "/images/project2.png",
  },
  {
    title: "Aether Analytics",
    category: "SaaS Dashboard UI",
    tools: "TypeScript, React, Recharts, Node.js",
    image: "/images/project3.png",
  },
  {
    title: "Nova Creative",
    category: "Brand Showroom",
    tools: "React, GSAP, CSS Grid, ScrollTrigger",
    image: "/images/project1.png",
  },
  {
    title: "Zephyr Sound",
    category: "Premium Audio Shop",
    tools: "Next.js, GraphQL, Tailwind, Redux",
    image: "/images/project2.png",
  },
  {
    title: "Apex Intelligence",
    category: "AI Control Panel",
    tools: "React, D3.js, WebSockets, Tailwind",
    image: "/images/project3.png",
  },
];

const Work = () => {
  useEffect(() => {
    let ctx: gsap.Context;
    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 769px)", () => {
          let translateX: number = 0;

          function setTranslateX() {
            const box = document.getElementsByClassName("work-box");
            if (!box || box.length === 0) return;
            const container = document.querySelector(".work-container");
            if (!container) return;
            const rectLeft = container.getBoundingClientRect().left;
            const rect = box[0].getBoundingClientRect();
            const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
            let padding: number =
              parseInt(window.getComputedStyle(box[0]).padding) / 2;
            translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
          }

          setTranslateX();

          let timeline = gsap.timeline({
            scrollTrigger: {
              trigger: ".work-section",
              start: "top top",
              end: `+=${translateX}`, // Use actual scroll width
              scrub: true,
              pin: true,
              id: "work",
            },
          });

          timeline.to(".work-flex", {
            x: -translateX,
            ease: "none",
          });
        });
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
