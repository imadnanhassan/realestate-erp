import projects from "@/data/projects.json";
import Card from "@/components/common/Card";
import Timeline from "@/components/common/Timeline";
import FileUploader from "@/components/common/FileUploader";
import PageHeader from "@/components/common/PageHeader";

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return <div className="text-sm text-gray-500">Project not found.</div>;

  const milestones = [
    { date: "2025-01-05", title: "Design Approved", status: "done" },
    { date: "2025-02-10", title: "Groundbreaking", status: "done" },
    { date: "2025-03-18", title: "Foundation Complete", status: "pending" },
    { date: "2025-04-30", title: "Structure Phase", status: "pending" }
  ];

  return (
    <div className="space-y-4">
      <PageHeader title={project.name} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2">
          <img
            src={`https://picsum.photos/seed/${encodeURIComponent(project.id)}/1200/600`}
            alt={project.name}
            className="w-full h-64 object-cover rounded-xl border border-gray-100"
          />
          <dl className="grid grid-cols-2 gap-4 text-sm mt-4">
            <div>
              <dt className="text-gray-500">Location</dt>
              <dd className="font-medium">{project.location}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Progress</dt>
              <dd className="font-medium">{project.progress}%</dd>
            </div>
            <div>
              <dt className="text-gray-500">Budget</dt>
              <dd className="font-medium">${project.budget.toLocaleString()}</dd>
            </div>
          </dl>
        </Card>
        <Card title="Milestones">
          <Timeline items={milestones as any} />
        </Card>
      </div>
      <Card title="Documents">
        <FileUploader />
      </Card>
    </div>
  );
}