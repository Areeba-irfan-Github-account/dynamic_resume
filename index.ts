// TypeScript: src/index.ts

// Interface for resume data
interface ResumeData {
    name: string;
    email: string;
    phone: string;
    education: string;
    workExperience: string;
    skills: string;
}

// Function to generate the resume content
function generateResume(data: ResumeData): string {
    return `
        <header>
            <h1>${data.name}</h1>
            <p>${data.email}</p>
            <p>${data.phone}</p>
        </header>
        <section>
            <h2>Education</h2>
            <p>${data.education}</p>
        </section>
        <section>
            <h2>Work Experience</h2>
            <p>${data.workExperience}</p>
        </section>
        <section>
            <h2>Skills</h2>
            <p>${data.skills}</p>
        </section>
    `;
}

// Function to handle form submission
function handleFormSubmit(event: Event): void {
    event.preventDefault();

    const form = document.getElementById('resume-form') as HTMLFormElement;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    const resumeData: ResumeData = { name, email, phone, education, workExperience, skills };

    // Generate resume HTML
    const resumeHtml = generateResume(resumeData);

    // Show resume and hide form
    document.getElementById('resume-output')!.innerHTML = resumeHtml;
    document.getElementById('resume-output')!.classList.remove('hidden');
    form!.classList.add('hidden');
}

// Attach event listener to form
document.getElementById('resume-form')!.addEventListener('submit', handleFormSubmit);
