### STRUCTURE

1. Begin by creating some categories, projects, and items
2. Create console logic first --> then UI display
3. Separate concerns and decide modules
4. WRITE DOCS OF HOW TO USE IT, AND TEST POPULATE IT (or take scrennshots)

# - UI (update whole UI? Or get and set?, whith data-index splice?)

# - LOGIC (CRUD) -> including state and style changes

# - STORAGE INTERFACE




# - PROJECTS

## ***Hierarchy***
- **Due date filters**
    - Show items/projects by date (as in an agenda)
- **Priority/Importance filters**

- **Categories (life, family, work etc)**
    - Projects
        - To do items


## ***Ideas to implement***

- Todo items
    - Title
    - Description
    - Due date
    - Priority
        - High (check it now/today/2days)
        - Medium
        - No worries (yet)
        - Optional

- Categories (with subprojects)
    - Life/General
    - Family
    - Work
    - *Completed*
    - Custom (add category)
        - Add styling options
    

- Functionalities
    - Sort, filter, search
    - When clicked on a category
        - Show projects
    - When clicked on a project
        - Show to-do items
    - Todos checkable -> when checked, pass to chekcked and tachado, discheckable
    - Todos deletable
    - On hover, display item description

- Display / UI
    - Project completion percentage
    - Sort and display by importane, or category, or due date
    - Due date NOT only for projects, but for individual items as well
