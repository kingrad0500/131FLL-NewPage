import { GENERATED, TBD } from "../lib/placeholder.ts";

export const registrationHeroImage = GENERATED(
  "/assets/heroes/interior-registration.avif",
  "Interior hero — Registration",
);

export const registrationPolicies = [
  {
    title: "Refunds",
    body: "There are no refunds whatsoever. All race expenses are paid for in full to our vendors leading up to the event months and months prior to the actual execution of the race.",
  },
  {
    title: "Transfers",
    body: "Entries are non-transferable. You cannot pass your bib to another runner — for timing accuracy and for medical safety, the person on the results is the person on the course.",
  },
  {
    title: "Distance changes",
    body: TBD("How runners change distances under Split Second Timing"),
  },
  {
    title: "Deferral",
    body: TBD("Deferral policy for 2026"),
  },
] as const;

export const distanceChangePolicy = registrationPolicies[2].body;
export const deferralPolicy = registrationPolicies[3].body;
export const registrationCloseDate = TBD("2026 registration close date");
