import { notFound } from "next/navigation";
import { Patient, patients } from "../../../data/patients";

export async function generateStaticParams() {
  //const patients = await getPatients()
  return patients.map((patient) => ({ slug: patient.slug }));
}

export default function PatientPage({ params }: { params: { slug: string } }) {
  const patient = (patients as Patient[]).find((p) => p.slug === params.slug);

  if (!patient) {
    notFound();
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold">{patient.title}</h1>
      <img src={patient.image} alt={patient.title} className="my-4 w-full" />
      <p>Condition: {patient.text}</p>
    </div>
  );
}
