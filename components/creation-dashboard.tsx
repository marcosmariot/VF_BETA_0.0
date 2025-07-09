import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UploadCloud, Image as ImageIcon, History, BookOpen } from "lucide-react";

interface CreationDashboardProps {
  title: string;
  showPrompt?: boolean;
  showUpload?: boolean;
  showMultipleUpload?: boolean;
  showFormatSelector?: boolean;
  fixedFormat?: string;
  children?: React.ReactNode;
}

const formatOptions = [
  { value: "1:1", label: "1:1 (Quadrado)" },
  { value: "3:4", label: "3:4 (Retrato)" },
  { value: "16:9", label: "16:9 (Paisagem)" },
  { value: "9:16", label: "9:16 (Vertical)" },
];

export function CreationDashboard({
  title,
  showPrompt = true,
  showUpload = true,
  showMultipleUpload = false,
  showFormatSelector = true,
  fixedFormat,
  children,
}: CreationDashboardProps) {
  const [prompt, setPrompt] = useState("");
  const [selectedFormat, setSelectedFormat] = useState(fixedFormat || "1:1");
  const [file, setFile] = useState<File | null>(null);
  const [multipleFiles, setMultipleFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleMultipleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setMultipleFiles(Array.from(event.target.files));
    }
  };

  const handleSubmit = () => {
    console.log("Gerar com:", { prompt, selectedFormat, file, multipleFiles });
    // Lógica de geração da imagem aqui
  };

  return (
    <div className="flex flex-col h-full p-4">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-grow">
        {/* Painel de Criação */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Painel de Criação</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {showUpload && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Upload de Imagem</label>
                <Input type="file" onChange={handleFileChange} />
              </div>
            )}
            {showMultipleUpload && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Upload de Múltiplas Imagens</label>
                <Input type="file" multiple onChange={handleMultipleFileChange} />
              </div>
            )}
            {showPrompt && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Prompt Textual</label>
                <Textarea
                  placeholder="Descreva sua criação..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              </div>
            )}
            {showFormatSelector && !fixedFormat && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Formato</label>
                <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um formato" />
                  </SelectTrigger>
                  <SelectContent>
                    {formatOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
            {fixedFormat && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Formato Fixo</label>
                <Input value={fixedFormat} readOnly />
              </div>
            )}
            <Button onClick={handleSubmit} className="w-full">
              <UploadCloud className="mr-2 size-4" /> Gerar Imagem
            </Button>
          </CardContent>
        </Card>

        {/* Preview do Resultado */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Preview do Resultado</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center h-64 bg-gray-100 rounded-md">
            {children || <p className="text-gray-500">Sua imagem gerada aparecerá aqui.</p>}
          </CardContent>
        </Card>
      </div>

      {/* Histórico de Criação e Tutoriais */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Histórico de Criação</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-32 bg-gray-100 rounded-md">
              <History className="size-8 text-gray-400" />
              <p className="ml-2 text-gray-500">Seu histórico de criações aparecerá aqui.</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tutoriais e Dicas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-32 bg-gray-100 rounded-md">
              <BookOpen className="size-8 text-gray-400" />
              <p className="ml-2 text-gray-500">Tutoriais relevantes para esta sessão.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

