import ProjectPage from "@/app/components/ProjectPage";

export default function StoryGraphPage() {
  return (
    <ProjectPage
      headerImage="/images/projects/storygraph.webp"
      headerImageAlt="The StoryGraph project header"
      title="THE STORYGRAPH"
      description={[
        "The StoryGraph is a book-sharing platform with over 3 million users, where readers connect through shared interests, recommendations, and social features. As the sole UX designer, I worked on creating intuitive experiences that make discovering new books a collaborative journey.",
      ]}
      role="Sole UX Designer"
      timeline="August 2024 - April 2025"
      disciplines={["UI/UX Design", "User Research", "Design Systems"]}
    >
      <div className="space-y-6">
        <div>
          <h3 className="font-mono text-sm text-gray-500 uppercase mb-2">
            BACKGROUND
          </h3>
          <p className="text-gray-700 font-sans text-md">
            I've been a life-long reader.
          </p>
        </div>
      </div>
    </ProjectPage>
  );
}
