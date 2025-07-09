
import { CreationDashboard } from "@/components/creation-dashboard";

export default function TrocaRoupaPage() {
  return (
    <CreationDashboard
      title="Troca de Roupa"
      showPrompt={true}
      showUpload={false}
      showMultipleUpload={true}
      showFormatSelector={true}
    />
  );
}


