import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastProvider } from 'react-toast-notifications';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements, Outlet } from 'react-router-dom';
import AuthProvider from './lib/context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<h1>Will redirect to Landing Pages / Conversation Page</h1>} />
      <Route path="/home" element={<h1>Landing Page</h1>} />
      <Route path="/about" element={<h1>About Page</h1>} />
      <Route path="/faq" element={<h1>FAQ Page</h1>} />
      <Route path="/blog" element={<h1>Blog Page</h1>} />
      <Route path="contact" element={<h1>Contact Page</h1>} />
      <Route path="/newsletter" element={<h1>NewsLetter Page</h1>} />
      <Route path="/culture-career" element={<h1>Culture Page</h1>} />
      <Route path="/terms-of-use" element={<h1>Terms of use Page</h1>} />
      <Route path="/api-status" element={<h1>Api status Page</h1>} />
      <Route
        element={
          <div>
            <h2>AuthLayout</h2>
            <Outlet />
          </div>
        }
      >
        <Route path="signin" element={<h2>Signin Page</h2>} />
        <Route path="signup" element={<h2>Logout Page</h2>} />
        <Route path="forgot-password" element={<h2>Forgot Password Page</h2>} />
      </Route>
      <Route
        path="/me"
        element={
          <div>
            <h2>Dashboard Layout</h2>
            <Outlet />
          </div>
        }
      >
        <Route
          path="home"
          element={
            <ProtectedRoute>
              <h1>Home Page</h1>
            </ProtectedRoute>
          }
        />
        <Route
          path="history"
          element={
            <ProtectedRoute>
              <h1>History Page</h1>
            </ProtectedRoute>
          }
        />
        <Route
          path="transcribe"
          element={
            <ProtectedRoute>
              <h1>Transcribe/import Page</h1>
            </ProtectedRoute>
          }
        />
        <Route
          path="settings"
          element={
            <ProtectedRoute>
              <h1>Settings Page</h1>
            </ProtectedRoute>
          }
        />
      </Route>
    </>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ToastProvider autoDismiss autoDismissTimeout={6000} placement="top-right">
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ToastProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
