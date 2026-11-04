# Web Technologies Portfolio

Samuel Roberts — Certificate IV in IT (Programming)

## Phase 3: Component selection (Step 2 / A02)

The portfolio dashboard will be implemented in the root `index.html` using
Tailwind CSS 3. It will link to each phase of the portfolio.

The dashboard will need the following components:

| Component | Purpose | Semantic HTML |
| --- | --- | --- |
| Site header | Display the portfolio title and author. | `header` with an `h1` |
| Navigation bar within the header | Link to Home, Phase 1, Phase 2 and Phase 3. | `nav` containing a list of links |
| Centred main content area | Keep the dashboard readable and provide responsive spacing. | `main` with an introductory heading |
| Three vertical cards | Introduce each phase and provide a link to its page. Cards will stack on smaller screens and form a grid on larger screens. | One `article` per card, each with a heading, description and link |
| Site footer | Display copyright information and links to North Metro TAFE, ScreenCraft and the copyright page. | `footer` with a labelled `nav` |
| Resource reference cards | List the resources used, with descriptions and source links on the copyright page. | An `article` with a heading for each resource |

### Component source and implementation plan

ScreenCraft Components (<https://components.screencraft.net.au/>) is the
assessment's nominated reference for these component patterns, particularly the
header, main area, footer and resource cards on its copyright page. No other
component library is selected, so component libraries will not be mixed.

The ScreenCraft site could not be accessed during this review. The selections
above are based on the component examples listed in the assessment; its sample
code and copyright-page layout still need to be reviewed when available. No
ScreenCraft component code has been copied at this stage.

In Step 3, the selected components will be styled with Tailwind utility classes
and structured with semantic HTML. Resources actually used will be credited in
`pages/copyright.html`.
