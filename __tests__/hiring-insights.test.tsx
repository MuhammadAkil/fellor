import { render, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import HiringInsights from "@/components/hiring-insights";

// Mock Chart.js
jest.mock("react-chartjs-2", () => ({
  Line: () => <div data-testid="chart">Chart Component</div>,
}))

describe("HiringInsights", () => {
  it("renders the component with correct title", () => {
    render(<HiringInsights />)
    expect(screen.getByText("Hiring Insights")).toBeInTheDocument()
  })

  it("displays the time frame dropdown", () => {
    render(<HiringInsights />)
    expect(screen.getByText("Last 30 days")).toBeInTheDocument()
  })

  it("shows loading state initially", () => {
    render(<HiringInsights />)
    expect(screen.getByRole("status", { hidden: true })).toBeInTheDocument()
  })

  it("displays the chart after loading", async () => {
    render(<HiringInsights />)
    await waitFor(() => {
      expect(screen.getByTestId("chart")).toBeInTheDocument()
    })
  })

  it("displays legend items", async () => {
    render(<HiringInsights />)
    await waitFor(() => {
      expect(screen.getByText("Application to Interview Rate")).toBeInTheDocument()
      expect(screen.getByText("Offer Acceptance Rate")).toBeInTheDocument()
      expect(screen.getByText("Rejection Rate")).toBeInTheDocument()
    })
  })

  it("has proper accessibility attributes", () => {
    render(<HiringInsights />)
    expect(screen.getByRole("img")).toHaveAttribute("aria-label")
    expect(screen.getByRole("button")).toHaveAttribute("aria-label")
  })
})
