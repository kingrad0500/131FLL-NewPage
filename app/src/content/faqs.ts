import { GENERATED, TBD } from "../lib/placeholder.ts";
import {
  distanceChangePolicy,
  registrationCloseDate,
} from "./registration.ts";

export const faqsHeroImage = GENERATED(
  "/assets/heroes/interior-faqs.avif",
  "Interior hero — FAQs and contact",
);
import type { FaqGroup } from "./types.ts";

/**
 * FAQ content.
 *
 * Rewritten from the organiser's own FAQ against everything confirmed on
 * 2026-07-25: the previous timing provider is gone (Split Second Timing now
 * handles timing), the aid-station count is corrected to eleven, refunds are
 * restated in the owner's approved wording, and dates move to 2026. Approved
 * draft lives in agents/interior-content-brief.md §F.
 */
export const faqGroups: FaqGroup[] = [
  {
    id: "race-information",
    title: "Race information",
    items: [
      {
        question: "What time do the races start?",
        answer:
          "The half marathon and relay start at 6:15 AM. The 10K and 5K start at 7:00 AM. Every distance starts and finishes at Las Olas & A1A.",
      },
      {
        question: "Where is the start and finish?",
        answer:
          "Las Olas Oceanside Park, 3000 E Las Olas Blvd, Fort Lauderdale, FL 33316. The start line itself is at Las Olas & A1A.",
      },
      {
        question: "How long is the course open?",
        answer:
          "Three hours and thirty minutes. After that the roads reopen to traffic and runners still out continue on the sidewalks as pedestrians.",
      },
      {
        question: "Can I walk?",
        answer:
          "Yes. Walkers start behind the runners and finish by 10:00 AM. There is no early start.",
      },
      {
        question: "How old do I have to be?",
        answer:
          "Half marathon participants must be at least 14, and anyone under 18 needs a parent-signed minor waiver. Minimum ages for the other distances are being confirmed.",
      },
      {
        question: "Are there aid stations?",
        answer:
          "Eleven along the course, with water and sports drink. Medical help is available at each one, with ambulance and EMS bike teams covering the route.",
      },
      {
        question: "Can I wear headphones?",
        answer:
          "Yes, but keep the volume low or wear a single earbud — you need to hear course marshals and traffic.",
      },
      {
        question: "What is not allowed on the course?",
        answer:
          "Baby joggers, skateboards, bicycles, and animals are not permitted, for the safety of everyone running.",
      },
      {
        question: "Is the course certified?",
        answer: "Yes. The Fort Lauderdale 13.1 course is USATF certified.",
      },
      {
        question: "Is there food at the finish?",
        answer:
          "Yes, there is a finish-line food tent for participants. Spectators cannot enter it.",
      },
      {
        question: "Is the race capped?",
        answer:
          "Yes. Both the half marathon and the 5K have participant caps, so they close when they fill. Register early to be sure of a place.",
      },
    ],
  },
  {
    id: "registration",
    title: "Registration",
    items: [
      {
        question: "How do I register?",
        answer:
          "Through the registration page, which takes you to RunSignup to complete your entry.",
      },
      {
        question: "Is there race-day registration?",
        answer:
          "If space remains, race-morning registration is open from 5:00 AM to 5:50 AM at the race site.",
      },
      {
        question: "Can I get a refund?",
        answer:
          "There are no refunds whatsoever. All race expenses are paid for in full to our vendors leading up to the event months and months prior to the actual execution of the race.",
      },
      {
        question: "Can I give my entry to someone else?",
        answer:
          "No. Entries and bibs are non-transferable from one person to another.",
      },
      {
        question: "Can I change distances?",
        answer: distanceChangePolicy,
      },
      {
        question: "When does registration close?",
        answer: registrationCloseDate,
      },
    ],
  },
  {
    id: "packet-pickup",
    title: "Packet pickup",
    items: [
      {
        question: "When and where do I collect my packet?",
        answer:
          "Saturday, November 7, 2026, from 8:00 AM to 6:00 PM at the Downtown Events Center, 416 NE 1st Street, Fort Lauderdale, alongside the health and fitness expo. Race-morning pickup is also available at the registration tent from 4:30 AM, but we strongly recommend collecting on Saturday.",
      },
      {
        question: "Can someone else collect my packet?",
        answer:
          "Yes, with a photocopy of your photo ID and your confirmation email.",
      },
      {
        question: "What is in the packet?",
        answer:
          "Your bib with its gear-check tag, the timing tag already attached to the back of the bib, safety pins, and a post-race beer wristband for participants 21 and over.",
      },
      {
        question: "How do I wear my bib?",
        answer:
          "On the front, outside all clothing, for the whole race. Do not alter, fold, or wrinkle it — the timing tag is on the back.",
      },
    ],
  },
  {
    id: "results-awards",
    title: "Results and awards",
    items: [
      {
        question: "How is the race timed?",
        answer:
          "Split Second Timing handles timing. The tag on the back of your bib records both your clock time and your chip time.",
      },
      {
        question: "What is the difference between clock time and chip time?",
        answer:
          "Clock time runs from the starting gun. Chip time runs from the moment you cross the start mat — that is your personal result.",
      },
      {
        question: "Where do I find results?",
        answer:
          "On the Results & Photos page, which links to every distance for the current year and the archive back to 2021.",
      },
      {
        question: "Do I get a medal?",
        answer:
          "Half marathon finishers receive a commemorative finisher medal. Awards for the other distances are being confirmed.",
      },
      {
        question: "Are there awards?",
        answer: TBD("Award categories and age-group bands"),
      },
      {
        question: "Where are the race photos?",
        answer: "Linked from the Results & Photos page.",
      },
    ],
  },
];
