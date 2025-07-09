
import { CreationDashboard } from "@/components/creation-dashboard";

export default function AlteracaoBackgroundPage() {
  return (
    <CreationDashboard
      title="Alteração de Background"
      showPrompt={false}
      showUpload={true}
      showMultipleUpload={false}
      showFormatSelector={false}
    />
  );
}


