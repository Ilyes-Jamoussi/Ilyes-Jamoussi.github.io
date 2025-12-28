// Skills data organized by categories with verified official links
const skillsCategories = {
    "Languages": [
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", link: "https://tc39.es/ecma262/" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", link: "https://www.typescriptlang.org/" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", link: "https://www.python.org/" },
        { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", link: "https://isocpp.org/" },
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", link: "https://www.oracle.com/java/" }
    ],
    "Frontend": [
        { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", link: "https://html.spec.whatwg.org/" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", link: "https://www.w3.org/Style/CSS/" },
        { name: "SCSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg", link: "https://sass-lang.com/" },
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", link: "https://react.dev/" },
        { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", link: "https://angular.dev/" },
        { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", link: "https://reactnative.dev/" },
        { name: "Expo", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg", link: "https://expo.dev/" }
    ],
    "Backend": [
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", link: "https://nodejs.org/" },
        { name: "NestJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg", link: "https://nestjs.com/" },
        { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", link: "https://expressjs.com/" },
        { name: "REST API", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", link: "https://en.wikipedia.org/wiki/REST" },
        { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", link: "https://graphql.org/" },
        { name: "Socket.io", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg", link: "https://socket.io/" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", link: "https://www.mongodb.com/" }
    ],
    "AWS Services": [
        { name: "Amazon Cognito", logo: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/aws-cognito.svg", link: "https://aws.amazon.com/cognito/" },
        { name: "Amazon S3", logo: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/aws-s3.svg", link: "https://aws.amazon.com/s3/" },
        { name: "Amazon DynamoDB", logo: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/aws-dynamodb.svg", link: "https://aws.amazon.com/dynamodb/" },
        { name: "AWS AppSync", logo: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/aws-appsync.svg", link: "https://aws.amazon.com/appsync/" },
        { name: "AWS Amplify", logo: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/aws-amplify.svg", link: "https://aws.amazon.com/amplify/" },
        { name: "AWS Lambda", logo: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/aws-lambda.svg", link: "https://aws.amazon.com/lambda/" },
        { name: "Amazon Bedrock", logo: "assets/aws-icons/amazon-bedrock.svg", link: "https://aws.amazon.com/bedrock/" },
        { name: "Amazon Location Service", logo: "assets/aws-icons/amazon-location-service.svg", link: "https://aws.amazon.com/location/" },
        { name: "Amazon EC2", logo: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/aws-ec2.svg", link: "https://aws.amazon.com/ec2/" },
        { name: "Amazon VPC", logo: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/aws-vpc.svg", link: "https://aws.amazon.com/vpc/" },
        { name: "AWS IAM", logo: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/aws-iam.svg", link: "https://aws.amazon.com/iam/" },
        { name: "Amazon CloudWatch", logo: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/aws-cloudwatch.svg", link: "https://aws.amazon.com/cloudwatch/" },
        { name: "AWS CloudFormation", logo: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/aws-cloudformation.svg", link: "https://aws.amazon.com/cloudformation/" },
        { name: "Amazon Route 53", logo: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/aws-route53.svg", link: "https://aws.amazon.com/route53/" },
        { name: "Amazon RDS", logo: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/aws-rds.svg", link: "https://aws.amazon.com/rds/" },
        { name: "Amazon ElastiCache", logo: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/aws-elasticache.svg", link: "https://aws.amazon.com/elasticache/" },
        { name: "AWS API Gateway", logo: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/aws-api-gateway.svg", link: "https://aws.amazon.com/api-gateway/" },
        { name: "Amazon SQS", logo: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/aws-sqs.svg", link: "https://aws.amazon.com/sqs/" },
        { name: "Amazon SNS", logo: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/aws-sns.svg", link: "https://aws.amazon.com/sns/" },
        { name: "Amazon CloudFront", logo: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/aws-cloudfront.svg", link: "https://aws.amazon.com/cloudfront/" },
        { name: "AWS Secrets Manager", logo: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/aws-secrets-manager.svg", link: "https://aws.amazon.com/secrets-manager/" },
        { name: "AWS Certificate Manager", logo: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/aws-certificate-manager.svg", link: "https://aws.amazon.com/certificate-manager/" },
        { name: "AWS CodePipeline", logo: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/aws-codepipeline.svg", link: "https://aws.amazon.com/codepipeline/" },
        { name: "Amazon SageMaker", logo: "assets/aws-icons/amazon-sagemaker.svg", link: "https://aws.amazon.com/sagemaker/" },
        { name: "Amazon Rekognition", logo: "assets/aws-icons/amazon-rekognition.svg", link: "https://aws.amazon.com/rekognition/" },
        { name: "Amazon Comprehend", logo: "assets/aws-icons/amazon-comprehend.svg", link: "https://aws.amazon.com/comprehend/" },
        { name: "Amazon Textract", logo: "assets/aws-icons/amazon-textract.svg", link: "https://aws.amazon.com/textract/" },
        { name: "Amazon EventBridge", logo: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/aws-eventbridge.svg", link: "https://aws.amazon.com/eventbridge/" },
        { name: "Elastic Load Balancer", logo: "assets/aws-icons/elastic-load-balancer.svg", link: "https://aws.amazon.com/elasticloadbalancing/" },
        { name: "AWS Auto Scaling", logo: "assets/aws-icons/aws-auto-scaling.svg", link: "https://aws.amazon.com/autoscaling/" },
        { name: "AWS CloudTrail", logo: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/aws-cloudtrail.svg", link: "https://aws.amazon.com/cloudtrail/" },
        { name: "Amazon EFS", logo: "assets/aws-icons/amazon-efs.svg", link: "https://aws.amazon.com/efs/" },
        { name: "Amazon Polly", logo: "assets/aws-icons/amazon-polly.svg", link: "https://aws.amazon.com/polly/" },
        { name: "Amazon Transcribe", logo: "assets/aws-icons/amazon-transcribe.svg", link: "https://aws.amazon.com/transcribe/" },
        { name: "Amazon Translate", logo: "assets/aws-icons/amazon-translate.svg", link: "https://aws.amazon.com/translate/" },
        { name: "Amazon Lex", logo: "assets/aws-icons/amazon-lex.svg", link: "https://aws.amazon.com/lex/" },
        { name: "Amazon Q", logo: "assets/aws-icons/amazon-q.svg", link: "https://aws.amazon.com/q/" }
    ],
    "Development Tools": [
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", link: "https://git-scm.com/" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", link: "https://github.com/" },
        { name: "GitLab", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", link: "https://gitlab.com/" },
        { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", link: "https://code.visualstudio.com/" },
        { name: "Visual Studio", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg", link: "https://visualstudio.microsoft.com/" },
        { name: "IntelliJ IDEA", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg", link: "https://www.jetbrains.com/idea/" },
        { name: "Jest", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg", link: "https://jestjs.io/" },
        { name: "Cypress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg", link: "https://www.cypress.io/" },
        { name: "Jasmine", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jasmine/jasmine-original.svg", link: "https://jasmine.github.io/" },
        { name: "ESLint", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg", link: "https://eslint.org/" },
        { name: "Prettier", logo: "https://raw.githubusercontent.com/prettier/prettier/main/website/static/icon.png", link: "https://prettier.io/" },
        { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", link: "https://www.figma.com/" },
        { name: "Swagger", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg", link: "https://swagger.io/" },
        { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", link: "https://www.postman.com/" },
        { name: "Qt", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg", link: "https://www.qt.io/" },
        { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", link: "https://numpy.org/" }
    ]
};

// Technology logos mapping
const techLogos = {
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "SCSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "Angular": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    "NestJS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "Swagger": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
    "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    "Amazon EC2": "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/aws-ec2.svg",
    "Jasmine": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jasmine/jasmine-original.svg",
    "React Native": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Expo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg",
    "AWS Amplify": "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/aws-amplify.svg",
    "AWS AppSync": "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/aws-appsync.svg",
    "DynamoDB": "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/aws-dynamodb.svg",
    "Amazon Cognito": "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/aws-cognito.svg",
    "Amazon S3": "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/aws-s3.svg",
    "Amazon Bedrock": "assets/aws-icons/amazon-bedrock.svg",
    "Amazon Location Service": "assets/aws-icons/amazon-location-service.svg",
    "AWS Lambda": "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/aws-lambda.svg",
    "Jest": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    "ESLint": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg",
    "Prettier": "https://raw.githubusercontent.com/prettier/prettier/main/website/static/icon.png",
    "GitLab": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    "Qt": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg",
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "NumPy": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
};

// Project data
const projects = [
    {
        title: "Serverless iOS & Android Mobile App",
        developmentDate: "May 2025 - Aug. 2025",
        description: "A cross-platform mobile solution that fully digitizes field technicians' operations by connecting them with dispatchers in real time while ensuring seamless work in low-connectivity environments. It provides a complete workflow where dispatchers can assign and monitor tasks, and technicians can receive work orders, update their status, and report completion directly through the app.\n\nA dual inventory system combines a shared central depot with each technician's personal suitcase, enabling accurate tracking of parts taken, transported, and used. To make this process faster and more reliable, the app integrates barcode scanning, allowing quick registration of items with minimal errors. Technicians can also consult available parts in both their suitcase and the depot, making resource planning easier.\n\nThey are further able to capture and upload photo documentation as proof of work or to report issues, ensuring transparency and accountability in operations. The application is designed with offline-first synchronization, so technicians can continue working seamlessly without network coverage. Once a connection is restored, all data synchronizes automatically, ensuring continuity and reliability.\n\nFinally, an AI-powered assistant supports technicians by simplifying documentation and reporting. It automates repetitive entries and generates summaries, reducing administrative effort and allowing field workers to focus on their core tasks.",
        technologies: ["React Native", "Expo", "TypeScript", "Jest", "ESLint", "Prettier", "GitLab", "AWS Amplify", "AWS AppSync", "DynamoDB", "Amazon Cognito", "Amazon S3", "Amazon Bedrock", "Amazon Location Service", "AWS Lambda"],
        githubUrl: "https://github.com/Ilyes-Jamoussi/mobile-fullstack-app/blob/main/README.md",
        demoVideo: null,
        image: null,
        isConfidential: true
    },
    {
        title: "Manor Tactics - Online Multiplayer RPG Platform",
        developmentDate: "Jan. 2025 - Apr. 2025",
        description: "A comprehensive tactical RPG platform featuring real-time multiplayer gameplay with turn-based combat mechanics. Built with Angular frontend and NestJS backend, the application includes a game editor for creating custom maps and scenarios, real-time chat functionality, and support for both human and virtual players. Players navigate grid-based maps with various terrain types.",
        technologies: ["Angular", "NestJS", "TypeScript", "HTML", "SCSS", "MongoDB", "Socket.io", "Swagger", "Postman", "Prettier", "ESLint", "Amazon EC2", "Nginx", "PM2", "GitHub Actions", "Jest", "Jasmine", "GitLab", "GitHub"],
        githubUrl: "https://github.com/Ilyes-Jamoussi/Online-Multiplayer-RPG-Platform/blob/master/README.md",
        liveUrl: "http://13.60.84.0",
        image: null
    },
    {
        title: "AVR Microcontroller Robot – Embedded Systems",
        developmentDate: "Sep. 2024 - Dec. 2024",
        description: "Autonomous navigation robot built with AVR ATmega324PA microcontroller programmed in C++. Features three operational modes: endpoint detection with orientation tracking, post-following with precise distance control, and comprehensive journey reporting. Integrates multiple sensors including line markers, infrared distance sensors, and actuators for LED indicators and sound feedback.",
        technologies: ["C++"],
        githubUrl: "https://github.com/Ilyes-Jamoussi/AVR-Microcontroller-Robot/blob/main/README.md",
        demoVideo: "videos/pathfinder-demo.mp4",
        image: null
    },
    {
        title: "Chess",
        developmentDate: "Apr. 2024",
        description: "This Chess Project is a C++ application with a Qt-based graphical interface. It lets you play chess, showing valid moves for pieces and marking invalid ones in red. The project currently supports only the following chess pieces: bishop, king, and rook. You can play preconfigured games such as Topalov vs Polgar (2008), Budnikov vs Novik (1991), and Vladimorov vs Palatnik (1977).",
        technologies: ["C++", "Qt"],
        githubUrl: "https://github.com/Ilyes-Jamoussi/Chess/blob/main/README.md",
        demoVideo: "videos/chess-demo.mp4",
        image: null
    },
    {
        title: "Tetris",
        developmentDate: "Jun. 2023",
        description: "Classic Tetris game recreation implemented in Python with Pygame and NumPy optimization. Features complete tetromino manipulation, line clearing mechanics, and collision detection with smooth gameplay experience. Includes comprehensive unit testing suite to validate game logic and ensure reliable performance across different scenarios.",
        technologies: ["Python", "NumPy"],
        githubUrl: "https://github.com/Ilyes-Jamoussi/Tetris/blob/main/README.md",
        demoVideo: "videos/tetris-demo.mp4",
        image: null
    }
];

// Create project card component
function createProjectCard(project, index) {
    const isLongDescription = project.description.length > 385;
    const shortDescription = isLongDescription ? project.description.substring(0, 385) : project.description;
    
    return `
        <div class="project-card fade-in">
            ${project.image ? `<div class="project-image"><img src="${project.image}" alt="${project.title}"></div>` : ''}
            <div class="project-content">
                <div class="project-header">
                    <h3>${project.title}</h3>
                    <span class="project-date">${project.developmentDate}</span>
                </div>
                <div class="description-container ${isLongDescription ? 'truncated' : ''}" id="desc-container-${index}">
                    <p id="desc-${index}" class="project-description">${shortDescription}</p>
                </div>
                ${isLongDescription ? `<button class="read-more-btn" onclick="toggleDescription(${index}, \`${project.description.replace(/`/g, '\\`')}\`)">Full Description</button>` : ''}
                <div class="tech-stack">
                    ${project.technologies.map(tech => `
                        <span class="tech-item">
                            <img src="${techLogos[tech]}" alt="${tech}" class="tech-logo">
                            ${tech}
                        </span>
                    `).join('')}
                </div>
                <div class="project-links">
                    ${project.isConfidential ? 
                        `<button class="demo-btn confidential-btn" onclick="showConfidentialModal()">Confidential Project</button>
                         <button class="demo-btn architecture-btn" onclick="showArchitectureDiagram()">View Serverless Cloud Architecture</button>` :
                        `${project.liveUrl ? 
                            `<a href="${project.liveUrl}" target="_blank" class="demo-btn">Live Demo</a>` :
                            project.demoVideo ? 
                            `<button class="demo-btn" onclick="openDemo('${project.demoVideo}', '${project.title}')">View Demo</button>` : ''
                         }
                         <a href="${project.githubUrl}" target="_blank">View Code</a>`
                    }
                </div>
            </div>
        </div>
    `;
}

function toggleDescription(index, fullDescription) {
    const descElement = document.getElementById(`desc-${index}`);
    const container = document.getElementById(`desc-container-${index}`);
    const button = container.nextElementSibling;
    
    if (button.textContent === 'Full Description') {
        descElement.textContent = fullDescription;
        container.classList.remove('truncated');
        button.textContent = 'Show Less';
    } else {
        descElement.textContent = fullDescription.substring(0, 385);
        container.classList.add('truncated');
        button.textContent = 'Full Description';
    }
}

// Demo modal functions
function openDemo(videoUrl, title) {
    const modal = document.getElementById('demoModal');
    const video = document.getElementById('demoVideo');
    const videoSource = document.getElementById('videoSource');
    const modalTitle = document.getElementById('modalTitle');
    
    modalTitle.textContent = title + ' - Demo';
    videoSource.src = videoUrl;
    video.load(); // Reload the video element
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeDemo() {
    const modal = document.getElementById('demoModal');
    const video = document.getElementById('demoVideo');
    
    video.pause();
    video.currentTime = 0;
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function showConfidentialModal() {
    const modal = document.getElementById('demoModal');
    const video = document.getElementById('demoVideo');
    const modalTitle = document.getElementById('modalTitle');
    const closeButton = modal.querySelector('.close');
    
    // Hide video and show confidential message
    video.style.display = 'none';
    modalTitle.textContent = 'Confidential Project';
    
    // Change close button to use confidential close function
    closeButton.setAttribute('onclick', 'closeConfidentialModal()');
    
    // Create confidential content
    const confidentialContent = `
        <div style="padding: 2rem; text-align: center; line-height: 1.6;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🔒</div>
            <p style="color: #555; margin-bottom: 1.5rem; font-size: 1.1rem;">
                This project was developed during my internship at AWS as a Cloud Consultant 
                and cannot be shared due to confidentiality agreements.
            </p>
        </div>
    `;
    
    // Replace video content with confidential message
    video.outerHTML = confidentialContent;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeConfidentialModal() {
    const modal = document.getElementById('demoModal');
    const closeButton = modal.querySelector('.close');
    
    // Restore original close button function
    closeButton.setAttribute('onclick', 'closeDemo()');
    
    // Restore original video element
    const videoContainer = modal.querySelector('.modal-content .modal-body');
    const originalVideo = `
        <video id="demoVideo" width="100%" height="400" controls>
            <source id="videoSource" src="" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;
    
    // Replace confidential content with original video
    videoContainer.innerHTML = originalVideo;
    
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function showArchitectureDiagram() {
    const modal = document.getElementById('demoModal');
    const video = document.getElementById('demoVideo');
    const modalTitle = document.getElementById('modalTitle');
    const closeButton = modal.querySelector('.close');
    
    // Hide video and show architecture diagram
    video.style.display = 'none';
    modalTitle.textContent = 'Serverless Cloud Architecture';
    
    // Change close button to use architecture close function
    closeButton.setAttribute('onclick', 'closeArchitectureDiagram()');
    
    // Create architecture diagram content
    const architectureContent = `
        <div style="width: 100%; height: 500px; display: flex; flex-direction: column; justify-content: center; align-items: center; overflow: hidden;">
            <img src="assets/architecture-diagram.png" alt="AWS Architecture Diagram" 
                 style="max-width: 100%; max-height: 450px; width: auto; height: auto;
                        object-fit: contain; border-radius: 8px; cursor: pointer;
                        box-shadow: 0 4px 12px rgba(0,0,0,0.1); border: 1px solid #ddd;"
                 onclick="openFullscreen(this)">
            <p style="color: #666; font-size: 12px; text-align: center; margin: 10px 0 0 0; padding: 0;">
                Click on the image to view in fullscreen
            </p>
        </div>
    `;
    
    // Replace video content with architecture diagram
    video.outerHTML = architectureContent;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeArchitectureDiagram() {
    const modal = document.getElementById('demoModal');
    const closeButton = modal.querySelector('.close');
    
    // Restore original close button function
    closeButton.setAttribute('onclick', 'closeDemo()');
    
    // Restore original video element
    const videoContainer = modal.querySelector('.modal-content .modal-body');
    const originalVideo = `
        <video id="demoVideo" width="100%" height="400" controls>
            <source id="videoSource" src="" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;
    
    // Replace architecture content with original video
    videoContainer.innerHTML = originalVideo;
    
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}


    // Create fullscreen overlay
    const fullscreenOverlay = document.createElement('div');
    fullscreenOverlay.id = 'fullscreenOverlay';
    fullscreenOverlay.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background: rgba(0,0,0,0.9); z-index: 10000; display: flex;
        justify-content: center; align-items: center; cursor: pointer;
    `;
function openFullscreen(img) {
    // Create fullscreen overlay
    const fullscreenOverlay = document.createElement('div');
    fullscreenOverlay.id = 'fullscreenOverlay';
    fullscreenOverlay.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
        background: rgba(0,0,0,0.9); z-index: 10000; display: flex;
        justify-content: center; align-items: center; cursor: pointer;
    `;
    
    // Create fullscreen image
    const fullscreenImg = document.createElement('img');
    fullscreenImg.src = img.src;
    fullscreenImg.alt = img.alt;
    fullscreenImg.style.cssText = `
        max-width: 95vw; max-height: 95vh; object-fit: contain;
        border-radius: 8px; box-shadow: 0 8px 32px rgba(0,0,0,0.3);
    `;
    
    // Add close instruction
    const closeText = document.createElement('div');
    closeText.style.cssText = `
        position: absolute; top: 20px; left: 50%; transform: translateX(-50%);
        color: white; font-size: 14px; text-align: center;
    `;
    closeText.textContent = 'Click anywhere to close';
    
    fullscreenOverlay.appendChild(fullscreenImg);
    fullscreenOverlay.appendChild(closeText);
    document.body.appendChild(fullscreenOverlay);
    
    // Close on click
    fullscreenOverlay.addEventListener('click', function() {
        document.body.removeChild(fullscreenOverlay);
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function escapeHandler(e) {
        if (e.key === 'Escape') {
            if (document.getElementById('fullscreenOverlay')) {
                document.body.removeChild(fullscreenOverlay);
            }
            document.removeEventListener('keydown', escapeHandler);
        }
    });
}

// Render all projects
function renderProjects() {
    console.log('renderProjects called');
    const projectGrid = document.getElementById('projectGrid');
    console.log('projectGrid element:', projectGrid);
    console.log('projects array length:', projects.length);
    if (projectGrid) {
        const html = projects.map((project, index) => createProjectCard(project, index)).join('');
        console.log('Generated HTML length:', html.length);
        projectGrid.innerHTML = html;
    }
}

// Scroll Animation Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Render skills by categories
function renderSkills() {
    console.log('renderSkills called');
    const skillsGrid = document.getElementById('skillsGrid');
    console.log('skillsGrid element:', skillsGrid);
    console.log('skillsCategories:', Object.keys(skillsCategories));
    if (skillsGrid) {
        let skillsHTML = '';
        
        Object.entries(skillsCategories).forEach(([category, skills]) => {
            skillsHTML += `
                <div class="skills-category fade-in">
                    <h4 class="category-title">${category}</h4>
                    <div class="category-skills">
                        ${skills.map(skill => `
                            <a href="${skill.link}" target="_blank" rel="noopener noreferrer" class="skill-item">
                                <img src="${skill.logo}" alt="${skill.name}">
                                <span>${skill.name}</span>
                                <svg class="external-link-icon" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                                </svg>
                            </a>
                        `).join('')}
                    </div>
                </div>
            `;
        });
        
        skillsGrid.innerHTML = skillsHTML;
    }
}

// Dark mode functionality
function initDarkMode() {
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Smooth scroll with precise positioning
function smoothScrollTo(targetId, offset = 0) {
    const target = document.getElementById(targetId);
    const headerHeight = document.querySelector('header').offsetHeight;
    const targetPosition = target.offsetTop - headerHeight - offset;
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

// Navigation click handlers
function initNavigation() {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            
            // Custom offsets for each section
            const offsets = {
                'projects': 20,
                'skills': -30,  // Negative = scroll lower
                'contact': 20
            };
            
            smoothScrollTo(targetId, offsets[targetId] || 0);
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    renderProjects();
    renderSkills();
    initDarkMode();
    initNavigation();
    
    // Initialize scroll animations after content is rendered
    setTimeout(() => {
        initScrollAnimations();
    }, 100);
    
    // Close modal when clicking outside
    window.onclick = function(event) {
        const modal = document.getElementById('demoModal');
        if (event.target === modal) {
            closeDemo();
        }
    }
});

// Function to add new project (for future use)
function addProject(newProject) {
    projects.push(newProject);
    renderProjects();
}
