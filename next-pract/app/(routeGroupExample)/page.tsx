// Route Group Example
// Route groups (folders in parentheses) organize routes without affecting the URL structure
// This page is accessible at / (root) because route groups don't create URL segments

export default function RouteGroupExample() {
  return (
    <div>
      <h1>Route Group Example Page</h1>
      <p>This page is in a route group folder: (routeGroupExample)</p>
      <p>Route groups don't appear in the URL - they're just for organization.</p>
    </div>
  );
}

