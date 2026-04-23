const interestCategories = {
    "Technology": [
        "Coding",
        "AI & Machine Learning",
        "Cybersecurity",
        "Data Science",
        "Game Development",
        "Cloud Computing",
        "Robotics",
        "Blockchain & Web3",
        "Internet of Things"
    ],
    "Business & Finance": [
        "Entrepreneurship",
        "Marketing",
        "Finance",
        "Stock Trading",
        "E-commerce",
        "Consulting",
        "Human Resources",
        "Real Estate"
    ],
    "Creative Fields": [
        "Music",
        "Photography",
        "Graphic Design",
        "Video Editing",
        "Writing",
        "Animation",
        "UI/UX Design",
        "Architecture",
        "Interior Design"
    ],
    "Science & Engineering": [
        "Physics",
        "Chemistry",
        "Biology",
        "Space Science",
        "Mechanical Engineering",
        "Civil Engineering",
        "Environmental Science"
    ],
    "Sports": [
        "Cricket",
        "Football",
        "Basketball",
        "Fitness & Gym",
        "Athletics",
        "Tennis"
    ],
    "Media & Communication": [
        "Content Creation",
        "Blogging",
        "Journalism",
        "Public Speaking",
        "Public Relations"
    ],
    "Other": [
        "Teaching",
        "Psychology",
        "Law",
        "Healthcare",
        "Travel & Tourism",
        "Fashion",
        "Gaming",
        "Cooking",
        "Social Work",
        "Dentistry"
    ]
};

const roleDatabase = {
    "Coding": [
        {
            "name": "Creative Coding Manager",
            "skills": [
                "api design",
                "css",
                "docker",
                "node.js",
                "javascript",
                "git",
                "aws",
                "data analysis"
            ]
        },
        {
            "name": "Junior Coding Architect",
            "skills": [
                "sql",
                "security",
                "problem solving",
                "cloud computing",
                "git",
                "data analysis",
                "html",
                "system design"
            ]
        },
        {
            "name": "Chief Coding Specialist",
            "skills": [
                "agile",
                "javascript",
                "security",
                "node.js",
                "system design",
                "html",
                "sql",
                "python"
            ]
        },
        {
            "name": "Coding Tester",
            "skills": [
                "node.js",
                "docker",
                "git",
                "data analysis",
                "security",
                "sql",
                "aws"
            ]
        },
        {
            "name": "Freelance Coding Architect",
            "skills": [
                "security",
                "git",
                "problem solving",
                "css",
                "cloud computing",
                "docker",
                "node.js"
            ]
        },
        {
            "name": "Coding Specialist",
            "skills": [
                "git",
                "node.js",
                "agile",
                "system design",
                "api design"
            ]
        },
        {
            "name": "Creative Coding Tester",
            "skills": [
                "react",
                "python",
                "docker",
                "node.js",
                "html"
            ]
        },
        {
            "name": "Lead Coding Architect",
            "skills": [
                "system design",
                "aws",
                "css",
                "node.js",
                "git",
                "cloud computing",
                "html",
                "agile"
            ]
        },
        {
            "name": "Lead Coding Manager",
            "skills": [
                "data analysis",
                "cloud computing",
                "api design",
                "css",
                "aws",
                "docker",
                "system design",
                "python"
            ]
        },
        {
            "name": "Lead Coding Developer",
            "skills": [
                "html",
                "docker",
                "react",
                "javascript",
                "security",
                "cloud computing"
            ]
        },
        {
            "name": "Assistant Coding Manager",
            "skills": [
                "css",
                "system design",
                "security",
                "python",
                "html",
                "data analysis"
            ]
        },
        {
            "name": "Coding Developer",
            "skills": [
                "css",
                "git",
                "node.js",
                "sql",
                "problem solving",
                "python",
                "aws"
            ]
        },
        {
            "name": "Chief Coding Engineer",
            "skills": [
                "docker",
                "agile",
                "data analysis",
                "node.js",
                "problem solving",
                "security",
                "sql"
            ]
        },
        {
            "name": "Technical Coding Lead",
            "skills": [
                "data analysis",
                "sql",
                "html",
                "docker",
                "css",
                "react",
                "javascript",
                "security"
            ]
        },
        {
            "name": "Creative Coding Engineer",
            "skills": [
                "python",
                "data analysis",
                "cloud computing",
                "agile",
                "node.js",
                "git",
                "system design"
            ]
        }
    ],
    "AI & Machine Learning": [
        {
            "name": "Principal AI Engineer",
            "skills": [
                "agile",
                "security",
                "javascript",
                "api design",
                "nlp",
                "cloud computing"
            ]
        },
        {
            "name": "Creative AI & Machine Learning Consultant",
            "skills": [
                "system design",
                "security",
                "pytorch",
                "git",
                "data analysis",
                "tensorflow",
                "neural networks"
            ]
        },
        {
            "name": "Creative AI Architect",
            "skills": [
                "agile",
                "data analysis",
                "tensorflow",
                "system design",
                "problem solving",
                "git"
            ]
        },
        {
            "name": "Creative Machine Learning Consultant",
            "skills": [
                "api design",
                "neural networks",
                "javascript",
                "agile",
                "git"
            ]
        },
        {
            "name": "Lead Machine Learning Tester",
            "skills": [
                "data analysis",
                "computer vision",
                "security",
                "neural networks",
                "tensorflow",
                "agile"
            ]
        },
        {
            "name": "Creative Machine Learning Specialist",
            "skills": [
                "git",
                "computer vision",
                "cloud computing",
                "neural networks",
                "agile",
                "problem solving",
                "api design"
            ]
        },
        {
            "name": "Machine Learning Architect",
            "skills": [
                "agile",
                "problem solving",
                "neural networks",
                "git",
                "tensorflow",
                "javascript"
            ]
        },
        {
            "name": "Freelance AI Analyst",
            "skills": [
                "agile",
                "problem solving",
                "computer vision",
                "system design",
                "python",
                "neural networks",
                "nlp",
                "pytorch"
            ]
        },
        {
            "name": "Junior Machine Learning Developer",
            "skills": [
                "tensorflow",
                "security",
                "api design",
                "pytorch",
                "nlp",
                "javascript",
                "git"
            ]
        },
        {
            "name": "Global AI Specialist",
            "skills": [
                "python",
                "agile",
                "pytorch",
                "git",
                "neural networks",
                "problem solving"
            ]
        },
        {
            "name": "Associate AI Architect",
            "skills": [
                "tensorflow",
                "git",
                "cloud computing",
                "security",
                "system design",
                "nlp",
                "data analysis"
            ]
        },
        {
            "name": "Technical AI & Machine Learning Researcher",
            "skills": [
                "nlp",
                "computer vision",
                "data analysis",
                "system design",
                "agile",
                "api design"
            ]
        },
        {
            "name": "Lead Machine Learning Architect",
            "skills": [
                "git",
                "system design",
                "python",
                "api design",
                "agile",
                "problem solving",
                "tensorflow",
                "nlp"
            ]
        },
        {
            "name": "Technical AI Researcher",
            "skills": [
                "javascript",
                "api design",
                "tensorflow",
                "data analysis",
                "problem solving"
            ]
        },
        {
            "name": "Independent AI Tester",
            "skills": [
                "javascript",
                "agile",
                "python",
                "computer vision",
                "api design",
                "git"
            ]
        }
    ],
    "Cybersecurity": [
        {
            "name": "Cybersecurity Manager",
            "skills": [
                "security",
                "firewalls",
                "javascript",
                "ethical hacking",
                "system design",
                "cryptography",
                "agile"
            ]
        },
        {
            "name": "Chief Cybersecurity Engineer",
            "skills": [
                "agile",
                "system design",
                "cryptography",
                "ethical hacking",
                "linux"
            ]
        },
        {
            "name": "Freelance Cybersecurity Architect",
            "skills": [
                "security",
                "ethical hacking",
                "problem solving",
                "cryptography",
                "data analysis",
                "git"
            ]
        },
        {
            "name": "Global Cybersecurity Architect",
            "skills": [
                "problem solving",
                "linux",
                "data analysis",
                "git",
                "javascript",
                "python",
                "incident response",
                "ethical hacking"
            ]
        },
        {
            "name": "Regional Cybersecurity Developer",
            "skills": [
                "javascript",
                "api design",
                "python",
                "security",
                "system design",
                "agile",
                "ethical hacking"
            ]
        },
        {
            "name": "Senior Cybersecurity Manager",
            "skills": [
                "incident response",
                "api design",
                "javascript",
                "agile",
                "cryptography",
                "cloud computing",
                "firewalls",
                "system design"
            ]
        },
        {
            "name": "Lead Cybersecurity Manager",
            "skills": [
                "linux",
                "agile",
                "ethical hacking",
                "javascript",
                "git"
            ]
        },
        {
            "name": "Assistant Cybersecurity Analyst",
            "skills": [
                "python",
                "system design",
                "cloud computing",
                "agile",
                "incident response",
                "data analysis"
            ]
        },
        {
            "name": "Chief Cybersecurity Developer",
            "skills": [
                "api design",
                "incident response",
                "linux",
                "cloud computing",
                "git",
                "firewalls",
                "ethical hacking",
                "security"
            ]
        },
        {
            "name": "Corporate Cybersecurity Engineer",
            "skills": [
                "python",
                "problem solving",
                "security",
                "system design",
                "api design",
                "agile",
                "ethical hacking"
            ]
        },
        {
            "name": "Principal Cybersecurity Developer",
            "skills": [
                "cryptography",
                "linux",
                "python",
                "ethical hacking",
                "cloud computing",
                "data analysis",
                "firewalls",
                "javascript"
            ]
        },
        {
            "name": "Cybersecurity Specialist",
            "skills": [
                "cryptography",
                "cloud computing",
                "system design",
                "agile",
                "security",
                "incident response"
            ]
        },
        {
            "name": "Senior Cybersecurity Architect",
            "skills": [
                "cloud computing",
                "git",
                "incident response",
                "api design",
                "problem solving",
                "data analysis"
            ]
        },
        {
            "name": "Regional Cybersecurity Specialist",
            "skills": [
                "security",
                "cryptography",
                "data analysis",
                "agile",
                "firewalls"
            ]
        },
        {
            "name": "Creative Cybersecurity Lead",
            "skills": [
                "agile",
                "cloud computing",
                "system design",
                "git",
                "problem solving",
                "cryptography",
                "incident response"
            ]
        }
    ],
    "Data Science": [
        {
            "name": "Data Science Tester",
            "skills": [
                "cloud computing",
                "agile",
                "api design",
                "system design",
                "git",
                "advanced data science"
            ]
        },
        {
            "name": "Freelance Data Science Tester",
            "skills": [
                "python",
                "advanced data science",
                "problem solving",
                "javascript",
                "api design"
            ]
        },
        {
            "name": "Technical Data Science Engineer",
            "skills": [
                "system design",
                "javascript",
                "data analysis",
                "advanced data science",
                "data science strategy",
                "python",
                "data science fundamentals"
            ]
        },
        {
            "name": "Creative Data Science Researcher",
            "skills": [
                "data science strategy",
                "data analysis",
                "python",
                "advanced data science",
                "security",
                "javascript",
                "system design",
                "cloud computing"
            ]
        },
        {
            "name": "Freelance Data Science Developer",
            "skills": [
                "advanced data science",
                "problem solving",
                "javascript",
                "system design",
                "data science fundamentals",
                "cloud computing",
                "data science strategy"
            ]
        },
        {
            "name": "Global Data Science Engineer",
            "skills": [
                "api design",
                "data science fundamentals",
                "data analysis",
                "advanced data science",
                "security",
                "javascript",
                "git",
                "agile"
            ]
        },
        {
            "name": "Associate Data Science Engineer",
            "skills": [
                "git",
                "security",
                "data science fundamentals",
                "data analysis",
                "problem solving",
                "agile"
            ]
        },
        {
            "name": "Technical Data Science Developer",
            "skills": [
                "agile",
                "problem solving",
                "git",
                "data analysis",
                "api design",
                "cloud computing"
            ]
        },
        {
            "name": "Assistant Data Science Specialist",
            "skills": [
                "javascript",
                "python",
                "api design",
                "data analysis",
                "security"
            ]
        },
        {
            "name": "Regional Data Science Tester",
            "skills": [
                "data science fundamentals",
                "problem solving",
                "data analysis",
                "security",
                "python",
                "agile"
            ]
        },
        {
            "name": "Chief Data Science Lead",
            "skills": [
                "agile",
                "git",
                "python",
                "security",
                "system design",
                "data analysis",
                "api design"
            ]
        },
        {
            "name": "Data Science Consultant",
            "skills": [
                "cloud computing",
                "security",
                "git",
                "problem solving",
                "data science strategy",
                "python",
                "system design"
            ]
        },
        {
            "name": "Assistant Data Science Analyst",
            "skills": [
                "data science fundamentals",
                "cloud computing",
                "data science strategy",
                "agile",
                "api design"
            ]
        },
        {
            "name": "Freelance Data Science Engineer",
            "skills": [
                "javascript",
                "cloud computing",
                "git",
                "api design",
                "data analysis",
                "advanced data science",
                "data science strategy",
                "python"
            ]
        },
        {
            "name": "Data Science Architect",
            "skills": [
                "problem solving",
                "agile",
                "data science strategy",
                "advanced data science",
                "security"
            ]
        }
    ],
    "Game Development": [
        {
            "name": "Independent Game Development Lead",
            "skills": [
                "python",
                "api design",
                "problem solving",
                "data analysis",
                "game development strategy",
                "advanced game development"
            ]
        },
        {
            "name": "Game Development Consultant",
            "skills": [
                "system design",
                "data analysis",
                "security",
                "game development strategy",
                "agile"
            ]
        },
        {
            "name": "Regional Game Development Researcher",
            "skills": [
                "agile",
                "system design",
                "security",
                "api design",
                "problem solving",
                "advanced game development",
                "cloud computing"
            ]
        },
        {
            "name": "Game Development Tester",
            "skills": [
                "agile",
                "git",
                "javascript",
                "api design",
                "cloud computing",
                "data analysis",
                "game development strategy"
            ]
        },
        {
            "name": "Chief Game Development Specialist",
            "skills": [
                "api design",
                "git",
                "system design",
                "javascript",
                "security",
                "game development fundamentals",
                "python"
            ]
        },
        {
            "name": "Technical Game Development Specialist",
            "skills": [
                "game development strategy",
                "agile",
                "game development fundamentals",
                "system design",
                "cloud computing",
                "api design"
            ]
        },
        {
            "name": "Game Development Researcher",
            "skills": [
                "advanced game development",
                "game development strategy",
                "python",
                "agile",
                "api design",
                "problem solving"
            ]
        },
        {
            "name": "Principal Game Development Engineer",
            "skills": [
                "security",
                "problem solving",
                "git",
                "python",
                "system design",
                "advanced game development",
                "javascript",
                "agile"
            ]
        },
        {
            "name": "Technical Game Development Developer",
            "skills": [
                "agile",
                "problem solving",
                "python",
                "game development strategy",
                "cloud computing"
            ]
        },
        {
            "name": "Game Development Architect",
            "skills": [
                "agile",
                "javascript",
                "git",
                "game development fundamentals",
                "advanced game development"
            ]
        },
        {
            "name": "Senior Game Development Lead",
            "skills": [
                "problem solving",
                "game development strategy",
                "system design",
                "game development fundamentals",
                "agile",
                "javascript",
                "security"
            ]
        },
        {
            "name": "Corporate Game Development Consultant",
            "skills": [
                "security",
                "system design",
                "cloud computing",
                "game development strategy",
                "agile"
            ]
        },
        {
            "name": "Global Game Development Developer",
            "skills": [
                "javascript",
                "agile",
                "git",
                "game development strategy",
                "data analysis",
                "advanced game development",
                "security"
            ]
        },
        {
            "name": "Global Game Development Lead",
            "skills": [
                "system design",
                "game development fundamentals",
                "python",
                "problem solving",
                "advanced game development"
            ]
        },
        {
            "name": "Freelance Game Development Specialist",
            "skills": [
                "javascript",
                "git",
                "api design",
                "python",
                "problem solving",
                "game development fundamentals",
                "data analysis"
            ]
        }
    ],
    "Cloud Computing": [
        {
            "name": "Regional Cloud Computing Researcher",
            "skills": [
                "cloud computing strategy",
                "cloud computing",
                "python",
                "data analysis",
                "javascript",
                "agile"
            ]
        },
        {
            "name": "Cloud Computing Architect",
            "skills": [
                "cloud computing strategy",
                "problem solving",
                "security",
                "system design",
                "git",
                "api design",
                "python"
            ]
        },
        {
            "name": "Senior Cloud Computing Architect",
            "skills": [
                "data analysis",
                "cloud computing fundamentals",
                "system design",
                "problem solving",
                "cloud computing strategy"
            ]
        },
        {
            "name": "Independent Cloud Computing Developer",
            "skills": [
                "python",
                "data analysis",
                "cloud computing strategy",
                "security",
                "javascript",
                "problem solving",
                "api design"
            ]
        },
        {
            "name": "Junior Cloud Computing Consultant",
            "skills": [
                "cloud computing fundamentals",
                "javascript",
                "agile",
                "system design",
                "git",
                "advanced cloud computing"
            ]
        },
        {
            "name": "Assistant Cloud Computing Analyst",
            "skills": [
                "api design",
                "cloud computing",
                "security",
                "problem solving",
                "data analysis"
            ]
        },
        {
            "name": "Freelance Cloud Computing Lead",
            "skills": [
                "data analysis",
                "problem solving",
                "agile",
                "python",
                "javascript",
                "cloud computing",
                "security"
            ]
        },
        {
            "name": "Assistant Cloud Computing Engineer",
            "skills": [
                "problem solving",
                "python",
                "security",
                "api design",
                "cloud computing strategy",
                "javascript",
                "system design"
            ]
        },
        {
            "name": "Chief Cloud Computing Analyst",
            "skills": [
                "data analysis",
                "problem solving",
                "javascript",
                "cloud computing fundamentals",
                "cloud computing",
                "agile",
                "advanced cloud computing",
                "cloud computing strategy"
            ]
        },
        {
            "name": "Cloud Computing Developer",
            "skills": [
                "problem solving",
                "advanced cloud computing",
                "api design",
                "cloud computing strategy",
                "system design",
                "python"
            ]
        },
        {
            "name": "Regional Cloud Computing Tester",
            "skills": [
                "cloud computing fundamentals",
                "data analysis",
                "cloud computing",
                "security",
                "agile",
                "cloud computing strategy",
                "api design",
                "python"
            ]
        },
        {
            "name": "Cloud Computing Engineer",
            "skills": [
                "data analysis",
                "cloud computing fundamentals",
                "agile",
                "git",
                "problem solving",
                "cloud computing strategy",
                "advanced cloud computing",
                "cloud computing"
            ]
        },
        {
            "name": "Technical Cloud Computing Developer",
            "skills": [
                "cloud computing fundamentals",
                "data analysis",
                "git",
                "agile",
                "problem solving",
                "advanced cloud computing"
            ]
        },
        {
            "name": "Global Cloud Computing Analyst",
            "skills": [
                "api design",
                "git",
                "cloud computing",
                "cloud computing strategy",
                "data analysis"
            ]
        },
        {
            "name": "Technical Cloud Computing Lead",
            "skills": [
                "python",
                "cloud computing",
                "system design",
                "advanced cloud computing",
                "cloud computing fundamentals",
                "security",
                "cloud computing strategy"
            ]
        }
    ],
    "Robotics": [
        {
            "name": "Senior Robotics Developer",
            "skills": [
                "javascript",
                "robotics strategy",
                "problem solving",
                "data analysis",
                "advanced robotics",
                "security",
                "robotics fundamentals",
                "system design"
            ]
        },
        {
            "name": "Corporate Robotics Lead",
            "skills": [
                "data analysis",
                "advanced robotics",
                "javascript",
                "robotics fundamentals",
                "python",
                "cloud computing",
                "problem solving",
                "api design"
            ]
        },
        {
            "name": "Robotics Engineer",
            "skills": [
                "data analysis",
                "problem solving",
                "agile",
                "cloud computing",
                "javascript",
                "robotics fundamentals",
                "robotics strategy",
                "system design"
            ]
        },
        {
            "name": "Robotics Analyst",
            "skills": [
                "cloud computing",
                "agile",
                "git",
                "system design",
                "robotics strategy"
            ]
        },
        {
            "name": "Corporate Robotics Consultant",
            "skills": [
                "advanced robotics",
                "system design",
                "agile",
                "robotics fundamentals",
                "robotics strategy",
                "javascript",
                "api design"
            ]
        },
        {
            "name": "Principal Robotics Developer",
            "skills": [
                "javascript",
                "advanced robotics",
                "data analysis",
                "api design",
                "security",
                "cloud computing",
                "python",
                "problem solving"
            ]
        },
        {
            "name": "Regional Robotics Lead",
            "skills": [
                "python",
                "system design",
                "agile",
                "api design",
                "problem solving"
            ]
        },
        {
            "name": "Chief Robotics Researcher",
            "skills": [
                "advanced robotics",
                "cloud computing",
                "javascript",
                "agile",
                "system design",
                "python",
                "problem solving",
                "security"
            ]
        },
        {
            "name": "Technical Robotics Manager",
            "skills": [
                "robotics fundamentals",
                "cloud computing",
                "robotics strategy",
                "problem solving",
                "advanced robotics",
                "git",
                "agile"
            ]
        },
        {
            "name": "Robotics Consultant",
            "skills": [
                "robotics strategy",
                "data analysis",
                "api design",
                "system design",
                "javascript"
            ]
        },
        {
            "name": "Regional Robotics Tester",
            "skills": [
                "python",
                "cloud computing",
                "data analysis",
                "problem solving",
                "git",
                "security",
                "api design"
            ]
        },
        {
            "name": "Lead Robotics Engineer",
            "skills": [
                "git",
                "problem solving",
                "javascript",
                "cloud computing",
                "advanced robotics",
                "system design",
                "robotics strategy"
            ]
        },
        {
            "name": "Robotics Researcher",
            "skills": [
                "robotics strategy",
                "python",
                "problem solving",
                "javascript",
                "robotics fundamentals",
                "security"
            ]
        },
        {
            "name": "Creative Robotics Specialist",
            "skills": [
                "security",
                "robotics strategy",
                "problem solving",
                "system design",
                "advanced robotics",
                "api design"
            ]
        },
        {
            "name": "Associate Robotics Consultant",
            "skills": [
                "robotics strategy",
                "security",
                "robotics fundamentals",
                "javascript",
                "advanced robotics"
            ]
        }
    ],
    "Blockchain & Web3": [
        {
            "name": "Principal Blockchain Researcher",
            "skills": [
                "git",
                "advanced blockchain & web3",
                "cloud computing",
                "problem solving",
                "agile"
            ]
        },
        {
            "name": "Regional Blockchain Architect",
            "skills": [
                "data analysis",
                "system design",
                "problem solving",
                "blockchain & web3 fundamentals",
                "python",
                "advanced blockchain & web3",
                "security"
            ]
        },
        {
            "name": "Corporate Web3 Architect",
            "skills": [
                "agile",
                "advanced blockchain & web3",
                "system design",
                "python",
                "cloud computing",
                "javascript"
            ]
        },
        {
            "name": "Independent Blockchain Lead",
            "skills": [
                "javascript",
                "api design",
                "agile",
                "blockchain & web3 strategy",
                "cloud computing",
                "system design",
                "problem solving"
            ]
        },
        {
            "name": "Corporate Blockchain & Web3 Tester",
            "skills": [
                "blockchain & web3 strategy",
                "blockchain & web3 fundamentals",
                "javascript",
                "security",
                "agile",
                "cloud computing"
            ]
        },
        {
            "name": "Technical Blockchain Consultant",
            "skills": [
                "data analysis",
                "python",
                "blockchain & web3 strategy",
                "blockchain & web3 fundamentals",
                "advanced blockchain & web3",
                "javascript",
                "system design",
                "git"
            ]
        },
        {
            "name": "Global Blockchain Lead",
            "skills": [
                "advanced blockchain & web3",
                "data analysis",
                "blockchain & web3 strategy",
                "api design",
                "git",
                "security",
                "system design",
                "agile"
            ]
        },
        {
            "name": "Global Blockchain & Web3 Engineer",
            "skills": [
                "git",
                "api design",
                "data analysis",
                "cloud computing",
                "javascript",
                "security",
                "blockchain & web3 fundamentals"
            ]
        },
        {
            "name": "Global Web3 Specialist",
            "skills": [
                "javascript",
                "blockchain & web3 fundamentals",
                "data analysis",
                "api design",
                "advanced blockchain & web3",
                "git"
            ]
        },
        {
            "name": "Principal Blockchain & Web3 Analyst",
            "skills": [
                "problem solving",
                "api design",
                "agile",
                "cloud computing",
                "javascript",
                "git",
                "security"
            ]
        },
        {
            "name": "Assistant Blockchain & Web3 Analyst",
            "skills": [
                "javascript",
                "blockchain & web3 fundamentals",
                "git",
                "problem solving",
                "api design"
            ]
        },
        {
            "name": "Freelance Blockchain Specialist",
            "skills": [
                "cloud computing",
                "blockchain & web3 strategy",
                "blockchain & web3 fundamentals",
                "python",
                "agile",
                "javascript",
                "security",
                "problem solving"
            ]
        },
        {
            "name": "Principal Blockchain Manager",
            "skills": [
                "problem solving",
                "system design",
                "agile",
                "api design",
                "cloud computing",
                "javascript"
            ]
        },
        {
            "name": "Associate Web3 Manager",
            "skills": [
                "cloud computing",
                "security",
                "python",
                "data analysis",
                "git"
            ]
        },
        {
            "name": "Associate Blockchain Researcher",
            "skills": [
                "git",
                "cloud computing",
                "advanced blockchain & web3",
                "agile",
                "javascript",
                "data analysis"
            ]
        }
    ],
    "Internet of Things": [
        {
            "name": "Technical Internet of Things Engineer",
            "skills": [
                "internet of things strategy",
                "agile",
                "internet of things fundamentals",
                "problem solving",
                "git",
                "data analysis"
            ]
        },
        {
            "name": "Regional Internet of Things Analyst",
            "skills": [
                "advanced internet of things",
                "agile",
                "git",
                "internet of things strategy",
                "javascript",
                "api design"
            ]
        },
        {
            "name": "Technical Internet of Things Architect",
            "skills": [
                "internet of things strategy",
                "system design",
                "agile",
                "git",
                "api design",
                "security",
                "cloud computing"
            ]
        },
        {
            "name": "Assistant Internet of Things Researcher",
            "skills": [
                "security",
                "api design",
                "problem solving",
                "git",
                "internet of things strategy",
                "python",
                "internet of things fundamentals",
                "data analysis"
            ]
        },
        {
            "name": "Assistant Internet of Things Lead",
            "skills": [
                "system design",
                "agile",
                "internet of things strategy",
                "git",
                "advanced internet of things",
                "javascript",
                "python",
                "internet of things fundamentals"
            ]
        },
        {
            "name": "Global Internet of Things Architect",
            "skills": [
                "system design",
                "security",
                "internet of things strategy",
                "javascript",
                "advanced internet of things",
                "problem solving",
                "python",
                "git"
            ]
        },
        {
            "name": "Internet of Things Tester",
            "skills": [
                "git",
                "data analysis",
                "agile",
                "internet of things fundamentals",
                "advanced internet of things",
                "problem solving",
                "python"
            ]
        },
        {
            "name": "Creative Internet of Things Manager",
            "skills": [
                "git",
                "security",
                "problem solving",
                "api design",
                "agile",
                "system design",
                "javascript"
            ]
        },
        {
            "name": "Internet of Things Consultant",
            "skills": [
                "agile",
                "system design",
                "cloud computing",
                "data analysis",
                "security",
                "javascript",
                "api design",
                "internet of things strategy"
            ]
        },
        {
            "name": "Lead Internet of Things Architect",
            "skills": [
                "python",
                "problem solving",
                "cloud computing",
                "data analysis",
                "agile"
            ]
        },
        {
            "name": "Chief Internet of Things Researcher",
            "skills": [
                "python",
                "internet of things strategy",
                "data analysis",
                "api design",
                "security",
                "agile",
                "advanced internet of things",
                "cloud computing"
            ]
        },
        {
            "name": "Associate Internet of Things Developer",
            "skills": [
                "internet of things strategy",
                "python",
                "problem solving",
                "git",
                "agile",
                "internet of things fundamentals",
                "advanced internet of things"
            ]
        },
        {
            "name": "Senior Internet of Things Specialist",
            "skills": [
                "cloud computing",
                "git",
                "security",
                "problem solving",
                "internet of things strategy",
                "system design",
                "data analysis"
            ]
        },
        {
            "name": "Technical Internet of Things Tester",
            "skills": [
                "javascript",
                "data analysis",
                "agile",
                "problem solving",
                "git",
                "python"
            ]
        },
        {
            "name": "Internet of Things Researcher",
            "skills": [
                "git",
                "system design",
                "security",
                "data analysis",
                "javascript",
                "advanced internet of things",
                "internet of things fundamentals",
                "problem solving"
            ]
        }
    ],
    "Entrepreneurship": [
        {
            "name": "Senior Entrepreneurship Planner",
            "skills": [
                "advanced entrepreneurship",
                "marketing",
                "data analysis",
                "communication",
                "negotiation",
                "entrepreneurship strategy",
                "sales",
                "leadership"
            ]
        },
        {
            "name": "Corporate Entrepreneurship Planner",
            "skills": [
                "advanced entrepreneurship",
                "financial modeling",
                "entrepreneurship fundamentals",
                "excel",
                "project management",
                "communication",
                "strategy"
            ]
        },
        {
            "name": "Assistant Entrepreneurship Manager",
            "skills": [
                "financial modeling",
                "leadership",
                "negotiation",
                "excel",
                "communication",
                "data analysis",
                "project management"
            ]
        },
        {
            "name": "Entrepreneurship Associate",
            "skills": [
                "sales",
                "excel",
                "financial modeling",
                "data analysis",
                "communication",
                "negotiation",
                "entrepreneurship strategy"
            ]
        },
        {
            "name": "Lead Entrepreneurship Associate",
            "skills": [
                "advanced entrepreneurship",
                "negotiation",
                "financial modeling",
                "sales",
                "data analysis"
            ]
        },
        {
            "name": "Corporate Entrepreneurship Advisor",
            "skills": [
                "entrepreneurship strategy",
                "marketing",
                "financial modeling",
                "communication",
                "excel",
                "strategy"
            ]
        },
        {
            "name": "Corporate Entrepreneurship Manager",
            "skills": [
                "marketing",
                "entrepreneurship fundamentals",
                "strategy",
                "project management",
                "entrepreneurship strategy"
            ]
        },
        {
            "name": "Technical Entrepreneurship Director",
            "skills": [
                "sales",
                "excel",
                "entrepreneurship fundamentals",
                "leadership",
                "entrepreneurship strategy",
                "advanced entrepreneurship",
                "data analysis",
                "communication"
            ]
        },
        {
            "name": "Junior Entrepreneurship Strategist",
            "skills": [
                "strategy",
                "entrepreneurship fundamentals",
                "data analysis",
                "sales",
                "project management",
                "excel"
            ]
        },
        {
            "name": "Chief Entrepreneurship Director",
            "skills": [
                "negotiation",
                "communication",
                "advanced entrepreneurship",
                "leadership",
                "strategy",
                "data analysis",
                "marketing"
            ]
        },
        {
            "name": "Independent Entrepreneurship Executive",
            "skills": [
                "leadership",
                "sales",
                "marketing",
                "entrepreneurship fundamentals",
                "financial modeling",
                "entrepreneurship strategy"
            ]
        },
        {
            "name": "Entrepreneurship Analyst",
            "skills": [
                "advanced entrepreneurship",
                "financial modeling",
                "leadership",
                "sales",
                "data analysis",
                "entrepreneurship strategy",
                "excel"
            ]
        },
        {
            "name": "Freelance Entrepreneurship Manager",
            "skills": [
                "leadership",
                "financial modeling",
                "entrepreneurship strategy",
                "data analysis",
                "advanced entrepreneurship",
                "excel"
            ]
        },
        {
            "name": "Entrepreneurship Advisor",
            "skills": [
                "leadership",
                "marketing",
                "strategy",
                "communication",
                "financial modeling"
            ]
        },
        {
            "name": "Freelance Entrepreneurship Consultant",
            "skills": [
                "communication",
                "sales",
                "project management",
                "negotiation",
                "entrepreneurship fundamentals"
            ]
        }
    ],
    "Marketing": [
        {
            "name": "Corporate Marketing Advisor",
            "skills": [
                "sales",
                "strategy",
                "communication",
                "marketing",
                "project management",
                "leadership",
                "data analysis"
            ]
        },
        {
            "name": "Assistant Marketing Executive",
            "skills": [
                "marketing fundamentals",
                "marketing strategy",
                "data analysis",
                "negotiation",
                "financial modeling",
                "leadership",
                "communication"
            ]
        },
        {
            "name": "Corporate Marketing Director",
            "skills": [
                "advanced marketing",
                "strategy",
                "communication",
                "project management",
                "excel"
            ]
        },
        {
            "name": "Associate Marketing Analyst",
            "skills": [
                "communication",
                "marketing",
                "excel",
                "negotiation",
                "marketing strategy",
                "data analysis",
                "leadership"
            ]
        },
        {
            "name": "Freelance Marketing Consultant",
            "skills": [
                "marketing",
                "data analysis",
                "communication",
                "marketing fundamentals",
                "financial modeling",
                "sales",
                "excel",
                "negotiation"
            ]
        },
        {
            "name": "Marketing Director",
            "skills": [
                "marketing",
                "financial modeling",
                "excel",
                "sales",
                "project management",
                "advanced marketing"
            ]
        },
        {
            "name": "Global Marketing Associate",
            "skills": [
                "financial modeling",
                "marketing strategy",
                "negotiation",
                "strategy",
                "sales",
                "leadership",
                "excel"
            ]
        },
        {
            "name": "Independent Marketing Planner",
            "skills": [
                "marketing",
                "sales",
                "financial modeling",
                "negotiation",
                "data analysis",
                "communication",
                "leadership",
                "marketing strategy"
            ]
        },
        {
            "name": "Junior Marketing Executive",
            "skills": [
                "marketing strategy",
                "data analysis",
                "financial modeling",
                "project management",
                "strategy",
                "negotiation",
                "sales"
            ]
        },
        {
            "name": "Regional Marketing Manager",
            "skills": [
                "financial modeling",
                "advanced marketing",
                "data analysis",
                "project management",
                "negotiation",
                "strategy",
                "sales"
            ]
        },
        {
            "name": "Marketing Executive",
            "skills": [
                "sales",
                "financial modeling",
                "communication",
                "data analysis",
                "marketing fundamentals"
            ]
        },
        {
            "name": "Junior Marketing Director",
            "skills": [
                "advanced marketing",
                "project management",
                "financial modeling",
                "strategy",
                "marketing fundamentals",
                "excel"
            ]
        },
        {
            "name": "Freelance Marketing Advisor",
            "skills": [
                "strategy",
                "project management",
                "marketing fundamentals",
                "communication",
                "negotiation",
                "advanced marketing",
                "leadership"
            ]
        },
        {
            "name": "Corporate Marketing Manager",
            "skills": [
                "negotiation",
                "leadership",
                "communication",
                "advanced marketing",
                "strategy"
            ]
        },
        {
            "name": "Assistant Marketing Manager",
            "skills": [
                "strategy",
                "marketing fundamentals",
                "advanced marketing",
                "financial modeling",
                "excel"
            ]
        }
    ],
    "Finance": [
        {
            "name": "Regional Finance Strategist",
            "skills": [
                "finance strategy",
                "marketing",
                "data analysis",
                "negotiation",
                "communication",
                "project management"
            ]
        },
        {
            "name": "Freelance Finance Executive",
            "skills": [
                "excel",
                "project management",
                "finance strategy",
                "financial modeling",
                "leadership",
                "data analysis"
            ]
        },
        {
            "name": "Finance Specialist",
            "skills": [
                "financial modeling",
                "project management",
                "excel",
                "data analysis",
                "communication",
                "advanced finance"
            ]
        },
        {
            "name": "Associate Finance Analyst",
            "skills": [
                "leadership",
                "marketing",
                "excel",
                "finance fundamentals",
                "data analysis"
            ]
        },
        {
            "name": "Creative Finance Executive",
            "skills": [
                "sales",
                "leadership",
                "negotiation",
                "project management",
                "financial modeling",
                "strategy",
                "finance strategy",
                "marketing"
            ]
        },
        {
            "name": "Finance Manager",
            "skills": [
                "leadership",
                "sales",
                "communication",
                "financial modeling",
                "data analysis",
                "negotiation"
            ]
        },
        {
            "name": "Assistant Finance Manager",
            "skills": [
                "excel",
                "strategy",
                "finance fundamentals",
                "financial modeling",
                "communication",
                "leadership",
                "marketing",
                "finance strategy"
            ]
        },
        {
            "name": "Finance Strategist",
            "skills": [
                "project management",
                "marketing",
                "finance fundamentals",
                "advanced finance",
                "negotiation",
                "data analysis"
            ]
        },
        {
            "name": "Finance Consultant",
            "skills": [
                "leadership",
                "data analysis",
                "project management",
                "sales",
                "strategy",
                "finance strategy",
                "finance fundamentals"
            ]
        },
        {
            "name": "Principal Finance Advisor",
            "skills": [
                "data analysis",
                "negotiation",
                "sales",
                "marketing",
                "project management",
                "excel"
            ]
        },
        {
            "name": "Corporate Finance Strategist",
            "skills": [
                "negotiation",
                "marketing",
                "excel",
                "finance fundamentals",
                "finance strategy",
                "communication",
                "financial modeling"
            ]
        },
        {
            "name": "Lead Finance Associate",
            "skills": [
                "strategy",
                "project management",
                "marketing",
                "excel",
                "financial modeling",
                "negotiation",
                "finance fundamentals",
                "leadership"
            ]
        },
        {
            "name": "Creative Finance Specialist",
            "skills": [
                "data analysis",
                "communication",
                "advanced finance",
                "finance fundamentals",
                "strategy"
            ]
        },
        {
            "name": "Chief Finance Director",
            "skills": [
                "strategy",
                "data analysis",
                "advanced finance",
                "marketing",
                "negotiation",
                "leadership",
                "financial modeling",
                "communication"
            ]
        },
        {
            "name": "Assistant Finance Consultant",
            "skills": [
                "leadership",
                "finance strategy",
                "communication",
                "negotiation",
                "project management",
                "finance fundamentals",
                "advanced finance",
                "marketing"
            ]
        }
    ],
    "Stock Trading": [
        {
            "name": "Corporate Stock Trading Executive",
            "skills": [
                "excel",
                "financial modeling",
                "advanced stock trading",
                "project management",
                "stock trading fundamentals",
                "negotiation",
                "strategy"
            ]
        },
        {
            "name": "Lead Stock Trading Specialist",
            "skills": [
                "financial modeling",
                "leadership",
                "data analysis",
                "stock trading strategy",
                "excel",
                "negotiation",
                "stock trading fundamentals",
                "communication"
            ]
        },
        {
            "name": "Associate Stock Trading Specialist",
            "skills": [
                "financial modeling",
                "advanced stock trading",
                "excel",
                "strategy",
                "communication",
                "sales"
            ]
        },
        {
            "name": "Principal Stock Trading Advisor",
            "skills": [
                "advanced stock trading",
                "excel",
                "leadership",
                "communication",
                "project management",
                "financial modeling",
                "stock trading strategy",
                "data analysis"
            ]
        },
        {
            "name": "Chief Stock Trading Associate",
            "skills": [
                "negotiation",
                "excel",
                "advanced stock trading",
                "marketing",
                "sales",
                "stock trading strategy"
            ]
        },
        {
            "name": "Freelance Stock Trading Director",
            "skills": [
                "data analysis",
                "marketing",
                "sales",
                "leadership",
                "communication",
                "financial modeling",
                "excel",
                "negotiation"
            ]
        },
        {
            "name": "Assistant Stock Trading Executive",
            "skills": [
                "excel",
                "project management",
                "financial modeling",
                "sales",
                "advanced stock trading",
                "data analysis",
                "stock trading strategy",
                "marketing"
            ]
        },
        {
            "name": "Principal Stock Trading Associate",
            "skills": [
                "project management",
                "financial modeling",
                "advanced stock trading",
                "communication",
                "stock trading strategy",
                "stock trading fundamentals"
            ]
        },
        {
            "name": "Creative Stock Trading Associate",
            "skills": [
                "excel",
                "marketing",
                "sales",
                "stock trading strategy",
                "negotiation",
                "communication"
            ]
        },
        {
            "name": "Lead Stock Trading Analyst",
            "skills": [
                "excel",
                "marketing",
                "negotiation",
                "communication",
                "sales",
                "strategy"
            ]
        },
        {
            "name": "Junior Stock Trading Associate",
            "skills": [
                "leadership",
                "advanced stock trading",
                "marketing",
                "financial modeling",
                "data analysis"
            ]
        },
        {
            "name": "Principal Stock Trading Director",
            "skills": [
                "communication",
                "sales",
                "financial modeling",
                "stock trading fundamentals",
                "marketing",
                "data analysis",
                "project management",
                "excel"
            ]
        },
        {
            "name": "Independent Stock Trading Analyst",
            "skills": [
                "stock trading fundamentals",
                "advanced stock trading",
                "stock trading strategy",
                "marketing",
                "excel",
                "sales",
                "project management",
                "data analysis"
            ]
        },
        {
            "name": "Lead Stock Trading Director",
            "skills": [
                "financial modeling",
                "strategy",
                "excel",
                "sales",
                "data analysis",
                "stock trading strategy"
            ]
        },
        {
            "name": "Senior Stock Trading Planner",
            "skills": [
                "project management",
                "marketing",
                "stock trading fundamentals",
                "financial modeling",
                "advanced stock trading",
                "negotiation",
                "excel",
                "sales"
            ]
        }
    ],
    "E-commerce": [
        {
            "name": "Lead E-commerce Manager",
            "skills": [
                "negotiation",
                "marketing",
                "data analysis",
                "sales",
                "communication",
                "e-commerce strategy",
                "strategy"
            ]
        },
        {
            "name": "E-commerce Associate",
            "skills": [
                "excel",
                "leadership",
                "project management",
                "e-commerce fundamentals",
                "negotiation",
                "e-commerce strategy"
            ]
        },
        {
            "name": "Principal E-commerce Analyst",
            "skills": [
                "leadership",
                "communication",
                "sales",
                "e-commerce fundamentals",
                "marketing",
                "advanced e-commerce",
                "project management",
                "e-commerce strategy"
            ]
        },
        {
            "name": "Associate E-commerce Manager",
            "skills": [
                "e-commerce strategy",
                "advanced e-commerce",
                "financial modeling",
                "project management",
                "leadership",
                "negotiation"
            ]
        },
        {
            "name": "Freelance E-commerce Planner",
            "skills": [
                "e-commerce strategy",
                "sales",
                "excel",
                "data analysis",
                "marketing",
                "project management",
                "advanced e-commerce",
                "negotiation"
            ]
        },
        {
            "name": "Associate E-commerce Analyst",
            "skills": [
                "excel",
                "project management",
                "communication",
                "data analysis",
                "e-commerce strategy",
                "e-commerce fundamentals"
            ]
        },
        {
            "name": "Lead E-commerce Specialist",
            "skills": [
                "communication",
                "negotiation",
                "advanced e-commerce",
                "sales",
                "e-commerce fundamentals"
            ]
        },
        {
            "name": "E-commerce Consultant",
            "skills": [
                "excel",
                "strategy",
                "e-commerce strategy",
                "e-commerce fundamentals",
                "leadership",
                "financial modeling"
            ]
        },
        {
            "name": "Technical E-commerce Analyst",
            "skills": [
                "advanced e-commerce",
                "marketing",
                "sales",
                "negotiation",
                "leadership",
                "financial modeling",
                "project management",
                "strategy"
            ]
        },
        {
            "name": "Independent E-commerce Analyst",
            "skills": [
                "e-commerce fundamentals",
                "negotiation",
                "strategy",
                "excel",
                "data analysis",
                "leadership",
                "marketing"
            ]
        },
        {
            "name": "E-commerce Director",
            "skills": [
                "marketing",
                "e-commerce strategy",
                "negotiation",
                "financial modeling",
                "data analysis",
                "leadership",
                "communication",
                "e-commerce fundamentals"
            ]
        },
        {
            "name": "Junior E-commerce Planner",
            "skills": [
                "communication",
                "e-commerce fundamentals",
                "advanced e-commerce",
                "strategy",
                "marketing",
                "e-commerce strategy"
            ]
        },
        {
            "name": "E-commerce Specialist",
            "skills": [
                "advanced e-commerce",
                "communication",
                "excel",
                "e-commerce strategy",
                "negotiation",
                "financial modeling"
            ]
        },
        {
            "name": "Senior E-commerce Planner",
            "skills": [
                "communication",
                "strategy",
                "sales",
                "leadership",
                "e-commerce strategy"
            ]
        },
        {
            "name": "Assistant E-commerce Director",
            "skills": [
                "advanced e-commerce",
                "e-commerce strategy",
                "data analysis",
                "sales",
                "excel",
                "negotiation"
            ]
        }
    ],
    "Consulting": [
        {
            "name": "Senior Consulting Director",
            "skills": [
                "financial modeling",
                "project management",
                "excel",
                "consulting strategy",
                "sales"
            ]
        },
        {
            "name": "Assistant Consulting Executive",
            "skills": [
                "consulting strategy",
                "marketing",
                "consulting fundamentals",
                "project management",
                "leadership",
                "sales",
                "strategy",
                "communication"
            ]
        },
        {
            "name": "Junior Consulting Director",
            "skills": [
                "leadership",
                "consulting fundamentals",
                "project management",
                "negotiation",
                "strategy",
                "communication",
                "advanced consulting"
            ]
        },
        {
            "name": "Associate Consulting Strategist",
            "skills": [
                "consulting strategy",
                "consulting fundamentals",
                "communication",
                "advanced consulting",
                "project management",
                "marketing"
            ]
        },
        {
            "name": "Principal Consulting Manager",
            "skills": [
                "financial modeling",
                "marketing",
                "excel",
                "consulting fundamentals",
                "consulting strategy",
                "project management"
            ]
        },
        {
            "name": "Consulting Strategist",
            "skills": [
                "leadership",
                "financial modeling",
                "advanced consulting",
                "project management",
                "communication",
                "excel"
            ]
        },
        {
            "name": "Global Consulting Analyst",
            "skills": [
                "advanced consulting",
                "leadership",
                "data analysis",
                "project management",
                "financial modeling",
                "communication"
            ]
        },
        {
            "name": "Junior Consulting Advisor",
            "skills": [
                "sales",
                "project management",
                "excel",
                "consulting strategy",
                "leadership",
                "strategy",
                "data analysis",
                "communication"
            ]
        },
        {
            "name": "Lead Consulting Associate",
            "skills": [
                "data analysis",
                "financial modeling",
                "communication",
                "excel",
                "marketing",
                "advanced consulting"
            ]
        },
        {
            "name": "Senior Consulting Executive",
            "skills": [
                "consulting strategy",
                "negotiation",
                "sales",
                "marketing",
                "leadership"
            ]
        },
        {
            "name": "Regional Consulting Strategist",
            "skills": [
                "excel",
                "negotiation",
                "financial modeling",
                "data analysis",
                "marketing",
                "consulting strategy"
            ]
        },
        {
            "name": "Regional Consulting Manager",
            "skills": [
                "marketing",
                "consulting strategy",
                "strategy",
                "data analysis",
                "sales",
                "project management",
                "communication"
            ]
        },
        {
            "name": "Assistant Consulting Strategist",
            "skills": [
                "project management",
                "consulting strategy",
                "leadership",
                "sales",
                "communication"
            ]
        },
        {
            "name": "Freelance Consulting Executive",
            "skills": [
                "marketing",
                "strategy",
                "communication",
                "consulting fundamentals",
                "project management",
                "data analysis"
            ]
        },
        {
            "name": "Technical Consulting Consultant",
            "skills": [
                "sales",
                "financial modeling",
                "consulting fundamentals",
                "consulting strategy",
                "communication",
                "excel"
            ]
        }
    ],
    "Human Resources": [
        {
            "name": "Technical Human Resources Associate",
            "skills": [
                "project management",
                "leadership",
                "strategy",
                "financial modeling",
                "sales",
                "advanced human resources",
                "negotiation"
            ]
        },
        {
            "name": "Global Human Resources Strategist",
            "skills": [
                "human resources strategy",
                "financial modeling",
                "advanced human resources",
                "excel",
                "project management"
            ]
        },
        {
            "name": "Human Resources Planner",
            "skills": [
                "project management",
                "negotiation",
                "marketing",
                "strategy",
                "financial modeling",
                "leadership",
                "data analysis",
                "communication"
            ]
        },
        {
            "name": "Junior Human Resources Advisor",
            "skills": [
                "strategy",
                "data analysis",
                "sales",
                "negotiation",
                "advanced human resources",
                "human resources strategy",
                "marketing",
                "excel"
            ]
        },
        {
            "name": "Regional Human Resources Executive",
            "skills": [
                "communication",
                "advanced human resources",
                "data analysis",
                "strategy",
                "financial modeling",
                "leadership",
                "project management",
                "negotiation"
            ]
        },
        {
            "name": "Principal Human Resources Specialist",
            "skills": [
                "excel",
                "project management",
                "communication",
                "sales",
                "advanced human resources",
                "human resources strategy",
                "strategy"
            ]
        },
        {
            "name": "Human Resources Director",
            "skills": [
                "data analysis",
                "human resources fundamentals",
                "communication",
                "advanced human resources",
                "leadership"
            ]
        },
        {
            "name": "Freelance Human Resources Manager",
            "skills": [
                "data analysis",
                "human resources fundamentals",
                "leadership",
                "advanced human resources",
                "human resources strategy",
                "marketing",
                "negotiation"
            ]
        },
        {
            "name": "Human Resources Consultant",
            "skills": [
                "project management",
                "strategy",
                "excel",
                "human resources strategy",
                "sales",
                "human resources fundamentals",
                "marketing"
            ]
        },
        {
            "name": "Associate Human Resources Executive",
            "skills": [
                "human resources fundamentals",
                "strategy",
                "human resources strategy",
                "sales",
                "data analysis",
                "leadership",
                "excel",
                "advanced human resources"
            ]
        },
        {
            "name": "Associate Human Resources Specialist",
            "skills": [
                "advanced human resources",
                "strategy",
                "project management",
                "leadership",
                "human resources fundamentals"
            ]
        },
        {
            "name": "Creative Human Resources Analyst",
            "skills": [
                "project management",
                "negotiation",
                "leadership",
                "sales",
                "human resources fundamentals",
                "advanced human resources"
            ]
        },
        {
            "name": "Junior Human Resources Planner",
            "skills": [
                "project management",
                "advanced human resources",
                "communication",
                "data analysis",
                "financial modeling",
                "leadership",
                "human resources fundamentals"
            ]
        },
        {
            "name": "Human Resources Analyst",
            "skills": [
                "marketing",
                "financial modeling",
                "negotiation",
                "data analysis",
                "strategy",
                "communication",
                "leadership"
            ]
        },
        {
            "name": "Freelance Human Resources Analyst",
            "skills": [
                "human resources strategy",
                "negotiation",
                "leadership",
                "project management",
                "advanced human resources",
                "strategy",
                "financial modeling"
            ]
        }
    ],
    "Real Estate": [
        {
            "name": "Junior Real Estate Director",
            "skills": [
                "financial modeling",
                "project management",
                "communication",
                "strategy",
                "marketing",
                "advanced real estate",
                "real estate fundamentals",
                "leadership"
            ]
        },
        {
            "name": "Lead Real Estate Manager",
            "skills": [
                "communication",
                "leadership",
                "project management",
                "real estate fundamentals",
                "sales",
                "data analysis",
                "advanced real estate",
                "marketing"
            ]
        },
        {
            "name": "Corporate Real Estate Consultant",
            "skills": [
                "advanced real estate",
                "project management",
                "excel",
                "real estate fundamentals",
                "communication",
                "financial modeling",
                "sales"
            ]
        },
        {
            "name": "Real Estate Analyst",
            "skills": [
                "excel",
                "project management",
                "financial modeling",
                "data analysis",
                "advanced real estate",
                "real estate fundamentals"
            ]
        },
        {
            "name": "Associate Real Estate Executive",
            "skills": [
                "advanced real estate",
                "negotiation",
                "excel",
                "real estate fundamentals",
                "project management",
                "marketing"
            ]
        },
        {
            "name": "Corporate Real Estate Executive",
            "skills": [
                "advanced real estate",
                "real estate fundamentals",
                "leadership",
                "strategy",
                "project management",
                "data analysis"
            ]
        },
        {
            "name": "Real Estate Advisor",
            "skills": [
                "communication",
                "leadership",
                "project management",
                "marketing",
                "financial modeling",
                "data analysis",
                "real estate fundamentals"
            ]
        },
        {
            "name": "Corporate Real Estate Associate",
            "skills": [
                "real estate strategy",
                "sales",
                "financial modeling",
                "strategy",
                "excel",
                "negotiation",
                "real estate fundamentals",
                "communication"
            ]
        },
        {
            "name": "Real Estate Consultant",
            "skills": [
                "real estate strategy",
                "data analysis",
                "communication",
                "sales",
                "negotiation",
                "excel",
                "leadership",
                "real estate fundamentals"
            ]
        },
        {
            "name": "Junior Real Estate Planner",
            "skills": [
                "real estate strategy",
                "marketing",
                "leadership",
                "sales",
                "financial modeling",
                "strategy"
            ]
        },
        {
            "name": "Freelance Real Estate Planner",
            "skills": [
                "leadership",
                "strategy",
                "excel",
                "financial modeling",
                "marketing",
                "advanced real estate"
            ]
        },
        {
            "name": "Corporate Real Estate Director",
            "skills": [
                "real estate strategy",
                "financial modeling",
                "excel",
                "negotiation",
                "strategy",
                "project management"
            ]
        },
        {
            "name": "Technical Real Estate Planner",
            "skills": [
                "advanced real estate",
                "negotiation",
                "real estate strategy",
                "real estate fundamentals",
                "data analysis"
            ]
        },
        {
            "name": "Creative Real Estate Analyst",
            "skills": [
                "excel",
                "marketing",
                "sales",
                "negotiation",
                "financial modeling",
                "communication",
                "real estate fundamentals",
                "strategy"
            ]
        },
        {
            "name": "Associate Real Estate Advisor",
            "skills": [
                "leadership",
                "strategy",
                "real estate strategy",
                "advanced real estate",
                "excel"
            ]
        }
    ],
    "Music": [
        {
            "name": "Regional Music Producer",
            "skills": [
                "mastering",
                "ableton live",
                "attention to detail",
                "mixing",
                "instrumental performance",
                "design theory"
            ]
        },
        {
            "name": "Global Music Illustrator",
            "skills": [
                "ableton live",
                "mastering",
                "color theory",
                "attention to detail",
                "communication",
                "creativity"
            ]
        },
        {
            "name": "Lead Music Specialist",
            "skills": [
                "instrumental performance",
                "mastering",
                "communication",
                "ableton live",
                "mixing",
                "creativity",
                "collaboration",
                "storytelling"
            ]
        },
        {
            "name": "Global Music Writer",
            "skills": [
                "design theory",
                "mastering",
                "ableton live",
                "communication",
                "creativity",
                "adobe creative suite",
                "typography",
                "collaboration"
            ]
        },
        {
            "name": "Freelance Music Director",
            "skills": [
                "music theory",
                "adobe creative suite",
                "mastering",
                "attention to detail",
                "communication",
                "color theory",
                "creativity",
                "typography"
            ]
        },
        {
            "name": "Global Music Consultant",
            "skills": [
                "instrumental performance",
                "storytelling",
                "time management",
                "communication",
                "mixing",
                "mastering"
            ]
        },
        {
            "name": "Assistant Music Illustrator",
            "skills": [
                "time management",
                "attention to detail",
                "storytelling",
                "music theory",
                "ableton live",
                "instrumental performance",
                "collaboration",
                "communication"
            ]
        },
        {
            "name": "Lead Music Artist",
            "skills": [
                "communication",
                "ableton live",
                "mastering",
                "color theory",
                "attention to detail",
                "mixing",
                "typography",
                "time management"
            ]
        },
        {
            "name": "Associate Music Producer",
            "skills": [
                "creativity",
                "ableton live",
                "collaboration",
                "communication",
                "instrumental performance"
            ]
        },
        {
            "name": "Regional Music Editor",
            "skills": [
                "attention to detail",
                "storytelling",
                "communication",
                "creativity",
                "adobe creative suite",
                "music theory",
                "typography",
                "mixing"
            ]
        },
        {
            "name": "Principal Music Editor",
            "skills": [
                "communication",
                "instrumental performance",
                "color theory",
                "creativity",
                "storytelling",
                "mastering",
                "collaboration",
                "typography"
            ]
        },
        {
            "name": "Independent Music Artist",
            "skills": [
                "adobe creative suite",
                "design theory",
                "attention to detail",
                "creativity",
                "storytelling",
                "typography",
                "ableton live",
                "music theory"
            ]
        },
        {
            "name": "Music Editor",
            "skills": [
                "creativity",
                "ableton live",
                "time management",
                "storytelling",
                "mixing"
            ]
        },
        {
            "name": "Corporate Music Consultant",
            "skills": [
                "color theory",
                "typography",
                "storytelling",
                "collaboration",
                "instrumental performance",
                "mixing",
                "design theory",
                "creativity"
            ]
        },
        {
            "name": "Associate Music Writer",
            "skills": [
                "adobe creative suite",
                "time management",
                "attention to detail",
                "music theory",
                "mixing",
                "design theory",
                "storytelling"
            ]
        }
    ],
    "Photography": [
        {
            "name": "Photography Writer",
            "skills": [
                "design theory",
                "adobe creative suite",
                "communication",
                "lightroom",
                "storytelling",
                "time management"
            ]
        },
        {
            "name": "Lead Photography Producer",
            "skills": [
                "camera operation",
                "adobe creative suite",
                "attention to detail",
                "typography",
                "lighting"
            ]
        },
        {
            "name": "Associate Photography Illustrator",
            "skills": [
                "lighting",
                "design theory",
                "attention to detail",
                "time management",
                "camera operation"
            ]
        },
        {
            "name": "Photography Creator",
            "skills": [
                "photoshop",
                "communication",
                "adobe creative suite",
                "lightroom",
                "collaboration",
                "storytelling",
                "color theory",
                "lighting"
            ]
        },
        {
            "name": "Photography Consultant",
            "skills": [
                "composition",
                "time management",
                "lightroom",
                "typography",
                "design theory",
                "photoshop"
            ]
        },
        {
            "name": "Corporate Photography Director",
            "skills": [
                "composition",
                "creativity",
                "attention to detail",
                "camera operation",
                "photoshop",
                "storytelling",
                "communication"
            ]
        },
        {
            "name": "Photography Designer",
            "skills": [
                "lightroom",
                "design theory",
                "collaboration",
                "photoshop",
                "typography"
            ]
        },
        {
            "name": "Independent Photography Writer",
            "skills": [
                "typography",
                "collaboration",
                "lightroom",
                "time management",
                "photoshop",
                "design theory"
            ]
        },
        {
            "name": "Creative Photography Artist",
            "skills": [
                "photoshop",
                "time management",
                "lightroom",
                "adobe creative suite",
                "communication",
                "attention to detail"
            ]
        },
        {
            "name": "Associate Photography Creator",
            "skills": [
                "composition",
                "time management",
                "lightroom",
                "lighting",
                "adobe creative suite",
                "camera operation"
            ]
        },
        {
            "name": "Senior Photography Editor",
            "skills": [
                "storytelling",
                "collaboration",
                "composition",
                "typography",
                "attention to detail",
                "adobe creative suite",
                "creativity"
            ]
        },
        {
            "name": "Regional Photography Director",
            "skills": [
                "creativity",
                "color theory",
                "camera operation",
                "collaboration",
                "composition",
                "lighting"
            ]
        },
        {
            "name": "Photography Editor",
            "skills": [
                "communication",
                "composition",
                "collaboration",
                "typography",
                "camera operation"
            ]
        },
        {
            "name": "Assistant Photography Consultant",
            "skills": [
                "color theory",
                "attention to detail",
                "creativity",
                "photoshop",
                "composition"
            ]
        },
        {
            "name": "Independent Photography Editor",
            "skills": [
                "camera operation",
                "design theory",
                "photoshop",
                "communication",
                "collaboration"
            ]
        }
    ],
    "Graphic Design": [
        {
            "name": "Corporate Graphic Design Director",
            "skills": [
                "color theory",
                "adobe creative suite",
                "graphic design fundamentals",
                "time management",
                "typography",
                "collaboration",
                "storytelling",
                "advanced graphic design"
            ]
        },
        {
            "name": "Graphic Design Writer",
            "skills": [
                "creativity",
                "time management",
                "typography",
                "attention to detail",
                "graphic design fundamentals",
                "design theory",
                "collaboration"
            ]
        },
        {
            "name": "Creative Graphic Design Artist",
            "skills": [
                "graphic design strategy",
                "typography",
                "design theory",
                "collaboration",
                "time management",
                "communication"
            ]
        },
        {
            "name": "Freelance Graphic Design Consultant",
            "skills": [
                "communication",
                "color theory",
                "collaboration",
                "attention to detail",
                "graphic design fundamentals",
                "storytelling"
            ]
        },
        {
            "name": "Regional Graphic Design Artist",
            "skills": [
                "collaboration",
                "typography",
                "communication",
                "graphic design fundamentals",
                "advanced graphic design",
                "time management",
                "graphic design strategy",
                "attention to detail"
            ]
        },
        {
            "name": "Graphic Design Editor",
            "skills": [
                "color theory",
                "advanced graphic design",
                "time management",
                "storytelling",
                "attention to detail",
                "graphic design fundamentals",
                "creativity"
            ]
        },
        {
            "name": "Lead Graphic Design Editor",
            "skills": [
                "design theory",
                "creativity",
                "time management",
                "advanced graphic design",
                "storytelling",
                "graphic design strategy",
                "typography"
            ]
        },
        {
            "name": "Creative Graphic Design Producer",
            "skills": [
                "attention to detail",
                "graphic design strategy",
                "color theory",
                "storytelling",
                "collaboration"
            ]
        },
        {
            "name": "Lead Graphic Design Writer",
            "skills": [
                "creativity",
                "time management",
                "adobe creative suite",
                "collaboration",
                "color theory",
                "graphic design strategy",
                "advanced graphic design",
                "typography"
            ]
        },
        {
            "name": "Chief Graphic Design Specialist",
            "skills": [
                "communication",
                "attention to detail",
                "color theory",
                "advanced graphic design",
                "design theory",
                "graphic design fundamentals"
            ]
        },
        {
            "name": "Independent Graphic Design Director",
            "skills": [
                "time management",
                "design theory",
                "attention to detail",
                "color theory",
                "storytelling",
                "graphic design fundamentals"
            ]
        },
        {
            "name": "Regional Graphic Design Producer",
            "skills": [
                "graphic design strategy",
                "adobe creative suite",
                "design theory",
                "graphic design fundamentals",
                "communication"
            ]
        },
        {
            "name": "Junior Graphic Design Director",
            "skills": [
                "creativity",
                "communication",
                "advanced graphic design",
                "time management",
                "graphic design strategy",
                "storytelling",
                "color theory"
            ]
        },
        {
            "name": "Technical Graphic Design Artist",
            "skills": [
                "communication",
                "design theory",
                "graphic design fundamentals",
                "storytelling",
                "typography",
                "attention to detail",
                "creativity",
                "advanced graphic design"
            ]
        },
        {
            "name": "Assistant Graphic Design Specialist",
            "skills": [
                "storytelling",
                "collaboration",
                "graphic design fundamentals",
                "creativity",
                "attention to detail"
            ]
        }
    ],
    "Video Editing": [
        {
            "name": "Video Editing Editor",
            "skills": [
                "typography",
                "adobe creative suite",
                "communication",
                "video editing fundamentals",
                "design theory",
                "advanced video editing",
                "storytelling",
                "video editing strategy"
            ]
        },
        {
            "name": "Principal Video Editing Illustrator",
            "skills": [
                "communication",
                "design theory",
                "advanced video editing",
                "video editing fundamentals",
                "creativity"
            ]
        },
        {
            "name": "Lead Video Editing Writer",
            "skills": [
                "creativity",
                "collaboration",
                "color theory",
                "video editing fundamentals",
                "storytelling",
                "attention to detail",
                "typography"
            ]
        },
        {
            "name": "Video Editing Creator",
            "skills": [
                "advanced video editing",
                "video editing strategy",
                "creativity",
                "storytelling",
                "time management",
                "color theory"
            ]
        },
        {
            "name": "Video Editing Artist",
            "skills": [
                "video editing strategy",
                "design theory",
                "storytelling",
                "adobe creative suite",
                "time management",
                "creativity",
                "typography"
            ]
        },
        {
            "name": "Video Editing Director",
            "skills": [
                "typography",
                "adobe creative suite",
                "creativity",
                "color theory",
                "communication",
                "collaboration",
                "video editing strategy",
                "time management"
            ]
        },
        {
            "name": "Senior Video Editing Producer",
            "skills": [
                "collaboration",
                "color theory",
                "adobe creative suite",
                "creativity",
                "video editing fundamentals",
                "attention to detail",
                "communication",
                "typography"
            ]
        },
        {
            "name": "Regional Video Editing Illustrator",
            "skills": [
                "advanced video editing",
                "design theory",
                "attention to detail",
                "adobe creative suite",
                "time management",
                "video editing strategy",
                "color theory"
            ]
        },
        {
            "name": "Global Video Editing Creator",
            "skills": [
                "creativity",
                "design theory",
                "typography",
                "video editing strategy",
                "time management"
            ]
        },
        {
            "name": "Technical Video Editing Producer",
            "skills": [
                "creativity",
                "communication",
                "design theory",
                "adobe creative suite",
                "video editing strategy",
                "storytelling",
                "typography"
            ]
        },
        {
            "name": "Global Video Editing Director",
            "skills": [
                "storytelling",
                "color theory",
                "time management",
                "advanced video editing",
                "collaboration",
                "communication"
            ]
        },
        {
            "name": "Principal Video Editing Director",
            "skills": [
                "time management",
                "design theory",
                "creativity",
                "video editing strategy",
                "collaboration",
                "typography",
                "attention to detail",
                "video editing fundamentals"
            ]
        },
        {
            "name": "Corporate Video Editing Illustrator",
            "skills": [
                "video editing strategy",
                "storytelling",
                "video editing fundamentals",
                "communication",
                "color theory",
                "advanced video editing"
            ]
        },
        {
            "name": "Principal Video Editing Artist",
            "skills": [
                "video editing strategy",
                "advanced video editing",
                "color theory",
                "typography",
                "attention to detail",
                "collaboration"
            ]
        },
        {
            "name": "Regional Video Editing Writer",
            "skills": [
                "design theory",
                "video editing strategy",
                "color theory",
                "storytelling",
                "time management"
            ]
        }
    ],
    "Writing": [
        {
            "name": "Creative Writing Director",
            "skills": [
                "typography",
                "adobe creative suite",
                "communication",
                "design theory",
                "writing fundamentals",
                "advanced writing",
                "time management",
                "collaboration"
            ]
        },
        {
            "name": "Creative Writing Writer",
            "skills": [
                "collaboration",
                "creativity",
                "design theory",
                "attention to detail",
                "typography",
                "color theory",
                "communication",
                "time management"
            ]
        },
        {
            "name": "Principal Writing Editor",
            "skills": [
                "advanced writing",
                "writing fundamentals",
                "color theory",
                "adobe creative suite",
                "storytelling",
                "typography",
                "attention to detail"
            ]
        },
        {
            "name": "Writing Producer",
            "skills": [
                "storytelling",
                "communication",
                "design theory",
                "writing strategy",
                "attention to detail",
                "color theory"
            ]
        },
        {
            "name": "Writing Consultant",
            "skills": [
                "writing strategy",
                "advanced writing",
                "adobe creative suite",
                "communication",
                "time management",
                "attention to detail",
                "color theory"
            ]
        },
        {
            "name": "Lead Writing Artist",
            "skills": [
                "time management",
                "writing fundamentals",
                "storytelling",
                "writing strategy",
                "adobe creative suite",
                "attention to detail",
                "advanced writing",
                "communication"
            ]
        },
        {
            "name": "Associate Writing Director",
            "skills": [
                "storytelling",
                "attention to detail",
                "communication",
                "writing strategy",
                "collaboration",
                "typography",
                "creativity"
            ]
        },
        {
            "name": "Independent Writing Designer",
            "skills": [
                "writing fundamentals",
                "collaboration",
                "advanced writing",
                "color theory",
                "writing strategy",
                "design theory",
                "typography"
            ]
        },
        {
            "name": "Lead Writing Editor",
            "skills": [
                "writing strategy",
                "advanced writing",
                "attention to detail",
                "storytelling",
                "collaboration",
                "time management",
                "writing fundamentals"
            ]
        },
        {
            "name": "Writing Specialist",
            "skills": [
                "collaboration",
                "color theory",
                "advanced writing",
                "writing fundamentals",
                "communication",
                "design theory",
                "typography",
                "storytelling"
            ]
        },
        {
            "name": "Assistant Writing Specialist",
            "skills": [
                "color theory",
                "writing fundamentals",
                "design theory",
                "collaboration",
                "storytelling",
                "creativity"
            ]
        },
        {
            "name": "Writing Editor",
            "skills": [
                "time management",
                "adobe creative suite",
                "attention to detail",
                "creativity",
                "communication",
                "writing fundamentals"
            ]
        },
        {
            "name": "Global Writing Director",
            "skills": [
                "advanced writing",
                "time management",
                "adobe creative suite",
                "communication",
                "writing strategy"
            ]
        },
        {
            "name": "Writing Designer",
            "skills": [
                "time management",
                "design theory",
                "writing strategy",
                "communication",
                "advanced writing",
                "storytelling",
                "typography"
            ]
        },
        {
            "name": "Regional Writing Artist",
            "skills": [
                "color theory",
                "design theory",
                "writing strategy",
                "writing fundamentals",
                "creativity"
            ]
        }
    ],
    "Animation": [
        {
            "name": "Technical Animation Illustrator",
            "skills": [
                "adobe creative suite",
                "animation fundamentals",
                "attention to detail",
                "communication",
                "design theory",
                "collaboration",
                "typography",
                "advanced animation"
            ]
        },
        {
            "name": "Animation Designer",
            "skills": [
                "attention to detail",
                "adobe creative suite",
                "creativity",
                "storytelling",
                "collaboration",
                "animation fundamentals",
                "color theory"
            ]
        },
        {
            "name": "Lead Animation Writer",
            "skills": [
                "color theory",
                "storytelling",
                "animation strategy",
                "adobe creative suite",
                "communication",
                "attention to detail",
                "creativity",
                "time management"
            ]
        },
        {
            "name": "Corporate Animation Writer",
            "skills": [
                "storytelling",
                "adobe creative suite",
                "color theory",
                "time management",
                "typography",
                "collaboration"
            ]
        },
        {
            "name": "Animation Consultant",
            "skills": [
                "communication",
                "time management",
                "collaboration",
                "animation strategy",
                "typography"
            ]
        },
        {
            "name": "Principal Animation Creator",
            "skills": [
                "color theory",
                "attention to detail",
                "typography",
                "creativity",
                "collaboration"
            ]
        },
        {
            "name": "Animation Artist",
            "skills": [
                "animation fundamentals",
                "time management",
                "attention to detail",
                "creativity",
                "collaboration",
                "advanced animation"
            ]
        },
        {
            "name": "Regional Animation Consultant",
            "skills": [
                "typography",
                "color theory",
                "design theory",
                "adobe creative suite",
                "animation fundamentals"
            ]
        },
        {
            "name": "Lead Animation Creator",
            "skills": [
                "animation strategy",
                "adobe creative suite",
                "advanced animation",
                "creativity",
                "time management"
            ]
        },
        {
            "name": "Associate Animation Specialist",
            "skills": [
                "design theory",
                "collaboration",
                "storytelling",
                "time management",
                "typography",
                "animation fundamentals",
                "creativity"
            ]
        },
        {
            "name": "Junior Animation Consultant",
            "skills": [
                "storytelling",
                "attention to detail",
                "animation fundamentals",
                "communication",
                "color theory"
            ]
        },
        {
            "name": "Chief Animation Producer",
            "skills": [
                "creativity",
                "time management",
                "storytelling",
                "communication",
                "color theory"
            ]
        },
        {
            "name": "Freelance Animation Specialist",
            "skills": [
                "storytelling",
                "color theory",
                "adobe creative suite",
                "typography",
                "design theory"
            ]
        },
        {
            "name": "Independent Animation Producer",
            "skills": [
                "animation fundamentals",
                "color theory",
                "storytelling",
                "typography",
                "communication"
            ]
        },
        {
            "name": "Assistant Animation Consultant",
            "skills": [
                "attention to detail",
                "animation fundamentals",
                "creativity",
                "color theory",
                "advanced animation",
                "adobe creative suite",
                "communication",
                "time management"
            ]
        }
    ],
    "UI/UX Design": [
        {
            "name": "Global UI/UX Design Director",
            "skills": [
                "typography",
                "time management",
                "color theory",
                "creativity",
                "adobe creative suite",
                "storytelling",
                "collaboration",
                "ui/ux design strategy"
            ]
        },
        {
            "name": "Technical UI/UX Design Designer",
            "skills": [
                "adobe creative suite",
                "design theory",
                "collaboration",
                "typography",
                "communication",
                "creativity",
                "ui/ux design fundamentals",
                "color theory"
            ]
        },
        {
            "name": "Junior UI/UX Design Specialist",
            "skills": [
                "creativity",
                "design theory",
                "ui/ux design fundamentals",
                "communication",
                "ui/ux design strategy"
            ]
        },
        {
            "name": "Junior UI/UX Design Creator",
            "skills": [
                "typography",
                "ui/ux design strategy",
                "design theory",
                "adobe creative suite",
                "collaboration"
            ]
        },
        {
            "name": "Technical UI/UX Design Consultant",
            "skills": [
                "storytelling",
                "adobe creative suite",
                "advanced ui/ux design",
                "ui/ux design strategy",
                "collaboration",
                "design theory",
                "ui/ux design fundamentals"
            ]
        },
        {
            "name": "Associate UI/UX Design Producer",
            "skills": [
                "attention to detail",
                "communication",
                "ui/ux design strategy",
                "storytelling",
                "collaboration"
            ]
        },
        {
            "name": "Freelance UI/UX Design Designer",
            "skills": [
                "adobe creative suite",
                "collaboration",
                "typography",
                "ui/ux design fundamentals",
                "time management",
                "color theory",
                "design theory"
            ]
        },
        {
            "name": "Chief UI/UX Design Producer",
            "skills": [
                "communication",
                "creativity",
                "time management",
                "storytelling",
                "adobe creative suite"
            ]
        },
        {
            "name": "UI/UX Design Designer",
            "skills": [
                "adobe creative suite",
                "collaboration",
                "typography",
                "attention to detail",
                "creativity",
                "communication",
                "time management"
            ]
        },
        {
            "name": "Technical UI/UX Design Specialist",
            "skills": [
                "ui/ux design strategy",
                "color theory",
                "communication",
                "creativity",
                "time management"
            ]
        },
        {
            "name": "Senior UI/UX Design Director",
            "skills": [
                "communication",
                "advanced ui/ux design",
                "attention to detail",
                "ui/ux design strategy",
                "typography",
                "creativity",
                "time management"
            ]
        },
        {
            "name": "Lead UI/UX Design Illustrator",
            "skills": [
                "typography",
                "color theory",
                "design theory",
                "creativity",
                "communication",
                "collaboration",
                "storytelling",
                "advanced ui/ux design"
            ]
        },
        {
            "name": "UI/UX Design Illustrator",
            "skills": [
                "typography",
                "adobe creative suite",
                "collaboration",
                "color theory",
                "attention to detail",
                "ui/ux design fundamentals",
                "storytelling"
            ]
        },
        {
            "name": "Regional UI/UX Design Editor",
            "skills": [
                "time management",
                "typography",
                "attention to detail",
                "advanced ui/ux design",
                "creativity",
                "adobe creative suite",
                "ui/ux design fundamentals"
            ]
        },
        {
            "name": "UI/UX Design Creator",
            "skills": [
                "design theory",
                "advanced ui/ux design",
                "communication",
                "adobe creative suite",
                "storytelling",
                "attention to detail"
            ]
        }
    ],
    "Architecture": [
        {
            "name": "Lead Architecture Consultant",
            "skills": [
                "architecture fundamentals",
                "creativity",
                "collaboration",
                "communication",
                "typography"
            ]
        },
        {
            "name": "Architecture Illustrator",
            "skills": [
                "advanced architecture",
                "color theory",
                "collaboration",
                "adobe creative suite",
                "communication",
                "architecture fundamentals",
                "architecture strategy"
            ]
        },
        {
            "name": "Senior Architecture Consultant",
            "skills": [
                "collaboration",
                "architecture fundamentals",
                "typography",
                "time management",
                "design theory",
                "color theory"
            ]
        },
        {
            "name": "Architecture Editor",
            "skills": [
                "storytelling",
                "communication",
                "advanced architecture",
                "attention to detail",
                "design theory",
                "color theory",
                "time management",
                "collaboration"
            ]
        },
        {
            "name": "Principal Architecture Editor",
            "skills": [
                "time management",
                "advanced architecture",
                "collaboration",
                "typography",
                "creativity",
                "architecture fundamentals",
                "attention to detail"
            ]
        },
        {
            "name": "Creative Architecture Artist",
            "skills": [
                "design theory",
                "adobe creative suite",
                "collaboration",
                "attention to detail",
                "communication",
                "time management"
            ]
        },
        {
            "name": "Architecture Creator",
            "skills": [
                "storytelling",
                "advanced architecture",
                "creativity",
                "architecture strategy",
                "architecture fundamentals",
                "time management"
            ]
        },
        {
            "name": "Independent Architecture Designer",
            "skills": [
                "time management",
                "creativity",
                "attention to detail",
                "typography",
                "color theory",
                "advanced architecture",
                "architecture strategy"
            ]
        },
        {
            "name": "Assistant Architecture Specialist",
            "skills": [
                "attention to detail",
                "collaboration",
                "storytelling",
                "typography",
                "design theory",
                "advanced architecture",
                "color theory",
                "communication"
            ]
        },
        {
            "name": "Architecture Consultant",
            "skills": [
                "typography",
                "color theory",
                "architecture strategy",
                "attention to detail",
                "storytelling"
            ]
        },
        {
            "name": "Lead Architecture Illustrator",
            "skills": [
                "architecture strategy",
                "creativity",
                "advanced architecture",
                "storytelling",
                "time management",
                "communication",
                "adobe creative suite"
            ]
        },
        {
            "name": "Independent Architecture Illustrator",
            "skills": [
                "design theory",
                "collaboration",
                "storytelling",
                "communication",
                "creativity",
                "architecture fundamentals",
                "time management"
            ]
        },
        {
            "name": "Principal Architecture Creator",
            "skills": [
                "creativity",
                "typography",
                "adobe creative suite",
                "communication",
                "color theory",
                "advanced architecture",
                "design theory"
            ]
        },
        {
            "name": "Architecture Writer",
            "skills": [
                "typography",
                "adobe creative suite",
                "design theory",
                "attention to detail",
                "creativity"
            ]
        },
        {
            "name": "Lead Architecture Writer",
            "skills": [
                "time management",
                "storytelling",
                "creativity",
                "collaboration",
                "architecture fundamentals"
            ]
        }
    ],
    "Interior Design": [
        {
            "name": "Interior Design Writer",
            "skills": [
                "typography",
                "interior design strategy",
                "time management",
                "storytelling",
                "adobe creative suite",
                "design theory",
                "attention to detail"
            ]
        },
        {
            "name": "Junior Interior Design Producer",
            "skills": [
                "creativity",
                "advanced interior design",
                "adobe creative suite",
                "time management",
                "color theory"
            ]
        },
        {
            "name": "Lead Interior Design Writer",
            "skills": [
                "advanced interior design",
                "adobe creative suite",
                "interior design strategy",
                "color theory",
                "collaboration",
                "time management"
            ]
        },
        {
            "name": "Regional Interior Design Designer",
            "skills": [
                "storytelling",
                "design theory",
                "communication",
                "collaboration",
                "adobe creative suite",
                "time management",
                "attention to detail"
            ]
        },
        {
            "name": "Corporate Interior Design Director",
            "skills": [
                "interior design fundamentals",
                "adobe creative suite",
                "storytelling",
                "creativity",
                "interior design strategy",
                "attention to detail"
            ]
        },
        {
            "name": "Technical Interior Design Editor",
            "skills": [
                "collaboration",
                "interior design strategy",
                "typography",
                "advanced interior design",
                "time management",
                "attention to detail",
                "interior design fundamentals"
            ]
        },
        {
            "name": "Independent Interior Design Creator",
            "skills": [
                "communication",
                "typography",
                "creativity",
                "storytelling",
                "adobe creative suite",
                "interior design fundamentals"
            ]
        },
        {
            "name": "Junior Interior Design Illustrator",
            "skills": [
                "design theory",
                "communication",
                "advanced interior design",
                "color theory",
                "interior design strategy",
                "interior design fundamentals",
                "creativity"
            ]
        },
        {
            "name": "Corporate Interior Design Artist",
            "skills": [
                "attention to detail",
                "typography",
                "design theory",
                "creativity",
                "adobe creative suite",
                "interior design strategy"
            ]
        },
        {
            "name": "Chief Interior Design Specialist",
            "skills": [
                "adobe creative suite",
                "time management",
                "interior design fundamentals",
                "communication",
                "collaboration",
                "color theory"
            ]
        },
        {
            "name": "Creative Interior Design Illustrator",
            "skills": [
                "typography",
                "storytelling",
                "creativity",
                "adobe creative suite",
                "advanced interior design",
                "communication",
                "interior design strategy",
                "color theory"
            ]
        },
        {
            "name": "Technical Interior Design Specialist",
            "skills": [
                "color theory",
                "design theory",
                "attention to detail",
                "typography",
                "advanced interior design",
                "time management"
            ]
        },
        {
            "name": "Assistant Interior Design Creator",
            "skills": [
                "design theory",
                "storytelling",
                "collaboration",
                "attention to detail",
                "color theory"
            ]
        },
        {
            "name": "Lead Interior Design Producer",
            "skills": [
                "advanced interior design",
                "typography",
                "color theory",
                "time management",
                "interior design fundamentals",
                "communication",
                "interior design strategy"
            ]
        },
        {
            "name": "Associate Interior Design Director",
            "skills": [
                "design theory",
                "interior design fundamentals",
                "interior design strategy",
                "creativity",
                "advanced interior design",
                "color theory",
                "attention to detail",
                "adobe creative suite"
            ]
        }
    ],
    "Physics": [
        {
            "name": "Lead Physics Researcher",
            "skills": [
                "physics fundamentals",
                "data analysis",
                "advanced physics",
                "analytical thinking",
                "modeling",
                "problem solving",
                "mathematics"
            ]
        },
        {
            "name": "Technical Physics Engineer",
            "skills": [
                "technical writing",
                "physics strategy",
                "statistics",
                "problem solving",
                "experimentation"
            ]
        },
        {
            "name": "Independent Physics Director",
            "skills": [
                "physics strategy",
                "technical writing",
                "analytical thinking",
                "statistics",
                "physics",
                "advanced physics"
            ]
        },
        {
            "name": "Associate Physics Consultant",
            "skills": [
                "physics",
                "experimentation",
                "advanced physics",
                "problem solving",
                "physics fundamentals",
                "technical writing",
                "research",
                "analytical thinking"
            ]
        },
        {
            "name": "Lead Physics Director",
            "skills": [
                "analytical thinking",
                "physics",
                "data analysis",
                "physics fundamentals",
                "statistics",
                "mathematics"
            ]
        },
        {
            "name": "Junior Physics Researcher",
            "skills": [
                "data analysis",
                "mathematics",
                "problem solving",
                "advanced physics",
                "physics fundamentals",
                "modeling",
                "experimentation"
            ]
        },
        {
            "name": "Global Physics Researcher",
            "skills": [
                "problem solving",
                "analytical thinking",
                "physics",
                "advanced physics",
                "physics strategy",
                "modeling"
            ]
        },
        {
            "name": "Physics Consultant",
            "skills": [
                "advanced physics",
                "problem solving",
                "analytical thinking",
                "physics",
                "statistics",
                "data analysis",
                "modeling",
                "physics fundamentals"
            ]
        },
        {
            "name": "Assistant Physics Scientist",
            "skills": [
                "physics fundamentals",
                "research",
                "technical writing",
                "advanced physics",
                "analytical thinking"
            ]
        },
        {
            "name": "Senior Physics Professor",
            "skills": [
                "statistics",
                "physics fundamentals",
                "modeling",
                "physics",
                "technical writing",
                "research",
                "mathematics",
                "problem solving"
            ]
        },
        {
            "name": "Independent Physics Specialist",
            "skills": [
                "physics fundamentals",
                "research",
                "modeling",
                "physics",
                "statistics",
                "data analysis",
                "technical writing",
                "mathematics"
            ]
        },
        {
            "name": "Physics Professor",
            "skills": [
                "research",
                "physics strategy",
                "advanced physics",
                "physics",
                "mathematics",
                "modeling",
                "physics fundamentals"
            ]
        },
        {
            "name": "Global Physics Professor",
            "skills": [
                "physics",
                "mathematics",
                "physics fundamentals",
                "analytical thinking",
                "advanced physics"
            ]
        },
        {
            "name": "Junior Physics Inspector",
            "skills": [
                "data analysis",
                "physics fundamentals",
                "statistics",
                "analytical thinking",
                "modeling",
                "experimentation",
                "problem solving"
            ]
        },
        {
            "name": "Principal Physics Specialist",
            "skills": [
                "data analysis",
                "experimentation",
                "advanced physics",
                "problem solving",
                "modeling",
                "physics fundamentals",
                "physics strategy",
                "mathematics"
            ]
        }
    ],
    "Chemistry": [
        {
            "name": "Independent Chemistry Analyst",
            "skills": [
                "experimentation",
                "research",
                "modeling",
                "statistics",
                "advanced chemistry",
                "chemistry strategy"
            ]
        },
        {
            "name": "Chemistry Consultant",
            "skills": [
                "chemistry fundamentals",
                "modeling",
                "chemistry strategy",
                "research",
                "statistics",
                "mathematics",
                "physics",
                "technical writing"
            ]
        },
        {
            "name": "Principal Chemistry Inspector",
            "skills": [
                "data analysis",
                "chemistry fundamentals",
                "mathematics",
                "advanced chemistry",
                "analytical thinking",
                "problem solving",
                "technical writing",
                "physics"
            ]
        },
        {
            "name": "Independent Chemistry Director",
            "skills": [
                "experimentation",
                "problem solving",
                "analytical thinking",
                "chemistry fundamentals",
                "research",
                "advanced chemistry"
            ]
        },
        {
            "name": "Principal Chemistry Scientist",
            "skills": [
                "experimentation",
                "modeling",
                "chemistry strategy",
                "physics",
                "mathematics",
                "problem solving"
            ]
        },
        {
            "name": "Regional Chemistry Specialist",
            "skills": [
                "research",
                "problem solving",
                "modeling",
                "physics",
                "analytical thinking",
                "data analysis",
                "experimentation",
                "chemistry strategy"
            ]
        },
        {
            "name": "Chief Chemistry Professor",
            "skills": [
                "statistics",
                "experimentation",
                "mathematics",
                "physics",
                "problem solving",
                "data analysis",
                "chemistry strategy"
            ]
        },
        {
            "name": "Assistant Chemistry Engineer",
            "skills": [
                "statistics",
                "chemistry fundamentals",
                "analytical thinking",
                "physics",
                "mathematics",
                "research",
                "problem solving"
            ]
        },
        {
            "name": "Assistant Chemistry Researcher",
            "skills": [
                "data analysis",
                "advanced chemistry",
                "modeling",
                "statistics",
                "research",
                "physics"
            ]
        },
        {
            "name": "Global Chemistry Technician",
            "skills": [
                "modeling",
                "experimentation",
                "technical writing",
                "chemistry strategy",
                "physics",
                "mathematics"
            ]
        },
        {
            "name": "Independent Chemistry Inspector",
            "skills": [
                "statistics",
                "technical writing",
                "experimentation",
                "analytical thinking",
                "advanced chemistry",
                "physics",
                "chemistry strategy"
            ]
        },
        {
            "name": "Independent Chemistry Scientist",
            "skills": [
                "research",
                "experimentation",
                "statistics",
                "data analysis",
                "mathematics"
            ]
        },
        {
            "name": "Senior Chemistry Professor",
            "skills": [
                "data analysis",
                "physics",
                "mathematics",
                "statistics",
                "analytical thinking",
                "problem solving",
                "technical writing",
                "chemistry strategy"
            ]
        },
        {
            "name": "Creative Chemistry Engineer",
            "skills": [
                "physics",
                "experimentation",
                "research",
                "chemistry fundamentals",
                "advanced chemistry",
                "technical writing"
            ]
        },
        {
            "name": "Corporate Chemistry Consultant",
            "skills": [
                "research",
                "physics",
                "statistics",
                "experimentation",
                "data analysis"
            ]
        }
    ],
    "Biology": [
        {
            "name": "Assistant Biology Technician",
            "skills": [
                "data analysis",
                "experimentation",
                "statistics",
                "advanced biology",
                "biology strategy"
            ]
        },
        {
            "name": "Creative Biology Professor",
            "skills": [
                "research",
                "biology fundamentals",
                "modeling",
                "technical writing",
                "problem solving",
                "experimentation"
            ]
        },
        {
            "name": "Creative Biology Scientist",
            "skills": [
                "mathematics",
                "data analysis",
                "biology fundamentals",
                "physics",
                "analytical thinking"
            ]
        },
        {
            "name": "Junior Biology Director",
            "skills": [
                "statistics",
                "mathematics",
                "physics",
                "advanced biology",
                "research",
                "technical writing"
            ]
        },
        {
            "name": "Biology Director",
            "skills": [
                "problem solving",
                "advanced biology",
                "biology fundamentals",
                "physics",
                "data analysis",
                "analytical thinking",
                "experimentation",
                "modeling"
            ]
        },
        {
            "name": "Freelance Biology Consultant",
            "skills": [
                "research",
                "statistics",
                "analytical thinking",
                "problem solving",
                "biology fundamentals",
                "advanced biology",
                "technical writing",
                "data analysis"
            ]
        },
        {
            "name": "Corporate Biology Professor",
            "skills": [
                "mathematics",
                "biology strategy",
                "technical writing",
                "modeling",
                "biology fundamentals",
                "experimentation",
                "physics",
                "statistics"
            ]
        },
        {
            "name": "Assistant Biology Specialist",
            "skills": [
                "data analysis",
                "biology fundamentals",
                "biology strategy",
                "analytical thinking",
                "problem solving",
                "modeling"
            ]
        },
        {
            "name": "Independent Biology Engineer",
            "skills": [
                "biology fundamentals",
                "statistics",
                "advanced biology",
                "problem solving",
                "analytical thinking"
            ]
        },
        {
            "name": "Regional Biology Technician",
            "skills": [
                "biology fundamentals",
                "statistics",
                "problem solving",
                "advanced biology",
                "research",
                "experimentation",
                "biology strategy"
            ]
        },
        {
            "name": "Associate Biology Director",
            "skills": [
                "statistics",
                "data analysis",
                "modeling",
                "research",
                "analytical thinking",
                "problem solving",
                "advanced biology",
                "technical writing"
            ]
        },
        {
            "name": "Independent Biology Professor",
            "skills": [
                "statistics",
                "problem solving",
                "advanced biology",
                "experimentation",
                "modeling",
                "technical writing",
                "biology strategy"
            ]
        },
        {
            "name": "Corporate Biology Specialist",
            "skills": [
                "research",
                "problem solving",
                "experimentation",
                "analytical thinking",
                "physics",
                "mathematics",
                "biology fundamentals"
            ]
        },
        {
            "name": "Biology Engineer",
            "skills": [
                "experimentation",
                "analytical thinking",
                "biology fundamentals",
                "problem solving",
                "research"
            ]
        },
        {
            "name": "Biology Specialist",
            "skills": [
                "experimentation",
                "data analysis",
                "mathematics",
                "physics",
                "statistics",
                "biology strategy"
            ]
        }
    ],
    "Space Science": [
        {
            "name": "Technical Space Science Researcher",
            "skills": [
                "space science fundamentals",
                "statistics",
                "research",
                "space science strategy",
                "analytical thinking",
                "data analysis",
                "advanced space science"
            ]
        },
        {
            "name": "Creative Space Science Engineer",
            "skills": [
                "technical writing",
                "mathematics",
                "advanced space science",
                "analytical thinking",
                "space science strategy",
                "modeling",
                "data analysis",
                "experimentation"
            ]
        },
        {
            "name": "Space Science Analyst",
            "skills": [
                "technical writing",
                "mathematics",
                "space science fundamentals",
                "analytical thinking",
                "space science strategy"
            ]
        },
        {
            "name": "Creative Space Science Technician",
            "skills": [
                "physics",
                "modeling",
                "data analysis",
                "advanced space science",
                "space science strategy",
                "space science fundamentals",
                "statistics",
                "technical writing"
            ]
        },
        {
            "name": "Independent Space Science Technician",
            "skills": [
                "modeling",
                "data analysis",
                "analytical thinking",
                "mathematics",
                "problem solving",
                "technical writing",
                "advanced space science"
            ]
        },
        {
            "name": "Creative Space Science Specialist",
            "skills": [
                "experimentation",
                "modeling",
                "research",
                "problem solving",
                "mathematics",
                "data analysis",
                "space science fundamentals"
            ]
        },
        {
            "name": "Technical Space Science Specialist",
            "skills": [
                "space science strategy",
                "advanced space science",
                "research",
                "experimentation",
                "technical writing",
                "data analysis"
            ]
        },
        {
            "name": "Corporate Space Science Analyst",
            "skills": [
                "data analysis",
                "space science fundamentals",
                "research",
                "technical writing",
                "problem solving",
                "analytical thinking",
                "modeling"
            ]
        },
        {
            "name": "Independent Space Science Scientist",
            "skills": [
                "statistics",
                "research",
                "space science fundamentals",
                "advanced space science",
                "technical writing",
                "physics",
                "space science strategy",
                "data analysis"
            ]
        },
        {
            "name": "Space Science Consultant",
            "skills": [
                "data analysis",
                "research",
                "advanced space science",
                "statistics",
                "space science strategy"
            ]
        },
        {
            "name": "Senior Space Science Analyst",
            "skills": [
                "mathematics",
                "space science strategy",
                "analytical thinking",
                "problem solving",
                "statistics",
                "data analysis"
            ]
        },
        {
            "name": "Space Science Professor",
            "skills": [
                "space science strategy",
                "data analysis",
                "analytical thinking",
                "physics",
                "technical writing",
                "space science fundamentals",
                "problem solving",
                "mathematics"
            ]
        },
        {
            "name": "Regional Space Science Director",
            "skills": [
                "data analysis",
                "space science fundamentals",
                "mathematics",
                "modeling",
                "advanced space science",
                "physics",
                "analytical thinking"
            ]
        },
        {
            "name": "Independent Space Science Consultant",
            "skills": [
                "mathematics",
                "technical writing",
                "space science strategy",
                "physics",
                "problem solving",
                "analytical thinking"
            ]
        },
        {
            "name": "Junior Space Science Inspector",
            "skills": [
                "statistics",
                "research",
                "space science fundamentals",
                "advanced space science",
                "problem solving"
            ]
        }
    ],
    "Mechanical Engineering": [
        {
            "name": "Associate Mechanical Engineering Professor",
            "skills": [
                "technical writing",
                "data analysis",
                "modeling",
                "research",
                "mechanical engineering strategy",
                "analytical thinking",
                "mathematics",
                "statistics"
            ]
        },
        {
            "name": "Creative Mechanical Engineering Specialist",
            "skills": [
                "modeling",
                "analytical thinking",
                "mechanical engineering strategy",
                "advanced mechanical engineering",
                "mathematics"
            ]
        },
        {
            "name": "Technical Mechanical Engineering Technician",
            "skills": [
                "modeling",
                "mechanical engineering strategy",
                "technical writing",
                "physics",
                "data analysis"
            ]
        },
        {
            "name": "Mechanical Engineering Engineer",
            "skills": [
                "modeling",
                "experimentation",
                "mechanical engineering strategy",
                "mechanical engineering fundamentals",
                "mathematics",
                "statistics"
            ]
        },
        {
            "name": "Assistant Mechanical Engineering Researcher",
            "skills": [
                "mechanical engineering fundamentals",
                "physics",
                "modeling",
                "mechanical engineering strategy",
                "analytical thinking",
                "advanced mechanical engineering",
                "problem solving",
                "data analysis"
            ]
        },
        {
            "name": "Technical Mechanical Engineering Professor",
            "skills": [
                "research",
                "statistics",
                "mechanical engineering fundamentals",
                "technical writing",
                "physics",
                "mathematics"
            ]
        },
        {
            "name": "Corporate Mechanical Engineering Consultant",
            "skills": [
                "data analysis",
                "analytical thinking",
                "mechanical engineering strategy",
                "problem solving",
                "advanced mechanical engineering",
                "statistics"
            ]
        },
        {
            "name": "Regional Mechanical Engineering Consultant",
            "skills": [
                "analytical thinking",
                "experimentation",
                "advanced mechanical engineering",
                "data analysis",
                "mechanical engineering strategy",
                "physics",
                "mechanical engineering fundamentals"
            ]
        },
        {
            "name": "Assistant Mechanical Engineering Scientist",
            "skills": [
                "problem solving",
                "modeling",
                "statistics",
                "mathematics",
                "mechanical engineering strategy",
                "experimentation",
                "advanced mechanical engineering"
            ]
        },
        {
            "name": "Mechanical Engineering Analyst",
            "skills": [
                "research",
                "experimentation",
                "analytical thinking",
                "technical writing",
                "problem solving"
            ]
        },
        {
            "name": "Corporate Mechanical Engineering Specialist",
            "skills": [
                "physics",
                "mechanical engineering fundamentals",
                "mechanical engineering strategy",
                "advanced mechanical engineering",
                "research"
            ]
        },
        {
            "name": "Lead Mechanical Engineering Consultant",
            "skills": [
                "problem solving",
                "modeling",
                "advanced mechanical engineering",
                "data analysis",
                "mathematics",
                "analytical thinking"
            ]
        },
        {
            "name": "Assistant Mechanical Engineering Engineer",
            "skills": [
                "mechanical engineering strategy",
                "research",
                "mathematics",
                "experimentation",
                "analytical thinking",
                "mechanical engineering fundamentals",
                "physics"
            ]
        },
        {
            "name": "Corporate Mechanical Engineering Analyst",
            "skills": [
                "mathematics",
                "analytical thinking",
                "problem solving",
                "physics",
                "statistics"
            ]
        },
        {
            "name": "Technical Mechanical Engineering Inspector",
            "skills": [
                "mechanical engineering strategy",
                "advanced mechanical engineering",
                "statistics",
                "experimentation",
                "mathematics"
            ]
        }
    ],
    "Civil Engineering": [
        {
            "name": "Senior Civil Engineering Specialist",
            "skills": [
                "advanced civil engineering",
                "research",
                "experimentation",
                "statistics",
                "civil engineering strategy",
                "mathematics",
                "technical writing"
            ]
        },
        {
            "name": "Chief Civil Engineering Technician",
            "skills": [
                "analytical thinking",
                "research",
                "civil engineering fundamentals",
                "problem solving",
                "advanced civil engineering",
                "statistics",
                "physics",
                "modeling"
            ]
        },
        {
            "name": "Chief Civil Engineering Analyst",
            "skills": [
                "technical writing",
                "problem solving",
                "physics",
                "research",
                "statistics"
            ]
        },
        {
            "name": "Freelance Civil Engineering Analyst",
            "skills": [
                "problem solving",
                "research",
                "technical writing",
                "civil engineering strategy",
                "experimentation",
                "mathematics",
                "analytical thinking",
                "advanced civil engineering"
            ]
        },
        {
            "name": "Principal Civil Engineering Analyst",
            "skills": [
                "modeling",
                "civil engineering strategy",
                "experimentation",
                "analytical thinking",
                "physics"
            ]
        },
        {
            "name": "Junior Civil Engineering Scientist",
            "skills": [
                "experimentation",
                "technical writing",
                "problem solving",
                "statistics",
                "analytical thinking"
            ]
        },
        {
            "name": "Civil Engineering Technician",
            "skills": [
                "advanced civil engineering",
                "technical writing",
                "data analysis",
                "civil engineering fundamentals",
                "mathematics",
                "statistics",
                "modeling",
                "experimentation"
            ]
        },
        {
            "name": "Civil Engineering Inspector",
            "skills": [
                "statistics",
                "physics",
                "civil engineering strategy",
                "experimentation",
                "data analysis"
            ]
        },
        {
            "name": "Freelance Civil Engineering Researcher",
            "skills": [
                "civil engineering strategy",
                "analytical thinking",
                "mathematics",
                "technical writing",
                "civil engineering fundamentals"
            ]
        },
        {
            "name": "Freelance Civil Engineering Director",
            "skills": [
                "experimentation",
                "technical writing",
                "problem solving",
                "advanced civil engineering",
                "civil engineering fundamentals",
                "modeling",
                "data analysis",
                "mathematics"
            ]
        },
        {
            "name": "Technical Civil Engineering Consultant",
            "skills": [
                "experimentation",
                "civil engineering fundamentals",
                "mathematics",
                "research",
                "advanced civil engineering",
                "data analysis",
                "statistics",
                "physics"
            ]
        },
        {
            "name": "Civil Engineering Scientist",
            "skills": [
                "advanced civil engineering",
                "physics",
                "mathematics",
                "problem solving",
                "modeling",
                "analytical thinking",
                "civil engineering fundamentals"
            ]
        },
        {
            "name": "Technical Civil Engineering Researcher",
            "skills": [
                "physics",
                "civil engineering strategy",
                "research",
                "technical writing",
                "advanced civil engineering",
                "modeling",
                "problem solving"
            ]
        },
        {
            "name": "Principal Civil Engineering Researcher",
            "skills": [
                "analytical thinking",
                "advanced civil engineering",
                "statistics",
                "data analysis",
                "research",
                "experimentation"
            ]
        },
        {
            "name": "Junior Civil Engineering Professor",
            "skills": [
                "civil engineering strategy",
                "modeling",
                "data analysis",
                "problem solving",
                "statistics",
                "civil engineering fundamentals",
                "physics",
                "research"
            ]
        }
    ],
    "Environmental Science": [
        {
            "name": "Environmental Science Engineer",
            "skills": [
                "advanced environmental science",
                "mathematics",
                "physics",
                "analytical thinking",
                "technical writing",
                "environmental science strategy",
                "statistics"
            ]
        },
        {
            "name": "Freelance Environmental Science Analyst",
            "skills": [
                "advanced environmental science",
                "environmental science fundamentals",
                "research",
                "statistics",
                "technical writing"
            ]
        },
        {
            "name": "Technical Environmental Science Researcher",
            "skills": [
                "mathematics",
                "physics",
                "modeling",
                "environmental science fundamentals",
                "environmental science strategy",
                "data analysis",
                "research"
            ]
        },
        {
            "name": "Environmental Science Technician",
            "skills": [
                "research",
                "environmental science strategy",
                "advanced environmental science",
                "analytical thinking",
                "statistics",
                "modeling",
                "technical writing"
            ]
        },
        {
            "name": "Lead Environmental Science Specialist",
            "skills": [
                "physics",
                "analytical thinking",
                "technical writing",
                "environmental science fundamentals",
                "mathematics",
                "modeling",
                "statistics"
            ]
        },
        {
            "name": "Independent Environmental Science Engineer",
            "skills": [
                "problem solving",
                "physics",
                "research",
                "analytical thinking",
                "mathematics",
                "technical writing",
                "statistics"
            ]
        },
        {
            "name": "Junior Environmental Science Researcher",
            "skills": [
                "problem solving",
                "environmental science strategy",
                "statistics",
                "physics",
                "experimentation",
                "technical writing",
                "research"
            ]
        },
        {
            "name": "Global Environmental Science Scientist",
            "skills": [
                "statistics",
                "environmental science fundamentals",
                "experimentation",
                "problem solving",
                "advanced environmental science",
                "data analysis"
            ]
        },
        {
            "name": "Assistant Environmental Science Consultant",
            "skills": [
                "analytical thinking",
                "environmental science strategy",
                "statistics",
                "mathematics",
                "experimentation",
                "research",
                "advanced environmental science"
            ]
        },
        {
            "name": "Regional Environmental Science Inspector",
            "skills": [
                "mathematics",
                "technical writing",
                "advanced environmental science",
                "problem solving",
                "statistics",
                "physics",
                "analytical thinking"
            ]
        },
        {
            "name": "Independent Environmental Science Consultant",
            "skills": [
                "modeling",
                "problem solving",
                "experimentation",
                "technical writing",
                "mathematics"
            ]
        },
        {
            "name": "Environmental Science Inspector",
            "skills": [
                "modeling",
                "environmental science strategy",
                "mathematics",
                "technical writing",
                "advanced environmental science",
                "statistics"
            ]
        },
        {
            "name": "Freelance Environmental Science Researcher",
            "skills": [
                "environmental science fundamentals",
                "research",
                "modeling",
                "advanced environmental science",
                "technical writing",
                "statistics"
            ]
        },
        {
            "name": "Freelance Environmental Science Director",
            "skills": [
                "modeling",
                "physics",
                "statistics",
                "mathematics",
                "environmental science fundamentals",
                "experimentation",
                "environmental science strategy"
            ]
        },
        {
            "name": "Senior Environmental Science Consultant",
            "skills": [
                "environmental science strategy",
                "research",
                "problem solving",
                "mathematics",
                "environmental science fundamentals",
                "physics",
                "data analysis"
            ]
        }
    ],
    "Cricket": [
        {
            "name": "Cricket Trainer",
            "skills": [
                "nutrition",
                "hand-eye coordination",
                "batting",
                "tactical thinking",
                "stamina"
            ]
        },
        {
            "name": "Principal Cricket Athlete",
            "skills": [
                "fitness",
                "strategy",
                "coaching",
                "communication",
                "tactical thinking",
                "hand-eye coordination",
                "bowling"
            ]
        },
        {
            "name": "Cricket Manager",
            "skills": [
                "coaching",
                "strategy",
                "bowling",
                "dedication",
                "nutrition",
                "fitness",
                "communication"
            ]
        },
        {
            "name": "Creative Cricket Trainer",
            "skills": [
                "bowling",
                "psychology",
                "leadership",
                "strategy",
                "tactical thinking",
                "coaching",
                "hand-eye coordination"
            ]
        },
        {
            "name": "Technical Cricket Director",
            "skills": [
                "fitness",
                "stamina",
                "coaching",
                "psychology",
                "bowling",
                "nutrition",
                "tactical thinking"
            ]
        },
        {
            "name": "Chief Cricket Commentator",
            "skills": [
                "tactical thinking",
                "fitness",
                "communication",
                "dedication",
                "strategy",
                "bowling",
                "stamina"
            ]
        },
        {
            "name": "Principal Cricket Specialist",
            "skills": [
                "batting",
                "dedication",
                "hand-eye coordination",
                "psychology",
                "tactical thinking",
                "leadership"
            ]
        },
        {
            "name": "Lead Cricket Scout",
            "skills": [
                "stamina",
                "strategy",
                "batting",
                "nutrition",
                "teamwork"
            ]
        },
        {
            "name": "Regional Cricket Scout",
            "skills": [
                "strategy",
                "communication",
                "fielding",
                "leadership",
                "hand-eye coordination",
                "fitness"
            ]
        },
        {
            "name": "Assistant Cricket Director",
            "skills": [
                "tactical thinking",
                "fielding",
                "coaching",
                "strategy",
                "teamwork",
                "hand-eye coordination",
                "psychology",
                "batting"
            ]
        },
        {
            "name": "Assistant Cricket Coach",
            "skills": [
                "communication",
                "strategy",
                "coaching",
                "dedication",
                "bowling"
            ]
        },
        {
            "name": "Associate Cricket Trainer",
            "skills": [
                "hand-eye coordination",
                "communication",
                "bowling",
                "fielding",
                "strategy"
            ]
        },
        {
            "name": "Freelance Cricket Director",
            "skills": [
                "coaching",
                "bowling",
                "fielding",
                "batting",
                "tactical thinking",
                "psychology",
                "dedication",
                "nutrition"
            ]
        },
        {
            "name": "Technical Cricket Athlete",
            "skills": [
                "hand-eye coordination",
                "nutrition",
                "coaching",
                "psychology",
                "fielding"
            ]
        },
        {
            "name": "Independent Cricket Specialist",
            "skills": [
                "stamina",
                "batting",
                "fielding",
                "strategy",
                "psychology",
                "dedication",
                "tactical thinking",
                "communication"
            ]
        }
    ],
    "Football": [
        {
            "name": "Lead Football Commentator",
            "skills": [
                "coaching",
                "stamina",
                "advanced football",
                "leadership",
                "dedication",
                "nutrition",
                "communication",
                "teamwork"
            ]
        },
        {
            "name": "Football Commentator",
            "skills": [
                "coaching",
                "dedication",
                "leadership",
                "communication",
                "psychology",
                "nutrition",
                "teamwork"
            ]
        },
        {
            "name": "Principal Football Scout",
            "skills": [
                "dedication",
                "football strategy",
                "coaching",
                "advanced football",
                "fitness",
                "communication",
                "teamwork"
            ]
        },
        {
            "name": "Regional Football Trainer",
            "skills": [
                "football fundamentals",
                "dedication",
                "stamina",
                "communication",
                "psychology",
                "teamwork",
                "advanced football",
                "coaching"
            ]
        },
        {
            "name": "Football Manager",
            "skills": [
                "football fundamentals",
                "football strategy",
                "teamwork",
                "communication",
                "psychology"
            ]
        },
        {
            "name": "Corporate Football Commentator",
            "skills": [
                "stamina",
                "football fundamentals",
                "psychology",
                "fitness",
                "nutrition",
                "leadership"
            ]
        },
        {
            "name": "Creative Football Commentator",
            "skills": [
                "advanced football",
                "fitness",
                "coaching",
                "strategy",
                "psychology",
                "football fundamentals",
                "football strategy",
                "dedication"
            ]
        },
        {
            "name": "Global Football Coach",
            "skills": [
                "football strategy",
                "teamwork",
                "football fundamentals",
                "advanced football",
                "communication"
            ]
        },
        {
            "name": "Senior Football Athlete",
            "skills": [
                "communication",
                "teamwork",
                "football strategy",
                "fitness",
                "advanced football",
                "dedication"
            ]
        },
        {
            "name": "Principal Football Specialist",
            "skills": [
                "advanced football",
                "fitness",
                "football strategy",
                "stamina",
                "teamwork"
            ]
        },
        {
            "name": "Associate Football Manager",
            "skills": [
                "teamwork",
                "football strategy",
                "strategy",
                "fitness",
                "advanced football"
            ]
        },
        {
            "name": "Assistant Football Analyst",
            "skills": [
                "psychology",
                "teamwork",
                "strategy",
                "leadership",
                "communication",
                "coaching"
            ]
        },
        {
            "name": "Chief Football Commentator",
            "skills": [
                "fitness",
                "strategy",
                "communication",
                "football strategy",
                "nutrition"
            ]
        },
        {
            "name": "Corporate Football Athlete",
            "skills": [
                "nutrition",
                "dedication",
                "teamwork",
                "stamina",
                "football strategy",
                "coaching"
            ]
        },
        {
            "name": "Assistant Football Manager",
            "skills": [
                "advanced football",
                "fitness",
                "communication",
                "teamwork",
                "nutrition",
                "psychology",
                "strategy"
            ]
        }
    ],
    "Basketball": [
        {
            "name": "Technical Basketball Athlete",
            "skills": [
                "coaching",
                "dedication",
                "stamina",
                "strategy",
                "leadership",
                "basketball fundamentals",
                "teamwork",
                "nutrition"
            ]
        },
        {
            "name": "Corporate Basketball Scout",
            "skills": [
                "basketball strategy",
                "nutrition",
                "strategy",
                "stamina",
                "basketball fundamentals",
                "psychology",
                "dedication",
                "communication"
            ]
        },
        {
            "name": "Basketball Manager",
            "skills": [
                "basketball fundamentals",
                "stamina",
                "communication",
                "dedication",
                "basketball strategy"
            ]
        },
        {
            "name": "Chief Basketball Coach",
            "skills": [
                "dedication",
                "leadership",
                "coaching",
                "nutrition",
                "advanced basketball",
                "basketball strategy",
                "stamina"
            ]
        },
        {
            "name": "Basketball Physiotherapist",
            "skills": [
                "fitness",
                "strategy",
                "coaching",
                "nutrition",
                "leadership",
                "teamwork",
                "basketball strategy"
            ]
        },
        {
            "name": "Regional Basketball Manager",
            "skills": [
                "basketball strategy",
                "leadership",
                "communication",
                "strategy",
                "advanced basketball"
            ]
        },
        {
            "name": "Technical Basketball Commentator",
            "skills": [
                "leadership",
                "dedication",
                "fitness",
                "advanced basketball",
                "psychology",
                "stamina",
                "strategy",
                "basketball strategy"
            ]
        },
        {
            "name": "Technical Basketball Analyst",
            "skills": [
                "dedication",
                "fitness",
                "basketball strategy",
                "psychology",
                "leadership",
                "nutrition",
                "stamina"
            ]
        },
        {
            "name": "Assistant Basketball Scout",
            "skills": [
                "stamina",
                "basketball fundamentals",
                "fitness",
                "communication",
                "coaching"
            ]
        },
        {
            "name": "Lead Basketball Athlete",
            "skills": [
                "teamwork",
                "nutrition",
                "stamina",
                "psychology",
                "fitness"
            ]
        },
        {
            "name": "Corporate Basketball Analyst",
            "skills": [
                "dedication",
                "strategy",
                "teamwork",
                "basketball fundamentals",
                "coaching",
                "nutrition",
                "leadership"
            ]
        },
        {
            "name": "Independent Basketball Manager",
            "skills": [
                "basketball strategy",
                "psychology",
                "strategy",
                "fitness",
                "leadership",
                "coaching"
            ]
        },
        {
            "name": "Junior Basketball Coach",
            "skills": [
                "leadership",
                "advanced basketball",
                "teamwork",
                "coaching",
                "dedication",
                "nutrition",
                "basketball fundamentals",
                "fitness"
            ]
        },
        {
            "name": "Assistant Basketball Specialist",
            "skills": [
                "teamwork",
                "basketball strategy",
                "leadership",
                "advanced basketball",
                "communication"
            ]
        },
        {
            "name": "Basketball Commentator",
            "skills": [
                "basketball strategy",
                "teamwork",
                "strategy",
                "advanced basketball",
                "dedication",
                "communication",
                "nutrition"
            ]
        }
    ],
    "Fitness & Gym": [
        {
            "name": "Lead Fitness Analyst",
            "skills": [
                "communication",
                "psychology",
                "coaching",
                "fitness & gym strategy",
                "leadership",
                "teamwork"
            ]
        },
        {
            "name": "Technical Fitness & Gym Specialist",
            "skills": [
                "strategy",
                "communication",
                "teamwork",
                "dedication",
                "fitness",
                "nutrition"
            ]
        },
        {
            "name": "Lead Fitness Director",
            "skills": [
                "advanced fitness & gym",
                "fitness & gym fundamentals",
                "teamwork",
                "fitness",
                "communication",
                "coaching"
            ]
        },
        {
            "name": "Global Fitness Director",
            "skills": [
                "teamwork",
                "strategy",
                "psychology",
                "fitness & gym strategy",
                "dedication",
                "coaching",
                "advanced fitness & gym"
            ]
        },
        {
            "name": "Regional Fitness Commentator",
            "skills": [
                "psychology",
                "stamina",
                "fitness & gym fundamentals",
                "dedication",
                "communication",
                "advanced fitness & gym"
            ]
        },
        {
            "name": "Lead Fitness Commentator",
            "skills": [
                "psychology",
                "communication",
                "teamwork",
                "strategy",
                "advanced fitness & gym",
                "coaching",
                "fitness",
                "leadership"
            ]
        },
        {
            "name": "Creative Gym Physiotherapist",
            "skills": [
                "fitness & gym strategy",
                "stamina",
                "strategy",
                "advanced fitness & gym",
                "psychology",
                "dedication"
            ]
        },
        {
            "name": "Corporate Fitness Manager",
            "skills": [
                "advanced fitness & gym",
                "fitness & gym fundamentals",
                "nutrition",
                "communication",
                "psychology"
            ]
        },
        {
            "name": "Corporate Fitness Athlete",
            "skills": [
                "fitness",
                "leadership",
                "fitness & gym strategy",
                "coaching",
                "strategy"
            ]
        },
        {
            "name": "Global Fitness Trainer",
            "skills": [
                "coaching",
                "stamina",
                "nutrition",
                "teamwork",
                "advanced fitness & gym",
                "dedication",
                "leadership"
            ]
        },
        {
            "name": "Associate Fitness & Gym Athlete",
            "skills": [
                "fitness & gym strategy",
                "leadership",
                "teamwork",
                "advanced fitness & gym",
                "fitness",
                "strategy",
                "nutrition",
                "dedication"
            ]
        },
        {
            "name": "Independent Fitness Specialist",
            "skills": [
                "teamwork",
                "coaching",
                "advanced fitness & gym",
                "leadership",
                "strategy",
                "stamina",
                "fitness & gym fundamentals"
            ]
        },
        {
            "name": "Technical Fitness Athlete",
            "skills": [
                "fitness",
                "teamwork",
                "advanced fitness & gym",
                "fitness & gym strategy",
                "leadership",
                "strategy",
                "fitness & gym fundamentals",
                "psychology"
            ]
        },
        {
            "name": "Freelance Fitness Analyst",
            "skills": [
                "advanced fitness & gym",
                "dedication",
                "fitness & gym strategy",
                "fitness & gym fundamentals",
                "coaching",
                "leadership",
                "fitness"
            ]
        },
        {
            "name": "Independent Fitness & Gym Physiotherapist",
            "skills": [
                "fitness",
                "stamina",
                "teamwork",
                "fitness & gym fundamentals",
                "coaching",
                "advanced fitness & gym"
            ]
        }
    ],
    "Athletics": [
        {
            "name": "Freelance Athletics Manager",
            "skills": [
                "teamwork",
                "fitness",
                "strategy",
                "leadership",
                "athletics strategy",
                "communication",
                "advanced athletics",
                "coaching"
            ]
        },
        {
            "name": "Junior Athletics Scout",
            "skills": [
                "athletics fundamentals",
                "nutrition",
                "psychology",
                "dedication",
                "stamina",
                "fitness",
                "leadership",
                "athletics strategy"
            ]
        },
        {
            "name": "Freelance Athletics Physiotherapist",
            "skills": [
                "teamwork",
                "communication",
                "leadership",
                "coaching",
                "fitness"
            ]
        },
        {
            "name": "Athletics Physiotherapist",
            "skills": [
                "strategy",
                "leadership",
                "athletics fundamentals",
                "communication",
                "coaching",
                "psychology",
                "advanced athletics",
                "fitness"
            ]
        },
        {
            "name": "Principal Athletics Director",
            "skills": [
                "leadership",
                "athletics strategy",
                "strategy",
                "athletics fundamentals",
                "dedication",
                "advanced athletics",
                "psychology",
                "teamwork"
            ]
        },
        {
            "name": "Regional Athletics Commentator",
            "skills": [
                "teamwork",
                "fitness",
                "communication",
                "nutrition",
                "advanced athletics",
                "strategy",
                "dedication"
            ]
        },
        {
            "name": "Lead Athletics Coach",
            "skills": [
                "athletics strategy",
                "strategy",
                "stamina",
                "coaching",
                "teamwork",
                "nutrition"
            ]
        },
        {
            "name": "Assistant Athletics Director",
            "skills": [
                "stamina",
                "strategy",
                "teamwork",
                "coaching",
                "communication",
                "athletics strategy"
            ]
        },
        {
            "name": "Technical Athletics Commentator",
            "skills": [
                "athletics strategy",
                "athletics fundamentals",
                "teamwork",
                "strategy",
                "leadership",
                "psychology",
                "stamina",
                "fitness"
            ]
        },
        {
            "name": "Senior Athletics Athlete",
            "skills": [
                "strategy",
                "athletics fundamentals",
                "leadership",
                "nutrition",
                "communication",
                "teamwork"
            ]
        },
        {
            "name": "Chief Athletics Manager",
            "skills": [
                "teamwork",
                "athletics fundamentals",
                "dedication",
                "advanced athletics",
                "coaching"
            ]
        },
        {
            "name": "Creative Athletics Commentator",
            "skills": [
                "dedication",
                "strategy",
                "communication",
                "teamwork",
                "psychology",
                "fitness",
                "athletics strategy",
                "stamina"
            ]
        },
        {
            "name": "Athletics Scout",
            "skills": [
                "stamina",
                "psychology",
                "athletics strategy",
                "nutrition",
                "advanced athletics"
            ]
        },
        {
            "name": "Athletics Manager",
            "skills": [
                "leadership",
                "stamina",
                "psychology",
                "communication",
                "advanced athletics"
            ]
        },
        {
            "name": "Global Athletics Scout",
            "skills": [
                "communication",
                "athletics fundamentals",
                "dedication",
                "nutrition",
                "coaching"
            ]
        }
    ],
    "Tennis": [
        {
            "name": "Tennis Physiotherapist",
            "skills": [
                "stamina",
                "teamwork",
                "fitness",
                "tennis strategy",
                "dedication"
            ]
        },
        {
            "name": "Freelance Tennis Physiotherapist",
            "skills": [
                "leadership",
                "strategy",
                "stamina",
                "fitness",
                "nutrition",
                "dedication",
                "tennis strategy",
                "communication"
            ]
        },
        {
            "name": "Junior Tennis Athlete",
            "skills": [
                "coaching",
                "strategy",
                "tennis strategy",
                "tennis fundamentals",
                "teamwork",
                "nutrition"
            ]
        },
        {
            "name": "Regional Tennis Director",
            "skills": [
                "communication",
                "stamina",
                "leadership",
                "tennis strategy",
                "advanced tennis",
                "psychology",
                "coaching"
            ]
        },
        {
            "name": "Freelance Tennis Scout",
            "skills": [
                "nutrition",
                "teamwork",
                "fitness",
                "dedication",
                "psychology",
                "stamina",
                "strategy"
            ]
        },
        {
            "name": "Tennis Scout",
            "skills": [
                "communication",
                "stamina",
                "fitness",
                "strategy",
                "tennis strategy",
                "advanced tennis"
            ]
        },
        {
            "name": "Corporate Tennis Coach",
            "skills": [
                "psychology",
                "communication",
                "teamwork",
                "strategy",
                "tennis strategy",
                "dedication",
                "advanced tennis"
            ]
        },
        {
            "name": "Tennis Director",
            "skills": [
                "advanced tennis",
                "teamwork",
                "psychology",
                "leadership",
                "fitness",
                "tennis strategy",
                "communication"
            ]
        },
        {
            "name": "Corporate Tennis Commentator",
            "skills": [
                "communication",
                "nutrition",
                "teamwork",
                "dedication",
                "fitness",
                "strategy",
                "leadership"
            ]
        },
        {
            "name": "Lead Tennis Analyst",
            "skills": [
                "fitness",
                "leadership",
                "strategy",
                "psychology",
                "tennis fundamentals",
                "nutrition",
                "stamina",
                "coaching"
            ]
        },
        {
            "name": "Assistant Tennis Coach",
            "skills": [
                "stamina",
                "teamwork",
                "fitness",
                "strategy",
                "nutrition"
            ]
        },
        {
            "name": "Corporate Tennis Manager",
            "skills": [
                "strategy",
                "psychology",
                "teamwork",
                "coaching",
                "nutrition",
                "leadership"
            ]
        },
        {
            "name": "Chief Tennis Athlete",
            "skills": [
                "coaching",
                "teamwork",
                "tennis fundamentals",
                "dedication",
                "tennis strategy"
            ]
        },
        {
            "name": "Technical Tennis Director",
            "skills": [
                "psychology",
                "nutrition",
                "leadership",
                "communication",
                "strategy"
            ]
        },
        {
            "name": "Lead Tennis Coach",
            "skills": [
                "nutrition",
                "psychology",
                "strategy",
                "advanced tennis",
                "dedication",
                "communication",
                "stamina",
                "teamwork"
            ]
        }
    ],
    "Content Creation": [
        {
            "name": "Creative Content Creation Consultant",
            "skills": [
                "public speaking",
                "storytelling",
                "editing",
                "seo",
                "networking",
                "research",
                "writing"
            ]
        },
        {
            "name": "Principal Content Creation Strategist",
            "skills": [
                "networking",
                "communication",
                "social media",
                "research",
                "seo"
            ]
        },
        {
            "name": "Freelance Content Creation Creator",
            "skills": [
                "storytelling",
                "networking",
                "editing",
                "communication",
                "seo",
                "content creation strategy"
            ]
        },
        {
            "name": "Lead Content Creation Editor",
            "skills": [
                "advanced content creation",
                "public speaking",
                "research",
                "social media",
                "storytelling",
                "editing",
                "networking"
            ]
        },
        {
            "name": "Regional Content Creation Strategist",
            "skills": [
                "content creation strategy",
                "research",
                "creativity",
                "advanced content creation",
                "writing",
                "storytelling",
                "public speaking"
            ]
        },
        {
            "name": "Independent Content Creation Coordinator",
            "skills": [
                "advanced content creation",
                "editing",
                "seo",
                "public speaking",
                "research",
                "content creation strategy",
                "storytelling",
                "social media"
            ]
        },
        {
            "name": "Associate Content Creation Director",
            "skills": [
                "communication",
                "storytelling",
                "content creation strategy",
                "creativity",
                "public speaking",
                "networking",
                "editing",
                "seo"
            ]
        },
        {
            "name": "Content Creation Producer",
            "skills": [
                "content creation fundamentals",
                "writing",
                "public speaking",
                "creativity",
                "networking"
            ]
        },
        {
            "name": "Regional Content Creation Writer",
            "skills": [
                "storytelling",
                "advanced content creation",
                "writing",
                "editing",
                "social media"
            ]
        },
        {
            "name": "Principal Content Creation Director",
            "skills": [
                "writing",
                "editing",
                "networking",
                "public speaking",
                "content creation strategy",
                "social media",
                "seo",
                "advanced content creation"
            ]
        },
        {
            "name": "Corporate Content Creation Director",
            "skills": [
                "content creation fundamentals",
                "advanced content creation",
                "seo",
                "research",
                "storytelling"
            ]
        },
        {
            "name": "Chief Content Creation Producer",
            "skills": [
                "content creation strategy",
                "research",
                "social media",
                "writing",
                "content creation fundamentals",
                "seo",
                "editing",
                "storytelling"
            ]
        },
        {
            "name": "Content Creation Director",
            "skills": [
                "writing",
                "advanced content creation",
                "editing",
                "networking",
                "communication",
                "public speaking"
            ]
        },
        {
            "name": "Assistant Content Creation Consultant",
            "skills": [
                "content creation strategy",
                "content creation fundamentals",
                "seo",
                "public speaking",
                "social media",
                "editing",
                "storytelling",
                "creativity"
            ]
        },
        {
            "name": "Assistant Content Creation Specialist",
            "skills": [
                "creativity",
                "editing",
                "communication",
                "content creation fundamentals",
                "research",
                "public speaking",
                "advanced content creation",
                "storytelling"
            ]
        }
    ],
    "Blogging": [
        {
            "name": "Chief Blogging Specialist",
            "skills": [
                "research",
                "creativity",
                "advanced blogging",
                "seo",
                "storytelling"
            ]
        },
        {
            "name": "Chief Blogging Manager",
            "skills": [
                "social media",
                "research",
                "editing",
                "blogging strategy",
                "storytelling",
                "advanced blogging",
                "seo"
            ]
        },
        {
            "name": "Chief Blogging Editor",
            "skills": [
                "storytelling",
                "communication",
                "creativity",
                "blogging strategy",
                "writing",
                "networking",
                "public speaking",
                "advanced blogging"
            ]
        },
        {
            "name": "Lead Blogging Consultant",
            "skills": [
                "communication",
                "networking",
                "public speaking",
                "editing",
                "storytelling"
            ]
        },
        {
            "name": "Global Blogging Consultant",
            "skills": [
                "public speaking",
                "editing",
                "storytelling",
                "research",
                "social media",
                "communication",
                "seo"
            ]
        },
        {
            "name": "Creative Blogging Specialist",
            "skills": [
                "advanced blogging",
                "public speaking",
                "networking",
                "communication",
                "blogging fundamentals",
                "creativity",
                "blogging strategy"
            ]
        },
        {
            "name": "Junior Blogging Producer",
            "skills": [
                "editing",
                "seo",
                "social media",
                "storytelling",
                "public speaking"
            ]
        },
        {
            "name": "Principal Blogging Coordinator",
            "skills": [
                "editing",
                "advanced blogging",
                "storytelling",
                "seo",
                "blogging fundamentals",
                "networking"
            ]
        },
        {
            "name": "Assistant Blogging Writer",
            "skills": [
                "social media",
                "blogging strategy",
                "networking",
                "research",
                "editing",
                "writing",
                "storytelling",
                "blogging fundamentals"
            ]
        },
        {
            "name": "Assistant Blogging Coordinator",
            "skills": [
                "networking",
                "communication",
                "research",
                "editing",
                "writing",
                "seo"
            ]
        },
        {
            "name": "Associate Blogging Writer",
            "skills": [
                "social media",
                "communication",
                "writing",
                "seo",
                "research",
                "networking"
            ]
        },
        {
            "name": "Creative Blogging Consultant",
            "skills": [
                "research",
                "blogging strategy",
                "blogging fundamentals",
                "storytelling",
                "networking",
                "editing",
                "communication",
                "public speaking"
            ]
        },
        {
            "name": "Assistant Blogging Director",
            "skills": [
                "creativity",
                "blogging strategy",
                "research",
                "seo",
                "social media"
            ]
        },
        {
            "name": "Regional Blogging Editor",
            "skills": [
                "networking",
                "blogging fundamentals",
                "seo",
                "editing",
                "creativity",
                "communication"
            ]
        },
        {
            "name": "Lead Blogging Manager",
            "skills": [
                "communication",
                "seo",
                "advanced blogging",
                "research",
                "blogging fundamentals",
                "blogging strategy",
                "public speaking",
                "creativity"
            ]
        }
    ],
    "Journalism": [
        {
            "name": "Global Journalism Consultant",
            "skills": [
                "social media",
                "storytelling",
                "journalism strategy",
                "public speaking",
                "journalism fundamentals",
                "writing",
                "networking"
            ]
        },
        {
            "name": "Independent Journalism Producer",
            "skills": [
                "editing",
                "social media",
                "advanced journalism",
                "public speaking",
                "networking",
                "research",
                "creativity",
                "seo"
            ]
        },
        {
            "name": "Journalism Editor",
            "skills": [
                "creativity",
                "seo",
                "storytelling",
                "research",
                "public speaking",
                "journalism strategy"
            ]
        },
        {
            "name": "Associate Journalism Consultant",
            "skills": [
                "journalism fundamentals",
                "communication",
                "public speaking",
                "advanced journalism",
                "writing",
                "social media",
                "research",
                "seo"
            ]
        },
        {
            "name": "Global Journalism Manager",
            "skills": [
                "research",
                "editing",
                "networking",
                "public speaking",
                "seo",
                "communication"
            ]
        },
        {
            "name": "Regional Journalism Strategist",
            "skills": [
                "creativity",
                "social media",
                "journalism strategy",
                "communication",
                "editing",
                "seo",
                "networking"
            ]
        },
        {
            "name": "Journalism Director",
            "skills": [
                "social media",
                "creativity",
                "writing",
                "journalism strategy",
                "advanced journalism"
            ]
        },
        {
            "name": "Associate Journalism Editor",
            "skills": [
                "journalism fundamentals",
                "editing",
                "seo",
                "communication",
                "public speaking"
            ]
        },
        {
            "name": "Associate Journalism Writer",
            "skills": [
                "networking",
                "public speaking",
                "storytelling",
                "research",
                "writing",
                "journalism fundamentals",
                "creativity"
            ]
        },
        {
            "name": "Associate Journalism Strategist",
            "skills": [
                "public speaking",
                "social media",
                "journalism fundamentals",
                "research",
                "writing",
                "networking",
                "advanced journalism",
                "journalism strategy"
            ]
        },
        {
            "name": "Junior Journalism Specialist",
            "skills": [
                "journalism strategy",
                "journalism fundamentals",
                "editing",
                "advanced journalism",
                "research"
            ]
        },
        {
            "name": "Technical Journalism Specialist",
            "skills": [
                "storytelling",
                "advanced journalism",
                "creativity",
                "editing",
                "networking"
            ]
        },
        {
            "name": "Journalism Producer",
            "skills": [
                "journalism strategy",
                "research",
                "journalism fundamentals",
                "public speaking",
                "seo"
            ]
        },
        {
            "name": "Technical Journalism Creator",
            "skills": [
                "advanced journalism",
                "creativity",
                "research",
                "social media",
                "communication",
                "public speaking"
            ]
        },
        {
            "name": "Lead Journalism Coordinator",
            "skills": [
                "networking",
                "editing",
                "public speaking",
                "research",
                "storytelling",
                "seo",
                "creativity",
                "journalism strategy"
            ]
        }
    ],
    "Public Speaking": [
        {
            "name": "Public Speaking Specialist",
            "skills": [
                "advanced public speaking",
                "editing",
                "research",
                "seo",
                "networking",
                "communication",
                "public speaking strategy",
                "public speaking fundamentals"
            ]
        },
        {
            "name": "Freelance Public Speaking Manager",
            "skills": [
                "public speaking",
                "advanced public speaking",
                "public speaking fundamentals",
                "communication",
                "seo"
            ]
        },
        {
            "name": "Chief Public Speaking Creator",
            "skills": [
                "creativity",
                "advanced public speaking",
                "editing",
                "research",
                "communication"
            ]
        },
        {
            "name": "Regional Public Speaking Editor",
            "skills": [
                "editing",
                "public speaking",
                "public speaking strategy",
                "advanced public speaking",
                "public speaking fundamentals",
                "seo",
                "research",
                "storytelling"
            ]
        },
        {
            "name": "Global Public Speaking Creator",
            "skills": [
                "advanced public speaking",
                "public speaking",
                "writing",
                "communication",
                "seo"
            ]
        },
        {
            "name": "Senior Public Speaking Creator",
            "skills": [
                "seo",
                "writing",
                "creativity",
                "public speaking",
                "research",
                "storytelling",
                "networking"
            ]
        },
        {
            "name": "Regional Public Speaking Producer",
            "skills": [
                "networking",
                "research",
                "editing",
                "social media",
                "creativity"
            ]
        },
        {
            "name": "Creative Public Speaking Creator",
            "skills": [
                "public speaking fundamentals",
                "storytelling",
                "advanced public speaking",
                "writing",
                "seo",
                "public speaking",
                "public speaking strategy"
            ]
        },
        {
            "name": "Public Speaking Manager",
            "skills": [
                "research",
                "networking",
                "public speaking fundamentals",
                "creativity",
                "storytelling",
                "public speaking",
                "editing"
            ]
        },
        {
            "name": "Lead Public Speaking Consultant",
            "skills": [
                "public speaking",
                "communication",
                "networking",
                "editing",
                "public speaking strategy",
                "writing"
            ]
        },
        {
            "name": "Creative Public Speaking Coordinator",
            "skills": [
                "public speaking",
                "social media",
                "communication",
                "storytelling",
                "public speaking strategy",
                "editing"
            ]
        },
        {
            "name": "Corporate Public Speaking Editor",
            "skills": [
                "research",
                "public speaking strategy",
                "editing",
                "public speaking fundamentals",
                "storytelling",
                "social media",
                "seo"
            ]
        },
        {
            "name": "Associate Public Speaking Manager",
            "skills": [
                "research",
                "public speaking strategy",
                "seo",
                "editing",
                "communication",
                "storytelling"
            ]
        },
        {
            "name": "Freelance Public Speaking Writer",
            "skills": [
                "networking",
                "writing",
                "research",
                "public speaking",
                "social media",
                "public speaking strategy"
            ]
        },
        {
            "name": "Public Speaking Editor",
            "skills": [
                "advanced public speaking",
                "seo",
                "research",
                "public speaking fundamentals",
                "public speaking",
                "storytelling"
            ]
        }
    ],
    "Public Relations": [
        {
            "name": "Associate Public Relations Editor",
            "skills": [
                "seo",
                "public relations fundamentals",
                "storytelling",
                "writing",
                "editing",
                "public relations strategy",
                "research"
            ]
        },
        {
            "name": "Senior Public Relations Writer",
            "skills": [
                "editing",
                "public relations strategy",
                "storytelling",
                "advanced public relations",
                "social media",
                "research"
            ]
        },
        {
            "name": "Technical Public Relations Manager",
            "skills": [
                "writing",
                "advanced public relations",
                "public speaking",
                "public relations fundamentals",
                "storytelling",
                "creativity"
            ]
        },
        {
            "name": "Principal Public Relations Writer",
            "skills": [
                "public relations strategy",
                "public speaking",
                "communication",
                "research",
                "writing",
                "seo",
                "storytelling"
            ]
        },
        {
            "name": "Independent Public Relations Writer",
            "skills": [
                "seo",
                "public relations strategy",
                "social media",
                "storytelling",
                "writing",
                "editing"
            ]
        },
        {
            "name": "Corporate Public Relations Producer",
            "skills": [
                "storytelling",
                "writing",
                "public relations strategy",
                "seo",
                "research"
            ]
        },
        {
            "name": "Public Relations Coordinator",
            "skills": [
                "editing",
                "writing",
                "public relations fundamentals",
                "social media",
                "networking",
                "advanced public relations",
                "public relations strategy",
                "research"
            ]
        },
        {
            "name": "Independent Public Relations Creator",
            "skills": [
                "communication",
                "networking",
                "creativity",
                "editing",
                "public relations strategy"
            ]
        },
        {
            "name": "Global Public Relations Creator",
            "skills": [
                "social media",
                "creativity",
                "advanced public relations",
                "seo",
                "editing",
                "public speaking",
                "communication"
            ]
        },
        {
            "name": "Regional Public Relations Manager",
            "skills": [
                "public relations fundamentals",
                "social media",
                "public speaking",
                "editing",
                "storytelling"
            ]
        },
        {
            "name": "Creative Public Relations Producer",
            "skills": [
                "creativity",
                "communication",
                "public relations fundamentals",
                "networking",
                "social media",
                "storytelling"
            ]
        },
        {
            "name": "Technical Public Relations Creator",
            "skills": [
                "advanced public relations",
                "networking",
                "writing",
                "creativity",
                "editing"
            ]
        },
        {
            "name": "Public Relations Manager",
            "skills": [
                "public relations strategy",
                "networking",
                "advanced public relations",
                "public relations fundamentals",
                "research",
                "public speaking"
            ]
        },
        {
            "name": "Senior Public Relations Strategist",
            "skills": [
                "networking",
                "public relations strategy",
                "seo",
                "research",
                "storytelling",
                "advanced public relations",
                "social media",
                "communication"
            ]
        },
        {
            "name": "Associate Public Relations Coordinator",
            "skills": [
                "public relations fundamentals",
                "networking",
                "storytelling",
                "advanced public relations",
                "social media",
                "creativity",
                "seo",
                "research"
            ]
        }
    ],
    "Teaching": [
        {
            "name": "Teaching Director",
            "skills": [
                "empathy",
                "customer service",
                "teaching strategy",
                "advanced teaching",
                "teaching fundamentals"
            ]
        },
        {
            "name": "Junior Teaching Educator",
            "skills": [
                "advanced teaching",
                "teamwork",
                "organization",
                "customer service",
                "adaptability",
                "problem solving",
                "communication",
                "critical thinking"
            ]
        },
        {
            "name": "Senior Teaching Professional",
            "skills": [
                "empathy",
                "teamwork",
                "advanced teaching",
                "customer service",
                "communication"
            ]
        },
        {
            "name": "Senior Teaching Manager",
            "skills": [
                "customer service",
                "organization",
                "leadership",
                "critical thinking",
                "time management",
                "adaptability"
            ]
        },
        {
            "name": "Teaching Coordinator",
            "skills": [
                "teaching fundamentals",
                "adaptability",
                "leadership",
                "time management",
                "customer service"
            ]
        },
        {
            "name": "Independent Teaching Director",
            "skills": [
                "empathy",
                "adaptability",
                "problem solving",
                "organization",
                "leadership",
                "advanced teaching"
            ]
        },
        {
            "name": "Assistant Teaching Advisor",
            "skills": [
                "leadership",
                "customer service",
                "advanced teaching",
                "critical thinking",
                "empathy",
                "teaching strategy",
                "teaching fundamentals",
                "communication"
            ]
        },
        {
            "name": "Corporate Teaching Advisor",
            "skills": [
                "critical thinking",
                "teamwork",
                "teaching strategy",
                "empathy",
                "advanced teaching",
                "organization",
                "teaching fundamentals",
                "problem solving"
            ]
        },
        {
            "name": "Teaching Professional",
            "skills": [
                "critical thinking",
                "teaching fundamentals",
                "teaching strategy",
                "time management",
                "advanced teaching",
                "customer service",
                "adaptability",
                "teamwork"
            ]
        },
        {
            "name": "Principal Teaching Advisor",
            "skills": [
                "critical thinking",
                "empathy",
                "communication",
                "leadership",
                "teaching fundamentals",
                "organization",
                "teamwork"
            ]
        },
        {
            "name": "Technical Teaching Educator",
            "skills": [
                "critical thinking",
                "empathy",
                "communication",
                "advanced teaching",
                "teaching fundamentals"
            ]
        },
        {
            "name": "Regional Teaching Educator",
            "skills": [
                "teamwork",
                "leadership",
                "problem solving",
                "empathy",
                "time management"
            ]
        },
        {
            "name": "Independent Teaching Coordinator",
            "skills": [
                "customer service",
                "critical thinking",
                "empathy",
                "time management",
                "adaptability",
                "teaching fundamentals"
            ]
        },
        {
            "name": "Chief Teaching Advisor",
            "skills": [
                "teamwork",
                "time management",
                "communication",
                "problem solving",
                "adaptability",
                "teaching fundamentals"
            ]
        },
        {
            "name": "Lead Teaching Educator",
            "skills": [
                "teaching strategy",
                "adaptability",
                "customer service",
                "advanced teaching",
                "problem solving",
                "critical thinking",
                "time management",
                "communication"
            ]
        }
    ],
    "Psychology": [
        {
            "name": "Principal Psychology Specialist",
            "skills": [
                "psychology fundamentals",
                "teamwork",
                "leadership",
                "advanced psychology",
                "adaptability",
                "organization"
            ]
        },
        {
            "name": "Independent Psychology Educator",
            "skills": [
                "adaptability",
                "teamwork",
                "psychology fundamentals",
                "time management",
                "empathy",
                "customer service",
                "problem solving",
                "critical thinking"
            ]
        },
        {
            "name": "Psychology Consultant",
            "skills": [
                "advanced psychology",
                "empathy",
                "customer service",
                "leadership",
                "communication",
                "organization",
                "problem solving"
            ]
        },
        {
            "name": "Assistant Psychology Analyst",
            "skills": [
                "teamwork",
                "adaptability",
                "problem solving",
                "psychology fundamentals",
                "empathy"
            ]
        },
        {
            "name": "Psychology Director",
            "skills": [
                "critical thinking",
                "teamwork",
                "problem solving",
                "communication",
                "empathy",
                "organization",
                "psychology strategy",
                "time management"
            ]
        },
        {
            "name": "Lead Psychology Manager",
            "skills": [
                "empathy",
                "time management",
                "critical thinking",
                "communication",
                "teamwork",
                "psychology fundamentals",
                "problem solving",
                "advanced psychology"
            ]
        },
        {
            "name": "Creative Psychology Professional",
            "skills": [
                "empathy",
                "psychology fundamentals",
                "advanced psychology",
                "time management",
                "psychology strategy",
                "customer service"
            ]
        },
        {
            "name": "Assistant Psychology Advisor",
            "skills": [
                "empathy",
                "problem solving",
                "leadership",
                "advanced psychology",
                "time management",
                "adaptability",
                "critical thinking"
            ]
        },
        {
            "name": "Lead Psychology Professional",
            "skills": [
                "time management",
                "leadership",
                "empathy",
                "advanced psychology",
                "adaptability",
                "problem solving",
                "customer service"
            ]
        },
        {
            "name": "Associate Psychology Analyst",
            "skills": [
                "critical thinking",
                "advanced psychology",
                "teamwork",
                "psychology fundamentals",
                "adaptability",
                "communication",
                "time management"
            ]
        },
        {
            "name": "Psychology Advisor",
            "skills": [
                "organization",
                "psychology fundamentals",
                "customer service",
                "time management",
                "teamwork",
                "adaptability",
                "communication",
                "advanced psychology"
            ]
        },
        {
            "name": "Lead Psychology Advisor",
            "skills": [
                "psychology strategy",
                "psychology fundamentals",
                "adaptability",
                "empathy",
                "problem solving",
                "leadership",
                "customer service",
                "teamwork"
            ]
        },
        {
            "name": "Creative Psychology Coordinator",
            "skills": [
                "empathy",
                "time management",
                "advanced psychology",
                "adaptability",
                "organization",
                "leadership",
                "customer service",
                "communication"
            ]
        },
        {
            "name": "Technical Psychology Coordinator",
            "skills": [
                "psychology strategy",
                "leadership",
                "psychology fundamentals",
                "organization",
                "problem solving",
                "empathy",
                "adaptability",
                "critical thinking"
            ]
        },
        {
            "name": "Technical Psychology Analyst",
            "skills": [
                "advanced psychology",
                "problem solving",
                "organization",
                "customer service",
                "teamwork",
                "psychology strategy"
            ]
        }
    ],
    "Law": [
        {
            "name": "Junior Law Consultant",
            "skills": [
                "law strategy",
                "customer service",
                "adaptability",
                "critical thinking",
                "teamwork",
                "problem solving",
                "advanced law",
                "law fundamentals"
            ]
        },
        {
            "name": "Technical Law Director",
            "skills": [
                "critical thinking",
                "teamwork",
                "time management",
                "adaptability",
                "law fundamentals",
                "leadership",
                "communication",
                "law strategy"
            ]
        },
        {
            "name": "Law Coordinator",
            "skills": [
                "teamwork",
                "customer service",
                "advanced law",
                "problem solving",
                "critical thinking",
                "adaptability",
                "law strategy"
            ]
        },
        {
            "name": "Assistant Law Consultant",
            "skills": [
                "organization",
                "law fundamentals",
                "teamwork",
                "communication",
                "advanced law"
            ]
        },
        {
            "name": "Regional Law Professional",
            "skills": [
                "advanced law",
                "critical thinking",
                "organization",
                "law fundamentals",
                "customer service",
                "teamwork",
                "law strategy",
                "leadership"
            ]
        },
        {
            "name": "Assistant Law Director",
            "skills": [
                "empathy",
                "time management",
                "customer service",
                "leadership",
                "law strategy",
                "law fundamentals",
                "critical thinking",
                "problem solving"
            ]
        },
        {
            "name": "Principal Law Educator",
            "skills": [
                "empathy",
                "customer service",
                "problem solving",
                "advanced law",
                "time management",
                "adaptability"
            ]
        },
        {
            "name": "Senior Law Coordinator",
            "skills": [
                "advanced law",
                "customer service",
                "problem solving",
                "adaptability",
                "teamwork",
                "leadership",
                "time management",
                "organization"
            ]
        },
        {
            "name": "Associate Law Manager",
            "skills": [
                "customer service",
                "problem solving",
                "empathy",
                "organization",
                "critical thinking"
            ]
        },
        {
            "name": "Regional Law Manager",
            "skills": [
                "organization",
                "time management",
                "leadership",
                "communication",
                "customer service",
                "teamwork",
                "empathy",
                "advanced law"
            ]
        },
        {
            "name": "Principal Law Practitioner",
            "skills": [
                "teamwork",
                "law strategy",
                "customer service",
                "time management",
                "law fundamentals"
            ]
        },
        {
            "name": "Law Practitioner",
            "skills": [
                "critical thinking",
                "advanced law",
                "law fundamentals",
                "problem solving",
                "communication",
                "time management"
            ]
        },
        {
            "name": "Technical Law Manager",
            "skills": [
                "problem solving",
                "leadership",
                "organization",
                "teamwork",
                "critical thinking",
                "communication",
                "advanced law"
            ]
        },
        {
            "name": "Global Law Director",
            "skills": [
                "leadership",
                "organization",
                "empathy",
                "adaptability",
                "problem solving",
                "law fundamentals",
                "law strategy"
            ]
        },
        {
            "name": "Chief Law Educator",
            "skills": [
                "empathy",
                "customer service",
                "law strategy",
                "critical thinking",
                "law fundamentals",
                "communication",
                "adaptability",
                "leadership"
            ]
        }
    ],
    "Healthcare": [
        {
            "name": "Associate Healthcare Advisor",
            "skills": [
                "communication",
                "adaptability",
                "critical thinking",
                "teamwork",
                "time management",
                "healthcare strategy"
            ]
        },
        {
            "name": "Corporate Healthcare Specialist",
            "skills": [
                "healthcare fundamentals",
                "teamwork",
                "communication",
                "adaptability",
                "critical thinking",
                "organization",
                "problem solving"
            ]
        },
        {
            "name": "Regional Healthcare Practitioner",
            "skills": [
                "communication",
                "critical thinking",
                "leadership",
                "adaptability",
                "healthcare strategy"
            ]
        },
        {
            "name": "Associate Healthcare Professional",
            "skills": [
                "critical thinking",
                "empathy",
                "teamwork",
                "adaptability",
                "communication"
            ]
        },
        {
            "name": "Assistant Healthcare Advisor",
            "skills": [
                "adaptability",
                "empathy",
                "leadership",
                "healthcare strategy",
                "communication",
                "healthcare fundamentals",
                "problem solving",
                "customer service"
            ]
        },
        {
            "name": "Chief Healthcare Educator",
            "skills": [
                "teamwork",
                "healthcare strategy",
                "adaptability",
                "problem solving",
                "time management",
                "leadership",
                "advanced healthcare"
            ]
        },
        {
            "name": "Associate Healthcare Analyst",
            "skills": [
                "empathy",
                "teamwork",
                "communication",
                "customer service",
                "adaptability",
                "healthcare fundamentals",
                "organization",
                "time management"
            ]
        },
        {
            "name": "Regional Healthcare Specialist",
            "skills": [
                "advanced healthcare",
                "time management",
                "healthcare fundamentals",
                "adaptability",
                "problem solving",
                "teamwork"
            ]
        },
        {
            "name": "Assistant Healthcare Educator",
            "skills": [
                "healthcare fundamentals",
                "critical thinking",
                "adaptability",
                "teamwork",
                "problem solving",
                "communication"
            ]
        },
        {
            "name": "Corporate Healthcare Coordinator",
            "skills": [
                "time management",
                "problem solving",
                "communication",
                "adaptability",
                "advanced healthcare"
            ]
        },
        {
            "name": "Technical Healthcare Specialist",
            "skills": [
                "adaptability",
                "customer service",
                "time management",
                "organization",
                "teamwork",
                "critical thinking"
            ]
        },
        {
            "name": "Principal Healthcare Analyst",
            "skills": [
                "healthcare strategy",
                "empathy",
                "adaptability",
                "problem solving",
                "leadership"
            ]
        },
        {
            "name": "Technical Healthcare Manager",
            "skills": [
                "time management",
                "communication",
                "critical thinking",
                "organization",
                "healthcare fundamentals",
                "healthcare strategy"
            ]
        },
        {
            "name": "Creative Healthcare Consultant",
            "skills": [
                "organization",
                "adaptability",
                "leadership",
                "critical thinking",
                "advanced healthcare"
            ]
        },
        {
            "name": "Chief Healthcare Professional",
            "skills": [
                "healthcare strategy",
                "healthcare fundamentals",
                "communication",
                "adaptability",
                "teamwork",
                "time management",
                "organization"
            ]
        }
    ],
    "Travel & Tourism": [
        {
            "name": "Travel Educator",
            "skills": [
                "problem solving",
                "time management",
                "teamwork",
                "critical thinking",
                "customer service",
                "travel & tourism fundamentals",
                "adaptability"
            ]
        },
        {
            "name": "Tourism Professional",
            "skills": [
                "customer service",
                "empathy",
                "problem solving",
                "travel & tourism fundamentals",
                "teamwork",
                "organization"
            ]
        },
        {
            "name": "Corporate Tourism Professional",
            "skills": [
                "customer service",
                "travel & tourism fundamentals",
                "travel & tourism strategy",
                "communication",
                "teamwork",
                "advanced travel & tourism",
                "adaptability"
            ]
        },
        {
            "name": "Principal Travel Educator",
            "skills": [
                "travel & tourism fundamentals",
                "customer service",
                "leadership",
                "critical thinking",
                "empathy",
                "organization",
                "communication"
            ]
        },
        {
            "name": "Creative Travel & Tourism Advisor",
            "skills": [
                "empathy",
                "advanced travel & tourism",
                "customer service",
                "communication",
                "problem solving"
            ]
        },
        {
            "name": "Assistant Travel & Tourism Coordinator",
            "skills": [
                "empathy",
                "advanced travel & tourism",
                "travel & tourism fundamentals",
                "communication",
                "leadership",
                "problem solving",
                "organization",
                "time management"
            ]
        },
        {
            "name": "Associate Travel & Tourism Educator",
            "skills": [
                "organization",
                "critical thinking",
                "problem solving",
                "time management",
                "adaptability",
                "empathy",
                "advanced travel & tourism"
            ]
        },
        {
            "name": "Global Travel & Tourism Coordinator",
            "skills": [
                "travel & tourism strategy",
                "organization",
                "leadership",
                "critical thinking",
                "problem solving",
                "empathy",
                "customer service",
                "advanced travel & tourism"
            ]
        },
        {
            "name": "Tourism Analyst",
            "skills": [
                "travel & tourism strategy",
                "critical thinking",
                "advanced travel & tourism",
                "travel & tourism fundamentals",
                "customer service",
                "organization",
                "problem solving",
                "empathy"
            ]
        },
        {
            "name": "Technical Tourism Specialist",
            "skills": [
                "communication",
                "travel & tourism fundamentals",
                "organization",
                "leadership",
                "empathy",
                "customer service"
            ]
        },
        {
            "name": "Associate Tourism Educator",
            "skills": [
                "problem solving",
                "critical thinking",
                "adaptability",
                "travel & tourism fundamentals",
                "communication",
                "organization"
            ]
        },
        {
            "name": "Senior Tourism Manager",
            "skills": [
                "communication",
                "critical thinking",
                "travel & tourism strategy",
                "empathy",
                "advanced travel & tourism",
                "customer service",
                "adaptability"
            ]
        },
        {
            "name": "Regional Tourism Professional",
            "skills": [
                "critical thinking",
                "teamwork",
                "travel & tourism fundamentals",
                "leadership",
                "organization",
                "communication",
                "advanced travel & tourism"
            ]
        },
        {
            "name": "Travel Director",
            "skills": [
                "travel & tourism fundamentals",
                "advanced travel & tourism",
                "customer service",
                "time management",
                "leadership",
                "organization",
                "travel & tourism strategy",
                "empathy"
            ]
        },
        {
            "name": "Assistant Travel Educator",
            "skills": [
                "problem solving",
                "leadership",
                "empathy",
                "critical thinking",
                "advanced travel & tourism",
                "teamwork"
            ]
        }
    ],
    "Fashion": [
        {
            "name": "Creative Fashion Analyst",
            "skills": [
                "customer service",
                "critical thinking",
                "organization",
                "adaptability",
                "fashion strategy"
            ]
        },
        {
            "name": "Fashion Professional",
            "skills": [
                "customer service",
                "fashion strategy",
                "communication",
                "adaptability",
                "empathy",
                "fashion fundamentals",
                "advanced fashion"
            ]
        },
        {
            "name": "Junior Fashion Manager",
            "skills": [
                "customer service",
                "empathy",
                "leadership",
                "teamwork",
                "fashion fundamentals"
            ]
        },
        {
            "name": "Independent Fashion Advisor",
            "skills": [
                "empathy",
                "customer service",
                "communication",
                "critical thinking",
                "problem solving",
                "fashion strategy",
                "organization"
            ]
        },
        {
            "name": "Junior Fashion Specialist",
            "skills": [
                "customer service",
                "teamwork",
                "advanced fashion",
                "fashion fundamentals",
                "empathy",
                "problem solving",
                "time management",
                "leadership"
            ]
        },
        {
            "name": "Corporate Fashion Coordinator",
            "skills": [
                "time management",
                "empathy",
                "critical thinking",
                "advanced fashion",
                "leadership",
                "customer service",
                "organization",
                "adaptability"
            ]
        },
        {
            "name": "Senior Fashion Analyst",
            "skills": [
                "empathy",
                "organization",
                "time management",
                "teamwork",
                "critical thinking"
            ]
        },
        {
            "name": "Freelance Fashion Specialist",
            "skills": [
                "adaptability",
                "leadership",
                "communication",
                "time management",
                "teamwork"
            ]
        },
        {
            "name": "Freelance Fashion Manager",
            "skills": [
                "fashion strategy",
                "time management",
                "empathy",
                "problem solving",
                "leadership",
                "teamwork",
                "customer service"
            ]
        },
        {
            "name": "Junior Fashion Advisor",
            "skills": [
                "problem solving",
                "leadership",
                "teamwork",
                "organization",
                "time management",
                "advanced fashion"
            ]
        },
        {
            "name": "Junior Fashion Analyst",
            "skills": [
                "communication",
                "problem solving",
                "leadership",
                "advanced fashion",
                "time management",
                "customer service"
            ]
        },
        {
            "name": "Principal Fashion Coordinator",
            "skills": [
                "adaptability",
                "fashion fundamentals",
                "leadership",
                "problem solving",
                "time management",
                "teamwork"
            ]
        },
        {
            "name": "Senior Fashion Manager",
            "skills": [
                "fashion strategy",
                "problem solving",
                "critical thinking",
                "fashion fundamentals",
                "adaptability",
                "customer service",
                "communication",
                "time management"
            ]
        },
        {
            "name": "Independent Fashion Professional",
            "skills": [
                "teamwork",
                "fashion fundamentals",
                "empathy",
                "adaptability",
                "fashion strategy",
                "customer service"
            ]
        },
        {
            "name": "Fashion Director",
            "skills": [
                "problem solving",
                "fashion strategy",
                "organization",
                "advanced fashion",
                "empathy",
                "customer service",
                "teamwork"
            ]
        }
    ],
    "Gaming": [
        {
            "name": "Global Gaming Manager",
            "skills": [
                "time management",
                "communication",
                "organization",
                "adaptability",
                "critical thinking",
                "problem solving",
                "gaming strategy"
            ]
        },
        {
            "name": "Gaming Advisor",
            "skills": [
                "gaming strategy",
                "critical thinking",
                "customer service",
                "empathy",
                "advanced gaming",
                "leadership",
                "problem solving"
            ]
        },
        {
            "name": "Junior Gaming Advisor",
            "skills": [
                "organization",
                "communication",
                "adaptability",
                "gaming strategy",
                "critical thinking",
                "teamwork",
                "advanced gaming",
                "leadership"
            ]
        },
        {
            "name": "Corporate Gaming Coordinator",
            "skills": [
                "empathy",
                "time management",
                "leadership",
                "problem solving",
                "critical thinking"
            ]
        },
        {
            "name": "Independent Gaming Director",
            "skills": [
                "empathy",
                "leadership",
                "problem solving",
                "teamwork",
                "time management",
                "adaptability",
                "critical thinking",
                "communication"
            ]
        },
        {
            "name": "Corporate Gaming Director",
            "skills": [
                "communication",
                "gaming strategy",
                "customer service",
                "time management",
                "teamwork",
                "problem solving",
                "advanced gaming"
            ]
        },
        {
            "name": "Gaming Coordinator",
            "skills": [
                "time management",
                "teamwork",
                "leadership",
                "adaptability",
                "gaming fundamentals"
            ]
        },
        {
            "name": "Associate Gaming Practitioner",
            "skills": [
                "adaptability",
                "gaming fundamentals",
                "organization",
                "communication",
                "problem solving",
                "gaming strategy",
                "advanced gaming"
            ]
        },
        {
            "name": "Technical Gaming Consultant",
            "skills": [
                "communication",
                "organization",
                "time management",
                "teamwork",
                "advanced gaming",
                "gaming strategy",
                "leadership",
                "gaming fundamentals"
            ]
        },
        {
            "name": "Gaming Practitioner",
            "skills": [
                "critical thinking",
                "gaming fundamentals",
                "teamwork",
                "customer service",
                "gaming strategy"
            ]
        },
        {
            "name": "Corporate Gaming Professional",
            "skills": [
                "organization",
                "gaming strategy",
                "teamwork",
                "leadership",
                "empathy"
            ]
        },
        {
            "name": "Technical Gaming Coordinator",
            "skills": [
                "problem solving",
                "communication",
                "customer service",
                "advanced gaming",
                "gaming fundamentals",
                "gaming strategy",
                "leadership"
            ]
        },
        {
            "name": "Associate Gaming Director",
            "skills": [
                "leadership",
                "gaming strategy",
                "empathy",
                "time management",
                "adaptability",
                "communication",
                "critical thinking"
            ]
        },
        {
            "name": "Associate Gaming Professional",
            "skills": [
                "problem solving",
                "communication",
                "gaming strategy",
                "leadership",
                "customer service"
            ]
        },
        {
            "name": "Principal Gaming Manager",
            "skills": [
                "gaming fundamentals",
                "time management",
                "teamwork",
                "critical thinking",
                "problem solving",
                "customer service",
                "leadership",
                "organization"
            ]
        }
    ],
    "Cooking": [
        {
            "name": "Regional Cooking Practitioner",
            "skills": [
                "cooking fundamentals",
                "customer service",
                "adaptability",
                "empathy",
                "communication",
                "cooking strategy"
            ]
        },
        {
            "name": "Technical Cooking Advisor",
            "skills": [
                "organization",
                "problem solving",
                "adaptability",
                "critical thinking",
                "cooking strategy",
                "empathy",
                "advanced cooking"
            ]
        },
        {
            "name": "Senior Cooking Educator",
            "skills": [
                "empathy",
                "critical thinking",
                "cooking fundamentals",
                "leadership",
                "customer service",
                "organization",
                "cooking strategy"
            ]
        },
        {
            "name": "Global Cooking Analyst",
            "skills": [
                "leadership",
                "cooking fundamentals",
                "organization",
                "advanced cooking",
                "critical thinking",
                "time management",
                "cooking strategy"
            ]
        },
        {
            "name": "Corporate Cooking Advisor",
            "skills": [
                "cooking fundamentals",
                "adaptability",
                "teamwork",
                "cooking strategy",
                "organization",
                "problem solving"
            ]
        },
        {
            "name": "Senior Cooking Specialist",
            "skills": [
                "leadership",
                "critical thinking",
                "time management",
                "empathy",
                "teamwork",
                "communication",
                "customer service",
                "problem solving"
            ]
        },
        {
            "name": "Cooking Practitioner",
            "skills": [
                "teamwork",
                "empathy",
                "organization",
                "problem solving",
                "leadership"
            ]
        },
        {
            "name": "Associate Cooking Manager",
            "skills": [
                "critical thinking",
                "leadership",
                "cooking fundamentals",
                "adaptability",
                "organization",
                "time management"
            ]
        },
        {
            "name": "Independent Cooking Director",
            "skills": [
                "communication",
                "critical thinking",
                "empathy",
                "organization",
                "problem solving",
                "leadership",
                "customer service"
            ]
        },
        {
            "name": "Independent Cooking Coordinator",
            "skills": [
                "communication",
                "cooking fundamentals",
                "advanced cooking",
                "critical thinking",
                "cooking strategy",
                "customer service",
                "adaptability",
                "empathy"
            ]
        },
        {
            "name": "Independent Cooking Practitioner",
            "skills": [
                "adaptability",
                "cooking fundamentals",
                "leadership",
                "teamwork",
                "organization",
                "time management"
            ]
        },
        {
            "name": "Cooking Director",
            "skills": [
                "cooking strategy",
                "organization",
                "critical thinking",
                "advanced cooking",
                "empathy",
                "adaptability",
                "leadership",
                "teamwork"
            ]
        },
        {
            "name": "Freelance Cooking Educator",
            "skills": [
                "adaptability",
                "communication",
                "customer service",
                "leadership",
                "empathy"
            ]
        },
        {
            "name": "Creative Cooking Advisor",
            "skills": [
                "critical thinking",
                "problem solving",
                "cooking fundamentals",
                "teamwork",
                "customer service"
            ]
        },
        {
            "name": "Lead Cooking Professional",
            "skills": [
                "communication",
                "teamwork",
                "customer service",
                "leadership",
                "adaptability",
                "critical thinking"
            ]
        }
    ],
    "Social Work": [
        {
            "name": "Assistant Social Work Educator",
            "skills": [
                "critical thinking",
                "social work strategy",
                "time management",
                "organization",
                "adaptability"
            ]
        },
        {
            "name": "Social Work Practitioner",
            "skills": [
                "time management",
                "leadership",
                "communication",
                "customer service",
                "empathy",
                "organization",
                "teamwork",
                "social work fundamentals"
            ]
        },
        {
            "name": "Senior Social Work Coordinator",
            "skills": [
                "customer service",
                "time management",
                "teamwork",
                "organization",
                "communication",
                "social work fundamentals"
            ]
        },
        {
            "name": "Social Work Manager",
            "skills": [
                "teamwork",
                "customer service",
                "communication",
                "organization",
                "empathy"
            ]
        },
        {
            "name": "Global Social Work Consultant",
            "skills": [
                "social work fundamentals",
                "critical thinking",
                "advanced social work",
                "adaptability",
                "teamwork"
            ]
        },
        {
            "name": "Independent Social Work Manager",
            "skills": [
                "leadership",
                "social work fundamentals",
                "time management",
                "communication",
                "teamwork",
                "advanced social work",
                "problem solving",
                "empathy"
            ]
        },
        {
            "name": "Global Social Work Practitioner",
            "skills": [
                "customer service",
                "time management",
                "leadership",
                "social work strategy",
                "advanced social work",
                "organization"
            ]
        },
        {
            "name": "Creative Social Work Practitioner",
            "skills": [
                "critical thinking",
                "time management",
                "leadership",
                "empathy",
                "adaptability",
                "organization",
                "problem solving",
                "customer service"
            ]
        },
        {
            "name": "Social Work Consultant",
            "skills": [
                "leadership",
                "customer service",
                "critical thinking",
                "problem solving",
                "time management",
                "adaptability",
                "teamwork",
                "social work fundamentals"
            ]
        },
        {
            "name": "Technical Social Work Analyst",
            "skills": [
                "empathy",
                "organization",
                "customer service",
                "leadership",
                "time management",
                "social work strategy"
            ]
        },
        {
            "name": "Assistant Social Work Analyst",
            "skills": [
                "communication",
                "adaptability",
                "problem solving",
                "advanced social work",
                "leadership",
                "teamwork"
            ]
        },
        {
            "name": "Corporate Social Work Advisor",
            "skills": [
                "organization",
                "teamwork",
                "communication",
                "leadership",
                "advanced social work",
                "critical thinking",
                "social work strategy"
            ]
        },
        {
            "name": "Independent Social Work Professional",
            "skills": [
                "empathy",
                "critical thinking",
                "teamwork",
                "time management",
                "advanced social work"
            ]
        },
        {
            "name": "Creative Social Work Coordinator",
            "skills": [
                "empathy",
                "time management",
                "advanced social work",
                "communication",
                "social work strategy",
                "social work fundamentals",
                "problem solving"
            ]
        },
        {
            "name": "Global Social Work Advisor",
            "skills": [
                "organization",
                "problem solving",
                "empathy",
                "time management",
                "social work strategy",
                "adaptability",
                "customer service"
            ]
        }
    ],
    "Dentistry": [
        {
            "name": "Dentistry Advisor",
            "skills": [
                "teamwork",
                "dentistry fundamentals",
                "problem solving",
                "adaptability",
                "customer service",
                "empathy"
            ]
        },
        {
            "name": "Senior Dentistry Practitioner",
            "skills": [
                "leadership",
                "adaptability",
                "dentistry strategy",
                "critical thinking",
                "organization",
                "time management",
                "empathy"
            ]
        },
        {
            "name": "Creative Dentistry Consultant",
            "skills": [
                "adaptability",
                "organization",
                "advanced dentistry",
                "communication",
                "empathy"
            ]
        },
        {
            "name": "Junior Dentistry Analyst",
            "skills": [
                "dentistry strategy",
                "organization",
                "leadership",
                "dentistry fundamentals",
                "teamwork",
                "critical thinking",
                "problem solving",
                "time management"
            ]
        },
        {
            "name": "Lead Dentistry Analyst",
            "skills": [
                "teamwork",
                "dentistry fundamentals",
                "customer service",
                "communication",
                "critical thinking",
                "empathy",
                "leadership",
                "organization"
            ]
        },
        {
            "name": "Senior Dentistry Analyst",
            "skills": [
                "teamwork",
                "empathy",
                "communication",
                "problem solving",
                "customer service",
                "adaptability",
                "time management"
            ]
        },
        {
            "name": "Dentistry Educator",
            "skills": [
                "organization",
                "time management",
                "customer service",
                "teamwork",
                "dentistry fundamentals"
            ]
        },
        {
            "name": "Corporate Dentistry Consultant",
            "skills": [
                "adaptability",
                "time management",
                "dentistry fundamentals",
                "dentistry strategy",
                "communication",
                "critical thinking"
            ]
        },
        {
            "name": "Dentistry Consultant",
            "skills": [
                "dentistry fundamentals",
                "problem solving",
                "empathy",
                "adaptability",
                "leadership",
                "dentistry strategy",
                "critical thinking"
            ]
        },
        {
            "name": "Global Dentistry Consultant",
            "skills": [
                "communication",
                "empathy",
                "dentistry fundamentals",
                "advanced dentistry",
                "customer service"
            ]
        },
        {
            "name": "Independent Dentistry Specialist",
            "skills": [
                "time management",
                "dentistry fundamentals",
                "leadership",
                "dentistry strategy",
                "problem solving"
            ]
        },
        {
            "name": "Associate Dentistry Coordinator",
            "skills": [
                "critical thinking",
                "dentistry strategy",
                "empathy",
                "customer service",
                "communication",
                "problem solving",
                "teamwork"
            ]
        },
        {
            "name": "Principal Dentistry Specialist",
            "skills": [
                "dentistry fundamentals",
                "critical thinking",
                "advanced dentistry",
                "adaptability",
                "leadership",
                "empathy",
                "customer service"
            ]
        },
        {
            "name": "Senior Dentistry Advisor",
            "skills": [
                "leadership",
                "teamwork",
                "advanced dentistry",
                "organization",
                "adaptability"
            ]
        },
        {
            "name": "Associate Dentistry Educator",
            "skills": [
                "empathy",
                "teamwork",
                "dentistry strategy",
                "problem solving",
                "adaptability",
                "advanced dentistry",
                "time management"
            ]
        }
    ]
};

const discoveryPatterns = {
    "Coding": [
        {
            "name": "Coding Specialist",
            "skills": [
                "git",
                "node.js",
                "agile",
                "system design",
                "api design"
            ]
        },
        {
            "name": "Coding Developer",
            "skills": [
                "css",
                "git",
                "node.js",
                "sql",
                "problem solving",
                "python",
                "aws"
            ]
        },
        {
            "name": "Creative Coding Tester",
            "skills": [
                "react",
                "python",
                "docker",
                "node.js",
                "html"
            ]
        }
    ],
    "AI & Machine Learning": [
        {
            "name": "Lead Machine Learning Architect",
            "skills": [
                "git",
                "system design",
                "python",
                "api design",
                "agile",
                "problem solving",
                "tensorflow",
                "nlp"
            ]
        },
        {
            "name": "Machine Learning Architect",
            "skills": [
                "agile",
                "problem solving",
                "neural networks",
                "git",
                "tensorflow",
                "javascript"
            ]
        },
        {
            "name": "Creative Machine Learning Consultant",
            "skills": [
                "api design",
                "neural networks",
                "javascript",
                "agile",
                "git"
            ]
        }
    ],
    "Cybersecurity": [
        {
            "name": "Corporate Cybersecurity Engineer",
            "skills": [
                "python",
                "problem solving",
                "security",
                "system design",
                "api design",
                "agile",
                "ethical hacking"
            ]
        },
        {
            "name": "Lead Cybersecurity Manager",
            "skills": [
                "linux",
                "agile",
                "ethical hacking",
                "javascript",
                "git"
            ]
        },
        {
            "name": "Principal Cybersecurity Developer",
            "skills": [
                "cryptography",
                "linux",
                "python",
                "ethical hacking",
                "cloud computing",
                "data analysis",
                "firewalls",
                "javascript"
            ]
        }
    ],
    "Data Science": [
        {
            "name": "Freelance Data Science Developer",
            "skills": [
                "advanced data science",
                "problem solving",
                "javascript",
                "system design",
                "data science fundamentals",
                "cloud computing",
                "data science strategy"
            ]
        },
        {
            "name": "Creative Data Science Researcher",
            "skills": [
                "data science strategy",
                "data analysis",
                "python",
                "advanced data science",
                "security",
                "javascript",
                "system design",
                "cloud computing"
            ]
        },
        {
            "name": "Regional Data Science Tester",
            "skills": [
                "data science fundamentals",
                "problem solving",
                "data analysis",
                "security",
                "python",
                "agile"
            ]
        }
    ],
    "Game Development": [
        {
            "name": "Chief Game Development Specialist",
            "skills": [
                "api design",
                "git",
                "system design",
                "javascript",
                "security",
                "game development fundamentals",
                "python"
            ]
        },
        {
            "name": "Freelance Game Development Specialist",
            "skills": [
                "javascript",
                "git",
                "api design",
                "python",
                "problem solving",
                "game development fundamentals",
                "data analysis"
            ]
        },
        {
            "name": "Regional Game Development Researcher",
            "skills": [
                "agile",
                "system design",
                "security",
                "api design",
                "problem solving",
                "advanced game development",
                "cloud computing"
            ]
        }
    ],
    "Cloud Computing": [
        {
            "name": "Independent Cloud Computing Developer",
            "skills": [
                "python",
                "data analysis",
                "cloud computing strategy",
                "security",
                "javascript",
                "problem solving",
                "api design"
            ]
        },
        {
            "name": "Freelance Cloud Computing Lead",
            "skills": [
                "data analysis",
                "problem solving",
                "agile",
                "python",
                "javascript",
                "cloud computing",
                "security"
            ]
        },
        {
            "name": "Assistant Cloud Computing Engineer",
            "skills": [
                "problem solving",
                "python",
                "security",
                "api design",
                "cloud computing strategy",
                "javascript",
                "system design"
            ]
        }
    ],
    "Robotics": [
        {
            "name": "Creative Robotics Specialist",
            "skills": [
                "security",
                "robotics strategy",
                "problem solving",
                "system design",
                "advanced robotics",
                "api design"
            ]
        },
        {
            "name": "Technical Robotics Manager",
            "skills": [
                "robotics fundamentals",
                "cloud computing",
                "robotics strategy",
                "problem solving",
                "advanced robotics",
                "git",
                "agile"
            ]
        },
        {
            "name": "Lead Robotics Engineer",
            "skills": [
                "git",
                "problem solving",
                "javascript",
                "cloud computing",
                "advanced robotics",
                "system design",
                "robotics strategy"
            ]
        }
    ],
    "Blockchain & Web3": [
        {
            "name": "Global Blockchain Lead",
            "skills": [
                "advanced blockchain & web3",
                "data analysis",
                "blockchain & web3 strategy",
                "api design",
                "git",
                "security",
                "system design",
                "agile"
            ]
        },
        {
            "name": "Regional Blockchain Architect",
            "skills": [
                "data analysis",
                "system design",
                "problem solving",
                "blockchain & web3 fundamentals",
                "python",
                "advanced blockchain & web3",
                "security"
            ]
        },
        {
            "name": "Associate Web3 Manager",
            "skills": [
                "cloud computing",
                "security",
                "python",
                "data analysis",
                "git"
            ]
        }
    ],
    "Internet of Things": [
        {
            "name": "Technical Internet of Things Engineer",
            "skills": [
                "internet of things strategy",
                "agile",
                "internet of things fundamentals",
                "problem solving",
                "git",
                "data analysis"
            ]
        },
        {
            "name": "Assistant Internet of Things Researcher",
            "skills": [
                "security",
                "api design",
                "problem solving",
                "git",
                "internet of things strategy",
                "python",
                "internet of things fundamentals",
                "data analysis"
            ]
        },
        {
            "name": "Internet of Things Researcher",
            "skills": [
                "git",
                "system design",
                "security",
                "data analysis",
                "javascript",
                "advanced internet of things",
                "internet of things fundamentals",
                "problem solving"
            ]
        }
    ],
    "Entrepreneurship": [
        {
            "name": "Independent Entrepreneurship Executive",
            "skills": [
                "leadership",
                "sales",
                "marketing",
                "entrepreneurship fundamentals",
                "financial modeling",
                "entrepreneurship strategy"
            ]
        },
        {
            "name": "Entrepreneurship Advisor",
            "skills": [
                "leadership",
                "marketing",
                "strategy",
                "communication",
                "financial modeling"
            ]
        },
        {
            "name": "Corporate Entrepreneurship Advisor",
            "skills": [
                "entrepreneurship strategy",
                "marketing",
                "financial modeling",
                "communication",
                "excel",
                "strategy"
            ]
        }
    ],
    "Marketing": [
        {
            "name": "Assistant Marketing Executive",
            "skills": [
                "marketing fundamentals",
                "marketing strategy",
                "data analysis",
                "negotiation",
                "financial modeling",
                "leadership",
                "communication"
            ]
        },
        {
            "name": "Freelance Marketing Advisor",
            "skills": [
                "strategy",
                "project management",
                "marketing fundamentals",
                "communication",
                "negotiation",
                "advanced marketing",
                "leadership"
            ]
        },
        {
            "name": "Independent Marketing Planner",
            "skills": [
                "marketing",
                "sales",
                "financial modeling",
                "negotiation",
                "data analysis",
                "communication",
                "leadership",
                "marketing strategy"
            ]
        }
    ],
    "Finance": [
        {
            "name": "Associate Finance Analyst",
            "skills": [
                "leadership",
                "marketing",
                "excel",
                "finance fundamentals",
                "data analysis"
            ]
        },
        {
            "name": "Freelance Finance Executive",
            "skills": [
                "excel",
                "project management",
                "finance strategy",
                "financial modeling",
                "leadership",
                "data analysis"
            ]
        },
        {
            "name": "Finance Specialist",
            "skills": [
                "financial modeling",
                "project management",
                "excel",
                "data analysis",
                "communication",
                "advanced finance"
            ]
        }
    ],
    "Stock Trading": [
        {
            "name": "Freelance Stock Trading Director",
            "skills": [
                "data analysis",
                "marketing",
                "sales",
                "leadership",
                "communication",
                "financial modeling",
                "excel",
                "negotiation"
            ]
        },
        {
            "name": "Principal Stock Trading Associate",
            "skills": [
                "project management",
                "financial modeling",
                "advanced stock trading",
                "communication",
                "stock trading strategy",
                "stock trading fundamentals"
            ]
        },
        {
            "name": "Assistant Stock Trading Executive",
            "skills": [
                "excel",
                "project management",
                "financial modeling",
                "sales",
                "advanced stock trading",
                "data analysis",
                "stock trading strategy",
                "marketing"
            ]
        }
    ],
    "E-commerce": [
        {
            "name": "E-commerce Consultant",
            "skills": [
                "excel",
                "strategy",
                "e-commerce strategy",
                "e-commerce fundamentals",
                "leadership",
                "financial modeling"
            ]
        },
        {
            "name": "Technical E-commerce Analyst",
            "skills": [
                "advanced e-commerce",
                "marketing",
                "sales",
                "negotiation",
                "leadership",
                "financial modeling",
                "project management",
                "strategy"
            ]
        },
        {
            "name": "Senior E-commerce Planner",
            "skills": [
                "communication",
                "strategy",
                "sales",
                "leadership",
                "e-commerce strategy"
            ]
        }
    ],
    "Consulting": [
        {
            "name": "Lead Consulting Associate",
            "skills": [
                "data analysis",
                "financial modeling",
                "communication",
                "excel",
                "marketing",
                "advanced consulting"
            ]
        },
        {
            "name": "Associate Consulting Strategist",
            "skills": [
                "consulting strategy",
                "consulting fundamentals",
                "communication",
                "advanced consulting",
                "project management",
                "marketing"
            ]
        },
        {
            "name": "Regional Consulting Manager",
            "skills": [
                "marketing",
                "consulting strategy",
                "strategy",
                "data analysis",
                "sales",
                "project management",
                "communication"
            ]
        }
    ],
    "Human Resources": [
        {
            "name": "Freelance Human Resources Manager",
            "skills": [
                "data analysis",
                "human resources fundamentals",
                "leadership",
                "advanced human resources",
                "human resources strategy",
                "marketing",
                "negotiation"
            ]
        },
        {
            "name": "Human Resources Planner",
            "skills": [
                "project management",
                "negotiation",
                "marketing",
                "strategy",
                "financial modeling",
                "leadership",
                "data analysis",
                "communication"
            ]
        },
        {
            "name": "Technical Human Resources Associate",
            "skills": [
                "project management",
                "leadership",
                "strategy",
                "financial modeling",
                "sales",
                "advanced human resources",
                "negotiation"
            ]
        }
    ],
    "Real Estate": [
        {
            "name": "Corporate Real Estate Consultant",
            "skills": [
                "advanced real estate",
                "project management",
                "excel",
                "real estate fundamentals",
                "communication",
                "financial modeling",
                "sales"
            ]
        },
        {
            "name": "Freelance Real Estate Planner",
            "skills": [
                "leadership",
                "strategy",
                "excel",
                "financial modeling",
                "marketing",
                "advanced real estate"
            ]
        },
        {
            "name": "Corporate Real Estate Director",
            "skills": [
                "real estate strategy",
                "financial modeling",
                "excel",
                "negotiation",
                "strategy",
                "project management"
            ]
        }
    ],
    "Music": [
        {
            "name": "Lead Music Artist",
            "skills": [
                "communication",
                "ableton live",
                "mastering",
                "color theory",
                "attention to detail",
                "mixing",
                "typography",
                "time management"
            ]
        },
        {
            "name": "Freelance Music Director",
            "skills": [
                "music theory",
                "adobe creative suite",
                "mastering",
                "attention to detail",
                "communication",
                "color theory",
                "creativity",
                "typography"
            ]
        },
        {
            "name": "Regional Music Editor",
            "skills": [
                "attention to detail",
                "storytelling",
                "communication",
                "creativity",
                "adobe creative suite",
                "music theory",
                "typography",
                "mixing"
            ]
        }
    ],
    "Photography": [
        {
            "name": "Senior Photography Editor",
            "skills": [
                "storytelling",
                "collaboration",
                "composition",
                "typography",
                "attention to detail",
                "adobe creative suite",
                "creativity"
            ]
        },
        {
            "name": "Photography Writer",
            "skills": [
                "design theory",
                "adobe creative suite",
                "communication",
                "lightroom",
                "storytelling",
                "time management"
            ]
        },
        {
            "name": "Creative Photography Artist",
            "skills": [
                "photoshop",
                "time management",
                "lightroom",
                "adobe creative suite",
                "communication",
                "attention to detail"
            ]
        }
    ],
    "Graphic Design": [
        {
            "name": "Regional Graphic Design Producer",
            "skills": [
                "graphic design strategy",
                "adobe creative suite",
                "design theory",
                "graphic design fundamentals",
                "communication"
            ]
        },
        {
            "name": "Assistant Graphic Design Specialist",
            "skills": [
                "storytelling",
                "collaboration",
                "graphic design fundamentals",
                "creativity",
                "attention to detail"
            ]
        },
        {
            "name": "Creative Graphic Design Artist",
            "skills": [
                "graphic design strategy",
                "typography",
                "design theory",
                "collaboration",
                "time management",
                "communication"
            ]
        }
    ],
    "Video Editing": [
        {
            "name": "Lead Video Editing Writer",
            "skills": [
                "creativity",
                "collaboration",
                "color theory",
                "video editing fundamentals",
                "storytelling",
                "attention to detail",
                "typography"
            ]
        },
        {
            "name": "Principal Video Editing Artist",
            "skills": [
                "video editing strategy",
                "advanced video editing",
                "color theory",
                "typography",
                "attention to detail",
                "collaboration"
            ]
        },
        {
            "name": "Video Editing Director",
            "skills": [
                "typography",
                "adobe creative suite",
                "creativity",
                "color theory",
                "communication",
                "collaboration",
                "video editing strategy",
                "time management"
            ]
        }
    ],
    "Writing": [
        {
            "name": "Assistant Writing Specialist",
            "skills": [
                "color theory",
                "writing fundamentals",
                "design theory",
                "collaboration",
                "storytelling",
                "creativity"
            ]
        },
        {
            "name": "Lead Writing Editor",
            "skills": [
                "writing strategy",
                "advanced writing",
                "attention to detail",
                "storytelling",
                "collaboration",
                "time management",
                "writing fundamentals"
            ]
        },
        {
            "name": "Writing Designer",
            "skills": [
                "time management",
                "design theory",
                "writing strategy",
                "communication",
                "advanced writing",
                "storytelling",
                "typography"
            ]
        }
    ],
    "Animation": [
        {
            "name": "Animation Artist",
            "skills": [
                "animation fundamentals",
                "time management",
                "attention to detail",
                "creativity",
                "collaboration",
                "advanced animation"
            ]
        },
        {
            "name": "Regional Animation Consultant",
            "skills": [
                "typography",
                "color theory",
                "design theory",
                "adobe creative suite",
                "animation fundamentals"
            ]
        },
        {
            "name": "Independent Animation Producer",
            "skills": [
                "animation fundamentals",
                "color theory",
                "storytelling",
                "typography",
                "communication"
            ]
        }
    ],
    "UI/UX Design": [
        {
            "name": "Global UI/UX Design Director",
            "skills": [
                "typography",
                "time management",
                "color theory",
                "creativity",
                "adobe creative suite",
                "storytelling",
                "collaboration",
                "ui/ux design strategy"
            ]
        },
        {
            "name": "Regional UI/UX Design Editor",
            "skills": [
                "time management",
                "typography",
                "attention to detail",
                "advanced ui/ux design",
                "creativity",
                "adobe creative suite",
                "ui/ux design fundamentals"
            ]
        },
        {
            "name": "Chief UI/UX Design Producer",
            "skills": [
                "communication",
                "creativity",
                "time management",
                "storytelling",
                "adobe creative suite"
            ]
        }
    ],
    "Architecture": [
        {
            "name": "Architecture Writer",
            "skills": [
                "typography",
                "adobe creative suite",
                "design theory",
                "attention to detail",
                "creativity"
            ]
        },
        {
            "name": "Principal Architecture Editor",
            "skills": [
                "time management",
                "advanced architecture",
                "collaboration",
                "typography",
                "creativity",
                "architecture fundamentals",
                "attention to detail"
            ]
        },
        {
            "name": "Senior Architecture Consultant",
            "skills": [
                "collaboration",
                "architecture fundamentals",
                "typography",
                "time management",
                "design theory",
                "color theory"
            ]
        }
    ],
    "Interior Design": [
        {
            "name": "Creative Interior Design Illustrator",
            "skills": [
                "typography",
                "storytelling",
                "creativity",
                "adobe creative suite",
                "advanced interior design",
                "communication",
                "interior design strategy",
                "color theory"
            ]
        },
        {
            "name": "Lead Interior Design Writer",
            "skills": [
                "advanced interior design",
                "adobe creative suite",
                "interior design strategy",
                "color theory",
                "collaboration",
                "time management"
            ]
        },
        {
            "name": "Assistant Interior Design Creator",
            "skills": [
                "design theory",
                "storytelling",
                "collaboration",
                "attention to detail",
                "color theory"
            ]
        }
    ],
    "Physics": [
        {
            "name": "Associate Physics Consultant",
            "skills": [
                "physics",
                "experimentation",
                "advanced physics",
                "problem solving",
                "physics fundamentals",
                "technical writing",
                "research",
                "analytical thinking"
            ]
        },
        {
            "name": "Junior Physics Researcher",
            "skills": [
                "data analysis",
                "mathematics",
                "problem solving",
                "advanced physics",
                "physics fundamentals",
                "modeling",
                "experimentation"
            ]
        },
        {
            "name": "Independent Physics Specialist",
            "skills": [
                "physics fundamentals",
                "research",
                "modeling",
                "physics",
                "statistics",
                "data analysis",
                "technical writing",
                "mathematics"
            ]
        }
    ],
    "Chemistry": [
        {
            "name": "Senior Chemistry Professor",
            "skills": [
                "data analysis",
                "physics",
                "mathematics",
                "statistics",
                "analytical thinking",
                "problem solving",
                "technical writing",
                "chemistry strategy"
            ]
        },
        {
            "name": "Creative Chemistry Engineer",
            "skills": [
                "physics",
                "experimentation",
                "research",
                "chemistry fundamentals",
                "advanced chemistry",
                "technical writing"
            ]
        },
        {
            "name": "Independent Chemistry Scientist",
            "skills": [
                "research",
                "experimentation",
                "statistics",
                "data analysis",
                "mathematics"
            ]
        }
    ],
    "Biology": [
        {
            "name": "Independent Biology Professor",
            "skills": [
                "statistics",
                "problem solving",
                "advanced biology",
                "experimentation",
                "modeling",
                "technical writing",
                "biology strategy"
            ]
        },
        {
            "name": "Associate Biology Director",
            "skills": [
                "statistics",
                "data analysis",
                "modeling",
                "research",
                "analytical thinking",
                "problem solving",
                "advanced biology",
                "technical writing"
            ]
        },
        {
            "name": "Junior Biology Director",
            "skills": [
                "statistics",
                "mathematics",
                "physics",
                "advanced biology",
                "research",
                "technical writing"
            ]
        }
    ],
    "Space Science": [
        {
            "name": "Creative Space Science Technician",
            "skills": [
                "physics",
                "modeling",
                "data analysis",
                "advanced space science",
                "space science strategy",
                "space science fundamentals",
                "statistics",
                "technical writing"
            ]
        },
        {
            "name": "Technical Space Science Researcher",
            "skills": [
                "space science fundamentals",
                "statistics",
                "research",
                "space science strategy",
                "analytical thinking",
                "data analysis",
                "advanced space science"
            ]
        },
        {
            "name": "Independent Space Science Scientist",
            "skills": [
                "statistics",
                "research",
                "space science fundamentals",
                "advanced space science",
                "technical writing",
                "physics",
                "space science strategy",
                "data analysis"
            ]
        }
    ],
    "Mechanical Engineering": [
        {
            "name": "Corporate Mechanical Engineering Consultant",
            "skills": [
                "data analysis",
                "analytical thinking",
                "mechanical engineering strategy",
                "problem solving",
                "advanced mechanical engineering",
                "statistics"
            ]
        },
        {
            "name": "Assistant Mechanical Engineering Researcher",
            "skills": [
                "mechanical engineering fundamentals",
                "physics",
                "modeling",
                "mechanical engineering strategy",
                "analytical thinking",
                "advanced mechanical engineering",
                "problem solving",
                "data analysis"
            ]
        },
        {
            "name": "Mechanical Engineering Engineer",
            "skills": [
                "modeling",
                "experimentation",
                "mechanical engineering strategy",
                "mechanical engineering fundamentals",
                "mathematics",
                "statistics"
            ]
        }
    ],
    "Civil Engineering": [
        {
            "name": "Principal Civil Engineering Analyst",
            "skills": [
                "modeling",
                "civil engineering strategy",
                "experimentation",
                "analytical thinking",
                "physics"
            ]
        },
        {
            "name": "Senior Civil Engineering Specialist",
            "skills": [
                "advanced civil engineering",
                "research",
                "experimentation",
                "statistics",
                "civil engineering strategy",
                "mathematics",
                "technical writing"
            ]
        },
        {
            "name": "Technical Civil Engineering Consultant",
            "skills": [
                "experimentation",
                "civil engineering fundamentals",
                "mathematics",
                "research",
                "advanced civil engineering",
                "data analysis",
                "statistics",
                "physics"
            ]
        }
    ],
    "Environmental Science": [
        {
            "name": "Assistant Environmental Science Consultant",
            "skills": [
                "analytical thinking",
                "environmental science strategy",
                "statistics",
                "mathematics",
                "experimentation",
                "research",
                "advanced environmental science"
            ]
        },
        {
            "name": "Senior Environmental Science Consultant",
            "skills": [
                "environmental science strategy",
                "research",
                "problem solving",
                "mathematics",
                "environmental science fundamentals",
                "physics",
                "data analysis"
            ]
        },
        {
            "name": "Global Environmental Science Scientist",
            "skills": [
                "statistics",
                "environmental science fundamentals",
                "experimentation",
                "problem solving",
                "advanced environmental science",
                "data analysis"
            ]
        }
    ],
    "Cricket": [
        {
            "name": "Associate Cricket Trainer",
            "skills": [
                "hand-eye coordination",
                "communication",
                "bowling",
                "fielding",
                "strategy"
            ]
        },
        {
            "name": "Cricket Trainer",
            "skills": [
                "nutrition",
                "hand-eye coordination",
                "batting",
                "tactical thinking",
                "stamina"
            ]
        },
        {
            "name": "Technical Cricket Director",
            "skills": [
                "fitness",
                "stamina",
                "coaching",
                "psychology",
                "bowling",
                "nutrition",
                "tactical thinking"
            ]
        }
    ],
    "Football": [
        {
            "name": "Principal Football Specialist",
            "skills": [
                "advanced football",
                "fitness",
                "football strategy",
                "stamina",
                "teamwork"
            ]
        },
        {
            "name": "Assistant Football Analyst",
            "skills": [
                "psychology",
                "teamwork",
                "strategy",
                "leadership",
                "communication",
                "coaching"
            ]
        },
        {
            "name": "Football Commentator",
            "skills": [
                "coaching",
                "dedication",
                "leadership",
                "communication",
                "psychology",
                "nutrition",
                "teamwork"
            ]
        }
    ],
    "Basketball": [
        {
            "name": "Technical Basketball Athlete",
            "skills": [
                "coaching",
                "dedication",
                "stamina",
                "strategy",
                "leadership",
                "basketball fundamentals",
                "teamwork",
                "nutrition"
            ]
        },
        {
            "name": "Corporate Basketball Analyst",
            "skills": [
                "dedication",
                "strategy",
                "teamwork",
                "basketball fundamentals",
                "coaching",
                "nutrition",
                "leadership"
            ]
        },
        {
            "name": "Basketball Manager",
            "skills": [
                "basketball fundamentals",
                "stamina",
                "communication",
                "dedication",
                "basketball strategy"
            ]
        }
    ],
    "Fitness & Gym": [
        {
            "name": "Creative Gym Physiotherapist",
            "skills": [
                "fitness & gym strategy",
                "stamina",
                "strategy",
                "advanced fitness & gym",
                "psychology",
                "dedication"
            ]
        },
        {
            "name": "Lead Fitness Commentator",
            "skills": [
                "psychology",
                "communication",
                "teamwork",
                "strategy",
                "advanced fitness & gym",
                "coaching",
                "fitness",
                "leadership"
            ]
        },
        {
            "name": "Regional Fitness Commentator",
            "skills": [
                "psychology",
                "stamina",
                "fitness & gym fundamentals",
                "dedication",
                "communication",
                "advanced fitness & gym"
            ]
        }
    ],
    "Athletics": [
        {
            "name": "Athletics Manager",
            "skills": [
                "leadership",
                "stamina",
                "psychology",
                "communication",
                "advanced athletics"
            ]
        },
        {
            "name": "Junior Athletics Scout",
            "skills": [
                "athletics fundamentals",
                "nutrition",
                "psychology",
                "dedication",
                "stamina",
                "fitness",
                "leadership",
                "athletics strategy"
            ]
        },
        {
            "name": "Regional Athletics Commentator",
            "skills": [
                "teamwork",
                "fitness",
                "communication",
                "nutrition",
                "advanced athletics",
                "strategy",
                "dedication"
            ]
        }
    ],
    "Tennis": [
        {
            "name": "Tennis Physiotherapist",
            "skills": [
                "stamina",
                "teamwork",
                "fitness",
                "tennis strategy",
                "dedication"
            ]
        },
        {
            "name": "Chief Tennis Athlete",
            "skills": [
                "coaching",
                "teamwork",
                "tennis fundamentals",
                "dedication",
                "tennis strategy"
            ]
        },
        {
            "name": "Corporate Tennis Commentator",
            "skills": [
                "communication",
                "nutrition",
                "teamwork",
                "dedication",
                "fitness",
                "strategy",
                "leadership"
            ]
        }
    ],
    "Content Creation": [
        {
            "name": "Regional Content Creation Strategist",
            "skills": [
                "content creation strategy",
                "research",
                "creativity",
                "advanced content creation",
                "writing",
                "storytelling",
                "public speaking"
            ]
        },
        {
            "name": "Assistant Content Creation Specialist",
            "skills": [
                "creativity",
                "editing",
                "communication",
                "content creation fundamentals",
                "research",
                "public speaking",
                "advanced content creation",
                "storytelling"
            ]
        },
        {
            "name": "Corporate Content Creation Director",
            "skills": [
                "content creation fundamentals",
                "advanced content creation",
                "seo",
                "research",
                "storytelling"
            ]
        }
    ],
    "Blogging": [
        {
            "name": "Junior Blogging Producer",
            "skills": [
                "editing",
                "seo",
                "social media",
                "storytelling",
                "public speaking"
            ]
        },
        {
            "name": "Lead Blogging Manager",
            "skills": [
                "communication",
                "seo",
                "advanced blogging",
                "research",
                "blogging fundamentals",
                "blogging strategy",
                "public speaking",
                "creativity"
            ]
        },
        {
            "name": "Assistant Blogging Director",
            "skills": [
                "creativity",
                "blogging strategy",
                "research",
                "seo",
                "social media"
            ]
        }
    ],
    "Journalism": [
        {
            "name": "Associate Journalism Strategist",
            "skills": [
                "public speaking",
                "social media",
                "journalism fundamentals",
                "research",
                "writing",
                "networking",
                "advanced journalism",
                "journalism strategy"
            ]
        },
        {
            "name": "Associate Journalism Consultant",
            "skills": [
                "journalism fundamentals",
                "communication",
                "public speaking",
                "advanced journalism",
                "writing",
                "social media",
                "research",
                "seo"
            ]
        },
        {
            "name": "Associate Journalism Writer",
            "skills": [
                "networking",
                "public speaking",
                "storytelling",
                "research",
                "writing",
                "journalism fundamentals",
                "creativity"
            ]
        }
    ],
    "Public Speaking": [
        {
            "name": "Public Speaking Specialist",
            "skills": [
                "advanced public speaking",
                "editing",
                "research",
                "seo",
                "networking",
                "communication",
                "public speaking strategy",
                "public speaking fundamentals"
            ]
        },
        {
            "name": "Freelance Public Speaking Writer",
            "skills": [
                "networking",
                "writing",
                "research",
                "public speaking",
                "social media",
                "public speaking strategy"
            ]
        },
        {
            "name": "Creative Public Speaking Creator",
            "skills": [
                "public speaking fundamentals",
                "storytelling",
                "advanced public speaking",
                "writing",
                "seo",
                "public speaking",
                "public speaking strategy"
            ]
        }
    ],
    "Public Relations": [
        {
            "name": "Public Relations Coordinator",
            "skills": [
                "editing",
                "writing",
                "public relations fundamentals",
                "social media",
                "networking",
                "advanced public relations",
                "public relations strategy",
                "research"
            ]
        },
        {
            "name": "Independent Public Relations Creator",
            "skills": [
                "communication",
                "networking",
                "creativity",
                "editing",
                "public relations strategy"
            ]
        },
        {
            "name": "Global Public Relations Creator",
            "skills": [
                "social media",
                "creativity",
                "advanced public relations",
                "seo",
                "editing",
                "public speaking",
                "communication"
            ]
        }
    ],
    "Teaching": [
        {
            "name": "Teaching Professional",
            "skills": [
                "critical thinking",
                "teaching fundamentals",
                "teaching strategy",
                "time management",
                "advanced teaching",
                "customer service",
                "adaptability",
                "teamwork"
            ]
        },
        {
            "name": "Independent Teaching Director",
            "skills": [
                "empathy",
                "adaptability",
                "problem solving",
                "organization",
                "leadership",
                "advanced teaching"
            ]
        },
        {
            "name": "Lead Teaching Educator",
            "skills": [
                "teaching strategy",
                "adaptability",
                "customer service",
                "advanced teaching",
                "problem solving",
                "critical thinking",
                "time management",
                "communication"
            ]
        }
    ],
    "Psychology": [
        {
            "name": "Creative Psychology Coordinator",
            "skills": [
                "empathy",
                "time management",
                "advanced psychology",
                "adaptability",
                "organization",
                "leadership",
                "customer service",
                "communication"
            ]
        },
        {
            "name": "Principal Psychology Specialist",
            "skills": [
                "psychology fundamentals",
                "teamwork",
                "leadership",
                "advanced psychology",
                "adaptability",
                "organization"
            ]
        },
        {
            "name": "Lead Psychology Professional",
            "skills": [
                "time management",
                "leadership",
                "empathy",
                "advanced psychology",
                "adaptability",
                "problem solving",
                "customer service"
            ]
        }
    ],
    "Law": [
        {
            "name": "Principal Law Educator",
            "skills": [
                "empathy",
                "customer service",
                "problem solving",
                "advanced law",
                "time management",
                "adaptability"
            ]
        },
        {
            "name": "Chief Law Educator",
            "skills": [
                "empathy",
                "customer service",
                "law strategy",
                "critical thinking",
                "law fundamentals",
                "communication",
                "adaptability",
                "leadership"
            ]
        },
        {
            "name": "Principal Law Practitioner",
            "skills": [
                "teamwork",
                "law strategy",
                "customer service",
                "time management",
                "law fundamentals"
            ]
        }
    ],
    "Healthcare": [
        {
            "name": "Chief Healthcare Educator",
            "skills": [
                "teamwork",
                "healthcare strategy",
                "adaptability",
                "problem solving",
                "time management",
                "leadership",
                "advanced healthcare"
            ]
        },
        {
            "name": "Technical Healthcare Specialist",
            "skills": [
                "adaptability",
                "customer service",
                "time management",
                "organization",
                "teamwork",
                "critical thinking"
            ]
        },
        {
            "name": "Associate Healthcare Advisor",
            "skills": [
                "communication",
                "adaptability",
                "critical thinking",
                "teamwork",
                "time management",
                "healthcare strategy"
            ]
        }
    ],
    "Travel & Tourism": [
        {
            "name": "Tourism Professional",
            "skills": [
                "customer service",
                "empathy",
                "problem solving",
                "travel & tourism fundamentals",
                "teamwork",
                "organization"
            ]
        },
        {
            "name": "Assistant Travel Educator",
            "skills": [
                "problem solving",
                "leadership",
                "empathy",
                "critical thinking",
                "advanced travel & tourism",
                "teamwork"
            ]
        },
        {
            "name": "Travel Educator",
            "skills": [
                "problem solving",
                "time management",
                "teamwork",
                "critical thinking",
                "customer service",
                "travel & tourism fundamentals",
                "adaptability"
            ]
        }
    ],
    "Fashion": [
        {
            "name": "Senior Fashion Manager",
            "skills": [
                "fashion strategy",
                "problem solving",
                "critical thinking",
                "fashion fundamentals",
                "adaptability",
                "customer service",
                "communication",
                "time management"
            ]
        },
        {
            "name": "Junior Fashion Manager",
            "skills": [
                "customer service",
                "empathy",
                "leadership",
                "teamwork",
                "fashion fundamentals"
            ]
        },
        {
            "name": "Independent Fashion Professional",
            "skills": [
                "teamwork",
                "fashion fundamentals",
                "empathy",
                "adaptability",
                "fashion strategy",
                "customer service"
            ]
        }
    ],
    "Gaming": [
        {
            "name": "Gaming Advisor",
            "skills": [
                "gaming strategy",
                "critical thinking",
                "customer service",
                "empathy",
                "advanced gaming",
                "leadership",
                "problem solving"
            ]
        },
        {
            "name": "Gaming Practitioner",
            "skills": [
                "critical thinking",
                "gaming fundamentals",
                "teamwork",
                "customer service",
                "gaming strategy"
            ]
        },
        {
            "name": "Junior Gaming Advisor",
            "skills": [
                "organization",
                "communication",
                "adaptability",
                "gaming strategy",
                "critical thinking",
                "teamwork",
                "advanced gaming",
                "leadership"
            ]
        }
    ],
    "Cooking": [
        {
            "name": "Independent Cooking Coordinator",
            "skills": [
                "communication",
                "cooking fundamentals",
                "advanced cooking",
                "critical thinking",
                "cooking strategy",
                "customer service",
                "adaptability",
                "empathy"
            ]
        },
        {
            "name": "Global Cooking Analyst",
            "skills": [
                "leadership",
                "cooking fundamentals",
                "organization",
                "advanced cooking",
                "critical thinking",
                "time management",
                "cooking strategy"
            ]
        },
        {
            "name": "Freelance Cooking Educator",
            "skills": [
                "adaptability",
                "communication",
                "customer service",
                "leadership",
                "empathy"
            ]
        }
    ],
    "Social Work": [
        {
            "name": "Social Work Manager",
            "skills": [
                "teamwork",
                "customer service",
                "communication",
                "organization",
                "empathy"
            ]
        },
        {
            "name": "Technical Social Work Analyst",
            "skills": [
                "empathy",
                "organization",
                "customer service",
                "leadership",
                "time management",
                "social work strategy"
            ]
        },
        {
            "name": "Independent Social Work Manager",
            "skills": [
                "leadership",
                "social work fundamentals",
                "time management",
                "communication",
                "teamwork",
                "advanced social work",
                "problem solving",
                "empathy"
            ]
        }
    ],
    "Dentistry": [
        {
            "name": "Dentistry Educator",
            "skills": [
                "organization",
                "time management",
                "customer service",
                "teamwork",
                "dentistry fundamentals"
            ]
        },
        {
            "name": "Global Dentistry Consultant",
            "skills": [
                "communication",
                "empathy",
                "dentistry fundamentals",
                "advanced dentistry",
                "customer service"
            ]
        },
        {
            "name": "Principal Dentistry Specialist",
            "skills": [
                "dentistry fundamentals",
                "critical thinking",
                "advanced dentistry",
                "adaptability",
                "leadership",
                "empathy",
                "customer service"
            ]
        }
    ]
};
