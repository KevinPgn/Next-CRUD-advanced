import { ButtonCreate } from "@/components/ui/ButtonCreate";
import { Users } from "@/components/Users";

export default function Home() {
  return (
    <>
      <div className="container">
        <ButtonCreate />
        <Users />
      </div>
    </>
  );
}
