import { render, screen } from "@testing-library/react";
import Gig from "../src/components/Gig";

test("renders correct band name", () => {
    render(<Gig
        title="Twenty One Pilots"
        image="/images/top-logo.png"
        description="Dynamic duo blending alt-rock, hip-hop & indie vibes"
        time="30 of September, 2025"
        location="Wembley Stadium, London, UK"
       />
    )

    expect(screen.getByRole("heading", { level: 3} ))
    .toHaveTextContent(/twenty one pilots/i);
});

test("picture is accessible", () => {
    render(<Gig
        title="Twenty One Pilots"
        image="/images/top-logo.png"
        description="Dynamic duo blending alt-rock, hip-hop & indie vibes"
        time="30 of September, 2025"
        location="Wembley Stadium, London, UK"
       />
    )

    expect(screen.getByRole('img', {name: /twenty one pilots poster/i}))
    .toBeInTheDocument();
})

test("description, time, locatoin is correct", () => {
    render(<Gig
        title="Twenty One Pilots"
        image="/images/top-logo.png"
        description="Dynamic duo blending alt-rock, hip-hop & indie vibes"
        time="30 of September, 2025"
        location="Wembley Stadium, London, UK"
       />
    )

    expect(screen.getByText(
        /dynamic duo blending alt-rock, hip-hop & indie vibes/i
    )).toBeInTheDocument()
    expect(screen.getByText(/when: 30 of september, 2025/i))
    .toBeInTheDocument();
    expect(screen.getByText(/where: wembley stadium, london, uk/i))
    .toBeInTheDocument();

})