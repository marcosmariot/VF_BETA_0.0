
import { CreationDashboard } from "@/components/creation-dashboard";

export default function CriacaoPecasPage() {
  return (
    <CreationDashboard
      title="Criação de Peças"
      showPrompt={true}
      showUpload={true}
      showMultipleUpload={false}
      showFormatSelector={true}
    />
  );
}


