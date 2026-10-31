export type NowUpdate = {
  date: string;
  text: string;
  href: string;
};

export const NOW_STATUS =
  "Cardinal and Dawn are on Firebase Hosting. Artometrics picked up lab-log and issue PDFs in October.";

export const NOW_UPDATES: NowUpdate[] = [
  {
    date: "2026-10-30",
    text: "Cardinal's reading room is on Firebase Hosting. A commit the same day edits the episode 7 chapter file ep7-02-pong-patents.md.",
    href: "https://github.com/kylesmcauliffe/cardinal/commit/8d267256882110f5f1d5313678ae593954c989f9",
  },
  {
    date: "2026-10-30",
    text: "Dawn is served as a static Firebase export. The village and studio chat call Gemini through Firebase AI Logic in the browser.",
    href: "https://github.com/Artometrics/dawn/commit/0ff2c61",
  },
  {
    date: "2026-10-23",
    text: "Artometrics added a lab log page and magazine issue PDFs.",
    href: "https://github.com/Artometrics/artometrics/commit/ce457b2",
  },
];
