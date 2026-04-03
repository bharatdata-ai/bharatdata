import dynamic from "next/dynamic";

// SSR-Safe Dynamic Isolation for 404
// Reason: Prevents the static build worker from hitting React hooks (lucide, next/link)
// which causes the persistent 'useContext null' error in Next.js 15 monorepo builds.
const NotFoundContent = dynamic(() => import("../components/ui/NotFoundContent"), { 
  ssr: false,
  loading: () => (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-700">
       <div className="space-y-6 max-w-md">
        <h1 className="text-6xl font-bold tracking-tighter text-primary/20 sm:text-8xl">404</h1>
      </div>
    </div>
  )
});

export default function NotFound() {
  return <NotFoundContent />;
}
