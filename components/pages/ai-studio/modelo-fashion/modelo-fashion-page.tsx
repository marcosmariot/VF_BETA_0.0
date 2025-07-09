
import { CreationDashboard } from "@/components/creation-dashboard";

export default function ModeloFashionPage() {
  return (
    <CreationDashboard
      title="Modelo Fashion"
      showPrompt={true}
      showUpload={true}
      showMultipleUpload={false}
      showFormatSelector={true}
    />
  );
}


