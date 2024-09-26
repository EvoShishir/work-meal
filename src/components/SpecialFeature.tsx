import { useEffect, useState } from "react";

interface SpecialFeatureProps {
  isActive: boolean;
}

export const SpecialFeature: React.FC<SpecialFeatureProps> = ({ isActive }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Avoid server-side mismatch
  return (
    <div className="mt-4">
      {isActive ? (
        <button className="btn btn-primary">
          Special Feature (Active between 3 PM and 10 PM)
        </button>
      ) : (
        <button className="btn btn-primary" disabled>
          Special Feature (Active between 3 PM and 10 PM)
        </button>
      )}
    </div>
  );
};
