import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "./card";

export default function CardSummary({ title, count, icon: Icon, link, color }) {
  return (
    <Link to={link}>
      <Card className="hover:shadow-xl transition-shadow duration-300 border rounded-2xl">
        <CardHeader className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-xl text-white ${color}`}>
              <Icon size={24} />
            </div>
            <h3 className="font-semibold text-lg">{title}</h3>
          </div>
          <ArrowRight className="text-[var(--color-text-muted)]" size={18} />
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{count}</p>
          <p className="text-sm text-[var(--color-text-secondary)]">Total {title}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
