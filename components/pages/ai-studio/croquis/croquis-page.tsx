
import { CreationDashboard } from "@/components/creation-dashboard";

export default function CroquisPage() {
  return (
    <CreationDashboard
      title="Criação de Croquis"
      showPrompt={true}
      showUpload={true}
      showMultipleUpload={false}
      showFormatSelector={true}
    />
  );
}


