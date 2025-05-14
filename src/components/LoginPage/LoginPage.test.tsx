import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import { LoginContext } from "../../context/LoginContext";
import LoginPage from "./LoginPage";
import React from "react";

const renderWithTheme = (component: React.ReactNode) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

test("renders login form", () => {
  renderWithTheme(<LoginPage />);
  expect(screen.getByText(/Login/i)).toBeInTheDocument();
});

vi.mock("../../firebase/firebase", () => ({
  auth: {
    currentUser: null,
  },
}));

// 🔥 Це важливо: мокання модуля firebase/auth
vi.mock("firebase/auth", async () => {
  return {
    getAuth: vi.fn(() => {
      return {
        currentUser: null,
      };
    }),
    signInWithEmailAndPassword: vi.fn(() => Promise.resolve()),
    createUserWithEmailAndPassword: vi.fn(() => Promise.resolve()),
    // ... додай інші методи, які ти викликаєш у LoginPage.jsx
  };
});

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { ThemeProvider } from "styled-components";
import { theme } from "../../global_styles/theme";

// Мок контексту
const mockContext = {
  isLoggedIn: false,
  setIsLoggedIn: vi.fn(),
  showLoginForm: true,
  setShowLoginForm: vi.fn(),
  mode: "login",
  setMode: vi.fn(),
  loggedUser: null,
  setLoggedUser: vi.fn(),
};

describe("LoginPage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders login form", () => {
    render(
      <LoginContext.Provider value={mockContext}>
        <LoginPage />
      </LoginContext.Provider>
    );

    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });

  test("switches to registration mode", () => {
    render(
      <LoginContext.Provider value={{ ...mockContext, mode: "register" }}>
        <LoginPage />
      </LoginContext.Provider>
    );

    expect(
      screen.getByPlaceholderText(/Confirm Password/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Sign up/i)).toBeInTheDocument();
  });

  test("shows error when passwords do not match", async () => {
    render(
      <LoginContext.Provider value={{ ...mockContext, mode: "register" }}>
        <LoginPage />
      </LoginContext.Provider>
    );

    fireEvent.change(screen.getByPlaceholderText(/Email/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/^Password$/i), {
      target: { value: "123456" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Confirm Password/i), {
      target: { value: "654321" },
    });

    fireEvent.click(screen.getByText(/Sign up/i));

    expect(
      await screen.findByText(/Passwords do not match/i)
    ).toBeInTheDocument();
  });

  test("calls signInWithEmailAndPassword on login", async () => {
    (signInWithEmailAndPassword as ReturnType<typeof vi.fn>).mockResolvedValue(
      {}
    );

    render(
      <LoginContext.Provider value={mockContext}>
        <LoginPage />
      </LoginContext.Provider>
    );

    fireEvent.change(screen.getByPlaceholderText(/Email/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Password/i), {
      target: { value: "123456" },
    });

    fireEvent.click(screen.getByText(/Sign in/i));

    await waitFor(() => {
      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
        expect.anything(),
        "test@example.com",
        "123456"
      );
    });
  });

  test("calls createUserWithEmailAndPassword on registration", async () => {
    (
      createUserWithEmailAndPassword as ReturnType<typeof vi.fn>
    ).mockResolvedValue({});

    render(
      <LoginContext.Provider value={{ ...mockContext, mode: "register" }}>
        <LoginPage />
      </LoginContext.Provider>
    );

    fireEvent.change(screen.getByPlaceholderText(/Email/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/^Password$/i), {
      target: { value: "123456" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Confirm Password/i), {
      target: { value: "123456" },
    });

    fireEvent.click(screen.getByText(/Sign up/i));

    await waitFor(() => {
      expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(
        expect.anything(),
        "test@example.com",
        "123456"
      );
    });
  });
});
