/// <reference types="jest" />

import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "@/app/page";

// Mocks
jest.mock("react-chartjs-2", () => ({
	Line: () => <div data-testid="chart">Chart Component</div>,
}));

jest.mock("next/navigation", () => ({
	useRouter: () => ({
		push: jest.fn(),
		replace: jest.fn(),
		prefetch: jest.fn(),
	}),
}));

const createTestQueryClient = () =>
	new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
			},
		},
	});

const renderWithQueryClient = (component: React.ReactElement) => {
	const testQueryClient = createTestQueryClient();
	return render(<QueryClientProvider client={testQueryClient}>{component}</QueryClientProvider>);
};

describe("Dashboard", () => {
	it("renders dashboard", async () => {
		renderWithQueryClient(<Dashboard />);
		await waitFor(() => {
			expect(screen.getByText("FELLOR")).toBeInTheDocument();
		});
	});
});
