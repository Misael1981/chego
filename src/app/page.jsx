import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center gap-8">
      <div>
        <div className="bg-white p-4 rounded-lg">
          <Image src="/logo-chego.svg" width={200} height={200} alt="logo" />
        </div>
        <h1>Chego</h1>
      </div>
      <Button>Teste de cores</Button>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}
