export const siteConfig = {
  name: "Flora Gabriagues",
  title: "Optical Payload Performance & Image Quality Consultant",
  description:
  "Freelance Space Systems Engineer supporting Earth Observation payload and platform teams from design to in-orbit performance.",
  accentColor: "#00ffff",
  social: {
    email: "Flora.Gabriagues@etik.com",
    linkedin: "https://www.linkedin.com/in/flora-gabriagues",
    github: "",
  },
  aboutMe:
  "I am a freelance Optical Payload and Image Quality Engineer specializing in Earth Observation missions. I provide remote support to engineering teams across system specification, performance budgets, interface definition, and in-orbit operations. I typically intervene, on short or long term missions, to de-risk designs and support technical decisions at both system and payload level.",
  skills: ["Earth Observation Optical Systems", "Imaging Performance & Budgets","In-Orbit Performance", "Image Processing", "Python"],
  projects: [
    {
      name: "Optical Payload Teams",
      description:
        "You are designing or evolving an optical payload. I support you on system specification, optical performance budgets, interfaces with platform and ground segment, and design trade-offs to de-risk critical phases of the program.",
      link: "/missions/payload",
      skills: ["Optical payloads", "Performance budgets", "Interfaces", "EO systems"],  
    },
    {
      name: "Satellite Platform & Operations Teams",
      description:
        "You are responsible for platform design or satellite operations. I help ensure payload–platform coherence, manage interfaces, assess in-orbit performance, and support payload anomaly analysis in operation.",
      link: "/missions/platform-operator",
      skills: ["Payload–platform interfaces", "AOCS effect on images", "In-orbit imaging operations"],
    },  
    {
      name: "Satellite Images Users",
      description:
        "You use Earth Observation imagery and need to understand its real performance, limits, and uncertainties. I help translate payload design and in-orbit behavior into actionable insights for image quality and use cases.",
      link: "/missions/image-user",
      skills: ["Image quality", "Radiometry", "Geometric performance", "EO data understanding"],
    },
  ],
experience: [
  {
    company: "Independent · Freelance",
    title: "Optical Payload Performance & Image Quality Freelance",
    dateRange: "Jan 2026 – Present · Remote",
    bullets: [
      "Image quality performance analysis for Earth Observation optical payloads (SNR, MTF, spatial resolution, geolocation errors, LOS contributors).",
      "Support to system and payload trade-off studies (optical architectures, detectors, STOP constraints, performance margins).",
      "Technical support to calibration & validation activities and in-orbit performance assessment.",
      "Contribution to system requirements definition and support to calls for tender and proposal phases.",
      "Targeted technical interventions on specific mission phases, short or long term, to de-risk design and operational decisions."
    ],
  },
  {
    company: "PROMÉTHÉE Earth Intelligence",
    title: "Optical Payload & Image Quality Engineer",
    dateRange: "Jan 2024 – Aug 2025 · Toulouse, France",
    bullets: [
      "Optical payload system requirements definition and technical follow-up of subcontractors.",
      "In-flight image quality analysis and development of image processing and performance assessment tools.",
      "Calibration & Validation planning, tasking, and subcontractor technical coordination.",
      "Technical support to Copernicus Contributing Mission (CCM) activities.",
      "Supervision of internships on image processing topics (PRNU/DSNU detection, cloud detection, image deblurring)."
    ],
  },
  {
    company: "Airbus Defence and Space",
    title: "EO Optical Payload Thermal Engineer",
    dateRange: "Sept 2021 – Dec 2023 · Toulouse, France",
    bullets: [
      "Thermal modelling, design trade-offs, and performance analysis for high-resolution EO optical payloads.",
      "Multiphysics (structural, thermal, optical) telescope design and performance optimization.",
      "Development of improved thermal regulation linearization methods for optical systems.",
      "Thermal vacuum test prediction, preparation, and supervision.",
      "Supervision of internships and creation of an internal training program on thermal–optical coupling."
    ],
  },
],
  education: [
    {
      school: "Observatoire de Paris | PSL",
      degree: "Master 2 – Satellite Payload Design & Space Systems Engineering (OSAE)",
      dateRange: "2020 – 2021",
      achievements: [
        "Advanced curriculum in systems engineering and physics applied to scientific satellite payloads.",
        "Core topics: optical detection, optics, signal processing, space environment, EMC, cryogenics.",
        "Specialization in numerical methods and machine learning for space data processing."
      ],
    },
    {
      school: "EPF Engineering School",
      degree: "Engineering Degree – Aeronautics & Space Engineering",
      dateRange: "2015 – 2020",
      achievements: [
        "Generalist engineering education in physics applied to aeronautics and space systems.",
        "Key subjects: heat transfer, structural mechanics, fluid dynamics, electronics, electromagnetics, computer science.",
        "Academic project: pre-design of a nanosatellite launcher for constellation deployment (CNES student project).",
        "Design, prototyping, and flight testing of an unmanned aerial vehicle."
      ],
    },
  ],
};
