
import { CreationDashboard } from "@/components/creation-dashboard";

export default function CriacaoEstampasPage() {
  return (
    <CreationDashboard
      title="Criação de Estampas"
      showPrompt={true}
      showUpload={false}
      showMultipleUpload={false}
      showFormatSelector={false}
      fixedFormat="1:1"
    />
  );
}


