
import { CreationDashboard } from "@/components/creation-dashboard";

export default function ExtracaoEcommercePage() {
  return (
    <CreationDashboard
      title="Extração Ecommerce"
      showPrompt={false}
      showUpload={true}
      showMultipleUpload={false}
      showFormatSelector={true}
    />
  );
}


