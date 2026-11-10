# FRANCHISE: Merchandise Owns the Ledger

**Separate editorial reading draft — not published.** Based on the existing article at https://artometrics.com/franchise and `src/content/blog/franchise.md` on Artometrics/artometrics main, read November 7, 2026 PT. Figures remain the article's October 12 snapshot, not a November update. Numeric claims below are retained from that article, not independently re-audited in this tone pass. Verification holds follow the draft.

## How does Pokémon end up bigger than Star Wars and Marvel combined?

Pokémon is listed at $130.7 billion in lifetime revenue. Star Wars and the Marvel Cinematic Universe together: $84.2 billion. You can bring a Death Star and the Avengers. The merchandise still needs counting.

That comparison comes from Wikipedia's October 2026 franchise ledger, not corporate accounts. Across its 140 properties, the listed lifetime total is $1,448.1 billion. Merchandise, licensing and retail account for 55.8%; box office, 18.3%; video games, 17.9%. [S017]

So the useful question isn't just which franchise made the biggest movie. It's what people keep buying after the credits.

One warning belongs here, before the impressive numbers get comfortable: these are nominal estimates of consumer spending compiled over decades. They are not profit, company valuation, or money paid directly to the rights holder. A very large number can still be answering the wrong question.

## The film ends. The shopping does not.

The ledger puts merchandise, licensing and retail at $809.4 billion, compared with $265.3 billion for box office and $259.2 billion for games. Another $27.2 billion, or 1.9%, appears in totals without an itemised breakdown. [S017]

The merchandise lead is substantial, but it isn't equally secure to the decimal place. Resampling franchises 5,000 times gives 95% bootstrap ranges of 44.0–66.2% for merchandise, 12.8–25.6% for box office and 11.2–26.2% for games. Those ranges show dependence on which franchises are included. They do not certify Wikipedia's underlying estimates.

Pokémon makes the distinction unusually clear. Its $130.7 billion row includes $119.3 billion in retail sales and $10.2 billion in mobile games. Mickey Mouse & Friends follows at $61.2 billion, then Winnie-the-Pooh at $50.2 billion. Star Wars is $46.7 billion; Disney Princess, $45.4 billion; the MCU, $37.5 billion. [S017]

The small bear has not been waiting for a cinematic universe to get organised.

Pokémon began in 1996 with Game Freak and Nintendo. Games, animation, cards and other products give people different ways to stay with the same characters. That is a useful interpretation of the system—not proof that every cartoon viewer becomes a card buyer. Jenkins's *Convergence Culture* describes stories moving across formats; Steinberg's *Anime's Media Mix* explains how Japanese animation and character goods developed together. Japan's production committees can bring publishers, broadcasters and toy makers into the same rights arrangements. [Jenkins, 2006; Steinberg, 2012; Hernández Hernández, 2018]

Disney takes another route through parks, resorts, cruises and retail. Different arrangements; more than one place to spend money. Neither requires us to assume that fans are being fooled. People can genuinely enjoy the story and genuinely want the toy.

## Did Hello Kitty really lose billions?

Not in the sense that comparison suggests. The old file listed Hello Kitty at $80.0 billion; the rebuilt table lists $33.5 billion. Mario went from $35.0 billion to $9.74 billion, and Gundam from $25.5 billion to $5.0 billion. The article attributes these changes to revised Wikipedia sourcing—not reported collapses at Sanrio or Nintendo. [S001; S017]

Before announcing a mascot recession, check whether the spreadsheet changed.

The original baseline is TidyTuesday's July 2, 2019 file: 103 franchises. The rebuilt list has 140. A hand-mapped crosswalk contains 103 rows, but only 82 have usable revenue figures in both vintages. Those are not two identical baskets of franchises observed seven years apart.

Among paired rows, Pokémon rises from $90.9 billion to $130.7 billion, a $39.8 billion difference. Call of Duty and Naruto each rise by about $14 billion. Mortal Kombat rises from $1.17 billion to $5.06 billion, about $3.9 billion; it is a fighting-game franchise, not a mobile title. These are differences between recorded estimates. Call them revenue growth only where the crosswalk establishes comparable scope. [S001; S017]

The audit also sampled 40 franchises from the old file; among 39 comparisons, only 28 matched the June 2019 Wikipedia headline within 10%. The old spreadsheet was not an immaculate starting point either.

This matters for the headline revenue mix. Box office moves from 8.9% in the 2019 file to 18.3% in the new ledger, but fuller itemisation and the old eight-category schema account for much of that movement. Restrict the calculation to the 82 shared franchises and the box-office share is 15.4%. A cleaner accounting system is not automatically a change in what audiences buy.

The companion article documents the revisions: https://artometrics.com/franchise-data-fix

## Is Japan the franchise giant—or is the United States?

On this ledger, US-origin franchises have the larger total. Japan-origin franchises have the higher merchandise share. That is narrower than declaring a winner between two national entertainment industries, which this dataset cannot do.

| Origin | Franchises | Listed lifetime revenue | Merchandise share |
|---|---:|---:|---:|
| United States | 88 | $816.5B | 52.0% |
| Japan | 30 | $394.5B | 71.4% |
| United Kingdom | 9 | $136.1B | 53.9% |

Korea totals $27.0 billion, Sweden $26.3 billion and Canada $20.1 billion. [S017]

The previous edition had Japan ahead, $681.5 billion to $622.6 billion, with the US showing the higher merchandise share: 64.6% against 49.1%. Both findings reverse in the rebuild. Countries did not swap business models while we were downloading a CSV.

Coverage changed. The article records 43 additional US-origin properties, including Fortnite, Avatar, Madden NFL, Scooby-Doo and The Sims; Japanese additions such as Rilakkuma and Demon Slayer skew smaller. Some large Japanese estimates were revised down. Detective Conan, Digimon and Bleach appear in the old file but not the new table. English-language Wikipedia is not a census of world culture.

Region means the creator's home market at launch, not the destination of sales. Coding uses the existing audited table, owner-string rules and 23 documented hand assignments. Pokémon, Anpanman and Hello Kitty make merchandise particularly prominent in Japan's listed mix. The US basket includes more film- and game-heavy entries; the rebuilt MCU row is 92.5% theatrical. [S017; CLEANING_LOG, R9]

## Does it matter whether a franchise starts as a game, a comic or a film?

Yes—but the debut format is not a complete business plan.

The **2019 baseline**, used for this section's charts, puts game-origin properties at $334.9 billion and manga-origin properties at $253.8 billion in lifetime revenue. Its Disney Princess row is 99.9% merchandise. The same characters can have a very different financial life depending on which products and rights are counted. [S001; `revenue_mix_by_original_medium.csv`]

That is why a box-office ranking is a poor universal franchise ranking. In the **2019 top-twenty comparison**, the MCU is 67.7% box office; Hello Kitty and Mario are near zero. The article's separate entities table puts Star Wars at 9.0% theatrical. Do not substitute those older shares for the updated ones above.

Wizarding World started with books, then expanded into film and merchandise. Its existence does not establish that any successful novel can support endless films. The later *Fantastic Beasts* films are a reason to ask about execution, not a reason to blame the original medium.

And what about speed? The old calculation divides lifetime revenue by years since creation, using `max(1, 2019 − year_created)`. It puts Pokémon at about $3.95 billion per calendar year of existence; Hello Kitty's old $80 billion total spans a 45-year denominator. [S001]

That is an average across a lifetime, not annual revenue, profit or a measured growth rate. Old mascots have longer denominators. Age is doing arithmetic here, not confessing to poor management.

## How much of the table belongs to Disney?

Start by deciding what “Disney” includes. The **2019 baseline** lists Disney at $258.9 billion and Lucasfilm at $63.0 billion, with Marvel labels separate. Consolidate the subsidiaries and Disney becomes $426.2 billion. The standalone Nintendo label is $49.0 billion. [S001; `owner_consolidation_rules.csv`; `owner_totals_derived.csv`]

Leaving subsidiaries separate is rather like counting the rooms and forgetting the house. But combining them also needs rules, especially when rights are shared.

On the **October 2026 ledger**, mapped to current parents using the first-listed rights holder, Disney is $430.7 billion, or 29.7%. Its bootstrap range is 18.2–43.4%. The top five together account for 58.2%, with a range of 52.7–72.6%. [S017]

| Assigned parent | Listed lifetime revenue |
|---|---:|
| Disney | $430.7B |
| Warner Bros. Discovery | $133.0B |
| The Pokémon Company | $130.7B |
| Microsoft | $75.2B |
| Paramount Skydance | $72.8B |

The mapping rolls Fox into Disney, Activision Blizzard and King into Microsoft, Viacom/CBS into Paramount Skydance, and WarnerMedia into Warner Bros. Discovery. Microsoft's roughly $69 billion Activision acquisition in 2023 changes where an existing library sits.

The earlier edition put the top five at 46.4%. Apply today's parents to those same 2019 franchises and the figure is 62.8%. Consolidation therefore matters; the change cannot simply be described as new franchises making the biggest owners bigger.

None of this means those companies earned every dollar historically spent on properties they now control. Nor does first-listed ownership capture every contract.

Spider-Man's merchandise and film rights connect Disney/Marvel and Sony in different ways. Pokémon's row sits with The Pokémon Company; Nintendo, Game Freak and Creatures share the copyright. Adding the entire $130.7 billion to Nintendo's old $49.0 billion label would mix dates and pretend the rights were simpler than they are.

Nintendo also licenses outside products—the 2023 Mario film, Super Nintendo World and LEGO Mario—rather than refusing all outside involvement. Universal's *Fast & Furious* and *Jurassic* properties show that Disney is not the only route to blockbuster scale.

For Warner, the article's 2026 DC grouping is $46.1 billion: Batman $29.9 billion, Superman $8.2 billion and the DC Extended Universe $8.0 billion. Its 2019 comparison is $44.4 billion. Wizarding World, at $35.1 billion, is a separate Warner property, not part of DC. These groupings need careful source checks before anyone treats them as clean, non-overlapping corporate totals.

## What did Disney actually buy for those billions?

The published deal figures are Pixar in 2006 for $7.4 billion, Marvel in 2009 for $4.0 billion, Lucasfilm in 2012 for $4.05 billion and 21st Century Fox in 2019 for approximately $71.3 billion, described in the article as enterprise value from the merger proxy. [S009–S012]

The comparison charts place those prices beside **2019 franchise-row anchors**: Pixar's $7.4 billion beside Toy Story's $19.5 billion; Fox's $71.3 billion beside The Simpsons' $13.5 billion. The mismatch is the point. Fox was not a $71.3 billion purchase of one yellow family. Cable assets, a Hulu stake and library infrastructure were part of the acquisition too.

A purchase price is not lifetime consumer spending. Putting them beside each other does not produce a return-on-investment calculation, or tell us whether a deal was cheap. It starts a question about what assets and future income the buyer expected—not a claim to know the buyer's private thoughts.

Disney's own annual reporting gives a different view. For the fiscal year ended September 28, 2024, the article cites segment revenue of $41.186 billion for Entertainment, $17.619 billion for Sports and $34.151 billion for Experiences—rounded in the chart to $41.2 billion, $17.6 billion and $34.2 billion. [S004; S081]

These are annual segment revenues, not Wikipedia lifetime franchise totals. Experiences includes parks, resorts, cruises and merchandise. Sports includes ESPN. Mickey Mouse does not get to take credit for ESPN because the numbers share a spreadsheet.

## Why does the cinema keep showing us familiar names?

The domestic top-ten coding moves from 60% franchise entries in 2010 to 80% in 2019 and 90% in 2024. Those are shares of titles, not shares of ticket revenue. [Box Office Mojo; `top10_franchise_share_by_year.csv`]

The worldwide comparison uses another measure. In the article's 2025 table, nine of the ten highest-grossing films are franchise installments, taking 94.4% of the top ten's combined gross. It lists *Ne Zha 2* at $2.32 billion and *Zootopia 2* at $1.87 billion, with *F1* the only original under its coding. [S091]

That does **not** mean franchises took 94.4% of all worldwide box office. The denominator is ten films. It is doing a lot of work and deserves to remain in the sentence.

The October 12, 2026 snapshot has six franchise entries among its worldwide top ten, with 62.0% of their combined gross. The article classifies *The Odyssey* ($1.78 billion), *Michael* ($1.03 billion), *Project Hail Mary* and *Obsession* as originals. [S092]

Here “original” means not coded as a sequel, prequel, spin-off, remake or shared-universe installment. It does not necessarily mean an original screenplay or a story without earlier source material. The 2026 year was incomplete at the snapshot; these figures are not a final verdict on audience tastes.

Recognition may help explain why studios return to familiar properties. These rankings alone do not measure marketing savings, prove why a film succeeded, or show that audiences have stopped wanting anything new.

## Can a franchise still go wrong?

Owning recognisable characters does not make the next release work automatically. The article points to Universal shelving the Dark Universe after *The Mummy* (2017), the *Fantastic Beasts* films falling below *Harry Potter* peaks, DC's changes before the 2023 DC Studios reset, *Ghostbusters* (2016) backlash, and the changing fortunes of *Angry Birds*. Case links are collected in `franchise_failures.csv`.

Those cases invite investigation. They do not establish a single cause called “franchise fatigue,” and a lifetime total does not tell us whether the latest release made money. The spreadsheet remembers past success. Audiences are under no obligation to renew it.

## What should we take away?

The strongest finding is not that movies are irrelevant. It is that counting only movies leaves out most of this ledger. Merchandise, licensing and retail represent 55.8% of its recorded lifetime spending. Pokémon's $130.7 billion exceeds Star Wars and the MCU combined. Five assigned parent companies sit behind 58.2% of the table. [S017]

But every useful comparison needs a date, a denominator and a description of what the number actually measures. Consumer spending is not profit. A changed estimate is not a collapsing business. A national label is not a national industry. Buying a company does not retroactively earn all its characters' past revenue.

The characters may travel between games, films, shelves and parks. We should at least keep the accounting labels attached.

## How this was counted—and where it stops

The main ledger is Wikipedia's “List of highest-grossing media franchises,” revision 1379832186, identified in the article as October 12, 2026. Its 140 rows are mapped into the original eight revenue categories plus Live & Other, Mixed and Unallocated. The 2019 baseline is TidyTuesday's July 2 file, audited against Wikipedia revision 904026364, identified as June 29, 2019. [S001; S017]

The published sensitivity checks—dropping placeholders, unallocated revenue, franchises below $4 billion, or new entries—move headline shares by under five percentage points. The bootstrap ranges describe sensitivity to the included franchises, not ordinary random-sample uncertainty or errors in their source estimates.

Eight franchises leave more than 5% of their totals without a breakdown. Transformers, for example, itemises $10.1 billion of a $25.0 billion total. Coverage varies, including under-coverage of some Japanese and Chinese properties. Streaming revenue is absent from this ledger; absence is not evidence of zero revenue.

The totals add nominal dollars across decades. Without dated revenue flows, applying one inflation adjustment would imply precision we do not have. Region and parent assignments use documented rules and manual overrides. The original-medium, per-year, older Disney consolidation, top-twenty box-office and acquisition-anchor comparisons retain the 2019 baseline rather than quietly pretending everything was updated together.

The article's reproducibility notes point to `CLEANING_LOG.md`, `METHODS_NOTE.md`, `articles/franchise/references.bib`, `npm run brief:franchise` and `npm run verify:franchise`. Those commands were **not run** for this editorial draft. No charts, media, branding or repository files were changed.

## Sources retained from the existing article

- **S001:** TidyTuesday, *Media Franchise Revenues*, July 2, 2019: https://github.com/rfordatascience/tidytuesday/tree/main/data/2019/2019-07-02
- **S017:** Wikipedia, *List of highest-grossing media franchises*, article-cited revision 1379832186; old audit revision 904026364. Original source: https://en.wikipedia.org/wiki/List_of_highest-grossing_media_franchises . Revision/date correspondence is a verification hold below.
- **S091/S092:** Wikipedia, *2025 in film* and *2026 in film*, article-cited revisions 1378645325 and 1379926625, citing Box Office Mojo and The Numbers; article access date October 12, 2026.
- **S009–S012:** Disney SEC acquisition filings, located by the existing article in `entities_companies_deals.csv` and `disney_acquisitions.csv`.
- **S004/S081:** The Walt Disney Company, FY2024 Form 10-K and segment-revenue earnings exhibit; `disney_segment_revenue_fy2024.csv`.
- Henry Jenkins, *Convergence Culture* (NYU Press, 2006).
- Marc Steinberg, *Anime's Media Mix* (University of Minnesota Press, 2012).
- Álvaro David Hernández Hernández, production committees, *Arts* 7(3), 42 (2018): https://doi.org/10.3390/arts7030042
- Box Office Mojo domestic yearly rankings, 2010–2024; original article's `box_office_mojo_yearly_urls.csv` and manual franchise coding.
- Federal Reserve Bank of St. Louis, CPI-U / CPIAUCSL (S090), retained as an original methodological reference, not used to inflate these lifetime totals.
- David Robinson, *Analyzing Franchise Revenue — TidyTuesday Screencast* (2019): https://youtu.be/1xsbTs9-a50
- Existing article and correction companion: https://artometrics.com/franchise and https://artometrics.com/franchise-data-fix

## Editorial changes and verification holds—not article copy

**Changed:** Replaced the executive-summary/checklist rhythm with reader questions. Moved the estimate/profit caveat to the opening. Used dry commentary around actual comparisons rather than an invented child trading cards, private motives or historical dialogue. Removed unsupported causal certainty about “discipline,” monthly billing and marketing savings. Kept fans human, not dupes. Reader questions are editorial hypotheses, not measured search demand; Semrush was not used.

**Evidence level:** Numeric statements are retained published claims. Commentary and explanatory analogies are interpretation, not new data. Scholarship explains possible mechanisms, not measured causal effects. This is a complete alternative reading draft, not a new quantitative audit or publication clearance.

**Before publication:**
1. Recheck the supplied Wikipedia revision IDs against their claimed dates and all 2025/2026 film grosses, release timing and “original” coding. No upstream film tables were independently read in this pass. Do not sell this as newly verified data.
2. Reconcile S017's source-card access/scrape date (October 11) with the article's October 12 attribution. Check partial-year date labels throughout.
3. Verify stream aggregation and overlap: merchandise/licensing/retail may not be economically independent of other categories. Confirm whether MCU and character/library groupings overlap; clarify the DC paragraph's 2026 numbers attributed in the source to the 2019 `franchise.csv`.
4. Verify deal-price basis, especially the Fox $71.3B enterprise-value wording; confirm exact SEC locators and Disney segment figures. Do not present segment revenue as all licensing or “audited” an earnings exhibit without checking its relationship to the 10-K.
5. Verify the source-revision explanation for every falling total, the audit denominator of 39 from 40 sampled, and the “43 additional US-origin properties” reconciliation. Preserve those as source claims until checked.
6. Recheck rights splits and the first-listed-holder mapping; it is not a legal ownership audit. Check the article's failure-case links before asserting causal stories.
7. The source's blanket claim that no free source reports streaming revenue per franchise is too broad to establish here; draft instead states the supported narrower point that this ledger lacks it.

The existing article's October update and AI-assisted-analysis disclosure remain part of its publication history. This draft does not overwrite that history or imply fresh audio, charts or video were produced.
