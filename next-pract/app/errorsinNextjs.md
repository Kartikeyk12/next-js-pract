It is very very important note that any *Error Boundry* must be a client component meaning 
**Use Client** must be use within the component

# Handling Errors in Layout:

- Handling error in layout is different from handling error in nested segments in same because
- the heirarchy of component is different as layout site above error boundry so it won't catch
- error thrown in or by the layout.tsx

# The component tree looks like

Layout
  └── template    
       └── ErrorBoundry
                 └──  Suspense
                         └── ErrorBoundry
                                 └── page.tsx
        


# Handling Errors in Global Boundries:

**For handling error in absence of any error boundry we can create a global-error.tsx which will handle errors. Again it will only happne if not error boundry is present at directory segment or when something went catastrophically wrong in the app this becomes the last line of the error...**

- Key Feature is that: 
- *Runs only in production mode*
- *Requires html and body tag to rendered*