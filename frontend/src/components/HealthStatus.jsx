export default function HealthStatus({ ok }) {
  return (
    <div className="text-sm text-gray-600">
      {ok ? "✅ Backend Healthy" : "❌ Backend Down"}
    </div>
  );
}
