import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "@/lib/types";

type SectionViewProp = {
  threshold: number;
  sectionName: SectionName;
};

export function useSectionInView({ threshold, sectionName }: SectionViewProp) {
  const { ref, inView } = useInView({
    threshold: threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  // do not set state during rendering always use useffect
  useEffect(() => {
    // disabling for a second when we clicking other sections -> it acts as observer -> ignore all obervers for less than a second
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);
  return { ref };
}
