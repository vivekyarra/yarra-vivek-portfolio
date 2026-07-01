interface Skills {
	[skill: string]: {
		name: string;
		img: string;
	}[];
}

const skills: Skills = {
	"Web Technologies": [
		{
			name: "React",
			img: "https://cdn.svgporn.com/logos/react.svg",
		},
		{
			name: "Redux",
			img: "https://cdn.svgporn.com/logos/redux.svg",
		},
		{
			name: "Next.js",
			img: "https://cdn.svgporn.com/logos/nextjs-icon.svg",
		},
		{
			name: "React Native",
			img: "https://cdn.svgporn.com/logos/react.svg",
		},
		{
			name: "Node.js",
			img: "https://cdn.svgporn.com/logos/nodejs-icon.svg",
		},
		{
			name: "FastAPI",
			img: "/icons/fastapi.svg",
		},
	],
	"Infra & Cloud": [
		{
			name: "MongoDB",
			img: "https://cdn.svgporn.com/logos/mongodb-icon.svg",
		},
		{
			name: "PostgreSQL",
			img: "https://cdn.svgporn.com/logos/postgresql.svg",
		},
		{
			name: "AWS",
			img: "https://cdn.svgporn.com/logos/aws.svg",
		},
		{
			name: "GCP",
			img: "https://cdn.svgporn.com/logos/google-cloud.svg",
		},
		{
			name: "Docker",
			img: "https://cdn.svgporn.com/logos/docker-icon.svg",
		},
		{
			name: "Cloudflare Workers",
			img: "/icons/cloudflare-workers.svg",
		},
		{
			name: "CI/CD",
			img: "/icons/cicd.svg",
		},
	],
	Languages: [
		{
			name: "Python",
			img: "https://cdn.svgporn.com/logos/python.svg",
		},
		{
			name: "Java",
			img: "https://cdn.svgporn.com/logos/java.svg",
		},
		{
			name: "JavaScript",
			img: "https://cdn.svgporn.com/logos/javascript.svg",
		},
		{
			name: "TypeScript",
			img: "https://cdn.svgporn.com/logos/typescript-icon.svg",
		},
		{
			name: "C++",
			img: "https://cdn.svgporn.com/logos/c-plusplus.svg",
		},
	],
	"AI & ML": [
		{
			name: "PyTorch",
			img: "/icons/pytorch.svg",
		},
		{
			name: "HuggingFace",
			img: "/icons/huggingface.svg",
		},
		{
			name: "LangChain",
			img: "/icons/langchain.svg",
		},
		{
			name: "FAISS",
			img: "/icons/faiss.svg",
		},
		{
			name: "RAG",
			img: "/icons/rag.svg",
		},
		{
			name: "Gemini API",
			img: "/icons/gemini.svg",
		},
		{
			name: "Reinforcement Learning",
			img: "/icons/reinforcement-learning.svg",
		},
	],
};

export default skills;
