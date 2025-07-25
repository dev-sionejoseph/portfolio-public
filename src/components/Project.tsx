type ProjectProps = {
  project: any;
};

export default function Project({ project }: ProjectProps) {
  if (!project) return <p className="text-center">Project not found</p>;

  const { title, repo, explanation, skills, contribution, takeaways } = project;

  return (
    <div className="text-left space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <div>
        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View Repository
        </a>
      </div>
      <div>
        <h3 className="font-semibold text-gray-700">Project Explanation & Features:</h3>
        <p className="text-gray-600">{explanation}</p>
      </div>
      <div>
        <h3 className="font-semibold text-gray-700">Skills Demonstrated:</h3>
        <p className="text-gray-600">{skills}</p>
      </div>
      <div>
        <h3 className="font-semibold text-gray-700">Personal Contribution:</h3>
        <p className="text-gray-600">{contribution}</p>
      </div>
      <div>
        <h3 className="font-semibold text-gray-700">Personal Takeaways:</h3>
        <p className="text-gray-600">{takeaways}</p>
      </div>
    </div>
  );
}
