import { Badge } from "./ui/badge";

export const StatusBadge = ({ status }: { status: string }) => {
  let color: string;

  switch (status) {
    case "Completed":
      color = "text-emerald-600 border-emerald-600";
      break;
    case "Active":
      color = "text-blue-600 border-blue-600";
      break;
    default:
      color = "text-yellow-600 border-yellow-600";
      break;
  }

  return (
    <Badge variant={"outline"} className={`rounded-md ${color}`}>
      {status}
    </Badge>
  );
};
