const portfolioData = {
    name: "M Ubaidullah Ishtiaque",
    title: "Web Developer",
    description: "Skilled in HTML, CSS, and frontend development with some experience in backend technologies, including the .NET Framework. Proficient in C++, C#, C, and Python, with hands-on knowledge of React for building dynamic user interfaces.",
    socialLinks: {
        facebook: "https://m.facebook.com/ubaidullah322/",
        linkedin: "https://www.linkedin.com/in/muhammad-ubaidullah-7723a1263/",
        github: "https://github.com/Ubaidullah28"
    },

    skills: {
        languages: ["C/C++", "Python", "C#", "SQL", "JavaScript", "ASP", "HTML/CSS"],
        frameworks: ["DOT NET"],
        developerTools: ["Git", "VS Code", "Visual Studio"],
        libraries: ["Pandas", "NumPy", "Matplotlib", "Tkinter", "SFML"]
    },

    education: [
        {
            institution: "Information Technology University Lahore(ITU)",
            degree: "Bachelor in Computer Science",
            startDate: "Aug. 2022",
            endDate: "Present"
        },
        {
            institution: "Punjab Group of College Lahore",
            degree: "FSC Pre Engineering",
            startDate: "Oct. 2020",
            endDate: "June 2022"
        }
    ],

    projects: [
        {
            title: "College Management System",
            technologies: "C#, ASP.NET, MySQL, HTML, CSS, Bootstrap",
            date: "Apr 2024 – June 2024",
            description: [
                "Developed a full-stack web application with .NET framework, ASP, and C# for the backend.",
                "Frontend developed using HTML, CSS, Bootstrap with .NET.",
                "MySQL database used for record storage, accessible by admins and teachers."
            ]
        },
        {
            title: "Paint Brush",
            technologies: "Python, Tkinter",
            date: "May 2023 – June 2023",
            description: ["Developed a paint brush application using Python and Tkinter library.", "Similar to Microsoft Paint but with custom features."]
        },
        {
            title: "Search Engine",
            technologies: "C++",
            date: "Dec 2023 – Jan 2024",
            description: ["Console-based search engine developed using C++ and Treaps data structure."]
        },
        {
            title: "Text Editor",
            technologies: "C++",
            date: "Sept 2023 – Nov 2023",
            description: ["Console-based text editor developed using linked lists in C++."]
        },
        {
            title: "Excel",
            technologies: "C++",
            date: "Aug 2023 – Sept 2023",
            description: ["Console-based Excel-like application developed in C++ using linked lists."]
        },
        {
            title: "Temperature Converter",
            technologies: "C#, ASP.NET",
            date: "July 2023",
            description: ["Full-stack web-based temperature converter developed in C#, HTML, CSS with .NET framework."]
        },
        {
            title: "Ludo",
            technologies: "C++",
            date: "Apr 2023 – May 2023",
            description: ["Console-based Ludo game developed in C++ using OOP concepts."]
        },
        {
            title: "Chess",
            technologies: "C++",
            date: "Mar 2023 – Apr 2023",
            description: ["Console-based chess game developed in C++ using OOP concepts."]
        },
        {
            title: "Calculator",
            technologies: "C#, .NET",
            date: "Feb 2023",
            description: ["Application-based calculator developed in C# and .NET."]
        },
        {
            title: "Shogi",
            technologies: "C++, .NET",
            date: "Dec 2022 – Jan 2023",
            description: ["Console-based Shogi game developed in C++ with basic OOP concepts."]
        },
        {
            title: "Gomoku",
            technologies: "C++, Python",
            date: "Nov 2022 – Dec 2022",
            description: ["Console-based Gomoku game developed in C++ and Python with human vs human and human vs AI versions."]
        }

    ]
};




document.addEventListener("DOMContentLoaded", function() {
    // home sec
    document.querySelector('.home-content h1').innerText = `Hi, I'm ${portfolioData.name}`;
    document.querySelector('.home-content h3').innerText = portfolioData.title;
    document.querySelector('.home-content p').innerText = portfolioData.description;


    // social links
    document.querySelector('.home-sci a[href*="facebook"]').href = portfolioData.socialLinks.facebook;
    document.querySelector('.home-sci a[href*="linkedin"]').href = portfolioData.socialLinks.linkedin;
    document.querySelector('.home-sci a[href*="github"]').href = portfolioData.socialLinks.github;

});
