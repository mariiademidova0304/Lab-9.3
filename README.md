# Documentation
Still not sure what documentation i need to provide since i have a usage example in my App.tsx
Do I need to add examples separately here?

# Reflection
1. I hardcoded my keys using the title of the task, should have probably incorporated due date
2. When filtering i had to consider what arrays I'm updating, because I had 2 - to display and with all the tasks. If I tried filtering diaplyed - I was losing tasks after filter by one parameter. I think the example couldn't filter by both filters so I didn't do that. Potentially could have maybe included that too.
3. I was trying to put state in every component, trying to figure out which component should have all the logic. Ended up giving state to App. I'm not sure I'm done with state updates because my status change is then not reflected in the filtering.
4. Used if/else and ternary.
