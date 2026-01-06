/**
 * ! PARALLEL ROUTES - Technical Notes
 * ===================================
 * 
 * ! WHAT ARE PARALLEL ROUTES?
 * - Allow multiple pages to render simultaneously in the same layout
 * - Each parallel route slot (@slotName) renders independently
 * - Enables conditional rendering of different UI sections based on state/context
 * 
 * ! WHY DO THEY EXIST?
 * - Solve the problem of conditional layouts (e.g., show login OR dashboard)
 * - Enable independent loading states for different sections
 * - Allow independent error boundaries per route slot
 * - Support independent navigation without affecting sibling routes
 * - Perfect for modals, sidebars, conditional UI that needs routing
 * 
 * ! HOW TO SET THEM UP:
 * 1. Create folders with @ prefix: @users, @revenue, @notifications, @login
 * 2. Each @folder must have its own page.tsx (or default.tsx for fallback)
 * 3. Layout receives slots as props matching folder names (without @)
 * 4. Use default.tsx in @folders to handle unmatched routes
 * 5. Use catch-all routes like @modal/[...catchAll] for dynamic parallel routes
 * 
 * ! WHY THEY'RE CRITICAL FOR COMPLEX APPLICATIONS:
 * - Independent data fetching: Each slot can fetch its own data separately
 * - Granular loading states: Show skeleton for users while revenue loads
 * - Isolated error handling: Users section error doesn't break revenue section
 * - Conditional rendering: Show login OR dashboard based on auth state
 * - Independent navigation: Navigate within a slot without affecting others
 * - Better UX: Partial page updates instead of full page reloads
 * - Modular architecture: Each section is self-contained with its own routing
 * - Performance: Only re-render the slot that changed, not entire layout
 * 
 * ? KEY CONCEPTS:
 * - Slots are passed as props to layout (must match @folder names)
 * - Each slot can have its own loading.tsx, error.tsx, not-found.tsx
 * - Use default.tsx in slots to handle unmatched routes
 * - Parallel routes work with intercepting routes for modals
 * - Can combine with route groups for complex nested structures
 * *Slots are not route segments; they are independent render targets and do not affect the URL structure
 */

export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = true;
  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </div>
  ) : (
    login
  );
}