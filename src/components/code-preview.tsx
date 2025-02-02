"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download, Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface CodePreviewProps {
  code: string;
}

export function CodePreview({ code }: CodePreviewProps) {
  const [activeTab, setActiveTab] = useState("preview");
  const [previewSize, setPreviewSize] = useState("desktop");
  const { toast } = useToast();

  const handleDownload = () => {
    const blob = new Blob([code], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "landing-page.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Downloaded!",
      description: "Your landing page has been downloaded successfully.",
    });
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    toast({
      title: "Copied!",
      description: "Code copied to clipboard.",
    });
  };

  const getPreviewWidth = () => {
    switch (previewSize) {
      case "mobile":
        return "w-[375px]";
      case "tablet":
        return "w-[768px]";
      default:
        return "w-full";
    }
  };

  return (
    <Card className="h-full border-0 rounded-none">
      <CardHeader className="border-b">
        <div className="flex items-center justify-between">
          <CardTitle>Preview</CardTitle>
          <div className="flex items-center gap-2">
            <Select value={previewSize} onValueChange={setPreviewSize}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="View size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="desktop">Desktop</SelectItem>
                <SelectItem value="tablet">Tablet</SelectItem>
                <SelectItem value="mobile">Mobile</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon" onClick={handleCopy}>
              <Copy className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={handleDownload}>
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0 h-[calc(100vh-140px)]">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
          <div className="border-b">
            <TabsList className="w-full justify-start rounded-none border-b">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="preview" className="mt-0 h-full">
            <div className={`h-full overflow-auto bg-background p-4 flex justify-center`}>
              <div className={`${getPreviewWidth()} h-full min-h-[800px]`}>
                <iframe
                  srcDoc={code}
                  className="w-full h-full border rounded-lg shadow-sm"
                  title="Preview"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="code" className="mt-0 h-full">
            <pre className="p-4 overflow-auto h-full">
              <code className="text-sm">{code}</code>
            </pre>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}